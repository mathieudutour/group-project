if (!(typeof MochaWeb === 'undefined')){
  MochaWeb.testOnly(function(){
    describe("Drag Solver", function(){
      chai.should();
      var solver = new DragSolver(1);
      it("should exist", function(){
        solver.should.be.a('object');
      });
      it("should compute the lift", function(){
        solver.reducedSolve(1, 1, 1).should.equal(0.9716854924039483);
        solver.reducedSolve(1, 1, 1).should.equal(solver.solve(1, 1, 1, 1, 1, 1, 1));
      });
    });
  });
}