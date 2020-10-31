var story = [
    [
        "bg_black",
        "bg_ltruins",
        "avg_npc_066_2",
        "avg_npc_069_2",
        "avg_npc_069_4",
        "avg_npc_066",
        "avg_npc_066_5",
        "avg_npc_066_3",
        "bg_ltstrongpoint",
        "avg_npc_011_2",
        "avg_npc_053",
        "bg_bridge",
        "char_345_folnic_3",
        "char_358_lisa_3",
        "char_345_folnic_4",
        "char_358_lisa_1",
        "char_358_lisa_4",
        "char_358_lisa_2",
        "char_345_folnic_2"
    ],
    [
        "m_dia_darkness01_loop",
        "m_dia_darkness01_intro",
        "d_gen_walk_n",
        "m_avg_nervous_loop",
        "m_avg_nervous_intro",
        "m_dia_darkness02_loop",
        "m_dia_darkness02_intro",
        "d_gen_transmissionget"
    ],
    [
        "voice.stopMusic({});playground.clearDialog();delay(1);blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_black',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:1, block:true});voice.playMusic({intro:'m_dia_darkness01_intro', key:'m_dia_darkness01_loop', volume:0.4});playground.drawDialog({text:'3:23 P.M.    天气/晴'});",
        "playground.drawDialog({text:'莱塔尼亚境内，移动城镇沃伦姆德外，一棵微不足道的老栎树下'});",
        "playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:1, block:true});background.showImage({image:'bg_ltruins',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});playground.drawCharacter({name:'avg_npc_066_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.clearDialog();playground.drawCharacter({});voice.playSound({key:'d_gen_walk_n', volume:0.6});playground.drawCharacter({name:'avg_npc_069_2',fadetime:1,block:true});delay(1);playground.drawDialog({name:'塔佳娜',text:'塞弗林长官......这已经是您今天的第三包烟了。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:2});playground.drawDialog({name:'塞弗林',text:'长官。'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066_2',focus:1});playground.drawDialog({name:'塔佳娜',text:'啊，抱歉，伯父......'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'我有依赖烟草的必要。当然，烟草和酒精都是坏东西......你说的对，别学我。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'塔佳娜',text:'但您的咳嗽越来越严重了。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'没必要这么毕恭毕敬，现在不是工作时间，我和你说过......算了。'});",
        "playground.clearDialog();playground.drawCharacter({});playground.drawDialog({text:'他望向远处，烧毁的帐篷，肆意生长的野草，他抖了抖烟灰。'});",
        "playground.drawDialog({text:'他本想在独处的时候获得一些安宁，即使只是通过一个称谓的变化。'});",
        "playground.clearDialog();delay(1);playground.drawCharacter({name:'avg_npc_066_5'});playground.drawDialog({name:'塞弗林',text:'唉......他们让你跑这一趟，他们竟然让你来！'});",
        "playground.drawDialog({name:'塞弗林',text:'一群老滑头，他们不敢亲自来找我提意见也就罢了，他们还要伤害一个小姑娘——咳咳、咳咳！'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066_5',focus:1});playground.drawDialog({name:'塔佳娜',text:'伯父，别激动！是我自愿的，是我想着至少要亲自告诉伯父......'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066_5',focus:2});playground.drawDialog({name:'塞弗林',text:'呼——咳咳，咳咳——'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_5',focus:1});playground.drawDialog({name:'塔佳娜',text:'您真的得戒掉烟酒了，您最近的状态很差......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_5',focus:2});playground.drawDialog({name:'塞弗林',text:'结果我大概已经猜得到了——该死。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_5',focus:1});playground.drawDialog({name:'塔佳娜',text:'......嗯，会上讨论得很激烈。不过年轻人都躲在待客室里，谁也不敢发话。'});",
        "playground.drawDialog({name:'塔佳娜',text:'他们、他们没有人帮我，对不起，只靠我说服不了其他人。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_3',focus:2});playground.drawDialog({name:'塞弗林',text:'......自从城镇偏离航线之后情况就紧张了起来。现在不是搞社会实践的时候，学生和年轻人就算发表意见也没人会听。'});",
        "playground.drawDialog({name:'塞弗林',text:'然后呢？'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_3',focus:1});playground.drawDialog({name:'塔佳娜',text:'镇民代表一致认为，因为无法分辨感染者以及他们的感染情况，为了避免意外......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_3',focus:2});playground.drawDialog({name:'塞弗林',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_3',focus:1});playground.drawDialog({name:'塔佳娜',text:'尸体必须埋葬在小镇之外，当然也......不允许举办葬礼。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:2});playground.drawDialog({name:'塞弗林',text:'唉......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:1});playground.drawDialog({name:'塔佳娜',text:'我......我很抱歉......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:2});playground.drawDialog({name:'塞弗林',text:'......但他们中有人是沃伦姆德的一员，是我们的家人，我们不应该这么简单就抛弃他们。'});",
        "playground.drawDialog({name:'塞弗林',text:'埃克哈德是最好的裁缝，他接过他爹的裁缝店后，镇上几乎每一次婚礼都少不了他。'});",
        "playground.drawDialog({name:'塞弗林',text:'毕德曼是个可怜人，因为大裂谷的事他丢了天灾信使的工作，但他在努力赎罪。他很坚强。'});",
        "playground.drawDialog({name:'塞弗林',text:'凯文不是感染者，他为了他的妻子尽心尽力，他本来是个好丈夫。'});",
        "playground.drawDialog({name:'塞弗林',text:'还有托尔瓦尔德，他——咳咳，咳咳——'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:1});playground.drawDialog({name:'塔佳娜',text:'您不该再抽烟了，长官。托尔也这么说过。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'......你接受吗，孩子？实话实说，别管那些老滑头的想法。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'塔佳娜',text:'我......我不知道。'});",
        "playground.drawDialog({name:'塔佳娜',text:'但我只想托尔能入土为安，而不是在死后还要被当做危险品......被小心翼翼地处理，被风吹雨打......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'......好吧。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'塔佳娜',text:'为什么我们要这么对待他们？过去，过去不是这样的。'});",
        "playground.drawDialog({name:'塔佳娜',text:'还有那位矿石病医生。她很了不起，没有抛弃沃伦姆德，这四个人都有权利得到体面的下葬，但是——'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'就因为感染者和他们一起——'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'塔佳娜',text:'......该责怪的是这场火灾。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'我明白。'});",
        "playground.drawDialog({name:'塞弗林',text:'但是......但是这件事得延后，现在还不能抛弃他们的遗体。'});",
        "playground.drawDialog({name:'塞弗林',text:'我联系了最近的宪兵队，他们会在救援队里增派专业人士协助调查，在那之前，尸体都得保存在我照顾得到的地方。'});",
        "playground.drawDialog({name:'塞弗林',text:'只要有专门人士在，我们就可以更合理地对待死者。'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'塔佳娜',text:'最近？我们还能得到救援......？'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066',focus:2});playground.drawDialog({name:'塞弗林',text:'“最近”。他们可能要一个月——视那条裂缝的具体长度，可能要好几个月。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066',focus:1});playground.drawDialog({name:'塔佳娜',text:'沃伦姆德在脱离原本航线以后情况一天比一天糟糕，大家都说我们得绕过大裂谷往回走，回到正常的航线。'});",
        "playground.drawDialog({name:'塔佳娜',text:'不过越过大裂谷要绕的路也太远了，拖得时间太久的话......'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:2});playground.drawDialog({name:'塞弗林',text:'......总之，先等等。'});",
        "playground.drawDialog({name:'塞弗林',text:'让我和托尔多呆一会，我......我有这个权利。'});",
        "playground.drawDialog({name:'塞弗林',text:'如果那些老滑头要把我的孩子扔在沃伦姆德之外的荒郊野岭上，就让他们对着他们的士官长开火。'});",
        "playground.drawDialog({name:'塞弗林',text:'对着我，开火。'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:1});playground.drawDialog({name:'塔佳娜',text:'不会的！大家都清楚您对城镇的付出，不至于......不至于的！'});",
        "playground.drawCharacter({name:'avg_npc_069_2', name2:'avg_npc_066_2',focus:2});playground.drawDialog({name:'塞弗林',text:'......不，忘了吧。'});",
        "playground.drawDialog({name:'塞弗林',text:'在这种情况下，我不能说这种话......士官长不能说这种话。我们应该公事公办。'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066_2',focus:1});playground.drawDialog({name:'塔佳娜',text:'可托尔毕竟是您的儿子......！'});",
        "playground.drawCharacter({name:'avg_npc_069_4', name2:'avg_npc_066_2',focus:2});playground.drawDialog({name:'塞弗林',text:'塔佳娜，你回去告诉他们吧。就说——'});",
        "playground.drawCharacter({name:'avg_npc_066_2'});playground.drawDialog({name:'塞弗林',text:'就说......'});",
        "playground.drawDialog({name:'塞弗林',text:'就说我同意了、咳、我同意了。'});",
        "playground.drawDialog({name:'塞弗林',text:'咳咳，咳咳咳——'});",
        "voice.stopMusic({fadetime:3});playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});background.showImage({image:'bg_ltstrongpoint',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playMusic({intro:'m_avg_nervous_intro', key:'m_avg_nervous_loop', volume:0.4});playground.drawCharacter({name:'avg_npc_011_2',fadeitme:1,block:true});delay(1);playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'队长，他们回来了。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......嗯。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'多亏了这些本地人，我们才能混进附近的城镇里补充资源......'});",
        "playground.drawDialog({name:'武装的感染者',text:'猎人小队也快回来了，但愿今天能有所收获。我已经吃了两天沙虫了。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......嗯。'});",
        "playground.drawDialog({name:'？？？',text:'......水源呢？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'没问题。也多亏了那些家伙。'});",
        "playground.drawDialog({name:'武装的感染者',text:'......不过说真的，我和他们不是很聊得来。总觉得会被他们小瞧。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......嗯。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'看样子沃伦姆德近期就打算重新开始迁移，我们必须在那之前得到一个结果。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......我们有帮手，会有个好结果的。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'帮手吗......也许吧。'});",
        "playground.drawDialog({name:'武装的感染者',text:'但我信不过这些本地人，这些感染者......他们只是单纯的想要报复。'});",
        "playground.drawDialog({name:'武装的感染者',text:'莱塔尼亚对待感染者的态度温和得多，既然源石技艺普及率如此之高，这些感染者有什么理由被畏惧被迫害？'});",
        "playground.drawDialog({name:'武装的感染者',text:'而事实上，在这里的感染者至少还能物尽其用，不用被立刻送上绞刑架，这还不够吗？'});",
        "playground.drawDialog({name:'武装的感染者',text:'我看他们只是一群别有用意的暴徒，想利用我们的名号——'});",
        "playground.drawCharacter({name:'avg_npc_011_2'});playground.drawDialog({name:'？？？',text:'名号？'});",
        "playground.drawDialog({name:'？？？',text:'......名号，又算什么？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'呃......'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'不信任......这没问题，所以......那我们要信任谁？该信任谁？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'别老是说这么吓人的话啊，我当然听你的，队长。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......谢谢。'});",
        "playground.drawDialog({name:'？？？',text:'啊，有落叶，落在你头上了......'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'呃，什么？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'几箱干肉，捡来的水果，水源。现在是初秋，离入冬还有很久......'});",
        "playground.drawDialog({name:'？？？',text:'我们还有时间。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'......好吧，你讲话还是这么让人摸不着头脑。'});",
        "playground.drawDialog({name:'武装的感染者',text:'总之，我们什么时候上战场，你说了算。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'战场？不......'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'嗯？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......看吧，猎人们回来了。'});",
        "playground.drawDialog({name:'？？？',text:'似乎今晚的伙食会好一些。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'但愿吧。趁现在多吃点肉，入冬之后，我们的伙食会成为大问题的。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......'});",
        "playground.drawDialog({name:'？？？',text:'......鲍勃有回信吗？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'自从我们进入莱塔尼亚境内之后就再也没有他们的消息了......呃，还有，我一直有个问题。'});",
        "playground.drawDialog({name:'武装的感染者',text:'他到底是代号“鲍勃”，因为个头很大所以叫“大鲍勃”，还是他一开始就叫“大鲍勃”？'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:1});playground.drawDialog({name:'？？？',text:'......记不得了。'});",
        "playground.drawCharacter({name:'avg_npc_011_2', name2:'avg_npc_053',focus:2});playground.drawDialog({name:'武装的感染者',text:'算了，反正他们本来就是赏金猎人，说不定已经找到宝藏了吧。'});",
        "playground.drawCharacter({name:'avg_npc_011_2'});playground.drawDialog({name:'？？？',text:'......宝藏，宝藏啊。'});",
        "playground.drawDialog({name:'？？？',text:'是啊，如果也有宝藏可以帮帮我们......就好了。'});",
        "voice.stopMusic({fadetime:3});playground.clearDialog();playground.drawCharacter({});blocker.blocker({a:1, r:0, g:0, b:0, fadetime:3, block:true});background.showImage({image:'bg_bridge',screenadapt:'coverall'});blocker.blocker({a:0, r:0, g:0, b:0, fadetime:3, block:true});voice.playMusic({intro:'m_dia_darkness02_intro', key:'m_dia_darkness02_loop', volume:0.4});background.cameraShake({duration:1, xstrength:10, ystrength:12, vibrato:30, randomness:90, fadeout:true, block:false});playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'已经二十七天了！'});",
        "playground.drawDialog({name:'亚叶',text:'那家伙怎么可能拖了这么久没有联络，她可是个出了名的守时狂！'});",
        "playground.drawDialog({name:'亚叶',text:'......'});",
        "playground.drawDialog({name:'亚叶',text:'安托......你在哪里......'});",
        "playground.drawCharacter({});playground.clearDialog();voice.playSound({key:'d_gen_walk_n', volume:0.6});playground.drawCharacter({name:'char_358_lisa_3',fadetime:1,block:true});delay(1);playground.drawDialog({name:'铃兰',text:'亚叶姐姐？'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_4',focus:2});playground.drawDialog({name:'亚叶',text:'啊，丽萨......不，现在该叫你铃兰干员了吧？'});",
        "playground.drawDialog({name:'亚叶',text:'是个不错的代号喔。'});",
        "playground.drawCharacter({name:'char_358_lisa_1', name2:'char_345_folnic_4',focus:1});playground.drawDialog({name:'铃兰',text:'嘿嘿，谢谢！'});",
        "playground.drawDialog({name:'铃兰',text:'亚叶姐姐守着通讯室已经二十个小时了，不休息一下吗？'});",
        "playground.drawCharacter({name:'char_358_lisa_1', name2:'char_345_folnic_4',focus:2});playground.drawDialog({name:'亚叶',text:'有......这么久了吗？'});",
        "playground.drawCharacter({name:'char_358_lisa_1', name2:'char_345_folnic_4',focus:1});playground.drawDialog({name:'铃兰',text:'嗯！所以去休息室睡一会吧，我会帮姐姐看着的！'});",
        "playground.drawCharacter({name:'char_358_lisa_1', name2:'char_345_folnic_4',focus:2});playground.drawDialog({name:'亚叶',text:'好吧......真的已经这么久了......'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_4',focus:1});playground.drawDialog({name:'铃兰',text:'......还是没有安托姐姐的消息吗？'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'嗯......但我已经提出去莱塔尼亚的申请了。如果阿米娅答应的话，我随时出发。'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'铃兰',text:'去莱塔尼亚？亚叶姐姐还有其他任务要处理吧？'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_4',focus:2});playground.drawDialog({name:'亚叶',text:'她是我的同学，也是我最好的朋友，我不会......也不能放着她不管。'});",
        "playground.drawDialog({name:'亚叶',text:'安托最后一次定期联络是在莱塔尼亚北部的办事处，除非有什么特殊情况，她不该离开办事处太远。'});",
        "playground.drawCharacter({name:'char_358_lisa_4', name2:'char_345_folnic_4',focus:1});playground.drawDialog({name:'铃兰',text:'——那我也要去！'});",
        "playground.drawCharacter({name:'char_358_lisa_4', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'不行。'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'铃兰',text:'诶！？这么干脆吗......'});",
        "playground.drawDialog({name:'铃兰',text:'只、只是去调查一下安托姐姐的下落，不会有什么危险吧？'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'视情况，也不一定。'});",
        "playground.drawCharacter({name:'char_358_lisa_2', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'铃兰',text:'没关系的！我也是正式干员，我也是凯尔希医生的学生！'});",
        "playground.drawDialog({name:'铃兰',text:'而且亚叶姐姐总是愁眉苦脸的，这怎么行！我不放心！'});",
        "playground.drawCharacter({name:'char_358_lisa_2', name2:'char_345_folnic_2',focus:2});playground.drawDialog({name:'亚叶',text:'......唉，没想到有一天会被小丽萨担心，最近是不是有点太不在状态了？'});",
        "playground.drawCharacter({name:'char_358_lisa_1', name2:'char_345_folnic_2',focus:1});playground.drawDialog({name:'铃兰',text:'烦恼这种事情不分年龄大小啦。'});",
        "playground.drawCharacter({name:'char_358_lisa_1', name2:'char_345_folnic_2',focus:2});playground.drawDialog({name:'亚叶',text:'诶，好吧！反正我也向本地的分部打了报告，真有什么意外，他们也会帮我们的。'});",
        "playground.drawDialog({name:'亚叶',text:'等阿米娅同意之后，我们一起去，但是你要时刻和我——'});",
        "playground.clearDialog();playground.drawCharacter({});voice.stopMusic({fadetime:1});voice.playSound({key:'d_gen_transmissionget', volume:0.6});delay(1);playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'铃兰',text:'即时通讯？是安托姐姐回来了？'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:2});playground.drawDialog({name:'亚叶',text:'......'});",
        "playground.drawDialog({name:'亚叶',text:'不。是一份简报，是莱塔尼亚的干员收到通讯后发来的简报。'});",
        "playground.drawCharacter({name:'char_358_lisa_3', name2:'char_345_folnic_3',focus:1});playground.drawDialog({name:'铃兰',text:'亚叶姐姐......?'});",
        "playground.drawCharacter({name:'char_345_folnic_3'});playground.drawDialog({name:'亚叶',text:'安托最后出现在莱塔尼亚当地的某个城镇......而那里在一个月前......'});",
        "playground.drawDialog({name:'亚叶',text:'遭遇了天灾。'});",
        "playground.clearDialog();blocker.blocker({a:1, r:0,g:0, b:0, fadetime:3, block:true});playground.clearDialog();playground.drawCharacter({});playground.drawImage({});"
    ]
];