module Sup {
  export class ModelRenderer extends Sup.ActorComponent {
    constructor(actor, asset) {
      super(actor);
      this.__inner = new SupEngine.componentClasses.ModelRenderer(this.actor.__inner);
      if (asset) { this.setModel(asset); }
      this.__inner.__outer = this;
      this.actor.modelRenderer = this;
    }
    destroy() {
      this.actor.modelRenderer = null;
      super.destroy();
    }

    getModel() { return this.__inner.asset.__outer }
    setModel(asset) { this.__inner.setModel(asset.__inner); return this }
    getOpacity() { this.__inner.opacity; }
    setOpacity(opacity) { this.__inner.opacity = opacity; this.__inner.threeMesh.material.opacity = opacity; return this }
    getColor() { return { r: this.__inner.color.r, g: this.__inner.color.g, b: this.__inner.color.b }; }
    setColor(r, g, b) {
      this.__inner.color.r = r; this.__inner.color.g = g; this.__inner.color.b = b;
      this.__inner.threeMesh.material.color.setRGB(r, g, b);
      return this
    }
    getBoneTransform(name) {
      var data = this.__inner.getBoneTransform(name);
      if (data != null) {
        var position = new Math.Vector3(data.position.x, data.position.y, data.position.z);
        var orientation = new Math.Quaternion(data.orientation.x, data.orientation.y, data.orientation.z, data.orientation.w);
        var scale = new Math.Vector3(data.scale.x, data.scale.y, data.scale.z);

        return { position, orientation, scale }
      } else {
        return null
      }
    }

    setAnimation(animationName, looping) { this.__inner.setAnimation(animationName, looping); return this }
    getAnimation() { return this.__inner.getAnimation() }
    setAnimationTime(time) { this.__inner.setAnimationTime(time); return this }
    getAnimationTime() { return this.__inner.getAnimationTime() }
    getAnimationDuration() { return this.__inner.getAnimationDuration() }

    isAnimationPlaying() { return this.__inner.isAnimationPlaying }
    playAnimation(looping) { this.__inner.playAnimation(looping); return this }
    pauseAnimation() { this.__inner.pauseAnimation(); return this }
    stopAnimation() { this.__inner.stopAnimation(); return this }
  }
}
