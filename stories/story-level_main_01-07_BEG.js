var story = [
    [
        "bg_cher_10",
        "char_130_doberm_ex",
        "char_014_riope",
        "char_016_medic",
        "char_148_nearl_3",
        "char_002_amiya_7",
        "char_013_riop",
        "char_002_amiya_2",
        "char_002_amiya_4",
        "char_002_amiya_1",
        "char_1002_nsabr_2",
        "char_002_amiya_6"
    ],
    [
        "m_dia_calamity_loop",
        "m_dia_calamity_intro",
        "d_gen_explo_n",
        "d_gen_thunders_amb"
    ],
    [
        "voice.playMusic({intro:'m_dia_calamity_intro', key:'m_dia_calamity_loop', volume:0.8, crossfade:1.5, delay:0.5});blocker.blocker({a:1, r:0, g:0, b:0, block:true});background.showImage({image:'bg_cher_10', fadetime:1});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:0.5,block:true});delay(0.3);voice.playSound({key:'d_gen_explo_n'});background.cameraShake({duration:1, xstrength:3, ystrength:5, vibrato:30, randomness:90, fadeout:false});playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'抗冲击准备！！'});",
        "playground.drawDialog({name:'杜宾',text:'各自散开——！！！'});",
        "playground.drawDialog({name:'杜宾',text:'规模太大了......这样下去，整个街区的建筑都会被彻底摧毁！'});",
        "playground.drawDialog({name:'杜宾',text:'不行，糟了———！'});",
        "playground.drawCharacter({});playground.clearDialog();playground.drawImage({fadetime:1});playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'——！'});",
        "playground.drawDialog({name:'Ace',text:'快转移！'});",
        "playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'......！'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'坚持住！！'});",
        "playground.drawCharacter({});voice.playSound({key:'d_gen_explo_n', volume:0.7});background.cameraShake({duration:3, fadeout:true, xstrength:25, ystrength:25, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.2, r:0.93, g:0.7, b:0.2, fadetime:0.1, block:true});blocker.blocker({a:0, r:0.93, g:0.75, b:0.32, fadetime:0.2, block:true});playground.drawDialog({name:'整合运动成员',text:'啊——！！掉，掉下来了！'});",
        "playground.drawDialog({name:'整合运动成员',text:'天空掉下来了！'});",
        "voice.playSound({key:'d_gen_explo_n', volume:0.7});background.cameraShake({duration:3, fadeout:true, xstrength:25, ystrength:25, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.2, r:0.93, g:0.7, b:0.2, fadetime:0.1, block:true});blocker.blocker({a:0, r:0.93, g:0.75, b:0.32, fadetime:0.2, block:true});playground.drawDialog({name:'整合运动成员',text:'不，不，啊好疼......'});",
        "playground.drawDialog({name:'整合运动成员',text:'我的手，我的手！我的手哪里去了......'});",
        "playground.drawDialog({name:'整合运动成员',text:'怎，怎么会！！我不想死......！'});",
        "playground.drawDialog({name:'整合运动成员',text:'啊啊啊啊！！！'});",
        "voice.playSound({key:'d_gen_thunders_amb', delay:2, volume:0.5});playground.clearDialog();blocker.blocker({a:0.2, r:0.93, g:0.8, b:0.4, fadetime:0.1, block:true});playground.drawImage({fadetime:0});blocker.blocker({a:0, r:0.93, g:0.75, b:0.32, fadetime:0.2, block:true});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true});playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'重装干员！'});",
        "playground.drawDialog({name:'临光',text:'保护我方术师！！'});",
        "playground.drawDialog({name:'临光',text:'——！！'});",
        "playground.drawDialog({name:'临光',text:'那是什么声音？！'});",
        "playground.drawCharacter({name:'char_014_riope'});playground.drawDialog({name:'Ace',text:'巨大的坠岩击垮了临街的建筑！卧倒！！'});",
        "playground.clearDialog();voice.playSound({key:'d_gen_explo_n', volume:0.7});background.cameraShake({duration:3, fadeout:true, xstrength:25, ystrength:25, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.2, r:0.93, g:0.7, b:0.2, fadetime:0.1, block:true});blocker.blocker({a:0, r:0.93, g:0.75, b:0.32, fadetime:0.2, block:true});playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'啊......！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'——那个位置——医生！危险！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'糟糕，医生，快闪开！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.Decision({options:[['1'], '......！']});",
        "predicate = ['1'];",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawCharacter({name:'char_016_medic'});playground.drawDialog({name:'医疗干员',text:'啊！'});",
        "playground.drawDialog({name:'医疗干员',text:'......唔，博，博士？'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'博士把医生推进了掩体？可这样......这样的话，博士——！'});",
        "playground.drawDialog({name:'近卫干员',text:'不，博士！！'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:`Dr.${nickname}！！`});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'啊？'});",
        "playground.drawDialog({name:'近卫干员',text:'临，临光她冲出去了！'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'博士，蹲下！'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_explo_n', volume:0.5});background.cameraShake({duration:3, fadeout:true, xstrength:25, ystrength:25, vibrato:30, randomness:90, block:false});blocker.blocker({a:0.2, r:0.93, g:0.7, b:0.2, fadetime:0.1, block:true});blocker.blocker({a:0, r:0.93, g:0.75, b:0.32, fadetime:0.2, block:true});blocker.blocker({a:1, r:0.93, g:0.8, b:0.4, fadetime:0.1, block:true});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});blocker.blocker({a:0, fadetime:2, block:true});playground.drawCharacter({name:'char_148_nearl_3',fadetime:0.7});playground.drawDialog({name:'临光',text:'咯......'});",
        "playground.drawDialog({name:'临光',text:'赶上了！'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'她救下......她救下博士了！'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'咳哈......！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'临光！博士！快回来！'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'没问题的！'});",
        "playground.drawDialog({name:'临光',text:'我的盾牌还撑得住——！'});",
        "playground.drawDialog({name:'临光',text:'跳啊，博士！'});",
        "playground.drawDialog({name:'临光',text:'跳！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.6, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.6, block:true});playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'博士，博士......'});",
        "playground.drawDialog({name:'阿米娅',text:'你，你没事吧？'});",
        "playground.Decision({options:[['1', '2', '3'], '我没事，这算不了什么！', '......', '多亏临光小姐救下了我。']});",
        "predicate = ['1', '2', '3'];",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'一个人......处在那样的危险中！'});",
        "playground.drawDialog({name:'临光',text:'至少拉上我一起，让我保护博士你！'});",
        "playground.drawDialog({name:'临光',text:'无论怎样，我都不能允许你受伤——'});",
        "playground.drawDialog({name:'临光',text:'何况，是在我面前！'});",
        "playground.drawCharacter({name:'char_002_amiya_2'});playground.drawDialog({name:'阿米娅',text:'大家都还安全，就非常好了......！'});",
        "playground.drawCharacter({name:'char_002_amiya_4'});playground.drawDialog({name:'阿米娅',text:'但我们......'});",
        "playground.drawDialog({name:'阿米娅',text:'（还要坚持多久呢？）'});",
        "playground.drawDialog({name:'阿米娅',text:'（我们真的能活下来吗？）'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'......唔......'});",
        "playground.drawDialog({name:'阿米娅',text:'坠石的数量减少了？'});",
        "playground.drawDialog({name:'阿米娅',text:'我们撑过了第一波主灾害了吗......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'还不能大意，谁知道这次的天灾会持续多久。'});",
        "playground.drawDialog({name:'杜宾',text:'不过至少......我们不是身处天灾正中心的人。'});",
        "playground.drawDialog({name:'杜宾',text:'我们侥幸躲过去了。'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'嗯......'});",
        "playground.drawDialog({name:'阿米娅',text:'大家怎么样了？'});",
        "playground.drawCharacter({name:'char_013_riop'});playground.drawDialog({name:'近卫干员',text:'干员们基本都没事......！'});",
        "playground.drawDialog({name:'近卫干员',text:'有些干员受了轻伤，但状况都还算不错！'});",
        "playground.drawDialog({name:'近卫干员',text:'我们......活下来了！'});",
        "playground.drawCharacter({});blocker.blocker({a:1, r:0,g:0, b:0, fadetime:0.3, block:true});playground.clearDialog();blocker.blocker({a:0, fadetime:0.3, block:true});playground.drawDialog({name:'整合运动成员',text:'啊......'});",
        "playground.drawCharacter({name:'char_002_amiya_1'});playground.drawDialog({name:'阿米娅',text:'整合运动也有部分人员——'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'......啊？'});",
        "playground.drawDialog({name:'整合运动成员',text:'啊......啊！！罗德岛！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'......什么？'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'啊......！！！'});",
        "playground.drawCharacter({name:'char_002_amiya_6'});playground.drawDialog({name:'阿米娅',text:'整合运动还要继续攻击我们吗？'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2',name2:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'......'});",
        "playground.drawDialog({name:'整合运动成员',text:'罗德岛！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'这些家伙！'});",
        "playground.drawCharacter({name:'char_1002_nsabr_2'});playground.drawDialog({name:'整合运动成员',text:'别跑......！'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'真的是疯了。'});",
        "playground.drawCharacter({name:'char_148_nearl_3'});playground.drawDialog({name:'临光',text:'这些人为什么就不能珍惜自己的生命？！'});",
        "playground.drawCharacter({name:'char_002_amiya_7'});playground.drawDialog({name:'阿米娅',text:'杜宾......'});",
        "playground.drawCharacter({name:'char_130_doberm_ex'});playground.drawDialog({name:'杜宾',text:'没有办法......'});",
        "playground.drawDialog({name:'杜宾',text:'彻底击溃他们，然后马上移动！'});",
        "delay(0.6);playground.clearDialog();blocker.blocker({block:true});playground.drawImage({});"
    ]
];