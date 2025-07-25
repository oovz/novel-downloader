import { BaseRuleClass } from "../rules";

export async function getRule(): Promise<BaseRuleClass> {
  const host: string = document.location.host;
  let ruleClass;
  switch (host) {
    case "101kanshu.com": {
      const { c101kanshu } = await import("../rules/twoPage/101kanshu");
      ruleClass = c101kanshu();
      break;
    }
    case "www.sudugu.com": {
      const { Sudugu } = await import("../rules/special/reprint/sudugu");
      ruleClass = Sudugu;
      break;
    }
    case "www.biquge66.com":
    case "www.xkzw.org": {
      const { Xkzw } = await import("../rules/special/reprint/xkzw");
      ruleClass = Xkzw;
      break;
    }
    case "book.sfacg.com": {
      const { Sfacg } = await import("../rules/special/original/sfacg");
      ruleClass = Sfacg;
      break;
    }
    case "api.langge.cf": {
      const { Langge } = await import("../rules/special/reprint/langge");
      ruleClass = Langge;
      break;
    }
    case "lcread.com": case "www.lcread.com": {
      const { Lcread } = await import("../rules/special/original/lcread");
      ruleClass = Lcread;
      break;
    }
    case "www.lightnovel.fun": {
      const { Lightnovel } = await import("../rules/special/reprint/lightnovel");
      ruleClass = Lightnovel;
      break;
    }
    case "xr.unionread.net": {
      const { XRUnionread } = await import("../rules/special/original/unionread");
      ruleClass = XRUnionread;
      break;
    }
    case "www.hetushu.com": case "www.hetubook.com":
    case "hetushu.com": case "hetubook.com": {
      const { Hetushu } = await import("../rules/special/reprint/hetushu");
      ruleClass = Hetushu;
      break;
    }
    case "book.qidian.com": case "www.qidian.com": {
      const { Qidian } = await import("../rules/special/original/qidian");
      ruleClass = Qidian;
      break;
    }
    case "www.jjwxc.net": {
      const { Jjwxc } = await import("../rules/special/original/jjwxc");
      ruleClass = Jjwxc;
      break;
    }
    case "www.zongheng.com":
    case "book.zongheng.com":
    case "huayu.zongheng.com": {
      const { Zongheng } = await import("../rules/special/original/zongheng");
      ruleClass = Zongheng;
      break;
    }
    case "read.zongheng.com": {
      const { Zongheng } = await import("../rules/special/original/readzongheng");
      ruleClass = Zongheng;
      break;
    }
    case "www.17k.com": {
      const { C17k } = await import("../rules/special/original/17k");
      ruleClass = C17k;
      break;
    }
    case "www.shuhai.com":
    case "mm.shuhai.com": {
      const { Shuhai } = await import("../rules/special/original/shuhai");
      ruleClass = Shuhai;
      break;
    }
    case "gongzicp.com":
    case "www.gongzicp.com":
    case "m.gongzicp.com": {
      const { Gongzicp } = await import("../rules/special/original/gongzicp");
      ruleClass = Gongzicp;
      break;
    }
    case "www.linovel.net": {
      const { Linovel } = await import("../rules/special/original/linovel");
      ruleClass = Linovel;
      break;
    }
    case "www.tadu.com": {
      const { Tadu } = await import("../rules/special/original/tadu");
      ruleClass = Tadu;
      break;
    }
    case "www.idejian.com": {
      const { Idejian } = await import("../rules/special/reprint/idejian");
      ruleClass = Idejian;
      break;
    }
    case "www.qimao.com": {
      const { Qimao } = await import("../rules/special/original/qimao");
      ruleClass = Qimao;
      break;
    }
    case "sosad.fun":
    case "www.sosad.fun":
    case "wenzhan.org":
    case "www.wenzhan.org":
    case "sosadfun.com":
    case "www.sosadfun.com":
    case "xn--pxtr7m5ny.com":
    case "www.xn--pxtr7m5ny.com":
    case "xn--pxtr7m.com":
    case "www.xn--pxtr7m.com":
    case "xn--pxtr7m5ny.net":
    case "www.xn--pxtr7m5ny.net":
    case "xn--pxtr7m.net":
    case "www.xn--pxtr7m.net":
    case "sosadfun.link":
    case "www.sosadfun.link": {
      const { Sosadfun } = await import("../rules/special/original/sosadfun");
      ruleClass = Sosadfun;
      break;
    }
    case "www.fushuwang.org": {
      const { Fushuwang } = await import("../rules/special/reprint/fushuwang");
      ruleClass = Fushuwang;
      break;
    }
    case regExpMatch(/lofter\.com$/): {
      const { Lofter } = await import("../rules/special/original/lofter");
      ruleClass = Lofter;
      break;
    }
    case "www.shubl.com": case "shubl.com": {
      const { Shubl } = await import("../rules/special/original/ciweimao");
      ruleClass = Shubl;
      break;
    }
    case "m.haitangtxt.net": {
      const { haitangtxt } = await import(
        "../rules/special/reprint/haitangtxt"
      );
      ruleClass = haitangtxt();
      break;
    }
    case "ebook.longmabook.com":
    case "www.longmabookcn.com":
    case "ebook.lmbooks.com":
    case "www.lmebooks.com":
    case "www.haitbook.com":
    case "www.htwhbook.com":
    case "www.myhtebook.com":
    case "www.lovehtbooks.com":
    case "www.myhtebooks.com":
    case "www.myhtlmebook.com":
    case "jp.myhtebook.com":
    case "jp.myhtlmebook.com":
    case "ebook.urhtbooks.com":
    case "www.urhtbooks.com":
    case "www.newhtbook.com":
    case "www.lvhtebook.com":
    case "jp.lvhtebook.com":
    case "www.haitangbook.com":
    case "www.htlvbooks.com": {
      const { Longmabook } = await import(
        "../rules/special/original/longmabook"
      );
      ruleClass = Longmabook;
      break;
    }
    case "www.kanunu8.com": {
      const { Kanunu8 } = await import("../rules/special/reprint/kanunu8");
      ruleClass = Kanunu8;
      break;
    }
    case "www.ciyuanji.com": {
      const { Ciyuanji } = await import("../rules/special/original/ciyuanji");
      ruleClass = Ciyuanji;
      break;
    }
    case "www.shaoniandream.com": {
      const { Shaoniandream } = await import(
        "../rules/special/original/shaoniandream"
      );
      ruleClass = Shaoniandream;
      break;
    }
    case "www.pixiv.net": {
      const { Pixiv } = await import("../rules/special/original/pixiv");
      ruleClass = Pixiv;
      break;
    }
    case "www.myrics.com": {
      const { Myrics } = await import("../rules/special/original/myrics");
      ruleClass = Myrics;
      break;
    }
    case "www.hanwujinian.com": {
      const { Hanwujinian } = await import(
        "../rules/special/original/hanwujinian"
      );
      ruleClass = Hanwujinian;
      break;
    }
    case "www.cool18.com": {
      const { Cool18 } = await import("../rules/special/original/cool18");
      ruleClass = Cool18;
      break;
    }
    case "www.xrzww.com": case "xrzww.com": {
      const { Xrzww } = await import("../rules/special/original/xrzww");
      ruleClass = Xrzww;
      break;
    }
    case "www.youdubook.com": case "youdubook.com": {
      const { Youdubook } = await import("../rules/special/original/youdubook");
      ruleClass = Youdubook;
      break;
    }
    case "new-read.readmoo.com": {
      const { Readmoo } = await import("../rules/special/original/readmoo");
      ruleClass = Readmoo;
      break;
    }
    case "www.iqingguo.com": {
      const { Iqingguo } = await import("../rules/special/original/iqingguo");
      ruleClass = Iqingguo;
      break;
    }
    case "duread.cn": case "www.duread.cn": {
      const { Duread } = await import("../rules/special/original/ciweimao");
      ruleClass = Duread;
      break;
    }
    case "www.99csw.com": {
      const { I99csw } = await import("../rules/special/reprint/99csw");
      ruleClass = I99csw;
      break;
    }
    case "www.ttkan.co":
    case "cn.ttkan.co":
    case "tw.ttkan.co": {
      const { Ttkan } = await import("../rules/special/reprint/ttkan");
      ruleClass = Ttkan;
      break;
    }

    /* onePage */
    case "www.uukanshu.com": {
      const { uukanshu } = await import("../rules/onePage/uukanshu");
      ruleClass = uukanshu();
      break;
    }
    case "www.westnovel.com": {
      const { westnovel } = await import("../rules/onePage/westnovel");
      ruleClass = westnovel();
      break;
    }
    case "www.soxscc.net":
    case "www.soxscc.org":
    case "www.soxs.cc":
    case "www.soxscc.cc":
    case "www.soshuwu.com": {
      const { soxscc } = await import("../rules/onePage/soxscc");
      ruleClass = soxscc();
      break;
    }
    case "www.630shu.net": {
      const { c630shu } = await import("../rules/onePage/630shu");
      ruleClass = c630shu;
      break;
    }
    case "www.trxs.cc":
    case "www.trxs.me":
    case "www.trxs123.com":
    case "www.jpxs123.com":
    case "www.tongrenquan.org":
    case "www.tongrenquan.me":
    case "trxs.cc":
    case "trxs.me":
    case "trxs123.com":
    case "jpxs123.com":
    case "tongrenquan.me":
    case "tongrenquan.org": {
      const { trxs } = await import("../rules/onePage/trxs");
      ruleClass = trxs();
      break;
    }
    case "www.256wenku.com": {
      const { c256wxc } = await import("../rules/onePage/256wxc");
      ruleClass = c256wxc;
      break;
    }
    case "www.fxshu.top": {
      const { fuxiaoshu } = await import("../rules/onePage/fuxiaoshu");
      ruleClass = fuxiaoshu;
      break;
    }
    case "www.wanbengo.com": {
      const { wanben } = await import("../rules/onePage/wanben");
      ruleClass = wanben();
      break;
    }
    case "masiro.me": {
      const { masiro } = await import("../rules/onePage/original/masiro");
      ruleClass = masiro();
      break;
    }
    case "kakuyomu.jp": {
      const { kakuyomu } = await import("../rules/onePage/original/kakuyomu");
      ruleClass = kakuyomu();
      break;
    }
    case "ncode.syosetu.com":
    case "novel18.syosetu.com": {
      const { syosetu } = await import("../rules/onePage/original/syosetu");
      ruleClass = syosetu();
      break;
    }
    case "syosetu.org": {
      const { syosetuOrg } = await import("../rules/onePage/original/syosetu");
      ruleClass = syosetuOrg();
      break;
    }
    case "zhaoze.vip":
    case "houhuayuan.vip": {
      const { houhuayuan } = await import(
        "../rules/onePage/original/houhuayuan"
      );
      ruleClass = houhuayuan();
      break;
    }
    case "www.tianyabooks.com": {
      const { tianyabooks } = await import("../rules/onePage/tianyabooks");
      ruleClass = tianyabooks();
      break;
    }
    case "www.aixdzs.com": {
      const { aixdzs } = await import("../rules/onePage/aixdzs");
      ruleClass = aixdzs();
      break;
    }
    case "colorful-fantasybooks.com": {
      const { fantasybooks } = await import(
        "../rules/onePage/colorful-fantasybooks"
      );
      ruleClass = fantasybooks();
      break;
    }
    case "www.dizishu.cc": case "www.qu-la.com": {
      const { dizishu } = await import("../rules/onePage/dizishu");
      ruleClass = dizishu();
      break;
    }
    case "www.akatsuki-novels.com": {
      const { akatsuki } = await import("../rules/onePage/original/akatsuki");
      ruleClass = akatsuki();
      break;
    }
    case "www.alphapolis.co.jp": {
      const { alphapolis } = await import(
        "../rules/onePage/original/alphapolis"
      );
      ruleClass = alphapolis();
      break;
    }
    case "hongxiuzhao.net": {
      const { hongxiuzhao } = await import("../rules/onePage/hongxiuzhao");
      ruleClass = hongxiuzhao();
      break;
    }
    case "www.xbyuan.com": {
      const { xbyuan } = await import("../rules/onePage/xbyuan");
      ruleClass = xbyuan();
      break;
    }
    case "www.quanzhifashi.com": {
      const { qzxsw } = await import("../rules/onePage/qzxsw");
      ruleClass = qzxsw();
      break;
    }
    case "www.boqugew.com": {
      const { boqugew } = await import("../rules/onePage/boqugew");
      ruleClass = boqugew();
      break;
    }
    case "www.qbtr.cc": {
      const { qbtrcc } = await import("../rules/onePage/qbtrcc");
      ruleClass = qbtrcc();
      break;
    }
    case "b.guidaye.com": {
      const { guidaye } = await import("../rules/onePage/guidaye");
      ruleClass = await guidaye();
      break;
    }
    case "www.banxia.la":
    case "www.banxia.cc": {
      const { banxia } = await import("../rules/onePage/banxia");
      ruleClass = banxia();
      break;
    }
    case "www.zgzl.net": {
      const { zgzl } = await import("../rules/onePage/zgzl");
      ruleClass = zgzl();
      break;
    }
    case "www.zhenhunxiaoshuo.com": {
      const { zhenhunxiaoshuo } = await import("../rules/onePage/zhenhunxiaoshuo");
      ruleClass = zhenhunxiaoshuo();
      break;
    }
    case "www.52shuku.vip": {
      // Book https://www.52shuku.vip/*/*.html
      // Chapter https://www.52shuku.vip/*/*_\d.html
      // Book https://www.52shuku.vip/*/*_*/*.html
      // Chapter https://www.52shuku.vip/*/*_*/*_\d.html
      const pathname = document.location.pathname;
      const chapterPattern = /.*\/.*_\d+.html/;
      if (!chapterPattern.test(pathname)) {
        const { i52shuku } = await import("../rules/onePage/52shuku");
        ruleClass = i52shuku();
        break;
      }
      throw new Error("This is a chapter page, not a book page.");
    }
    case "m.bixiange.me": {
      const { bixiange } = await import("../rules/onePage/bixiange");
      ruleClass = bixiange();
      break;
    }
    case "www.rmkbr.com": {
      const { yiqushuzhai } = await import("../rules/onePage/yiqushuzhai");
      ruleClass = yiqushuzhai();
      break;
    }
    case "www.dbxsd.com": {
      const { dubuxiaoshuo } = await import("../rules/onePage/dubuxiaoshuo");
      ruleClass = dubuxiaoshuo();
      break;
    }
    case "wxscs.com":
    case "www.wxscs.com":
    case "wxsck.com":
    case "www.wxsck.com": {
      const { wanxiangshucheng } = await import("../rules/onePage/wanxiangshucheng");
      ruleClass = wanxiangshucheng();
      break;
    }
    case "www.biquge345.com": {
      const { biquge345 } = await import("../rules/onePage/biquge345");
      ruleClass = biquge345();
      break;
    }
    case "www.beqege.cc": {
      const { biqugecc } = await import("../rules/onePage/biqugecc");
      ruleClass = biqugecc();
      break;
    }
    case "m.mjyhb.com": {
      const { mjyhb } = await import("../rules/onePage/mjyhb");
      ruleClass = mjyhb();
      break;
    }
    case "m.fly-dreams.com": {
      const { flydreams } = await import("../rules/onePage/fly-dreams");
      ruleClass = flydreams();
      break;
    }
    case "www.23dishuge.com": {
      const { dishuge } = await import("../rules/onePage/dishuge");
      ruleClass = dishuge();
      break;
    }
    case "www.69hsw.com":
    case "www.69hao.com":
    case "www.69hsz.net": {
      const { c69shuba } = await import("../rules/onePage/69shuba");
      ruleClass = c69shuba();
      break;
    }
    case "m.shauthor.com": {
      const { shauthor } = await import("../rules/onePage/shauthor");
      ruleClass = shauthor();
      break;
    }
    case "m.chenkuan.com": {
      const { chenkuan } = await import("../rules/onePage/chenkuan");
      ruleClass = chenkuan();
      break;
    }
    /* onePage End */

    /* onePageWithMultiIndexPage Start */
    case "m.baihexs.com": {
      const { baihexs } = await import(
        "../rules/onePageWithMultiIndexPage/baihexs"
      );
      ruleClass = baihexs();
      break;
    }
    case "novelup.plus": {
      const { novelup } = await import(
        "../rules/onePageWithMultiIndexPage/original/novelup"
      );
      ruleClass = novelup();
      break;
    }
    case "www.piaotia.com": {
      const { ptwxz } = await import(
        "../rules/onePage/original/ptwxz"
      );
      ruleClass = ptwxz();
      break;
    }
    case "m.wanbengo.com": {
      const { wanben } = await import(
        "../rules/onePageWithMultiIndexPage/wanben"
      );
      ruleClass = wanben();
      break;
    }
    case "www.biquge.tw": {
      const { biqugetw } = await import("../rules/onePageWithMultiIndexPage/biqugetw");
      ruleClass = biqugetw();
      break;
    }
    case "m.xszj.org":
    case "xszj.org": {
      const { xszj } = await import("../rules/onePageWithMultiIndexPage/xszj");
      ruleClass = xszj();
      break;
    }
    case "www.fdhxs.com": {
      const { haitangshuwu } = await import("../rules/onePageWithMultiIndexPage/haitangshuwu");
      ruleClass = haitangshuwu();
      break;
    }
    case "pornhulu.com":
    case "xn--yhqvcx66l.xnxnxn7.xyz": // "爱丽丝.xnxnxn7.xyz"
    case "321dh.org":
    case "www.alicesw.com": {
      const { alicesw } = await import("../rules/onePageWithMultiIndexPage/alicesw");
      ruleClass = alicesw();
      break;
    }
    /* onePageWithMultiIndexPage End */

    /* twoPage */
    case "www.ruochu.com": {
      const { ruochu } = await import("../rules/twoPage/original/ruochu");
      ruleClass = ruochu();
      break;
    }
    case "www.1pwx.com": {
      const { xiaoshuodaquan } = await import("../rules/twoPage/1pwx");
      ruleClass = xiaoshuodaquan();
      break;
    }
    case "www.wenku8.net": {
      const { wenku8 } = await import("../rules/twoPage/wenku8");
      ruleClass = wenku8();
      break;
    }
    case "www.linovelib.com": {
      const { linovelib } = await import("../rules/twoPage/linovelib");
      ruleClass = linovelib();
      break;
    }
    case "www.bilinovel.com": {
      const { wlinovelib } = await import("../rules/twoPage/linovelib");
      ruleClass = wlinovelib();
      break;
    }
    case "www.yibige.cc": {
      const { yibige } = await import("../rules/twoPage/yibige");
      ruleClass = yibige();
      break;
    }
    case "www.wangshugu.org": {
      const { washuge } = await import("../rules/twoPage/washuge");
      ruleClass = washuge();
      break;
    }
    case "www.shencou.com": {
      const { shencou } = await import("../rules/twoPage/shencou");
      ruleClass = shencou();
      break;
    }
    case "jingcaiyuedu6.com": {
      const { jingcaiyuedu6 } = await import("../rules/twoPage/jingcaiyuedu6");
      ruleClass = jingcaiyuedu6();
      break;
    }
    case "www.uaa.com": {
      const { uaa } = await import("../rules/onePage/uaa");
      ruleClass = uaa();
      break;
    }
    case "www.18kanshu.com": {
      const { c18kanshu } = await import("../rules/twoPage/18kanshu");
      ruleClass = c18kanshu();
      break;
    }
    case "www.ihuaben.com": {
      const { ihuaben } = await import("../rules/special/original/ihuaben");
      ruleClass = ihuaben;
      break;
    }
    case "www.kadokado.com.tw": {
      const { kadokado } = await import("../rules/special/original/kadokado");
      ruleClass = kadokado;
      break;
    }
    case "www.po18.tw": {
      const { po18 } = await import("../rules/special/original/po18");
      ruleClass = po18;
      break;
    }
    case "b.faloo.com": {
      const { faloo } = await import("../rules/special/original/faloo");
      ruleClass = faloo;
      break;
    }
    case "novelpia.jp": {
      const { novelpia } = await import("../rules/special/original/novelpia");
      ruleClass = novelpia;
      break;
    }
    case "book.qq.com": {
      const { QQBook } = await import("../rules/special/original/qqbook");
      ruleClass = QQBook;
      break;
    }
    case "www.60ksw.com": {
      const { i60ksw } = await import("../rules/onePage/60ksw");
      ruleClass = i60ksw();
      break;
    }
    case "www.penana.com": {
      const { penana } = await import("../rules/onePage/original/penana");
      ruleClass = penana();
      break;
    }
    case "www.lzdzw.com": {
      const { lzdzw } = await import("../rules/special/reprint/lzdzw");
      ruleClass = lzdzw;
      break;
    }
    case "www.doufuyuedu.com":{
      const { doufuyuedu } = await import("../rules/special/original/doufuyuedu");
      ruleClass = doufuyuedu;
      break;
    }
    case "czbooks.net": {
      const { czbooks } = await import("../rules/onePage/czbooks");
      ruleClass = czbooks();
      break;
    }
    case "www.xiaoshuowu.com": {
      const { xiaoshuowu } = await import("../rules/twoPage/xiaoshuowu");
      ruleClass = xiaoshuowu();
      break;
    }
    case "www.69shuba.com": 
    case "69shuba.cx": {
      const { c69shu } = await import("../rules/onePageWithMultiIndexPage/69shu");
      ruleClass = c69shu();
      break;
    }
    case "book.xbookcn.net": {
      const { xbookcn } = await import("../rules/onePageWithMultiIndexPage/xbookcn");
      ruleClass = xbookcn();
      break;
    }
    case "www.69yuedu.net": {
      const { c69yuedu } = await import("../rules/onePageWithMultiIndexPage/69yuedu");
      ruleClass = c69yuedu();
      break;
    }
    case "www.haiwaishubao.com": {
      const { haiwaishubao } = await import("../rules/onePageWithMultiIndexPage/haiwaishubao");
      ruleClass = haiwaishubao();
      break;
    }
    /* twoPage End */

    /** mbtxt **/
    case "www.quanshuzhai.com": {
      const { quanshuzhai } = await import("../rules/mbtxt/quanshuzhai");
      ruleClass = quanshuzhai();
      break;
    }
    case "www.mbtxt.la": {
      const { mbtxt } = await import("../rules/mbtxt/mbtxt");
      ruleClass = mbtxt();
      break;
    }
    /** mbtxt End **/

    /** 笔趣阁 **/
    case "www.bqu9.cc": case "www.bq06.cc": {
      const { bqu9 } = await import("../rules/biquge/onePage");
      ruleClass = bqu9();
      break;
    }
    case "www.666biquge.com":
    case "www.xiunews.com":
    case "www.23xsww.cc":
    case "www.biququ.com":
    case "www.ddyveshu.cc":
    case "www.81book.com":
    case "www.81zw.com":
    case "www.fuguoduxs.com":
    case "www.shubaowa.org":
    case "www.aixiaxs.net":
    case "www.banzhuer.org":
    case "www.007zw.com": {
      const { common } = await import("../rules/biquge/onePage");
      ruleClass = common();
      break;
    }
    case "www.mht99.com": {
      const { mht } = await import("../rules/biquge/mht");
      ruleClass = mht();
      break;
    }
    case "www.xsbiquge.la":
    case "www.xbiquge.tw": {
      const { xbiquge } = await import("../rules/biquge/onePage");
      ruleClass = xbiquge();
      break;
    }
    case "www.luoqiuzw.com": {
      const { luoqiuzw } = await import("../rules/biquge/onePage");
      ruleClass = luoqiuzw();
      break;
    }
    case "dijiuben.com": {
      const { dijiubook } = await import("../rules/biquge/onePage");
      ruleClass = dijiubook();
      break;
    }
    case "www.biquzw.la": {
      const { biquwx } = await import("../rules/biquge/onePage");
      ruleClass = biquwx();
      break;
    }
    case "www.i25zw.com": {
      const { c25zw } = await import("../rules/biquge/onePage");
      ruleClass = c25zw();
      break;
    }
    case "www.tycqzw.com": {
      const { tycqxs } = await import("../rules/biquge/onePage");
      ruleClass = tycqxs();
      break;
    }
    case "www.ranwen.la": {
      const { ranwen } = await import("../rules/biquge/onePage");
      ruleClass = ranwen();
      break;
    }
    case "www.lvsewx.com": {
      const { lusetxt } = await import("../rules/biquge/onePage");
      ruleClass = lusetxt();
      break;
    }
    case "www.biquge5200.cc": {
      const { b5200 } = await import("../rules/biquge/onePage");
      ruleClass = b5200();
      break;
    }
    case "www.yqxsge.cc": {
      const { yqxs } = await import("../rules/biquge/onePage");
      ruleClass = yqxs();
      break;
    }
    case "www.bixia3.com": {
      const { bxwx333 } = await import("../rules/biquge/onePage");
      ruleClass = bxwx333();
      break;
    }
    case "www.ibiquge.la": {
      const { xbiqugeLa } = await import("../rules/biquge/onePage");
      ruleClass = xbiqugeLa();
      break;
    }
    case "www.yiruan.la": {
      const { yruan } = await import("../rules/biquge/onePage");
      ruleClass = yruan();
      break;
    }
    case "www.ishuquge.org": {
      const { shuquge } = await import("../rules/biquge/onePage");
      ruleClass = shuquge();
      break;
    }
    case "www.gashuw.com": {
      const { gebiqu } = await import("../rules/biquge/onePage");
      ruleClass = gebiqu();
      break;
    }
    case "www.lewenn.net": {
      const { lewenn } = await import("../rules/biquge/onePage");
      ruleClass = lewenn();
      break;
    }
    case "www.xyb3.net": {
      const { xyb3 } = await import("../rules/biquge/onePage");
      ruleClass = xyb3();
      break;
    }

    case "www.wanben.info": {
      const { xinwanben } = await import("../rules/biquge/nextPage");
      ruleClass = xinwanben();
      break;
    }
    case "www.ywggzy.com": {
      const { ywggzy } = await import("../rules/biquge/nextPage");
      ruleClass = ywggzy();
      break;
    }
    case "www.mijiashe.com": {
      const { mijiashe } = await import("../rules/biquge/nextPage");
      ruleClass = mijiashe();
      break;
    }

    case "m.kuangguwenhua.com": {
      const { znlzd } = await import("../rules/biquge/multiIndexNextPage");
      ruleClass = znlzd();
      break;
    }
    case "www.266ks.com": {
      const { c226ks } = await import("../rules/biquge/multiIndexNextPage");
      ruleClass = c226ks();
      break;
    }
    case "www.42zw.la": {
      const { la42zw } = await import("../rules/biquge/onePage");
      ruleClass = la42zw();
      break;
    }
    case "www.bilibili.com": {
      const { Bilibili } = await import("../rules/special/reprint/bilibili");
      ruleClass = Bilibili;
      break;
    }
    case "www.esjzone.cc":
    case "www.esjzone.one":
    case "esjzone.one": {
      const { esjzone } = await import("../rules/special/original/esjzone");
      ruleClass = esjzone;
      break;
    }
    case "fanqienovel.com": {
      const { fanqie } = await import("../rules/special/original/fanqie");
      ruleClass = fanqie;
      break;
    }
    /** 笔趣阁END **/
    /** WeiMeng CMS */
    case "www.mangguoshufang.com":
    case "mangguoshufang.com": {
      const { Mangguoshufang } = await import("../rules/special/reprint/mangguoshufang");
      ruleClass = Mangguoshufang;
      break;
    }
    case "www.pilibook.net":
    case "www.mozishuwu.com": {
      const { Pilishuwu } = await import("../rules/special/reprint/pilishuwu");
      ruleClass = Pilishuwu;
      break;
    }
    /** WeiMeng CMS END */
    case "www.xiguashuwu.com": {
      const { Xiguashuwu } = await import("../rules/special/reprint/xiguashuwu");
      ruleClass = Xiguashuwu;
      break;
    }

    default: {
      throw new Error("Not Found Rule!");
    }
  }
  return new ruleClass();

  function regExpMatch(regexp: RegExp) {
    if (regexp.test(host)) {
      return host;
    }
  }
}
