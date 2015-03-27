declare module Sup {
  class ModelRenderer extends ActorComponent {
    constructor(actor: Actor, asset?: Model);

    getModel(): Model;
    setModel(asset?: Model): ModelRenderer;
    getOpacity(): number;
    setOpacity(opacity: number): ModelRenderer;
    getColor(): { r: number; g: number; b: number };
    setColor(r: number, g: number, b: number): ModelRenderer;
    getBoneTransform(name: string): {position: Sup.Math.Vector3; orientation: Sup.Math.Quaternion; scale: Sup.Math.Vector3};

    getAnimation(): string;
    setAnimation(animationName: string, looping?: boolean): ModelRenderer;
    setAnimationTime(time: number): ModelRenderer;
    getAnimationTime(): number
    getAnimationDuration(): number

    isAnimationPlaying(): boolean
    playAnimation(looping?: boolean): ModelRenderer;
    pauseAnimation(): ModelRenderer;
    stopAnimation(): ModelRenderer;
  }
}
