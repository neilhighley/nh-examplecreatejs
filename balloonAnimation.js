(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 600,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};


// stage content:
(lib.balloonAnimation = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.balloonClip();
	this.instance.setTransform(185.1,218.6,1,1,0,0,0,-70.9,-6.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(489,318.9,194,399.5);


// symbols:
(lib.balloonClip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{float_start:0,float_end:23,pop:24,pop_end:35});

	// timeline functions:
	this.frame_23 = function() {
		this.gotoAndPlay('float_start');
	}
	this.frame_35 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(23).call(this.frame_23).wait(12).call(this.frame_35).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AiTCiQg9hDgBhfQABheA9hDQA+hDBVgBQBXABA9BDQA+BDAABeQAABfg+BDQg9BDhXAAQhVAAg+hDg");
	this.shape.setTransform(-18,-155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AiTCiQg+hDAAhfQAAheA+hEQA9hCBWAAQBWAAA+BCQA9BEABBeQgBBfg9BDQg+BEhWAAQhWAAg9hEg");
	this.shape_1.setTransform(-19.2,-154.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC00").s().p("AiTCiQg+hDAAhfQAAheA+hDQA9hDBWgBQBWABA+BDQA9BDAABeQAABfg9BDQg+BDhWAAQhWAAg9hDg");
	this.shape_2.setTransform(-20.4,-153.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC00").s().p("AiTCiQg+hDABhfQgBheA+hEQA+hCBVAAQBWAAA+BCQA+BEgBBeQABBfg+BDQg+BEhWAAQhVAAg+hEg");
	this.shape_3.setTransform(-21.5,-153);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("AiTCiQg9hDAAhfQAAheA9hDQA+hDBVgBQBXABA9BDQA+BDgBBeQABBfg+BDQg9BDhXAAQhVAAg+hDg");
	this.shape_4.setTransform(-22.7,-152.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC00").s().p("AiTCiQg9hDAAhfQAAheA9hEQA+hCBVAAQBXAAA9BCQA+BEAABeQAABfg+BDQg9BEhXAAQhVAAg+hEg");
	this.shape_5.setTransform(-23.8,-151.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC00").s().p("AiTCiQg+hDAAhfQAAheA+hEQA9hCBWgBQBWABA+BCQA9BEAABeQAABfg9BDQg+BDhWAAQhWAAg9hDg");
	this.shape_6.setTransform(-27.3,-149.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC00").s().p("AiTCiQg+hDABhfQgBheA+hDQA+hDBVAAQBWAAA+BDQA+BDgBBeQABBfg+BDQg+BEhWAAQhVAAg+hEg");
	this.shape_7.setTransform(-28.4,-148.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC00").s().p("AiTCiQg9hDAAhfQAAheA9hEQA+hDBVABQBXgBA9BDQA+BEgBBeQABBfg+BDQg9BDhXAAQhVAAg+hDg");
	this.shape_8.setTransform(-29.6,-148.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC00").s().p("AiTCiQg9hDgBhfQABheA9hDQA+hEBVAAQBXAAA9BEQA+BDAABeQAABfg+BDQg9BEhXAAQhVAAg+hEg");
	this.shape_9.setTransform(-30.7,-147.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC00").s().p("AiTCiQg+hDAAhfQAAheA+hEQA9hDBWABQBWgBA+BDQA9BEAABeQAABfg9BDQg+BDhWAAQhWAAg9hDg");
	this.shape_10.setTransform(-29.8,-148.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC00").s().p("AiTCiQg9hDAAhfQAAheA9hDQA+hEBVAAQBXAAA9BEQA+BDAABeQAABfg+BDQg9BEhXAAQhVAAg+hEg");
	this.shape_11.setTransform(-28.8,-148.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFCC00").s().p("AiTCiQg+hDAAhfQAAheA+hEQA9hDBWAAQBWAAA+BDQA9BEAABeQAABfg9BDQg+BDhWAAQhWAAg9hDg");
	this.shape_12.setTransform(-27.8,-149.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFCC00").s().p("AiTCiQg9hDAAhfQAAheA9hDQA+hDBVAAQBXAAA9BDQA+BDAABeQAABfg+BDQg9BEhXAAQhVAAg+hEg");
	this.shape_13.setTransform(-26.8,-149.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFCC00").s().p("AiTCiQg9hDAAhfQAAheA9hEQA+hCBVAAQBXAAA9BCQA+BEgBBeQABBfg+BDQg9BEhXAAQhVAAg+hEg");
	this.shape_14.setTransform(-24.9,-151);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFCC00").s().p("AiTCiQg+hDAAhfQAAheA+hDQA9hDBWgBQBWABA+BDQA9BDABBeQgBBfg9BDQg+BDhWAAQhWAAg9hDg");
	this.shape_15.setTransform(-23.9,-151.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{x:-18,y:-155}}]}).to({state:[{t:this.shape_1,p:{x:-19.2,y:-154.3}}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3,p:{x:-21.5,y:-153}}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape,p:{x:-25,y:-151}}]},1).to({state:[{t:this.shape_1,p:{x:-26.1,y:-150.3}}]},1).to({state:[{t:this.shape_6,p:{x:-27.3,y:-149.6}}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_6,p:{x:-25.9,y:-150.4}}]},1).to({state:[{t:this.shape_14,p:{x:-24.9,y:-151}}]},1).to({state:[{t:this.shape_15,p:{x:-23.9,y:-151.6}}]},1).to({state:[{t:this.shape_14,p:{x:-22.9,y:-152.2}}]},1).to({state:[{t:this.shape_15,p:{x:-22,y:-152.7}}]},1).to({state:[{t:this.shape_3,p:{x:-21,y:-153.3}}]},1).to({state:[{t:this.shape_15,p:{x:-20,y:-153.9}}]},1).to({state:[{t:this.shape_3,p:{x:-19,y:-154.4}}]},1).to({state:[{t:this.shape,p:{x:-18,y:-155}}]},1).to({state:[]},3).to({state:[]},8).wait(1));

	// stringanim
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CCCC00").ss(6,1,1).p("Agfs4IAnAyQAxBAAoBOQB9DxgZEBQgNCFhWCCQgfAwgxA9IhSBnQhhB7gaBbIgEASQgRBMARBTQAJAsAVAx");
	this.shape_16.setTransform(-51.1,108);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CCCC00").ss(6,1,1).p("AieMyQgQgugGgsQgDgYAAgYQgCg3ANgzQAXhKAnhBQAagsAjgvQAkgyAhgxQAxhCAbgyQACgEACgEQAshRAUhMQANgvAEgxQAHhXgHhWQgPifhEiiQgDgGgDgHQgfhFgmg7Igigy");
	this.shape_17.setTransform(-53,107.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CCCC00").ss(6,1,1).p("AiaMsQgLgtgCgqQgCgYABgXQACg1APgyQAZhJAkhAQAYgtAggvQAigyAdgxQArhBAWg1QACgEABgEQAlhRAShLQAKguAEgxQAGhVgGhXQgMiZg2ilQgDgGgCgGQgZhFggg7Igegz");
	this.shape_18.setTransform(-55.1,106.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CCCC00").ss(6,1,1).p("AiUMlQgHgqABgqQABgXACgWQAGg0APgwQAchJAhg+QAXgtAdgvQAdg0AbgxQAmhAAQg3QACgDABgEQAdhTAPhIQAJgvADgwQAFhUgEhWQgKiUgoinQgCgHgCgGQgThEgZg8IgYgy");
	this.shape_19.setTransform(-57.3,106.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CCCC00").ss(6,1,1).p("AiNMfQgCgpAFgoQACgWAEgWQAJgyARgvQAdhJAfg8QAWguAYgvQAbg0AYgxQAgg/AMg5QABgEABgEQAWhUAMhGQAHguACgwQAFhSgDhXQgIiOgaiqQgBgGgBgHQgOhDgTg8IgSgz");
	this.shape_20.setTransform(-59.7,105.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CCCC00").ss(6,1,1).p("AiEMZQADgnAJgoQAEgVAFgVQANgxARgtQAghIAcg7QAUgvAVguQAZg2ATgxQAbg+AHg7QABgEABgEQAOhVAJhEQAGgtABgwQAEhRgChWQgFiJgLitQgBgGgBgHQgIhCgMg8IgMg0");
	this.shape_21.setTransform(-62.3,105.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CCCC00").ss(6,1,1).p("Ah6MSQAHgkAMgnQAGgVAIgUQAQgvASgsQAihIAXg6QATgvAUguQAWg2APgxQAWg9ACg+QAAgDABgEQAHhWAGhDQADgsABgwQADhQAAhVQgDiEADiwQAAgGAAgGQgDhCgGg9IgGgz");
	this.shape_22.setTransform(-64.9,104.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CCCC00").ss(6,1,1).p("Ah7MMQALgjARgmQAHgTAJgUQAUguATgqQAlhIAUg4QARgvARguQATg4ALgxQAQg8gDg/QABgEAAgEQAAhXADhBQACgrAAgwQAChOABhWQAAh+ARiyQAAgHAAgGQAEhBAAg9IAAg0");
	this.shape_23.setTransform(-66.4,104.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CCCC00").ss(6,1,1).p("AiEMGQAQghAUglQAKgTAKgTQAXgsAVgoQAlhIATg3QAQgwAOguQAQg4AIgxQAKg7gIhCQAAgEAAgEQgHhYAAg/QAAgqgBgwQABhNADhWQACh4Afi1QABgGABgHQAJhAAHg9IAGg1");
	this.shape_24.setTransform(-67.2,103.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CCCC00").ss(6,1,1).p("AiML/QAUgfAYgkQAMgSAMgSQAagrAWgmQAnhIAQg1QAPgxALgtQANg6ADgxQAFg6gMhEQgBgDAAgEQgOhagDg8QgCgrgBgvQgBhLAFhWQAEhzAui4QABgGABgHQAPg/AOg+IALg0");
	this.shape_25.setTransform(-68,103.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CCCC00").ss(6,1,1).p("AiVL5QAZgdAcgjQANgRAOgSQAegpAXglQAphIAOgzQAMgyAIgtQAKg7AAgwQAAg6gShFQAAgEgBgEQgWhagFg7QgFgqgBgvQgChKAHhWQAHhtA7i7QACgGACgGQAVg/AUg+IARg1");
	this.shape_26.setTransform(-68.8,102.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CCCC00").ss(6,1,1).p("ACeryIhMCyQhODHgHBrQgNCNAPBpQAHA5AdBcQAaBSAEA1QAHBVgaB3QgTBVhdBvQgwA3grAo");
	this.shape_27.setTransform(-69.6,102.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CCCC00").ss(6,1,1).p("AiWL4QAagdAcgjQANgRAOgSQAfgoAXglQAphIAOgyQAMgyAIgtQAJg7AAgxQgCg5gShGQgBgEAAgEQgXhagGg7QgFgqgBgvQgChJAHhWQAHhsA9i8QACgGACgGQAWg/AVg+IASg1");
	this.shape_28.setTransform(-68.9,102.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CCCC00").ss(6,1,1).p("AiPL9QAWgeAZgkQAMgRAMgTQAcgqAWgmQAohIAQg0QAOgxAKgtQAMg7ACgwQAEg6gPhFQAAgDgBgEQgQhagEg8QgDgqgBgvQgBhLAGhWQAFhxAxi5QACgGABgHQARg/AQg+IANg0");
	this.shape_29.setTransform(-68.2,103);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CCCC00").ss(6,1,1).p("AiIMDQASggAWglQALgSALgTQAYgrAWgoQAlhIATg1QAPgxAMgtQAPg6AGgwQAIg7gLhDQAAgDAAgEQgKhZgCg+QgBgrAAgvQAAhMAEhWQADh2Ali2QABgGACgHQALhAALg9IAIg1");
	this.shape_30.setTransform(-67.6,103.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#CCCC00").ss(6,1,1).p("AiAMIQAOgiATglQAIgTAKgUQAWgsAUgpQAkhIAVg3QAQgwAPguQARg4AJgxQANg7gGhBQAAgEAAgEQgEhYABg/QAAgrAAgwQABhNADhWQABh6AZi1QABgGABgGQAHhBAEg9IADg0");
	this.shape_31.setTransform(-66.9,103.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#CCCC00").ss(6,1,1).p("Ah6MNQAKgjAQgmQAHgUAJgUQASguAUgqQAkhIAUg4QASgwASguQATg3ANgxQARg9gCg+QAAgEABgEQABhXAEhBQACgsABgvQABhPAChWQgBh/ANiyQABgGAAgHQAChBgBg9IgCgz");
	this.shape_32.setTransform(-66.1,104.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#CCCC00").ss(6,1,1).p("Ah7MTQAHglAMgnQAGgUAHgVQAQgvASgsQAihIAXg6QATgvAUguQAWg3AQgwQAWg+ACg9QABgDABgEQAHhWAHhDQADgsABgwQADhQAAhWQgDiEABivQAAgGAAgHQgDhCgGg8IgHg0");
	this.shape_33.setTransform(-64.7,104.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CCCC00").ss(6,1,1).p("AiDMYQADgmAJgoQAEgVAGgWQANgwARgtQAghIAcg7QATgvAWguQAYg2ATgxQAbg+AGg7QABgEABgEQAOhVAJhEQAFgtABgwQAEhRgBhWQgGiIgKitQgBgHAAgGQgIhCgMg9IgLgz");
	this.shape_34.setTransform(-62.5,105.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#CCCC00").ss(6,1,1).p("AiLMeQgBgpAGgoQADgWAEgWQAKgxARgvQAehIAeg9QAVguAXguQAbg1AXgxQAfg/AKg5QABgEACgEQAUhUALhGQAHgtACgwQAEhTgDhWQgHiNgWirQgBgGgBgGQgNhDgRg8IgRg0");
	this.shape_35.setTransform(-60.3,105.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#CCCC00").ss(6,1,1).p("AiSMjQgFgqADgpQABgXAEgWQAGgzAQgwQAchJAhg9QAWgtAcgvQAbg0AagxQAkhAAPg3QABgEABgEQAbhTANhIQAJguACgwQAFhTgEhXQgJiSgiioQgCgGgBgHQgShDgWg8IgWgz");
	this.shape_36.setTransform(-58.2,106.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#CCCC00").ss(6,1,1).p("AiXMoQgJgrAAgqQgBgXACgYQAEg0APgxQAahJAjg/QAYgsAegwQAegzAdgxQAphAASg2QACgEACgEQAghSAQhJQAKguADgxQAGhUgFhXQgLiWgvimQgCgHgCgGQgWhEgcg8Igbgy");
	this.shape_37.setTransform(-56.3,106.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#CCCC00").ss(6,1,1).p("AibMuQgNgtgDgrQgCgYAAgYQABg1AOgzQAZhJAlhAQAYgsAhgwQAjgyAegxQAthBAXg0QACgEACgEQAnhRAShLQAMgvADgwQAHhWgGhXQgOibg6ijQgCgHgDgGQgbhFgig7Igfgz");
	this.shape_38.setTransform(-54.5,107.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CCCC00").ss(6,1,1).p("AifMzQgQgvgHgrQgDgZgBgYQgCg3ANg0QAXhJAnhCQAagrAjgwQAlgxAigxQAyhCAbgyQACgEACgEQAthRAVhMQANgvAEgxQAIhXgIhXQgPighGihQgDgGgDgHQghhFgng7Igigy");
	this.shape_39.setTransform(-52.7,107.5);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CCCC00").ss(6,1,1).p("AA2krIApAyQAxBAAoBNQAkBHgxCcQgpCDgnAwQgGAIgRgVQAAgBgjgxQgyhJgVAaQgnAyhGhLQg5hNAGAQ");
	this.shape_40.setTransform(-59.8,55.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16}]}).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_40}]},3).to({state:[]},8).wait(1));

	// Layer 4
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#F97806").s().p("AABQoQgngpgBg6QABg7AngoQAogpA7gBQA6ABApApQAoAoAAA7QAAA6goApQgpApg6gBQg7ABgogpgAqtHzQkckTABmEQgBmFEckUQEckSGRAAQGRAAEdESQEbEUAAGFQAAGEkbETQkdEUmRgBQmRABkckUg");
	this.shape_41.setTransform(-70,-95.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F97806").s().p("AAJQnQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqsH0QkckTgBmEQABmFEckUQEbkTGRAAQGSAAEbETQEcEUABGFQgBGEkcETQkbETmSAAQmRAAkbkTg");
	this.shape_42.setTransform(-70.2,-95.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F97806").s().p("AARQmQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH1QkbkTAAmEQAAmFEbkUQEdkTGQAAQGSAAEcETQEcEUgBGFQABGEkcETQkcETmSAAQmQAAkdkTg");
	this.shape_43.setTransform(-70.3,-94.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F97806").s().p("AAZQlQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH1QkckTABmDQgBmGEckTQEckTGRAAQGRAAEdETQEbETAAGGQAAGDkbETQkdEUmRAAQmRAAkckUg");
	this.shape_44.setTransform(-70.5,-94.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F97806").s().p("AAhQkQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqsH2QkckTgBmDQABmGEckTQEbkTGRAAQGSAAEbETQEcETABGGQgBGDkcETQkbEUmSAAQmRAAkbkUg");
	this.shape_45.setTransform(-70.6,-94);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F97806").s().p("AAqQkQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH3QkbkTAAmEQAAmFEbkUQEdkTGQAAQGSAAEcETQEcEUgBGFQABGEkcETQkcETmSAAQmQAAkdkTg");
	this.shape_46.setTransform(-70.8,-93.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#F97806").s().p("AAyQjQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH4QkckTABmEQgBmFEckUQEckTGRAAQGRAAEdETQEbEUAAGFQAAGEkbETQkdETmRAAQmRAAkckTg");
	this.shape_47.setTransform(-70.9,-93.3);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#F97806").s().p("AA6QiQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqsH5QkckTgBmEQABmFEckUQEbkTGRAAQGSAAEbETQEcEUABGFQgBGEkcETQkbETmSAAQmRAAkbkTg");
	this.shape_48.setTransform(-71.1,-92.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F97806").s().p("ABCQhQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH5QkbkTAAmDQAAmGEbkTQEdkTGQAAQGSAAEcETQEcETgBGGQABGDkcETQkcEUmSAAQmQAAkdkUg");
	this.shape_49.setTransform(-71.2,-92.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F97806").s().p("ABLQgQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH6QkckTABmDQgBmGEckTQEckTGRAAQGRAAEdETQEbETAAGGQAAGDkbETQkdEUmRAAQmRAAkckUg");
	this.shape_50.setTransform(-71.4,-92.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F97806").s().p("ABTQgQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqsH7QkckTgBmEQABmFEckUQEbkTGRAAQGSAAEbETQEcEUABGFQgBGEkcETQkbETmSAAQmRAAkbkTg");
	this.shape_51.setTransform(-71.5,-91.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#F97806").s().p("ABbQfQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH8QkbkTAAmEQAAmFEbkUQEdkTGQAAQGSAAEcETQEcEUgBGFQABGEkcETQkcETmSAAQmQAAkdkTg");
	this.shape_52.setTransform(-71.7,-91.4);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#F97806").s().p("ABUQfQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH7QkbkTAAmDQAAmGEbkTQEdkTGQAAQGSAAEcETQEcETgBGGQABGDkcETQkcEUmSAAQmQAAkdkUg");
	this.shape_53.setTransform(-71.6,-91.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#F97806").s().p("ABNQgQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH6QkbkTAAmDQAAmGEbkTQEdkTGQAAQGSAAEcETQEcETgBGGQABGDkcETQkcEUmSAAQmQAAkdkUg");
	this.shape_54.setTransform(-71.4,-92.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F97806").s().p("ABGQhQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH6QkbkTAAmEQAAmFEbkUQEdkTGQAAQGSAAEcETQEcEUgBGFQABGEkcETQkcETmSAAQmQAAkdkTg");
	this.shape_55.setTransform(-71.3,-92.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#F97806").s().p("AA/QhQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH5QkbkTAAmDQAAmGEbkTQEdkTGQAAQGSAAEcETQEcETgBGGQABGDkcETQkcEUmSAAQmQAAkdkUg");
	this.shape_56.setTransform(-71.2,-92.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#F97806").s().p("AA4QiQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH4QkbkTAAmDQAAmGEbkTQEdkTGQAAQGSAAEcETQEcETgBGGQABGDkcETQkcEUmSAAQmQAAkdkUg");
	this.shape_57.setTransform(-71.1,-93);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F97806").s().p("AAxQjQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH4QkbkTAAmEQAAmFEbkUQEdkTGQAAQGSAAEcETQEbEUAAGFQAAGEkbETQkcETmSAAQmQAAkdkTg");
	this.shape_58.setTransform(-70.9,-93.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#F97806").s().p("AAqQjQgpgpAAg6QAAg6ApgpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH3QkbkTAAmDQAAmGEbkTQEckTGRAAQGRAAEdETQEbETAAGGQAAGDkbETQkdEUmRAAQmRAAkckUg");
	this.shape_59.setTransform(-70.8,-93.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F97806").s().p("AAjQkQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH2QkckTABmDQgBmGEckTQEckTGRAAQGRAAEdETQEbETAAGGQAAGDkbETQkdEUmRAAQmRAAkckUg");
	this.shape_60.setTransform(-70.7,-94);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F97806").s().p("AAcQlQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH2QkckTABmEQgBmFEckUQEckTGRAAQGRAAEdETQEbEUAAGFQAAGEkbETQkdETmRAAQmRAAkckTg");
	this.shape_61.setTransform(-70.6,-94.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F97806").s().p("AAVQlQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH1QkckTABmDQgBmGEckTQEckTGRAAQGRAAEdETQEbETAAGGQAAGDkbETQkdEUmRAAQmRAAkckUg");
	this.shape_62.setTransform(-70.4,-94.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#F97806").s().p("AAOQmQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH0QkckTABmDQgBmGEckTQEckTGRAAQGRAAEdETQEbETAAGGQAAGDkbETQkdEUmRAAQmRAAkckUg");
	this.shape_63.setTransform(-70.3,-94.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#F97806").s().p("AAHQnQgngpAAg6QAAg6AngpQApgpA6AAQA6AAApApQApApAAA6QAAA6gpApQgpApg6AAQg6AAgpgpgAqtH0QkckTABmEQgBmFEckUQEckTGRAAQGRAAEdETQEbEUAAGFQAAGEkbETQkdETmRAAQmRAAkckTg");
	this.shape_64.setTransform(-70.2,-95.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(249,120,6,0.949)").s().p("AmBEhQigh3ABiqQgBipCgh4QCgh4DhgBQDiABCgB4QCfB4ABCpQgBCqifB3QigB6jiAAQjhAAigh6g");
	this.shape_65.setTransform(-65.9,-29.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(243,117,5,0.817)").s().p("AnRFeQjCiQAAjOQAAjNDCiSQDBiREQAAQERAADCCRQDBCSAADNQAADOjBCQQjCCTkRAAQkQAAjBiTg");
	this.shape_66.setTransform(-66.4,-34.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(236,115,4,0.686)").s().p("AoiGbQjjiqAAjxQAAjwDjisQDjiqE/AAQFBAADjCqQDiCsAADwQAADxjiCqQjjCslBAAQk/AAjjisg");
	this.shape_67.setTransform(-66.8,-39.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("rgba(230,112,3,0.554)").s().p("ApzHYQkFjDAAkVQAAkUEFjFQEEjDFvAAQFwAAEFDDQEEDFAAEUQAAEVkEDDQkFDFlwAAQlvAAkEjFg");
	this.shape_68.setTransform(-67.2,-44.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("rgba(223,110,3,0.422)").s().p("ArEIVQkmjcAAk5QAAk4EmjeQEmjcGeAAQGfAAEmDcQEmDeAAE4QAAE5kmDcQkmDemfAAQmeAAkmjeg");
	this.shape_69.setTransform(-67.6,-49);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("rgba(217,107,2,0.291)").s().p("AsVJRQlHj1AAlcQAAlbFHj4QFHj1HOAAQHPAAFHD1QFHD4AAFbQAAFclHD1QlHD4nPAAQnOAAlHj4g");
	this.shape_70.setTransform(-68,-53.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("rgba(210,105,1,0.159)").s().p("AtmKOQlpkOAAmAQAAl/FpkQQFpkPH9AAQH+AAFpEPQFpEQAAF/QAAGAlpEOQlpERn+AAQn9AAlpkRg");
	this.shape_71.setTransform(-68.4,-58.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("rgba(204,102,0,0.027)").s().p("Au3LLQmKknAAmkQAAmiGKkqQGKkoItAAQIuAAGKEoQGKEqAAGiQAAGkmKEnQmKEqouAAQotAAmKkqg");
	this.shape_72.setTransform(-68.8,-63.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41}]}).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_65}]},3).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-168.5,-206,195.5,399.6);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;