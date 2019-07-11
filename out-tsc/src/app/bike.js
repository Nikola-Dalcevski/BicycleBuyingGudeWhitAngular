var Bike = /** @class */ (function () {
    function Bike(data) {
        this.type = data.Type;
        this.brand = data.Brand;
        this.model = data.Model;
        this.fullName = data.fullname;
        this.brakes = data.Spec.Brakes;
        this.cassate = data.Spec.Cassate;
        this.chain = data.Spec.Chain;
        this.frame = data.Spec.Frame;
        this.frontHub = data.Spec.FrontHub;
        this.handlebar = data.Spec.Handlebar;
        this.rearDeraillerur = data.Spec.RearDeraillerur;
        this.rearHub = data.Spec.RearHub;
        this.seat = data.Spec.Seat;
        this.tireSize = data.Spec.Tires.size;
        this.tiresInfo = data.Spec.Tires.info;
        this.weight = data.Spec.Weight;
        this.crankset = data.Spec.crankset;
        this.fork = data.Spec.fork;
    }
    return Bike;
}());
export { Bike };
//# sourceMappingURL=bike.js.map