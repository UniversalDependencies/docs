---
layout: base
title:  'UD_Scottish_Gaelic-ARCOSG'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Scottish Gaelic ARCOSG

Language: [Scottish Gaelic](/gd/index.html) (code: `gd`)<br/>
Family: Indo-European, Celtic

This treebank has been part of Universal Dependencies since the UD v2.5 release.

The following people have contributed to making this treebank part of UD: Colin Batchelor.

Repository: [UD_Scottish_Gaelic-ARCOSG](https://github.com/UniversalDependencies/UD_Scottish_Gaelic-ARCOSG)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgd_arcosg28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-SA 4.0

Genre: nonfiction, fiction, news, spoken

Questions, comments?
General annotation questions (either Scottish Gaelic-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Scottish_Gaelic-ARCOSG/issues).
If you want to collaborate, please contact [colin&nbsp;•&nbsp;r&nbsp;•&nbsp;batchelor&nbsp;(æt)&nbsp;googlemail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

A treebank of Scottish Gaelic based on the
[Annotated Reference Corpus Of Scottish Gaelic (ARCOSG)](https://github.com/Gaelic-Algorithmic-Research-Group/ARCOSG).



The Scottish Gaelic treebank takes data from ARCOSG, the Annotated Reference Corpus of Scottish Gaelic (Lamb _et al._ 2016) with the annotation scheme based on that in the Irish UD treebank.
Full bibliographic details are to be had there.

It contains eight subcorpora of a varying number of original files, each of approximately 1000 tokens.
Not all of the trees have made it into release 2.8.
The test and dev files are complete and the training set will be filled out, hopefully before 2.9.
All files listed below are in the training set unless they are explicitly marked as being in test or dev.
In the ARCOSG documentation the names of contributors are largely given in Gaelic, which I have kept and glossed with their names in English where they will be familiar to non-Gaelic speakers.

- Conversation. c01 is in test, c03 in dev and the rest in train. These are transcripts of interviews in the Western Isles from 1998 to 2000. In c03 and c04 speakers 2, 4 and 5 are children.
- Sport. s06 is in test, s08 in dev and the rest in train. s01 to s05 are _Radio nan Gàidheal_ commentary on a match between Scotland and Australia; s06 to s10 on Scotland _vs._ Yugoslavia.
- Oral narrative.
- n01: _Na Trì Leinntean Canaich_ (test)
- n02: _Conall Gulban_ (dev)
- n03: _Na Fiantaichean_
- n04: _Gille an Fheadain Duibh_
- n05: _Bodach Ròcabarraigh_
- n06: _Iain Beag MacAnndra_
- n07: _Fear a' Churracain Ghlais_
- n08: _Boban Saor_
- n09: _Bean 'ic Odrum_
- n10: _Blàr Chàirinis_
- News scripts from _Radio nan Gàidheal_ in the early 1990s.
- ns01: Màiri Anna NicUalraig (Mary Ann Kennedy)
- ns02: Dòmhnall Moireasdan
- ns03: Iseabail NicIllinnein
- ns04: Innes Rothach
- ns05: Innes Rothach (test)
- ns06: Pàdraig MacAmhlaigh (dev)
- ns07: Dòmhnall Moireasdan (test)
- ns08: Màiri Anna NicUalraig (dev)
- ns09: Seumas Domhnallach
- ns10: Seumas Domhnallach
- Public interview
- p01: _Peataichean_, conversation on Coinneach MacÌomhair's programme
- p02: Fred MacAulay and Martin MacDonald
- p03: John MacInnes and William Matheson
- p04: Geamaichean Sholais 1, conversation on Coinneach MacÌomhair's programme (test)
- p05: Geamaichean Sholais 2 (dev)
- p06: Bonn Comhraidh, 1980s political discussion programme
- p07: Conversation on Coinneach MacÌomhair's programme 2000-01-17 part 1
- p08: Conversation on Coinneach MacÌomhair's programme 2000-01-17 part 2
- Fiction
- f01: _Am Fainne_ by Eilidh Watt
- f02: from _Cùmhnantan_ by Tormod MacGill-Eain
- f03: _Droch Àm_ by Pòl MacAonghais (test)
- f04: _Spàl Tìm_ by Cailean T. MacCoinneach
- f05: _Teine a Loisgeas_ by Eilidh Watt
- f06: _Beul na h-Oidhche_ by Somhairle MacGill-Eain (Sorley Maclean)
- f07: from _An t-Aonaran_ by Iain Mac a' Ghobhainn (Iain Crichton Smith)
- f08: _Briseadh na Cloiche_ by Iain Moireach (dev)
- Formal prose:
- fp01: _Trì Ginealaichean_ by D. E. Dòmhnallach
- fp02: _Nua-Bhàrdachd Ghàidhlig_ by Dòmhnall MacAmhlaigh (Donald MacAulay)
- fp03: _Mairead N. Lachlainn_ by Somhairle MacGill-Eain (test)
- fp04: from _Bith-eòlas_ ('Biology') by Ruairidh MacThòmais (Derick Thomson)
- fp05: _Aramach am Bearnaraidh_
- fp06: _Blàr a' Chumhaing_ by Iain A. MacDonald
- fp07: _Na Marbhrannan_ by Coinneach D. MacDhòmhnaill
- fp08: _Cainnt is Cànan_ by J. MacInnes
- fp09: from Dòmhnall Uilleam Stiùbhart (Donald William Stewart)'s unpublished PhD thesis (dev)
- Popular writing: columns from _The Scotsman_:
- pw01: _An Cuir am Papa..._ by Aileig O Hianlaidh (Alex O'Henley)
- pw02: _A bith mar Chorra..._ by Joina NicDhomnaill (test)
- pw03: _Pàdraig Sellar_ by Ùisdean MacIllinnein
- pw04: _A' Cur Às Dhuinn Fhìn_ by Aonghas Mac-a-Phì
- pw05: _Aon Dùthaich_ by Murchadh MacLeòid
- pw06: _Blas a' Ghuga_ by Coinneach MacLeòid (dev)
- pw07: _Luchd-ciùil_ by Criosaidh Dick
- pw08: _Na Gàidheil Ùra_ by Criosaidh Dick
- pw09: _A' Siubhail gu Rèidh_ by Tormod Domhnallach (dev)
- pw10: _Poileaticeans_ by Niall M. Brownlie
- pw11: _Oifigeir Gàidhlig_ by Aileig O Hianlaidh (test)

See https://universaldependencies.org/gd/index.html for detailed linguistic documentation.

## Acknowledgments

We wish to thank all of the contributors to ARCOSG and fellow Celtic language UD developers Teresa Lynn, Kevin Scannell, Johannes Heinecke and Fran Tyers.

## References

* Colin Batchelor, 2019. Universal dependencies for Scottish Gaelic: syntax, in Proceedings of CLTW2019 at Machine Translation Summit XVII, Dublin, August
* Lamb, William, Sharon Arbuthnot, Susanna Naismith, and Samuel Danso. 2016. Annotated Reference Corpus of Scottish Gaelic (ARCOSG), 1997–2016 [dataset]. Technical report, University of Edinburgh; School of Literatures, Languages and Cultures; Celtic and Scottish Studies. https://doi.org/10.7488/ds/1411.
* Lynn, Teresa and Jennifer Foster, [Universal Dependencies for Irish] (http://www.nclt.dcu.ie/~tlynn/Lynn_CLTW2016.pdf), CLTW 2016, Paris, France, July 2016



# Statistics of UD Scottish Gaelic ARCOSG

## POS Tags

[ADJ](gd_arcosg-pos-ADJ.html) – [ADP](gd_arcosg-pos-ADP.html) – [ADV](gd_arcosg-pos-ADV.html) – [AUX](gd_arcosg-pos-AUX.html) – [CCONJ](gd_arcosg-pos-CCONJ.html) – [DET](gd_arcosg-pos-DET.html) – [INTJ](gd_arcosg-pos-INTJ.html) – [NOUN](gd_arcosg-pos-NOUN.html) – [NUM](gd_arcosg-pos-NUM.html) – [PART](gd_arcosg-pos-PART.html) – [PRON](gd_arcosg-pos-PRON.html) – [PROPN](gd_arcosg-pos-PROPN.html) – [PUNCT](gd_arcosg-pos-PUNCT.html) – [SCONJ](gd_arcosg-pos-SCONJ.html) – [SYM](gd_arcosg-pos-SYM.html) – [VERB](gd_arcosg-pos-VERB.html) – [X](gd_arcosg-pos-X.html)

## Features

[Case](gd_arcosg-feat-Case.html) – [Degree](gd_arcosg-feat-Degree.html) – [Foreign](gd_arcosg-feat-Foreign.html) – [Form](gd_arcosg-feat-Form.html) – [Gender](gd_arcosg-feat-Gender.html) – [Mood](gd_arcosg-feat-Mood.html) – [Number](gd_arcosg-feat-Number.html) – [PartType](gd_arcosg-feat-PartType.html) – [Person](gd_arcosg-feat-Person.html) – [Polarity](gd_arcosg-feat-Polarity.html) – [Poss](gd_arcosg-feat-Poss.html) – [PronType](gd_arcosg-feat-PronType.html) – [Reflex](gd_arcosg-feat-Reflex.html) – [Tense](gd_arcosg-feat-Tense.html) – [VerbForm](gd_arcosg-feat-VerbForm.html)

## Relations

[acl:relcl](gd_arcosg-dep-acl-relcl.html) – [advcl](gd_arcosg-dep-advcl.html) – [advmod](gd_arcosg-dep-advmod.html) – [amod](gd_arcosg-dep-amod.html) – [appos](gd_arcosg-dep-appos.html) – [case](gd_arcosg-dep-case.html) – [case:voc](gd_arcosg-dep-case-voc.html) – [cc](gd_arcosg-dep-cc.html) – [ccomp](gd_arcosg-dep-ccomp.html) – [compound](gd_arcosg-dep-compound.html) – [conj](gd_arcosg-dep-conj.html) – [cop](gd_arcosg-dep-cop.html) – [csubj:cleft](gd_arcosg-dep-csubj-cleft.html) – [csubj:cop](gd_arcosg-dep-csubj-cop.html) – [dep](gd_arcosg-dep-dep.html) – [det](gd_arcosg-dep-det.html) – [discourse](gd_arcosg-dep-discourse.html) – [dislocated](gd_arcosg-dep-dislocated.html) – [fixed](gd_arcosg-dep-fixed.html) – [flat](gd_arcosg-dep-flat.html) – [flat:foreign](gd_arcosg-dep-flat-foreign.html) – [flat:name](gd_arcosg-dep-flat-name.html) – [mark](gd_arcosg-dep-mark.html) – [mark:prt](gd_arcosg-dep-mark-prt.html) – [nmod](gd_arcosg-dep-nmod.html) – [nmod:poss](gd_arcosg-dep-nmod-poss.html) – [nsubj](gd_arcosg-dep-nsubj.html) – [nummod](gd_arcosg-dep-nummod.html) – [obj](gd_arcosg-dep-obj.html) – [obl](gd_arcosg-dep-obl.html) – [obl:smod](gd_arcosg-dep-obl-smod.html) – [obl:tmod](gd_arcosg-dep-obl-tmod.html) – [parataxis](gd_arcosg-dep-parataxis.html) – [punct](gd_arcosg-dep-punct.html) – [reparandum](gd_arcosg-dep-reparandum.html) – [root](gd_arcosg-dep-root.html) – [vocative](gd_arcosg-dep-vocative.html) – [xcomp](gd_arcosg-dep-xcomp.html) – [xcomp:pred](gd_arcosg-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3798 sentences, 69274 tokens and 72422 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4279 tokens (6%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1099 types of words that contain both letters and punctuation. Examples: a', 's, a’, [Name], a-mach, b', 'n, ars’, bh', a-steach, [Placename], a-staigh, th', a's, co-dhiubh, h-uile, an-diugh, ma-thà, ’s, ars', a-rithist, 'dol, dh’fhalbh, a-null, d’, a-nis, h-Alba, ‘s, 'm, a-nuas, ge-tà, a-sin, a-muigh, a-nise, dh’Alba, 'g, 'ic, a-rèir, h-eileanan, a-nall, an-dràsda, taobh-sa, h-Astràilianaich, d', dh’fhàg, b’, co-dhiù, m', ‘n, a-measg</li>
</ul>

<ul>
<li>This corpus contains 3120 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 213 types of multi-word tokens. Examples: ann, aca, air, aige, ga, dhan, agad, 'se, dha, ris, 'na, leatha, 'ga, againn, orra, dhaibh, na, san, sa, dhiubh, dhen, 'sa, a'm, agam, se, aice, leis, riutha, dhut, bhon, 'san, dhuinn, roimhe, dhomh, mun, oirre, den, don, fodha, ort, dheth, às, agaibh, gan, orm, 'sann, dhi, leotha, nan, rium.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 45 word types tagged as particles (PART): ', 'g, 'ga, 'ic, 'm, 'n, 's, Mc, Mhic, Nic, O, a, a', ach, ag, air, am, an, a’, b', bu, cha, chan, d', do, d’, g', ga, gu, gum, gun, gur, mac, na, nach, nam, nan, nas, r', ri, Ó, ‘, ‘n, ’, ’g</li>
</ul>

<ul>
<li>This corpus contains 71 lemmas tagged as pronouns (PRON): 'd, a, a-chèile, a-seo, a-sin, a-siud, aige, an, ann, aon, ar, b'e, bith, brith, bè, car, carson, ceithir, chéile, cia, ciamar, co, cà, càil, càit, càite, cèile, céile, cò, có, dhà, do, dà, dè, dé, e, fein, fèin, féin, gar, ge, gu, i, iad, mar, mheud, mi, mis', mo, sean, seo, seothach, shean, shin, sib', sibh, sin, sineach, sinn, siod, siodach, siud, siudach, son, thu, thus', trì, ur, àsan, è, ì</li>
</ul>

<ul>
<li>This corpus contains 20 lemmas tagged as determiners (DET): 'sa, a, a', an, ar, do, eile, gach, mo, sa, san, seo, sin, sineach, siud, siudach, the, ud, uile, ur</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: a, an, ar, do, mo, seo, sin, sineach, siud, siudach, ur</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): is</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 2 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NOUN: bhith, chur, dhèanamh, thoirt, dhol, cur, feuchainn, ràdh, thogail, toirt</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dol, ràdh, tighinn, faighinn, feuchainn, dèanamh, iarraidh, cur, ruith, coimhead</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: eile, mhòr, ùr, shaor, àrd, bheag, mhath, Buidhe, beaga, ghoirid</li>
      <li>DET: na, an, a’, a, a', 'n, nan, nam, ‘n, am</li>
      <li>NOUN: bliadhna, bhliadhna, buille, obair, cuid, aghaidh, tè, dòigh, uair, Gàidhlig</li>
      <li>PRON: i, a, ise, h-i, h-ì</li>
      <li>PROPN: [Name], Màiri, Anna, Mairearad, Inis, Catrìona, Mo, Ann, Brìde, Joan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: eile, beag, mòr, ùr, math, mór, dubh, Ghlais, ghoirid, saor</li>
      <li>DET: an, na, a’, a, am, nan, a', 'n, nam, 'm</li>
      <li>NOUN: duine, fear, fhios, taobh, daoine, latha, rud, àite, taigh, leth</li>
      <li>PRON: e, esan, a, ise, h-e, è, aige, mise, sinne</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Tormod, Aonghais, Alasdair, lain, Dhòmhnaill, Eachann, Mhurchaidh</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Dual
    <ul>
      <li>ADJ: bhuig</li>
      <li>DET: an</li>
      <li>NOUN: bhois, bhròig, cuidhean</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: eile, mòra, beaga, ùra, móra, dùthchail, làidir, Èireannach, ionadail, mhòr</li>
      <li>DET: na, nan, an, nam, am, ar, ’n, ur, 'm, 'n</li>
      <li>NOUN: daoine, cluicheadairean, dhaoine, rudan, h-Astràilianaich, beathaichean, mionaidean, bliadhnaichean, h-eileanan, sùilean</li>
      <li>PRON: iad, sinn, sibh, an, iadsan, sinne, sibhse, àsan, ar, ur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: eile, ùr, beag, mòr, mhòr, math, ghoirid, àrd, mór, shaor</li>
      <li>DET: an, a’, a, na, a', am, 'n, mo, do, 'm</li>
      <li>NOUN: duine, fear, fhios, taobh, latha, rud, àite, bliadhna, bhliadhna, taigh</li>
      <li>PRON: e, i, mi, a, thu, esan, mise, ise, tu, thusa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: eile, ghoirid, ùr, ùra, dubh, ionadail, mhòr, mór, móra, òg</li>
      <li>NOUN: taobh, àite, àm, aghaidh, thaobh, leth, bhliadhna, dòigh, duine, taigh</li>
      <li>PROPN: [Name], Dòmhnall, Iain, Dhòmhnall, Màiri, Garaidh, Labhruinn, Tormod, dh’[Name], lain</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: eile, Ghlais, Buidhe, àrd, Bhàin, mhòir, Ruaidh, bhig, Mhóir, Muileach</li>
      <li>DET: na, an, a’, nan, a', nam, am, a</li>
      <li>NOUN: bliadhna, Gàidhlig, latha, pàirce, obrach, dùthcha, taighe, airgid, dìon, fala</li>
      <li>PROPN: [Name], Iain, Dhòmhnaill, Sheumais, lain, Dhonnchaidh, Brìde, Lachlainn, Mairearaid, Ràghaill</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: eile, ùr, beag, mòr, mhòr, math, shaor, mòra, mór, àrd</li>
      <li>NOUN: fhios, fear, duine, rud, daoine, ball, latha, buille, bliadhna, rìgh</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Tormod, Màiri, Alasdair, Anna, Eachann, Murchadh, Seumas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: dhuibh, òig</li>
      <li>NOUN: dhuine, 'ille, ghràidh, Rìgh, ghràidhein, 'ill', 'illean, bhalaich, charaid, fhearaibh</li>
      <li>PROPN: [Name], Aonghais, Mhurchaidh, Raghnaill, Dhòmhnaill, Iain, Choinnich, Sheonaidh, Sheonag, Uilleam</li>
    </ul>
  </li>
</ul>



<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp,Sup
    <ul>
      <li>ADJ: fhearr, fhaide, fheàrr, lugha, motha, mhotha, tràithe, àirde, shine, ìsle</li>
      <li>ADV: tràithe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Aff
    <ul>
      <li>AUX: gur, an, gun</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX: chan, nach, cha</li>
      <li>PART: cha, nach, chan, na</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: bhiodh, biodh, faigheadh, dhèanadh, dh’fhaodadh, thigeadh, rachadh, bheireadh, canadh, dh’fheumadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: feuch, can, cuir, abair, biodh, bi, gabh, till, Cumaibh, tog</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX: an, nach</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: bidh, feumaidh, bhios, bi, thèid, gheibh, tèid, nì, faodaidh, bheir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: b', bu, b’</li>
      <li>PART: do, d’, d'</li>
      <li>VERB: bha, robh, chaidh, chuir, fhuair, thuirt, ars’, bh', thàinig, rinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: 's, is, gur, as, chan, an, nach, ‘s, cha, gun</li>
      <li>PART: cha</li>
      <li>VERB: tha, eil, bheil, th', thà, th’, 'eil, 'l, maireann, thathar</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PART: an, a, am, 'm, na, 'n, ‘n</li>
      <li>PRON: dè, cò, dé, gu, có, mheud, co, cà, mar, Ge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>AUX: as, is</li>
      <li>PART: a, nach, na, a'</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: a, an, mo, do, am, ar, m', d', t', ’n</li>
      <li>PRON: a, an, mo, ar, do, ur</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: a, chèile</li>
      <li>PRON: fhèin, fhéin, chèile, fhìn, a, chéile, a-chèile, fhein, fèin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB: rinneadh, thugadh, thathar, chuireadh, dh'fhaoidte, faodar, fhuaras, rugadh, thathas, bhathar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: mo, ar, m', m’, ’r</li>
      <li>PRON: mi, sinn, mise, sinne, mo, ar, mis', àsan</li>
      <li>VERB: chanainn, rachainn, bhithinn, bithinn, faigheamaid, Bitheamaid, Cuimhnicheamaid, Dhèanainn, beirinn, bhiomaid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: do, d', t', ur, bhur, d’</li>
      <li>PRON: thu, sibh, tu, thusa, sibhse, tusa, do, ur, sib’, thus'</li>
      <li>VERB: feuch, can, cuir, abair, bi, gabh, till, Cumaibh, tog, trobhad</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>DET: a, an, am, ’n, 'm, 'n</li>
      <li>PRON: e, iad, i, a, esan, ise, an, iadsan, àsan, h-e</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Celtic, extra, flat, fresh, important, okay, spotless, Agricultural, Giant, Japanese</li>
          <li>ADV: exactly, really, straight, absolutely, alright, forward, full, particular, right, still</li>
          <li>CCONJ: so</li>
          <li>DET: The</li>
          <li>INTJ: Well, okay, so, no, really, sorry, thanks</li>
          <li>NOUN: tug-of-war, Shir, contract, council, point, terrorists, tribunal, Connections, bank, coach</li>
          <li>NUM: and, eighteen, eighty, fifty, five, forty-thousand, hundred, nineteen, ninety, one</li>
          <li>PROPN: Sir, Dad, Airways, British, Bus, Byker, First, Green, Group, Grove</li>
          <li>VERB: dhifferentiates, sublet, test</li>
          <li>X: the, I, on, poverty, right, Isles, Western, a, and, bhunkhouse</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Form</a>
    <ul>
      <li>Emp
        <ul>
          <li>PRON: esan, mise, ise, thusa, iadsan, sinne, sibhse, àsan, tusa, mis'</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Ad
        <ul>
          <li>PART: gu</li>
        </ul>
      </li>
      <li>Cmpl
        <ul>
          <li>PART: gun, gu, cha, gum, chan, nach, g', 'g, gur</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: nas, na, bu, b', 's</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>PART: a, 'ic</li>
        </ul>
      </li>
      <li>Num
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PART: mac, 'ic, O, Nic, Ó, Mc, Mhic</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>PART: a, an, am, na, nach, 'm, 'n, a', ‘n</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: is.</li>
</ul>

<ul>
<li>This corpus does not contain auxiliaries.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (74)</li>
      <li>VERB--NOUN-Dat (12)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--NOUN-Nom (2026)</li>
      <li>VERB--PRON (3299)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (24)</li>
      <li>VERB--NOUN-Dat (3)</li>
      <li>VERB--NOUN-Nom (663)</li>
      <li>VERB--PRON (262)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>case:voc</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>mark:prt</a>, <a>nmod:poss</a>, <a>obl:smod</a>, <a>obl:tmod</a>, <a>xcomp:pred</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>acl</a>, <a>csubj</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
