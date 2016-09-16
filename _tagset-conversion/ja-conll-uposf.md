---
layout: base
title: 'Tagset ja::conll conversion to universal POS tags and features'
---

<a href="index.html">all tables</a>

## Tagset ja::conll

**Disclaimer:**
This conversion table was generated automatically via Interset.
It uses only tags (+ features) as input, therefore it is only an approximation.
Some tags can only be mapped if we also know the lemma or the syntactic context; such information has not been available here.
The table requires manual postprocessing in order to provide accurate and complete information.

Tagset <tt>ja::conll</tt>, total 90 tags.

<table>
  <tr style="background:lightgray"><td>. . _</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Peri</td><td><em>.</em></td></tr>
  <tr><td>ADJ ADJ _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>onaji, iroNna, taishita, iroirona, korekorekouiu</em></td></tr>
  <tr style="background:lightgray"><td>ADJ ADJ_n _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>daijoubu, kekkou, beNri, hajimete, muri</em></td></tr>
  <tr><td>ADJ ADJdem _</td><td>=&gt;</td><td>DET</td><td>PronType=Dem</td><td><em>sono, kono, koNna, soNna, aru</em></td></tr>
  <tr style="background:lightgray"><td>ADJ ADJicnd _</td><td>=&gt;</td><td>ADJ</td><td>Mood=Cnd</td><td><em>yoroshikereba, nakereba, yokereba, chikakereba, takakunakereba</em></td></tr>
  <tr><td>ADJ ADJifin _</td><td>=&gt;</td><td>ADJ</td><td>VerbForm=Fin</td><td><em>yoroshii, ii, nai, chikai, osoi</em></td></tr>
  <tr style="background:lightgray"><td>ADJ ADJifin ta</td><td>=&gt;</td><td>ADJ</td><td>Tense=Past|VerbForm=Fin</td><td><em>yokatta, yoroshikatta, tookatta, nakatta</em></td></tr>
  <tr><td>ADJ ADJiku _</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>yoroshiku, arigatou, ohayou, hayaku, yoku</em></td></tr>
  <tr style="background:lightgray"><td>ADJ ADJite _</td><td>=&gt;</td><td>ADV</td><td>VerbForm=Trans</td><td><em>nakute, chikakute, yasukute, takakute, yokute</em></td></tr>
  <tr><td>ADJ ADJsf _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>na</em></td></tr>
  <tr style="background:lightgray"><td>ADJ ADJteki _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>jikaNteki, gutaiteki, kojiNteki, nedaNteki, nitteiteki</em></td></tr>
  <tr><td>ADJ ADJwh _</td><td>=&gt;</td><td>DET</td><td>PronType=Int</td><td><em>dono, doNna, douitta, douiu</em></td></tr>
  <tr style="background:lightgray"><td>ADV ADV _</td><td>=&gt;</td><td>ADV</td><td>_</td><td><em>chotto, mou, mata, dekireba, daitai</em></td></tr>
  <tr><td>ADV ADVdem _</td><td>=&gt;</td><td>ADV</td><td>PronType=Dem</td><td><em>sou, kou, so</em></td></tr>
  <tr style="background:lightgray"><td>ADV ADVdgr _</td><td>=&gt;</td><td>ADV</td><td>AdvType=Deg</td><td><em>ichibaN, sukoshi, chotto, amari, soNnani</em></td></tr>
  <tr><td>ADV ADVtmp _</td><td>=&gt;</td><td>ADV</td><td>AdvType=Tim</td><td><em>mazu, sassoku, sakihodo, sakki, toriaezu</em></td></tr>
  <tr style="background:lightgray"><td>ADV ADVwh _</td><td>=&gt;</td><td>ADV</td><td>PronType=Int</td><td><em>dou, ikaga, doushite</em></td></tr>
  <tr><td>CD CD _</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td><td><em>hyaku, nihyaku, ni, yoNhyaku, saN</em></td></tr>
  <tr style="background:lightgray"><td>CD CDU _</td><td>=&gt;</td><td>NUM</td><td>NumType=Card</td><td><em>mittsu, hitotsu, ichinichi, futatsu, ichido</em></td></tr>
  <tr><td>CD CDdate _</td><td>=&gt;</td><td>ADV</td><td>AdvType=Tim</td><td><em>juugatsu, juuninichi, nigatsu, tooka, mikka</em></td></tr>
  <tr style="background:lightgray"><td>CD CDtime _</td><td>=&gt;</td><td>ADV</td><td>AdvType=Tim</td><td><em>gojuppuN, juuichiji, juuji, saNjuugofuN, juugofuN</em></td></tr>
  <tr><td>CNJ CNJ _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em>dewa, de, soredewa, ato, soshitara</em></td></tr>
  <tr style="background:lightgray"><td>GR GR _</td><td>=&gt;</td><td>INTJ</td><td>_</td><td><em>koNnichiwa, otsukaresama, sayounara, sayonara, hajimemashite</em></td></tr>
  <tr><td>ITJ ITJ _</td><td>=&gt;</td><td>INTJ</td><td>_</td><td><em>hai, ee, to, e, a</em></td></tr>
  <tr style="background:lightgray"><td>N NF _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>hou, no, koto, nano, naN</em></td></tr>
  <tr><td>N NN _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>hoteru, biN, hikouki, shiNguru, kaeri</em></td></tr>
  <tr style="background:lightgray"><td>N Ndem _</td><td>=&gt;</td><td>PRON</td><td>PronType=Dem</td><td><em>sore, kochira, sochira, kore, soko</em></td></tr>
  <tr><td>N Nsf _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>hatsu, chaku, gurai, keiyu, hodo</em></td></tr>
  <tr style="background:lightgray"><td>N Ntmp _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td><em>ima, hi, asa, yuugata, koNdo</em></td></tr>
  <tr><td>N Nwh _</td><td>=&gt;</td><td>PRON</td><td>PronType=Int</td><td><em>dochira, itsu, naNji, dore, docchi</em></td></tr>
  <tr style="background:lightgray"><td>N PRON _</td><td>=&gt;</td><td>PRON</td><td>PronType=Prs</td><td><em>watashi, watakushi, boku, atashi, atakushi</em></td></tr>
  <tr><td>N VN _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>onegai, shuppatsu, yoyaku, kaNkou, shucchou</em></td></tr>
  <tr style="background:lightgray"><td>NAME NAME _</td><td>=&gt;</td><td>PROPN</td><td>_</td><td><em>doNjobaNni, kurisumasu, zeNnikkuubiN, omamori, nihoNkoukuubiN</em></td></tr>
  <tr><td>NAME NAMEloc _</td><td>=&gt;</td><td>PROPN</td><td>NameType=Geo</td><td><em>hanoofaa, doitsu, kaNkuu, furaNkufuruto, roNdoN</em></td></tr>
  <tr style="background:lightgray"><td>NAME NAMEorg _</td><td>=&gt;</td><td>PROPN</td><td>NameType=Com</td><td><em>rufutohaNza, jaru, rufutohaNzakoukuu, nihoNkoukuu, zeNnikkuu</em></td></tr>
  <tr><td>NAME NAMEper _</td><td>=&gt;</td><td>PROPN</td><td>NameType=Prs</td><td><em>matsumoto, miyake, kitahara, yoshikawa, tsutsui</em></td></tr>
  <tr style="background:lightgray"><td>NT NT _</td><td>=&gt;</td><td>NOUN</td><td>AdvType=Tim</td><td><em>kayoubi, getsuyoubi, suiyoubi, gogo, kiNyoubi</em></td></tr>
  <tr><td>P P _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>ni, de, kara, made, to</em></td></tr>
  <tr style="background:lightgray"><td>P PADJ _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>youna, you, mitai, rashii, sou</em></td></tr>
  <tr><td>P PADJ kute</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>rashikute</em></td></tr>
  <tr style="background:lightgray"><td>P PADV _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>youni, fuuni, shidai, nagara, hodo</em></td></tr>
  <tr><td>P PNsf _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>saN, sama</em></td></tr>
  <tr style="background:lightgray"><td>P PQ _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>to, te, naNte, toka, ka</em></td></tr>
  <tr><td>P Pacc _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post|Case=Acc</td><td><em>o</em></td></tr>
  <tr style="background:lightgray"><td>P Pcnj _</td><td>=&gt;</td><td>CONJ</td><td>_</td><td><em>to, toka, ka, ya, nari</em></td></tr>
  <tr><td>P Pfoc _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post</td><td><em>wa, mo, demo, koso, nara</em></td></tr>
  <tr style="background:lightgray"><td>P Pgen _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post|Case=Gen</td><td><em>no</em></td></tr>
  <tr><td>P Pnom _</td><td>=&gt;</td><td>ADP</td><td>AdpType=Post|Case=Nom</td><td><em>ga</em></td></tr>
  <tr style="background:lightgray"><td>PS PSE _</td><td>=&gt;</td><td>PART</td><td>_</td><td><em>ka, ne, yo, na, kana</em></td></tr>
  <tr><td>PS PSSa _</td><td>=&gt;</td><td>PART</td><td>_</td><td><em>node, to, shi, kara, nanode</em></td></tr>
  <tr style="background:lightgray"><td>PS PSSb _</td><td>=&gt;</td><td>PART</td><td>_</td><td><em>ga, keredomo, kedo, kedomo, keredo</em></td></tr>
  <tr><td>PS PSSq _</td><td>=&gt;</td><td>PART</td><td>_</td><td><em>ka</em></td></tr>
  <tr style="background:lightgray"><td>PUNC , _</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Comm</td><td><em>,</em></td></tr>
  <tr><td>PUNC ? _</td><td>=&gt;</td><td>PUNCT</td><td>PunctType=Qest</td><td><em>?</em></td></tr>
  <tr style="background:lightgray"><td>PV PVcnd _</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|VerbForm=Fin|VerbType=Cop</td><td><em>deshitara, dattara, deshitaraba</em></td></tr>
  <tr><td>PV PVfin ta</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Tense=Past|VerbForm=Fin|VerbType=Cop</td><td><em>da, deshita, datta</em></td></tr>
  <tr style="background:lightgray"><td>PV PVfin u</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Tense=Fut,Pres|VerbForm=Fin|VerbType=Cop</td><td><em>desu, deshou, darou</em></td></tr>
  <tr><td>PV PVte _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Trans|VerbType=Cop</td><td><em>de, deshite</em></td></tr>
  <tr style="background:lightgray"><td>PreN PreN _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>yaku, dai, yoku, maru, Frau</em></td></tr>
  <tr><td>UNIT UNIT _</td><td>=&gt;</td><td>NOUN</td><td>_</td><td><em>maruku, biN, meetoru, kiro, shitsu</em></td></tr>
  <tr style="background:lightgray"><td>V V _</td><td>=&gt;</td><td>VERB</td><td>_</td><td><em>ittari, nitari, tomarezu, shirabetari, tanoshimetari</em></td></tr>
  <tr><td>V Vbas _</td><td>=&gt;</td><td>VERB</td><td>_</td><td><em>mi, tore, nomi, kimari, kiki</em></td></tr>
  <tr style="background:lightgray"><td>V Vcnd _</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd</td><td><em>shimashitara, shitara, areba, arimashitara, dekimashitara</em></td></tr>
  <tr><td>V Vfin eN</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Negative=Neg|Polite=Pol|Tense=Fut|VerbForm=Fin</td><td><em>sumimaseN, arimaseN, kamaimaseN, suimaseN, shiremaseN</em></td></tr>
  <tr style="background:lightgray"><td>V Vfin ta</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Tense=Past|VerbForm=Fin</td><td><em>wakarimashita, gozaimashita, itta, kashikomarimashita, hanareta</em></td></tr>
  <tr><td>V Vfin u</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Tense=Fut,Pres|VerbForm=Fin</td><td><em>iu, aru, arimasu, narimasu, omoimasu</em></td></tr>
  <tr style="background:lightgray"><td>V Vimp _</td><td>=&gt;</td><td>VERB</td><td>Mood=Imp|VerbForm=Fin</td><td><em>gomeNnasai, kudasai, ie, nome, shiro</em></td></tr>
  <tr><td>V Vte _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Trans</td><td><em>aite, shite, tsuite, natte, arimashite</em></td></tr>
  <tr style="background:lightgray"><td>VADJ VADJ_n _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>ikesou, arisou, toresou, owarisou, awanasasou</em></td></tr>
  <tr><td>VADJ VADJi _</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>shitai, mitai, ikitai, kimetai, itadakitai</em></td></tr>
  <tr style="background:lightgray"><td>VADJ VADJi kute</td><td>=&gt;</td><td>ADJ</td><td>_</td><td><em>kimenakute, ikanakute, noranakute, wakaranakute, okanakute</em></td></tr>
  <tr><td>VADJ VADJi ta</td><td>=&gt;</td><td>ADJ</td><td>Tense=Past</td><td><em>inakatta, ikitakatta, kiitenakatta, dekinakatta</em></td></tr>
  <tr style="background:lightgray"><td>VADJ VADJicnd _</td><td>=&gt;</td><td>ADJ</td><td>Mood=Cnd</td><td><em>shinakereba, konakereba, ikanakereba, sashitsukaenakereba, iwanakereba</em></td></tr>
  <tr><td>VAUX VAUX _</td><td>=&gt;</td><td>AUX</td><td>_</td><td><em>mitari, shimattari</em></td></tr>
  <tr style="background:lightgray"><td>VAUX VAUXbas _</td><td>=&gt;</td><td>AUX</td><td>_</td><td><em>itadaki</em></td></tr>
  <tr><td>VAUX VAUXcnd _</td><td>=&gt;</td><td>AUX</td><td>Mood=Cnd</td><td><em>itadakereba, okanakereba, itadaitara, itadakimashitara, mitara</em></td></tr>
  <tr style="background:lightgray"><td>VAUX VAUXfin eN</td><td>=&gt;</td><td>AUX</td><td>Mood=Ind|Negative=Neg|Polite=Pol|Tense=Fut|VerbForm=Fin</td><td><em>imaseN, orimaseN, mimaseN, itadakemaseN, shimaimaseN</em></td></tr>
  <tr><td>VAUX VAUXfin ta</td><td>=&gt;</td><td>AUX</td><td>Mood=Ind|Tense=Past|VerbForm=Fin</td><td><em>ita, mita, imashita, kita, oita</em></td></tr>
  <tr style="background:lightgray"><td>VAUX VAUXfin u</td><td>=&gt;</td><td>AUX</td><td>Mood=Ind|Tense=Fut,Pres|VerbForm=Fin</td><td><em>iru, okimasu, imasu, orimasu, itadakimasu</em></td></tr>
  <tr><td>VAUX VAUXimp _</td><td>=&gt;</td><td>AUX</td><td>Mood=Imp|VerbForm=Fin</td><td><em>kudasai, kure</em></td></tr>
  <tr style="background:lightgray"><td>VAUX VAUXte _</td><td>=&gt;</td><td>AUX</td><td>VerbForm=Trans</td><td><em>imashite, orimashite, itadaite, oite, shimatte</em></td></tr>
  <tr><td>VS VS _</td><td>=&gt;</td><td>VERB</td><td>VerbType=Light</td><td><em>shitari</em></td></tr>
  <tr style="background:lightgray"><td>VS VSbas _</td><td>=&gt;</td><td>VERB</td><td>VerbType=Light</td><td><em>shi</em></td></tr>
  <tr><td>VS VScnd _</td><td>=&gt;</td><td>VERB</td><td>Mood=Cnd|VerbType=Light</td><td><em>dekireba, sureba, dekitara, dekimashitara, shitara</em></td></tr>
  <tr style="background:lightgray"><td>VS VSfin eN</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Negative=Neg|Polite=Pol|Tense=Fut|VerbForm=Fin|VerbType=Light</td><td><em>shimaseN</em></td></tr>
  <tr><td>VS VSfin ta</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Tense=Past|VerbForm=Fin|VerbType=Light</td><td><em>shita, shimashita, itashimashita, sareta, dekita</em></td></tr>
  <tr style="background:lightgray"><td>VS VSfin u</td><td>=&gt;</td><td>VERB</td><td>Mood=Ind|Tense=Fut,Pres|VerbForm=Fin|VerbType=Light</td><td><em>shimasu, itashimasu, suru, dekimasu, shimashou</em></td></tr>
  <tr><td>VS VSimp _</td><td>=&gt;</td><td>VERB</td><td>Mood=Imp|VerbForm=Fin|VerbType=Light</td><td><em>kudasai</em></td></tr>
  <tr style="background:lightgray"><td>VS VSte _</td><td>=&gt;</td><td>VERB</td><td>VerbForm=Trans|VerbType=Light</td><td><em>shite, sasete, shimashite, sashite, sarete</em></td></tr>
  <tr><td>xxx xxx _</td><td>=&gt;</td><td>X</td><td>_</td><td><em>nani, tama, nano, te</em></td></tr>
</table>
