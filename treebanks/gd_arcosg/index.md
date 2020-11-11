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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgd_arcosg27)<br />
Download all treebanks: [UD 2.7](/#download)

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
Not all of them have made it into release 2.7.
The test and dev files are complete and the training set will be filled out, hopefully before 2.8.
All files listed below are in the training set unless they are explicitly marked as being in test or dev.
In the ARCOSG documentation the names of contributors are given in Gaelic, which I have kept and glossed with their names in English where they will be familiar to non-Gaelic speakers.

- Conversation. c01 is in test, c03 in dev and the rest in train. These are transcripts of interviews in the Western Isles from 1998 to 2000. In c03 and c04 speakers 2, 4 and 5 are children.
- Public interview. p04 is in test, p05 in dev and the rest in train.
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

See https://universaldependencies.org/gd/index.html for detailed documentation.

## Acknowledgments

We wish to thank all of the contributors to ARCOSG and fellow Celtic language UD developers Teresa Lynn, Johannes Heinecke and Fran Tyers.

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

[acl](gd_arcosg-dep-acl.html) – [acl:relcl](gd_arcosg-dep-acl-relcl.html) – [advcl](gd_arcosg-dep-advcl.html) – [advmod](gd_arcosg-dep-advmod.html) – [amod](gd_arcosg-dep-amod.html) – [appos](gd_arcosg-dep-appos.html) – [case](gd_arcosg-dep-case.html) – [case:voc](gd_arcosg-dep-case-voc.html) – [cc](gd_arcosg-dep-cc.html) – [ccomp](gd_arcosg-dep-ccomp.html) – [compound](gd_arcosg-dep-compound.html) – [conj](gd_arcosg-dep-conj.html) – [cop](gd_arcosg-dep-cop.html) – [csubj:cleft](gd_arcosg-dep-csubj-cleft.html) – [csubj:cop](gd_arcosg-dep-csubj-cop.html) – [dep](gd_arcosg-dep-dep.html) – [det](gd_arcosg-dep-det.html) – [discourse](gd_arcosg-dep-discourse.html) – [dislocated](gd_arcosg-dep-dislocated.html) – [fixed](gd_arcosg-dep-fixed.html) – [flat](gd_arcosg-dep-flat.html) – [mark](gd_arcosg-dep-mark.html) – [mark:prt](gd_arcosg-dep-mark-prt.html) – [nmod](gd_arcosg-dep-nmod.html) – [nmod:poss](gd_arcosg-dep-nmod-poss.html) – [nsubj](gd_arcosg-dep-nsubj.html) – [nummod](gd_arcosg-dep-nummod.html) – [obj](gd_arcosg-dep-obj.html) – [obl](gd_arcosg-dep-obl.html) – [obl:smod](gd_arcosg-dep-obl-smod.html) – [obl:tmod](gd_arcosg-dep-obl-tmod.html) – [parataxis](gd_arcosg-dep-parataxis.html) – [punct](gd_arcosg-dep-punct.html) – [reparandum](gd_arcosg-dep-reparandum.html) – [root](gd_arcosg-dep-root.html) – [vocative](gd_arcosg-dep-vocative.html) – [xcomp](gd_arcosg-dep-xcomp.html) – [xcomp:pred](gd_arcosg-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 3173 sentences, 57855 tokens and 60417 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4066 tokens (7%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 952 types of words that contain both letters and punctuation. Examples: a', a’, 's, [Name], a-mach, b', 'n, ars’, a-steach, bh', a-staigh, th', co-dhiubh, a's, [Placename], an-diugh, ars', ’s, h-uile, ma-thà, a-rithist, dh’fhalbh, a-nis, d’, h-Alba, a-null, ‘s, 'm, a-nuas, 'g, a-nise, dh’Alba, a-rèir, h-Astràilianaich, taobh-sa, d', ge-tà, b’, co-dhiù, dh’fhàg, 'ic, a-muigh, an-dràsda, h-eileanan, a-nall, a-sin, t-saoghal, ‘n, 'nam, a-màireach</li>
</ul>

<ul>
<li>This corpus contains 2536 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 200 types of multi-word tokens. Examples: ann, aca, air, aige, 'se, dhan, agad, ga, dha, 'na, leatha, ris, againn, 'ga, na, orra, san, dhaibh, sa, 'sa, dhiubh, dhen, leis, agam, dhut, se, a'm, riutha, aice, dhomh, oirre, bhon, den, don, roimhe, dhuinn, mun, ort, 'san, orm, 'sann, nan, dheth, dhi, fodha, agamsa, dhuibh, gan, rium, às.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 38 word types tagged as particles (PART): ', 'g, 'ga, 'm, 'n, 's, a, a', ach, ag, air, am, an, a’, b', bu, cha, chan, d', do, d’, g', ga, gu, gum, gun, gur, na, nach, nam, nan, nas, r', ri, ‘, ‘n, ’, ’g</li>
</ul>

<ul>
<li>This corpus contains 66 lemmas tagged as pronouns (PRON): 'd, a, a-chèile, a-seo, a-sin, a-siud, aige, an, ann, aon, ar, b'e, bith, brith, car, carson, ceithir, cia, ciamar, co, cà, càil, cèile, céile, cò, có, dhà, do, dà, dè, dé, e, fein, fèin, féin, gar, ge, gu, i, iad, mar, mheud, mi, mis', mo, sean, seo, seothach, shean, shin, sib', sibh, sin, sineach, sinn, siod, siodach, siud, son, thu, thus', trì, ur, àsan, è, ì</li>
</ul>

<ul>
<li>This corpus contains 19 lemmas tagged as determiners (DET): 'sa, a, a', an, ar, do, eile, gach, mo, sa, seo, sin, sineach, siud, siudach, the, ud, uile, ur</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: a, an, ar, do, mo, seo, sin, sineach, siud, ur</li>
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
    <li>NOUN: bhith, chur, dhèanamh, thoirt, dhol, cur, feuchainn, ghabhail, thogail, toirt</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dol, ràdh, tighinn, feuchainn, faighinn, cur, dèanamh, iarraidh, coimhead, ruith</li>
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
      <li>ADJ: eile, ùr, mhòr, shaor, àrd, Buidhe, bheag, ghoirid, mhath, mhór</li>
      <li>DET: na, an, a’, a, a', 'n, nan, nam, ‘n, am</li>
      <li>NOUN: bliadhna, bhliadhna, buille, cuid, obair, uair, aghaidh, leithid, Gàidhlig, Ghàidhlig</li>
      <li>PRON: i, a, ise, h-ì</li>
      <li>PROPN: [Name], Màiri, Anna, Mairearad, Inis, Catrìona, Mo, Ann, Brìde, Joan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: eile, beag, mòr, ùr, math, mór, dubh, ghoirid, òg, ainmeil</li>
      <li>DET: an, na, a’, a, am, nan, a', 'n, nam, 'm</li>
      <li>NOUN: duine, fear, taobh, fhios, latha, rud, daoine, àite, leth, riaghaltas</li>
      <li>PRON: e, esan, a, ise, aige, h-e, mise, sinne, è</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Tormod, Aonghais, Alasdair, lain, Eachann, Dhòmhnaill, Labhruinn</li>
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
      <li>ADJ: eile, mòra, beaga, móra, ùra, dùthchail, làidir, Èireannach, mhòr, Meadhanach</li>
      <li>DET: na, nan, an, nam, am, ar, ’n, ur, 'm, 'n</li>
      <li>NOUN: daoine, cluicheadairean, dhaoine, h-Astràilianaich, beathaichean, mionaidean, rudan, sùilean, bliadhnaichean, gillean</li>
      <li>PRON: iad, sinn, sibh, an, iadsan, sinne, sibhse, ar, àsan, 'd</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: eile, ùr, beag, mhòr, mòr, math, ghoirid, mór, àrd, dubh</li>
      <li>DET: an, a’, a, na, a', am, 'n, mo, do, 'm</li>
      <li>NOUN: duine, fear, taobh, fhios, bliadhna, latha, rud, àite, bhliadhna, leth</li>
      <li>PRON: e, i, mi, thu, a, esan, ise, mise, tu, thusa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: eile, ghoirid, ùr, dubh, mhòr, móra, òg, beag, ionadail, meadhanach</li>
      <li>NOUN: taobh, àite, leth, thaobh, àm, aghaidh, bhliadhna, adhart, duine, dòigh</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Màiri, Dhòmhnall, Garaidh, Labhruinn, Tormod, dh’[Name], Aonghas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: eile, Buidhe, Ghlais, mhòir, àrd, Bhàin, Mhóir, Muileach, beaga, ùr</li>
      <li>DET: na, an, a’, nan, a', nam, am</li>
      <li>NOUN: bliadhna, Gàidhlig, latha, pàirce, obrach, airgid, dùthcha, dìon, taighe, h-Astràilianaich</li>
      <li>PROPN: [Name], Iain, Dhòmhnaill, lain, Dhonnchaidh, Sheumais, Brìde, Lachlainn, Mairearaid, Ràghaill</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: eile, ùr, beag, mòr, math, mhòr, mór, mòra, shaor, làidir</li>
      <li>NOUN: fear, fhios, duine, rud, daoine, latha, bliadhna, buille, ball, uair</li>
      <li>PROPN: [Name], Iain, Dòmhnall, Tormod, Màiri, Alasdair, Anna, Eachann, Seumas, Uilleam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: dhuibh, òig</li>
      <li>NOUN: dhuine, 'ille, ghràidh, Rìgh, ghràidhein, 'ill', 'illean, bhalaich, charaid, luaidh</li>
      <li>PROPN: [Name], Aonghais, Mhurchaidh, Raghnaill, Iain, Dhòmhnaill, Sheonaidh, Choinnich, Sheonag, Uilleam</li>
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
      <li>ADJ: fhearr, fhaide, fheàrr, mhotha, motha, lugha, shine, dlùithe, luaithe, sine</li>
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
      <li>VERB: bhiodh, biodh, faigheadh, rachadh, dhèanadh, dh’fhaodadh, thigeadh, dh’fheumadh, canadh, chanadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: na</li>
      <li>VERB: feuch, can, cuir, abair, biodh, till, Cumaibh, bi, gabh, tog</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ciamar, carson, cà, cuin', cuine, càit, dè, Car, cuin, son</li>
      <li>AUX: an, nach</li>
      <li>NUM: cia, mheud</li>
      <li>PART: an, a, am, 'm, na, 'n, ‘n</li>
      <li>PRON: dè, cò, dé, gu, có, mheud, mar, Ge, càil, Carson</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: bidh, bhios, feumaidh, thèid, bi, gheibh, tèid, faodaidh, nì, bhi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: b', bu, b’</li>
      <li>PART: do, d’, d'</li>
      <li>VERB: bha, robh, chaidh, thuirt, fhuair, ars’, chuir, bh', thàinig, rinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: is, 's, gur, as, chan, an, nach, ‘s, cha, gun</li>
      <li>PART: cha</li>
      <li>VERB: tha, eil, bheil, th', thà, th’, 'eil, maireann, 'l, thathar</li>
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
      <li>ADV: fhèin</li>
      <li>NOUN: a, chèile</li>
      <li>PRON: fhèin, fhéin, chèile, fhìn, a, chéile, a-chèile, fhein</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB: rinneadh, fhuaras, rugadh, thathar, bhathar, faodar, feumar, lorgadh, thathas, thugadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: mo, ar, m', m’, ’r</li>
      <li>PRON: mi, sinn, mise, sinne, mo, ar, mis', àsan</li>
      <li>VERB: chanainn, rachainn, bhithinn, bithinn, faigheamaid, Bitheamaid, Dhèanainn, beirinn, bhiomaid, biomaid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: do, d', t', ur, bhur, d’</li>
      <li>PRON: thu, sibh, tu, thusa, sibhse, tusa, do, sib’, thus', ur</li>
      <li>VERB: feuch, can, cuir, abair, till, Cumaibh, bi, gabh, tog, trobhad</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>DET: a, an, am, ’n, ', 'm, 'n</li>
      <li>PRON: e, iad, i, a, esan, ise, an, iadsan, àsan, 'd</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Giant, extra, flat, fresh, important, okay, spotless, Agricultural, Celtic, Royal</li>
          <li>ADV: really, absolutely, forward, still, straight</li>
          <li>CCONJ: so</li>
          <li>DET: the</li>
          <li>INTJ: no, so, Well, okay, really, sorry, thanks</li>
          <li>NOUN: tug-of-war, Shir, contract, coach, council, equipment, gym, terrorists, Baby, Cheatharnaigh</li>
          <li>NUM: and, eighteen, eighty, fifty, five, forty-thousand, hundred, nineteen, ninety, one</li>
          <li>PRON: I</li>
          <li>PROPN: Sir, Hosta, North, Uist</li>
          <li>VERB: do, it’s, know</li>
          <li>X: Celtic, Connections, bhunkhouse, on, test, the, tribunal, I, Post, Well</li>
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
          <li>PRON: esan, ise, mise, thusa, iadsan, sinne, sibhse, tusa, àsan, mis'</li>
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
          <li>PART: gun, gu, cha, gum, nach, chan, g', 'g, gur</li>
          <li>SCONJ: gun</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: nas, na, bu, b', 's</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Num
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>NOUN: mac, 'ic, O, Nic, Ó, Mc</li>
          <li>PROPN: Mac, O</li>
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
      <li>VERB--NOUN (60)</li>
      <li>VERB--NOUN-Dat (10)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--NOUN-Nom (1707)</li>
      <li>VERB--PRON (2672)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (19)</li>
      <li>VERB--NOUN-Nom (547)</li>
      <li>VERB--PRON (207)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: tuig a</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>case:voc</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>mark:prt</a>, <a>nmod:poss</a>, <a>obl:smod</a>, <a>obl:tmod</a>, <a>xcomp:pred</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>csubj</a></li>
<li>The following 7 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
