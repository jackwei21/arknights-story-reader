var story = [
    [
        "bg_trainingcom",
        "char_123_fang_1",
        "char_013_riop",
        "char_122_beagle_1",
        "char_124_kroos_1",
        "char_130_doberm_ex",
        "bg_room_2"
    ],
    [
        "m_dia_street_loop",
        "m_dia_street_intro",
        "d_gen_doorclosequite"
    ],
    [
        "playground.clearDialog();delay(1);playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:1,block:true});playground.drawCharacter({});delay(0.5);background.showImage({image:'bg_trainingcom',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_street_intro', key:'m_dia_street_loop', volume:0.8, crossfade:1.5});playground.drawDialog({text:'AM10：21 罗德岛训练场'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'就是这里！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'还不够快！'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'糟了！'});",
        "playground.drawDialog({name:'芬',text:'但是......！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'到此为止！'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'呼，呼......'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'不错啊，芬，上次你可挡不住这一下。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'你在战斗中越来越灵活了，这很好。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'芬',text:'嗯，杜宾老师教导我的，不仅是要运用自己的脚力，还要适应自己的速度，我现在稍微有些掌握了这种感觉！'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'没错，你有库兰塔天生的速度，对奇袭很有帮助。但如果敌人挡住了你的攻击，而你无法做出回应，那就没有很大的意义。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'总之，这次实战演习你通过了。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'芬',text:'谢谢格瑞斯老师！'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'不过既然你通过了，下次的小测验可就会更加难了。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'芬',text:'是，我会加油的！'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'嗯，要的就是这种精神。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'芬~~'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:2});playground.drawDialog({name:'芬',text:'米格鲁，你的测验也结束了吗，怎么样？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:1});playground.drawDialog({name:'米格鲁',text:'唉，我没有通过......法伦老师的进攻太刁钻了......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:2});playground.drawDialog({name:'芬',text:'别灰心，下次再加油吧。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:1});playground.drawDialog({name:'米格鲁',text:'芬呢，通过了吗？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:2});playground.drawDialog({name:'芬',text:'嗯。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:1});playground.drawDialog({name:'米格鲁',text:'真好啊......'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'呜呜，屁股好痛......'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:2});playground.drawDialog({name:'米格鲁',text:'克洛丝，你怎么了？'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:1});playground.drawDialog({name:'克洛丝',text:'我被苔丝老师射中了屁股......'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:2});playground.drawDialog({name:'米格鲁',text:'啊？'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:1});playground.drawDialog({name:'克洛丝',text:'我不是负责狙击嘛，所以测试是和苔丝老师互相隐蔽并找到对方，但是我完全没注意到她是怎么绕到我背后去的！'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'哈哈哈哈哈！'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'克洛丝',text:'格瑞斯大叔你还笑！'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'我必须承认，其他的狙击教官这几天恰好不在，导致测试只能和苔丝对上的你确实有点倒霉。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'我都受不了她的神出鬼没，你应该试试把你找偷懒地点的劲头拿出来。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'克洛丝',text:'嘁，你就笑吧。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:1});playground.drawDialog({name:'克洛丝',text:'我刚刚去看了眼芙蓉和炎熔，炎熔通过了，芙蓉没有，她们两个先回去了，你们呢？'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:2});playground.drawDialog({name:'米格鲁',text:'芬通过了哦。'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'啊，芬你这个叛徒！'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_123_fang_1',focus:2});playground.drawDialog({name:'芬',text:'谁是叛徒啦！'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:1});playground.drawDialog({name:'米格鲁',text:'唉，这次又没有通过测试，怎么办啊......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1',focus:2});playground.drawDialog({name:'芬',text:'别灰心啊，米格鲁，我们还有许多机会。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_122_beagle_1',focus:1});playground.drawDialog({name:'克洛丝',text:'就是啊，只是一次小测验，有什么好难过的，而且下午才是地狱呢。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'哈哈，确实，上午只是你们的个人小测验，杜宾是交给我们几个教官的，不过下午的团体实战测验就不一样了。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'克洛丝',text:'唉，别说了，我已经能够想象杜宾老师看到我的测验结果的表情了。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'现在知道后悔了？'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'克洛丝',text:'才没有，杜宾老师说我们按照自己的步调来就好了，我只是比较晚熟！'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'嚯嚯。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'但是我也担心杜宾老师对我们失望......'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'米格鲁，克洛丝......'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'好啦，认真地说，你们也不用太灰心，原本设置这样的测试，就不是为了让你们通过，而是让你们知道该往什么方向努力。'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'哇，好不爽，这个人一脸正经地在说自己比我强，偏偏我还没法反驳！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'认真地说，你们也好，其他预备组也好，现在距离我们这一批教官确实还有不小的差距。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'我们的存在意义之一，就是为你们提供一个背影。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'而你们可能自己没有发现，现在的你们，和刚进入罗德岛时的你们相比，已经有了非常大的进步了。'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'......确实。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'嗯......这么说的话，确实呢。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'而且啊，说真的，你们算好了，负责你们的教官都是你们各自擅长领域的。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'你们知道我们这批教官当时是怎么过来的吗？'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'难道说......'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'没错，我们是被杜宾一个人调教过来的。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'你们可能无法想象，现在的杜宾，已经比过去的她温柔一百倍了。'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'什么？现在的杜宾老师？温柔？'});",
        "playground.drawDialog({name:'克洛丝',text:'你在说什么笑话吗，格瑞斯大叔。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'我可没在开玩笑。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});background.cameraEffect({effect:'grayscale', keep:true, amount:1, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'格瑞斯，你是不是饭没吃饱！这点负重就让你跑不动了吗？'});",
        "playground.drawDialog({name:'杜宾',text:'法伦，好好想想，如果你的敌人看到你刚才那拙劣又耿直的攻击会怎么想！'});",
        "playground.drawDialog({name:'杜宾',text:'苔丝，你是不是睡着了？扶正你的枪把！别让我离开你的准心！'});",
        "playground.drawDialog({name:'杜宾',text:'维克多，敌人不会给你施法完喝口水的空挡！'});",
        "playground.drawDialog({name:'杜宾',text:'丽雅，我建议你在尝试练习治疗法术前，先学会急救的手法，你包扎的手法很配你手忙脚乱的样子！'});",
        "playground.drawDialog({name:'杜宾',text:'所有人在完成今天的练习后，绕着训练室再跑十圈！听清楚了吗？'});",
        "playground.drawCharacter({});playground.drawDialog({name:'所有人',text:'是！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'大声一点！'});",
        "playground.drawCharacter({});playground.drawDialog({name:'所有人',text:'是！！！！'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawCharacter({});background.cameraEffect({effect:'grayscale', keep:true, amount:0, fadetime:0});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'这么恐怖啊？'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'关键还是，杜宾虽然可能本身战斗力并不是出类拔萃的强，啊，这里我要自夸一下，我现在已经能和她五五开了。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'克洛丝',text:'哎呀你就别废话了。'});",
        "playground.drawCharacter({name:'char_124_kroos_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'哎，你也让我自夸一下好走出心理阴影。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'虽然杜宾自身战斗力并不强，但玻利瓦尔军队出身的她对各种战术技巧以及战场的了解实在是太恐怖了。'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'玻利瓦尔......'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'嗯，就是那个现在在内战的国家，我们都很好奇杜宾究竟是怎么变得这么厉害的，不过她从来没有详细说过她在玻利瓦尔的过去。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'反正当时因为罗德岛还在发展初期，急缺人才，而且，当时，怎么说呢......'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'那时的杜宾，是真正的军人。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'什么叫真正的军人？'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'你看，虽然我们罗德岛也蛮厉害了，但整体氛围还是很放松的吧？大家也都能有自己的生活。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'啊，我这么说吧，要是克洛丝你当时是我们这一批，你现在保证别说找地方偷懒，走神都不敢。'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'啊？光是想想感觉就受不了。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'啊，当然，这些你们听听就算了，杜宾现在也早就不是那个样子了。'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'确实，感觉很难把格瑞斯老师你说的形象和现在的杜宾老师联系起来呢。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'嗯......现在的杜宾老师，虽然一开始觉得很可怕，但是相处久了，能感觉到是在真心关心我们的。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'她一直都是真心关心别人的，在那时候也是。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'只不过嘛，有的时候，比起怎么想，怎么做更加重要。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'好了，跟你们聊的也差不多了，你们收拾一下去洗个澡吃午饭吧，为下午的团队实战训练做好准备。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'芬',text:'格瑞斯老师呢？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'我？我要去别的教官那里把你们这次的测试资料拿来，然后一起送到杜宾那里去。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'芬',text:'啊，这个让我来吧。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:2});playground.drawDialog({name:'格瑞斯教官',text:'嗯？可以吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_013_riop',focus:1});playground.drawDialog({name:'芬',text:'嗯，去吃饭的话也要路过杜宾老师的宿舍的。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'啊，我也要一起去。'});",
        "playground.drawCharacter({name:'char_124_kroos_1'});playground.drawDialog({name:'克洛丝',text:'呃，我就免了，我今天还不想那么早见到杜宾老师。'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'格瑞斯教官',text:'那就拜托你们了。'});",
        "playground.drawDialog({name:'格瑞斯教官',text:'对了，千万别告诉杜宾我和你们说过刚才的话啊，千万！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_room_2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'杜宾老师！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'嗯？怎么是你们两个过来。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'我们正好顺路，就替格瑞斯教官把这次的测试结果还有一些别的资料送过来了。'});",
        "playground.drawDialog({name:'芬',text:'老师，我这次通过了！'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'让我看看，嗯......很好。'});",
        "playground.drawDialog({name:'杜宾',text:'其他人......克洛丝、米格鲁、芙蓉没有通过，炎熔通过了吗。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'对不起......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'没事，你有进步。'});",
        "playground.drawDialog({name:'杜宾',text:'至于克洛丝，你回去叫她下午做好心理准备。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'啊哈哈哈。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'好了，回去好好休息吧。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'好的！'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'那个，杜宾老师，你在打扫房间吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯，我会定期打扫一下。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'能让我来帮忙吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯？为什么？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'诶，因为一直都是杜宾老师在引导我们，偶尔也想帮上老师的忙。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'啊，那我也要帮忙！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'唔，会有什么不方便的地方吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'......不，没什么，我只是有些惊讶，我还以为你们会有些怕我。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'怎么会呢，我很尊敬杜宾老师的。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'我也是！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'好吧，那就麻烦你们了。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1'});playground.drawDialog({name:'芬&米格鲁',text:'好！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:2, block:true});background.showImage({image:'bg_room_2',screenadapt:'coverall'});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'杜宾老师的房间里的东西，意外的多呢......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯？会很奇怪吗？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'啊，不是，我只是觉得杜宾老师给人房间里很整洁，东西很少的印象。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'......刚来到罗德岛时我确实没有带很多东西。'});",
        "playground.drawDialog({name:'杜宾',text:'不过我毕竟在这里生活几年了。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'对哦，杜宾老师是很早加入罗德岛的吧？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯，相比大部分干员来说确实是这样。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'杜宾老师是为什么加入罗德岛的呢？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'......'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'啊，抱歉，是不方便说的话题吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'不，只是并不适合现在说，等有机会吧。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'好呀好呀。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'你也很想知道吗？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'诶？嗯......嗯！因为我想多了解一些杜宾老师。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'多了解我......吗。'});",
        "playground.drawDialog({name:'杜宾',text:'呵。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'衣柜里也干脆清扫一下好了......'});",
        "playground.drawDialog({name:'芬',text:'咦，杜宾老师，这是军服吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯？嗯。'});",
        "playground.drawDialog({name:'杜宾',text:'这是我离开军队时留下的纪念品。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'哇，好帅的军服啊。'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'确实呢......所以杜宾老师曾经属于哪一边呢？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'看来你对玻利瓦尔有些了解。'});",
        "playground.drawDialog({name:'杜宾',text:'对了，米格鲁也是玻利瓦尔出身，我记得是移民去了哥伦比亚吧。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'米格鲁',text:'嗯，我也只是从我父母那里听说了玻利瓦尔的情况，所以有些好奇。'});",
        "playground.drawDialog({name:'米格鲁',text:'啊，请不要误会，我不是为了知道这个才......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'没关系，即使你真的为了这个而来也很正常......'});",
        "playground.drawDialog({name:'杜宾',text:'过来帮我拉住被套。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'来了！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'嗯，这样就行了，谢谢。'});",
        "playground.drawDialog({name:'杜宾',text:'玻利瓦尔境内现在有三股势力，名义上的官方是莱塔尼亚掌控的傀儡政府，因为他们主导的对抗哥伦比亚的战争取得了胜利。'});",
        "playground.drawDialog({name:'杜宾',text:'由议会分化出来的自治政府一直在寻找取而代之的机会，而且他们有着充足的资金来源，所以可以和傀儡政府叫板。'});",
        "playground.drawDialog({name:'杜宾',text:'剩下的一支势力则是由苦于两拨实力斗争而决定揭竿起义的普通民众组成的玻利瓦尔反抗军。'});",
        "playground.drawDialog({name:'杜宾',text:'我曾经隶属于自治政府，职位是上校。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'哇，上校，杜宾老师好厉害啊！'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'芬',text:'上校，确实是很高的职位了呢。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......是啊，很高了。'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'我来把衣柜顶部擦一下吧，一般这种地方很容易落灰尘呢。'});",
        "playground.drawDialog({name:'米格鲁',text:'嘿——咻！'});",
        "playground.drawDialog({name:'米格鲁',text:'咦，什么东西掉下来了？'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'这是......金属牌？'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'诶？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'这些是......铭牌。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'铭牌？和我们在罗德岛的身份卡类似的东西吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'对，在军队中，为了方便身份辨识，所以会为士兵发放这样一种印上部队番号和姓名的牌子。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'啊，真的。'});",
        "playground.drawDialog({name:'米格鲁',text:'我可以看看吗，杜宾老师？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'看吧。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'阿......兰。胡......安。何......塞。我只看得懂这几个名字，其他的缩写都看不懂......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'那些都和他们所处的部队有关，不用理解也没有关系。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'老师会带着这些铭牌，难道说......'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯，他们都死了。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'诶，那么，是、是很重要的战友吗？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'很重要吗......'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});playground.drawDialog({name:'？？？',text:'上校，你的人死得非常好。'});",
        "playground.drawDialog({name:'？？？',text:'不必感到悲伤，他们的死，保住了我的声誉，而你，也不必遭受上层的责罚。'});",
        "playground.drawDialog({name:'？？？',text:'调查？这些事情不会有人记得。'});",
        "playground.drawDialog({name:'？？？',text:'实话？上校，人们需要的是漂亮，或者虽然不那么漂亮但至少体面的结果，他们不在乎真相。'});",
        "playground.drawDialog({name:'？？？',text:'上校，认清你的身份，不要忘记是谁把你从一名平民士兵提拔到这个位置的！'});",
        "playground.clearDialog();blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'我和他们并不熟，我甚至没有和他们说过几句话。'});",
        "playground.drawDialog({name:'杜宾',text:'不过确实，他们对我来说很重要。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'诶？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......清扫也做得差不多了，你们过来。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'那个，是我做了什么不好的事情吗，杜宾老师？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'没关系，这些对我来说并不是见不得人的东西，否则也不会放在这么随意的地方。'});",
        "playground.drawDialog({name:'杜宾',text:'不过，你也好，芬刚才问的问题也好，确实让我回想起了一些东西，所以想和你们聊聊。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'那个，这个，我很荣幸！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'别紧张，坐下就好。'});",
        "playground.drawDialog({name:'杜宾',text:'有关我的过去，到了某个时候我会告诉你们，但不是现在。'});",
        "playground.drawDialog({name:'杜宾',text:'现在，我只是想问你们一个问题。'});",
        "playground.drawDialog({name:'杜宾',text:'你们觉得，士兵最大的特征是什么？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'诶？这是......考题吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'不是，你们可以随意回答。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'呼，那就好。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'让我想想，嗯......精通战斗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'大部分人经过训练都会战斗，就像这里的大部分普通干员一样，你们将来也会变成那样，这并不算什么特征。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'难道是可以用到很厉害的武器？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'确实，许多制式武器在军队中能简单接触到的......'});",
        "playground.drawDialog({name:'杜宾',text:'但你们在罗德岛上应该也已经见过了，总有人可以通过不同的渠道获得一部分这样的武器。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'数量很多？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯......这确实是一点，军队往往拥有民间组织不可比拟的人数优势。'});",
        "playground.drawDialog({name:'杜宾',text:'即使是罗德岛现在的规模，也只能比得上某个小国中一座小型非前线移动城邦的常驻军力吧。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'诶诶？我还以为罗德岛已经很厉害了呢......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'在民间组织的范畴内，罗德岛确实已经做得很好了。但是，永远不要妄图和国家对抗，想都别想。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'但是我们不是有很多很厉害的干员吗？比如天火小姐，唰一下能打一片，感觉很厉害啊。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'但是面对数量优势的话，如果不是强大到一定程度，是无法左右战局的吧？'});",
        "playground.drawDialog({name:'芬',text:'你还记得警备队的格斯吗？他虽然力气是警备队里第一大的，但如果十几个人一起围攻他......'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'没错，即使个体战斗力平庸，但量变是可以产生质变的。一个米格鲁没法对付天火，但十个呢，一百个呢？想一想。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'一、一百个我啊？感、感觉可以压死天火小姐......'});",
        "playground.drawDialog({name:'米格鲁',text:'对不起，天火小姐......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'呵，没错，至少在可考的战争史中，还没有出现过真的以个体实力影响以国家为单位的战争的人。'});",
        "playground.drawDialog({name:'杜宾',text:'呼......稍微扯远了，我一直没有对预备组的你们系统性地讲解军队的原因是，对你们来说，现在知道这些没有什么意义。'});",
        "playground.drawDialog({name:'杜宾',text:'在现阶段，我希望你们不会有用上这样的知识的机会，现在说的东西你们可以随意听一听。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'所以答案也不是数量吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯，虽然是不错的着眼点，不过这是军队的性质，而不是士兵的，再想想。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'嗯......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'那个，是服从命令吗？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'为什么你会这么想？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'我刚刚想起来，我们曾经在警备队的时候，队长就说过，作为士兵，无论什么情况都要服从命令。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'没错。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'诶，我答对了吗！'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'对，士兵最大的特征，就是服从命令。'});",
        "playground.drawDialog({name:'杜宾',text:'有一句话是这么说的，不会思考的士兵才是合格的士兵。军队是不需要士兵思考的，而只需要他们服从命令。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'但是，这样不会很残忍吗？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'战争更加残忍，如果一定要参与战争的话，抛弃思考说不定确实是某种形式的解脱。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'但是......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'你有这样的疑问也是理所当然的，这不残忍吗？士兵就不是人吗？'});",
        "playground.drawDialog({name:'杜宾',text:'显然，士兵终究不是机器，他们比谁都更接近死亡，所以比谁都知道自己都知道自己在面对什么。'});",
        "playground.drawDialog({name:'杜宾',text:'当士兵明知道自己在执行一项愚蠢至极的命令时，他真的还能够鼓起士气吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'应该不能......吧？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'当然不能。所以在这种时候，一般有两件事可以做，你们知道是什么吗？'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_123_fang_1'});playground.drawDialog({name:'芬&米格鲁',text:'......不知道。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'一件事是，让士兵察觉不到自己正在执行一项愚蠢的命令。'});",
        "playground.drawDialog({name:'杜宾',text:'但这其实很难，身在前线的人，最知道自己面临着怎样的危险，试图去欺骗他们往往是愚蠢的。'});",
        "playground.drawDialog({name:'杜宾',text:'倒不如说，能做到这点的话，本来就可以做到更好。'});",
        "playground.drawDialog({name:'杜宾',text:'而另一件事，就是发布正确的命令。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'诶？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'这听起来有些诡辩，但事实上就是如此，如何让一个士兵可以放心放弃思考战斗？'});",
        "playground.drawDialog({name:'杜宾',text:'如何让一个士兵不去怀疑他们得到的命令？'});",
        "playground.drawDialog({name:'杜宾',text:'很简单，发布让士兵信服的，正确的命令就好了。'});",
        "playground.drawDialog({name:'杜宾',text:'但总是有人不明白这一点。'});",
        "playground.drawDialog({name:'杜宾',text:'在离开自治政府后，我又辗转加入了反抗军，但我还是离开了，因为我发现，那里也是一样的。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'欸欸欸，杜宾老师还加入过反抗军吗？！'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'嗯，衣柜下面第二个抽屉里有一张照片，你可以看看。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'哇，真的，杜宾老师当时看起来好帅啊。'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'我也要看！'});",
        "playground.drawDialog({name:'芬',text:'哇，真的。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'看完了就放回去。'});",
        "playground.drawDialog({name:'杜宾',text:'在那里，我也没有留下什么好的回忆，最后我离开了玻利瓦尔，辗转加入了罗德岛。'});",
        "playground.drawDialog({name:'杜宾',text:'原本我是没有什么期待的。'});",
        "playground.drawDialog({name:'杜宾',text:'但这里给了我惊喜。'});",
        "playground.drawDialog({name:'杜宾',text:'一个士兵，可以很轻易地知道自己在执行一项愚蠢的命令，但他未必能知道，自己怎么做才是对的。'});",
        "playground.drawDialog({name:'杜宾',text:'这也是正确的命令的必要性。'});",
        "playground.drawDialog({name:'杜宾',text:'而罗德岛能做到这一点。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'（小声）芬，你听懂了吗？'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'（小声）一点点......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'我上面说的这些，你们不用听进去，这只是我的一点感慨。'});",
        "playground.drawDialog({name:'杜宾',text:'我主要是想告诉你们，你们可以多珍惜罗德岛一些。'});",
        "playground.drawDialog({name:'杜宾',text:'在这里，你们可以放心地把自己交给罗德岛，即使不去思考为什么而战，也不会因而失去什么。'});",
        "playground.drawDialog({name:'杜宾',text:'有一个古老的问题是：向前走就对了，可人面向哪边，哪边就是前，那么，究竟哪边是前呢？'});",
        "playground.drawDialog({name:'杜宾',text:'这个问题没有答案，但至少，相信罗德岛为你指出的前，并一路走下去，我想不会有错。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'相信罗德岛为我指出的前......感觉，稍微有些懂了杜宾老师想告诉我们的东西。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'唔，也就是说，罗德岛是个好地方？'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......呵呵，没错，确实可以这么认为。'});",
        "playground.drawDialog({name:'杜宾',text:'这里是几个理想主义者为了一点小小的愿望而拼命维持的世外桃源。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'虽然我也觉得罗德岛很好，但是有杜宾老师说的这么好吗......'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:2});playground.drawDialog({name:'杜宾',text:'呵呵，你们可能要很久以后才能体会到这一点。'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'好了，清扫耽误了不少时间，又听我说了些话，你们也该去吃饭了。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'啊，真的，都快1点了！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'嗯，辛苦你们帮我打扫了，你们先去吃饭吧，我马上就来。'});",
        "playground.drawCharacter({name:'char_123_fang_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'芬',text:'好的，谢谢杜宾老师的教诲，我会回去好好消化的。'});",
        "playground.drawCharacter({name:'char_122_beagle_1',name2:'char_130_doberm_ex',focus:1});playground.drawDialog({name:'米格鲁',text:'我也会的！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'不用当真也没有关系。'});",
        "playground.drawDialog({name:'杜宾',text:'还有，我改了主意，刚才说的东西，说不定我会出在某次测验上。'});",
        "playground.drawDialog({name:'杜宾',text:'以及你们如果只是按照我说的去回答，会得0分。'});",
        "playground.drawCharacter({name:'char_122_beagle_1'});playground.drawDialog({name:'米格鲁',text:'诶诶诶诶诶！不是吧！'});",
        "playground.drawCharacter({name:'char_123_fang_1'});playground.drawDialog({name:'芬',text:'我、我会回去好好思考的！谢谢杜宾老师今天的教导！'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});voice.playSound({key:'d_gen_doorclosequite'});blocker.blocker({a:0, fadetime:1, block:true});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......'});",
        "playground.drawDialog({name:'杜宾',text:'老师，啊。'});",
        "playground.drawDialog({name:'杜宾',text:'不知不觉，我也逐渐适应了这个身份。'});",
        "playground.drawDialog({name:'杜宾',text:'我有了许多学生，他们中有的已经超越了我，而有的则有着光明的未来。'});",
        "playground.drawDialog({name:'杜宾',text:'我在罗德岛找到了新的目标，我愿意相信阿米娅和凯尔希医生为我描绘的未来，但是......'});",
        "playground.drawDialog({name:'杜宾',text:'阿兰。'});",
        "playground.drawDialog({name:'杜宾',text:'胡安。'});",
        "playground.drawDialog({name:'杜宾',text:'何塞。'});",
        "playground.drawDialog({name:'杜宾',text:'我的根，终究是在玻利瓦尔。'});",
        "playground.drawDialog({name:'杜宾',text:'总有一天，我是要回去看看的。'});",
        "playground.drawDialog({name:'杜宾',text:'总有一天。'});",
        "delay(2);playground.clearDialog();blocker.blocker({fadetime:2,block:true});playground.drawImage({});"
    ]
];