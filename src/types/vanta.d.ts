declare module 'vanta/dist/vanta.net.min' {
  export interface VantaNetOptions {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number | string;
    backgroundColor?: number | string;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
  }

  export interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Partial<VantaNetOptions>) => void;
  }

  const NET: (options: VantaNetOptions) => VantaEffect;
  export default NET;
}

declare module 'vanta/dist/vanta.waves.min' {
  export interface VantaWavesOptions {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number | string;
    shininess?: number;
    waveHeight?: number;
    waveSpeed?: number;
    zoom?: number;
  }

  export interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Partial<VantaWavesOptions>) => void;
  }

  const WAVES: (options: VantaWavesOptions) => VantaEffect;
  export default WAVES;
}

declare module 'vanta/dist/vanta.dots.min' {
  export interface VantaDotsOptions {
    el: HTMLElement | null;
    THREE?: unknown;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    minHeight?: number;
    minWidth?: number;
    scale?: number;
    scaleMobile?: number;
    color?: number | string;
    color2?: number | string;
    backgroundColor?: number | string;
    size?: number;
    spacing?: number;
  }

  export interface VantaEffect {
    destroy: () => void;
    resize: () => void;
    setOptions: (options: Partial<VantaDotsOptions>) => void;
  }

  const DOTS: (options: VantaDotsOptions) => VantaEffect;
  export default DOTS;
}
