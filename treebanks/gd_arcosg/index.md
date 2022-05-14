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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgd_arcosg210)<br />
Download all treebanks: [UD 2.10](/#download)

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
Not all of the trees have made it into release 2.9.
The test and dev files are complete and the training set will be filled out, hopefully in 2.10.
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
- fp04: from _Bith-eòlas_ ('Biology'), a translation by Ruairidh MacThòmais (Derick Thomson)
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

[Case](gd_arcosg-feat-Case.html) – [Definite](gd_arcosg-feat-Definite.html) – [Degree](gd_arcosg-feat-Degree.html) – [Foreign](gd_arcosg-feat-Foreign.html) – [Form](gd_arcosg-feat-Form.html) – [Gender](gd_arcosg-feat-Gender.html) – [Mood](gd_arcosg-feat-Mood.html) – [Number](gd_arcosg-feat-Number.html) – [PartType](gd_arcosg-feat-PartType.html) – [Person](gd_arcosg-feat-Person.html) – [Polarity](gd_arcosg-feat-Polarity.html) – [Poss](gd_arcosg-feat-Poss.html) – [PronType](gd_arcosg-feat-PronType.html) – [Reflex](gd_arcosg-feat-Reflex.html) – [Tense](gd_arcosg-feat-Tense.html) – [Typo](gd_arcosg-feat-Typo.html) – [VerbForm](gd_arcosg-feat-VerbForm.html)

## Relations

[acl](gd_arcosg-dep-acl.html) – [acl:relcl](gd_arcosg-dep-acl-relcl.html) – [advcl](gd_arcosg-dep-advcl.html) – [advmod](gd_arcosg-dep-advmod.html) – [amod](gd_arcosg-dep-amod.html) – [appos](gd_arcosg-dep-appos.html) – [case](gd_arcosg-dep-case.html) – [case:voc](gd_arcosg-dep-case-voc.html) – [cc](gd_arcosg-dep-cc.html) – [ccomp](gd_arcosg-dep-ccomp.html) – [compound](gd_arcosg-dep-compound.html) – [conj](gd_arcosg-dep-conj.html) – [cop](gd_arcosg-dep-cop.html) – [csubj:cleft](gd_arcosg-dep-csubj-cleft.html) – [csubj:cop](gd_arcosg-dep-csubj-cop.html) – [dep](gd_arcosg-dep-dep.html) – [det](gd_arcosg-dep-det.html) – [discourse](gd_arcosg-dep-discourse.html) – [dislocated](gd_arcosg-dep-dislocated.html) – [fixed](gd_arcosg-dep-fixed.html) – [flat](gd_arcosg-dep-flat.html) – [flat:foreign](gd_arcosg-dep-flat-foreign.html) – [flat:name](gd_arcosg-dep-flat-name.html) – [mark](gd_arcosg-dep-mark.html) – [mark:prt](gd_arcosg-dep-mark-prt.html) – [nmod](gd_arcosg-dep-nmod.html) – [nmod:poss](gd_arcosg-dep-nmod-poss.html) – [nsubj](gd_arcosg-dep-nsubj.html) – [nummod](gd_arcosg-dep-nummod.html) – [obj](gd_arcosg-dep-obj.html) – [obl](gd_arcosg-dep-obl.html) – [obl:smod](gd_arcosg-dep-obl-smod.html) – [obl:tmod](gd_arcosg-dep-obl-tmod.html) – [orphan](gd_arcosg-dep-orphan.html) – [parataxis](gd_arcosg-dep-parataxis.html) – [punct](gd_arcosg-dep-punct.html) – [reparandum](gd_arcosg-dep-reparandum.html) – [root](gd_arcosg-dep-root.html) – [vocative](gd_arcosg-dep-vocative.html) – [xcomp](gd_arcosg-dep-xcomp.html) – [xcomp:pred](gd_arcosg-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4739 sentences, 86089 tokens and 89958 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 5200 tokens (6%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1242 types of words that contain both letters and punctuation. Examples: a', 's, a’, [Name], a-mach, b', 'n, ars’, a-steach, bh', co-dhiubh, th', a-staigh, a's, [Placename], h-uile, ’s, ma-thà, an-diugh, a-rithist, ars', dh’fhalbh, 'dol, a-null, d’, a-nis, h-Alba, a-nuas, ge-tà, 'm, h-eileanan, a-muigh, ‘s, a-nise, 'g, a-sin, taobh-sa, a-nall, a-rèir, 'ic, dh’Alba, an-dràsda, h-Astràilianaich, a-seo, dh’fhàg, co-dhiù, ‘n, b’, d', dh’fheuch</li>
</ul>

<ul>
<li>This corpus contains 3835 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 230 types of multi-word tokens. Examples: ann, aca, air, ga, aige, dhan, 'se, dha, agad, leatha, ris, 'na, 'ga, orra, againn, dhaibh, na, san, dhen, sa, agam, dhiubh, se, 'sa, a'm, riutha, leis, 'san, aice, bhon, dhuinn, oirre, dhomh, dhut, mun, roimhe, às, agaibh, den, dheth, gan, dhi, leotha, dhe, dhuibh, don, fodha, ort, rium, orm.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 45 word types tagged as particles (PART): 'g, 'ga, 'ic, 'm, 'n, 's, Mc, Mhic, Nic, O, a, a', ach, ag, air, am, an, a’, b', bu, cha, chan, d', do, d’, g', ga, gan, gu, gum, gun, gur, mac, na, nach, nam, nan, nas, r', ri, Ó, ‘, ‘n, ’, ’g</li>
</ul>

<ul>
<li>This corpus contains 81 lemmas tagged as pronouns (PRON): 'd, 'n, a, a-chèile, a-seo, a-sin, a-siud, aige, an, ann, aon, ar, b'e, bith, brith, bè, c'à, car, carson, ceithir, cia, ciamar, co, cuin, cuin', cuine, cà, cà', càil, càit, càit', càite, cáit, cèile, céile, cò, có, dhà, diamar, do, dà, dè, dé, e, fein, fèin, féin, gar, ge, gu, i, iad, mar, mheud, mi, mis', mo, péin, sean, seo, seothach, shean, shin, sib', sibh, sibh-se, sin, sineach, sinn, siod, siodach, siud, siudach, son, thu, thus', trì, ur, àsan, è, ì</li>
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
    <li>NOUN: bhith, chur, dhèanamh, thoirt, dhol, feuchainn, cur, ràdh, toirt, thogail</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dol, ràdh, tighinn, feuchainn, iarraidh, faighinn, cur, dèanamh, coimhead, ruith</li>
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
      <li>ADJ: eile, mhòr, ùr, àrd, shaor, mhath, bheag, mhór, beaga, Buidhe</li>
      <li>DET: na, an, a’, a, a', 'n, nan, nam, ‘n, am</li>
      <li>NOUN: bliadhna, buille, bhliadhna, obair, cuid, Gàidhlig, tè, aghaidh, dòigh, leithid</li>
      <li>PRON: i, a, ise, h-i, h-ì</li>
      <li>PROPN: [Name], Màiri, Anna, Mairearad, Inis, Catrìona, Ann, Mo, Sarah, Belle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: eile, beag, ùr, mòr, math, mór, òg, dubh, ghoirid, ùra</li>
      <li>DET: an, na, a’, a, am, nan, a', 'n, nam, 'm</li>
      <li>NOUN: duine, fear, fhios, taobh, rud, daoine, latha, àite, taigh, leth</li>
      <li>PRON: e, esan, a, h-e, ise, è, aige, mise, sinne</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Tormod, Mhurchaidh, Alasdair, Aonghais, Garaidh, Labhruinn, lain</li>
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
      <li>ADJ: eile, ùra, beaga, mòra, móra, dùthchail, annasach, làidir, Èireannach, ionadail</li>
      <li>DET: na, nan, an, nam, am, ar, ur, ’n, 'n, 'm</li>
      <li>NOUN: daoine, dhaoine, cluicheadairean, rudan, h-Astràilianaich, h-eileanan, beathaichean, mionaidean, bliadhnaichean, cùisean</li>
      <li>PRON: iad, sinn, sibh, an, iadsan, sinne, sibhse, ar, àsan, ur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: eile, ùr, beag, mhòr, mòr, math, àrd, ghoirid, òg, mór</li>
      <li>DET: an, a’, a, na, a', am, 'n, mo, do, 'm</li>
      <li>NOUN: duine, fear, fhios, taobh, rud, latha, àite, bliadhna, buille, taigh</li>
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
      <li>ADJ: eile, ùr, ghoirid, ùra, dubh, mór, móra, Albannach, Eòrpach, annasach</li>
      <li>NOUN: taobh, àite, àm, aghaidh, leth, thaobh, duine, dòigh, ceann, bhliadhna</li>
      <li>PROPN: [Name], Dòmhnall, Iain, Dhòmhnall, Garaidh, Labhruinn, Màiri, Tormod, dh’[Name], lain</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: eile, Ghlais, àrd, Buidhe, mhòir, Bhàin, ùr, Ruaidh, bhig, dùthchail</li>
      <li>DET: na, an, a’, nan, a', nam, am, a</li>
      <li>NOUN: bliadhna, Gàidhlig, pàirce, latha, obrach, taighe, dùthcha, dìon, pàrlamaid, Gaidhealtachd</li>
      <li>PROPN: [Name], Iain, Dhòmhnaill, Sheumais, lain, Dhonnchaidh, Brìde, Lachlainn, Mairearaid, Ràghaill</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: eile, ùr, beag, mhòr, mòr, math, shaor, àrd, òg, mòra</li>
      <li>NOUN: fhios, fear, duine, rud, daoine, ball, latha, buille, bliadhna, taobh</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Màiri, Tormod, Alasdair, Anna, Eachann, Garaidh, Murchadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: dhuibh, bhochd, òig</li>
      <li>NOUN: dhuine, 'ille, Rìgh, ghràidh, 'illean, bhalaich, ghràidhein, 'ill', bheadragain, bhròinein</li>
      <li>PROPN: [Name], Mhurchaidh, Aonghais, Iain, Raghnaill, Dhòmhnaill, Anna, Choinnich, Sheonaidh, Ann</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: an, na, a’, a', am, nan, 'n, nam, 'm, ‘n</li>
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
      <li>ADJ: fhearr, fhaide, fheàrr, motha, mhotha, lugha, tràithe, àirde, luaithe, shine</li>
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
      <li>VERB: bhiodh, biodh, faigheadh, dh’fhaodadh, rachadh, dhèanadh, thigeadh, dèanadh, bheireadh, canadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: feuch, can, biodh, cuir, abair, bi, gabh, till, trobhad, Cumaibh</li>
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
      <li>VERB: bidh, feumaidh, bhios, bi, gheibh, thèid, tèid, nì, faodaidh, bheir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: b', bu, b’</li>
      <li>PART: do, d’, d'</li>
      <li>VERB: bha, robh, chaidh, fhuair, thuirt, ars’, chuir, thàinig, bh', rinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: 's, is, gur, as, chan, nach, an, cha, ‘s, gun</li>
      <li>PART: cha</li>
      <li>VERB: tha, eil, bheil, th', thà, th’, 'eil, thathar, thathas, 'l</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Art
    <ul>
      <li>DET: an, na, a’, a', am, nan, 'n, nam, 'm, ‘n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PART: an, a, am, 'm, na, 'n, ‘n</li>
      <li>PRON: dè, cò, dé, ciamar, carson, gu, cà, có, mheud, mar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>AUX: as, is, 's</li>
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
      <li>DET: a, an, mo, do, am, ar, m', d', t', ur</li>
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
      <li>PRON: fhèin, fhéin, chèile, fhìn, a, chéile, péin, a-chèile, fhein, fèin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB: rinneadh, thathar, thugadh, chuireadh, thathas, dh'fhaoidte, faodar, feumar, fhuaras, rugadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: mo, ar, m', m’, ’r</li>
      <li>PRON: mi, sinn, mise, sinne, mo, ar, mis', mis’, àsan</li>
      <li>VERB: chanainn, rachainn, bhithinn, bithinn, bhiomaid, chanain-sa, dh’aontaichinn, faigheamaid, faighinn, Bitheamaid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: do, d', t', ur, bhur, d’</li>
      <li>PRON: thu, sibh, tu, thusa, sibhse, tusa, do, thus', ur, sibh-se</li>
      <li>VERB: feuch, can, cuir, abair, bi, gabh, till, trobhad, Cumaibh, saoil</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>DET: a, an, am, ’n, 'n, 'm</li>
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
          <li>ADJ: okay, Celtic, extra, flat, fresh, important, spotless, Agricultural, Giant, Japanese</li>
          <li>ADV: really, exactly, straight, absolutely, alright, forward, full, particular, right, still</li>
          <li>CCONJ: so</li>
          <li>DET: the</li>
          <li>INTJ: Well, okay, right, so, no, really, sorry, thanks</li>
          <li>NOUN: tug-of-war, Shir, contract, vet, Radio, council, point, terrorists, tribunal, van</li>
          <li>NUM: and, eighteen, eighty, fifty, five, forty-thousand, hundred, nineteen, ninety, one</li>
          <li>PROPN: Sir, Dad, the, Airways, Apprentice, Aquaculture, Backpackers, Boys, British, Bus</li>
          <li>VERB: dhifferentiates, sublet, test</li>
          <li>X: the, a, I, and, in, on, poverty, well, Isles, Western</li>
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
          <li>ADP: shon-sa, dheidhinn-sa</li>
          <li>NOUN: taobh-sa, bheachd-sa, ìre-sa, bheachd-san, bliadhna-sa, leughadh-ne, aobhar-sa, athair-san, bhràithrean-sa, bhàta-sa</li>
          <li>PRON: esan, mise, ise, thusa, iadsan, sinne, sibhse, tusa, àsan, mis'</li>
          <li>VERB: cumail-san</li>
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
          <li>PART: gun, gu, cha, gum, chan, nach, g', 'g, gan, gur</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: nas, na, bu, b', 's</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>PART: a, 'ic, a'</li>
        </ul>
      </li>
      <li>Num
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PART: mac, 'ic, Nic, O, Mhic, Ó, Mc</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>PART: a, an, am, nach, na, 'm, 'n, a', ‘n</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>PART: a, a'</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>PROPN: lain</li>
          <li>VERB: dh’fhabh</li>
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
      <li>VERB--NOUN (87)</li>
      <li>VERB--NOUN-Dat (12)</li>
      <li>VERB--NOUN-Dat-ADP(air) (2)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--NOUN-Nom (2524)</li>
      <li>VERB--PRON (4117)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (30)</li>
      <li>VERB--NOUN-Dat (4)</li>
      <li>VERB--NOUN-Nom (834)</li>
      <li>VERB--PRON (344)</li>
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
<li>The following 1 main types are not used alone, they are always subtyped: <a>csubj</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a></li>
</ul>
