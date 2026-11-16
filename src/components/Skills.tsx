'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/data/portfolioData';
import { Terminal, Code, Cpu, Database, Server, Sparkles, Check } from 'lucide-react';

const CODE_SNIPPETS: Record<string, string> = {
  Python: `# Python 3.12+ Asyncio & Metaclass Pattern
import asyncio
from typing import AsyncGenerator

class AsyncPipeline:
    async def stream_batches(self, chunk_size: int = 500) -> AsyncGenerator[list, None]:
        async with get_db_pool() as pool:
            async for record in pool.cursor():
                yield transform_record(record)
`,
  FastAPI: `# FastAPI Dependency-Injected Clean Controller
from fastapi import APIRouter, Depends, status
from pydantic import BaseModel, Field

router = APIRouter(prefix="/api/v1/equity", tags=["ESOP"])

@router.post("/vest", status_code=status.HTTP_201_CREATED)
async def compute_vesting(payload: VestingSchema, db=Depends(get_async_session)):
    schedule = await VestingEngine.calculate(payload, db)
    return {"status": "success", "vested_units": schedule.total}`,
  Django: `# Django Custom Middleware & Transaction Isolation
from django.db import transaction

class LedgerAuditMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        with transaction.atomic():
            response = self.get_response(request)
        return response`,
  PostgreSQL: `-- PostgreSQL Multi-tenant Partitioning & Indexing
CREATE TABLE employee_esop_ledger (
    grant_id UUID NOT NULL,
    tenant_id UUID NOT NULL,
    vesting_date DATE NOT NULL,
    shares_allocated NUMERIC(14, 4)
) PARTITION BY HASH (tenant_id);

CREATE INDEX idx_esop_tenant_date 
ON employee_esop_ledger (tenant_id, vesting_date DESC);`,
  Redis: `# Redis Sorted-Set Leaderboard Caching
import redis.asyncio as aioredis

client = aioredis.from_url("redis://localhost:6379/0")

async def update_point_rank(tenant_id: str, user_id: str, points: float):
    key = f"leaderboard:{tenant_id}"
    await client.zadd(key, {user_id: points})
    rank = await client.zrevrank(key, user_id)
    return rank`,
  LangChain: `# LangChain RAG Vector Retrieval Chain
from langchain_community.vectorstores import FAISS
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough

retriever = vectorstore.as_retriever(search_kwargs={"k": 4})
rag_chain = (
    {"context": retriever, "question": RunnablePassthrough()}
    | prompt_template
    | llm_client
)`,
  Docker: `# Production Multi-Stage Python Container
FROM python:3.12-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.12-slim
WORKDIR /app
COPY --from=builder /usr/local/lib/python3.12/site-packages /usr/local/lib/python3.12/site-packages
COPY src/ /app/src/
USER nobody
CMD ["uvicorn", "src.main:app", "--host", "0.0.0.0", "--port", "8000"]`,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const [activeSkill, setActiveSkill] = useState<string>('FastAPI');

  const currentCategory = SKILL_CATEGORIES[selectedCategory];

  return (
    <section id="skills" className="relative w-full py-24 sm:py-32 px-4 sm:px-8 bg-surface/30 border-t border-white/10">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent-cyan" />
              <span>04 / TECHNICAL ARSENAL</span>
            </div>
            <h2 className="editorial-title text-4xl sm:text-6xl md:text-7xl font-serif text-white">
              Skills & Engineering Stack
            </h2>
          </div>
          <p className="text-muted text-sm sm:text-base font-mono max-w-md">
            Click on any technology to inspect architectural implementations and verified design patterns.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-10 pb-4 overflow-x-auto">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => {
                setSelectedCategory(idx);
                if (cat.skills.length > 0) {
                  setActiveSkill(cat.skills[0].name);
                }
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 ${
                selectedCategory === idx
                  ? 'bg-white text-black font-semibold shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                  : 'bg-white/5 text-muted hover:text-white border border-white/10 hover:border-white/25'
              }`}
            >
              <span>{cat.title}</span>
              <span className="text-[10px] opacity-60">({cat.skills.length})</span>
            </button>
          ))}
        </div>

        {/* Interactive Layout: Skill Grid + Real-time Code / Architecture Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Skill Cards Grid (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentCategory.skills.map((skill) => {
              const isSelected = activeSkill === skill.name;
              return (
                <div
                  key={skill.name}
                  onClick={() => setActiveSkill(skill.name)}
                  className={`cursor-pointer p-5 rounded-2xl glass-panel border transition-all duration-300 relative group ${
                    isSelected
                      ? 'border-accent-cyan bg-white/10 shadow-[0_0_30px_rgba(77,225,255,0.15)]'
                      : 'border-white/10 hover:border-white/25 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-sm sm:text-base font-semibold text-white group-hover:text-accent-cyan transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-accent-cyan font-bold">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-xs text-muted font-light leading-relaxed mb-4">
                    {skill.description}
                  </p>

                  {/* Sleek Minimal Progress Meter */}
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${
                        isSelected
                          ? 'bg-gradient-to-r from-accent-cyan to-accent-violet'
                          : 'bg-white/40 group-hover:bg-accent-cyan/80'
                      }`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Code / Architecture Inspector (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="rounded-2xl bg-black/90 border border-white/15 overflow-hidden shadow-2xl">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="text-xs font-mono text-muted ml-2">
                    inspector://{activeSkill.toLowerCase().replace(/[^a-z]/g, '')}.py
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded-full border border-accent-cyan/30">
                  <Check className="w-3 h-3" />
                  <span>PRODUCTION READY</span>
                </div>
              </div>

              {/* Code Snippet Body */}
              <div className="p-5 font-mono text-xs sm:text-sm text-primary/90 leading-relaxed overflow-x-auto min-h-[260px] bg-[#070707]">
                <pre className="text-white/90">
                  <code>{CODE_SNIPPETS[activeSkill] || CODE_SNIPPETS['FastAPI']}</code>
                </pre>
              </div>

              {/* Terminal Footer */}
              <div className="px-4 py-3 bg-white/5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted">
                <span>SYSTEM: LINUX x86_64</span>
                <span className="text-accent-orange">AUDITED ARCHITECTURE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
