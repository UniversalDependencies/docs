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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgd_arcosg25)<br />
Download all treebanks: [UD 2.5](/#download)

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
[Annotated Reference Corpus Of Scottish Gaelic (ARCOSG)](https://datashare.is.ed.ac.uk/handle/10283/2011).



The Scottish Gaelic treebank takes data from ARCOSG, the Annotated Reference Corpus of Scottish Gaelic (Lamb _et al._ 2016) with the annotation scheme based on that in the Irish UD treebank. Full bibliographic details are to be had there.

It contains eight subcorpora of a varying number of original files, each of approximately 1000 tokens.
Not all of them have made it into release 2.5. The test and dev files are complete and the training set will be filled out, hopefully before 2.6.
All files listed below are in the training set unless they are explicitly marked as being in test or dev.
In the ARCOSG documentation the names of contributors are given in Gaelic, which I have kept and glossed with their names in English where they will be familiar to non-Gaelic speakers.

- Conversation. c01 is in test, c03 in dev and the rest in train. These are transcripts of interviews in the Western Isles from 1998 to 2000. In c03 and c04 speakers 2, 4 and 5 are children.
- Public interview. p04 is in test, p05 in dev and the rest in train.
- Sport. s06 is in test, s08 in dev and the rest in train. s01 to s05 are _Radio nan Gàidheil_ commentary on a match between Scotland and Australia; s06 to s10 on Scotland _vs._ Yugoslavia.
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

[Case](gd_arcosg-feat-Case.html) – [Degree](gd_arcosg-feat-Degree.html) – [Foreign](gd_arcosg-feat-Foreign.html) – [Gender](gd_arcosg-feat-Gender.html) – [Mood](gd_arcosg-feat-Mood.html) – [Number](gd_arcosg-feat-Number.html) – [PartType](gd_arcosg-feat-PartType.html) – [Person](gd_arcosg-feat-Person.html) – [Polarity](gd_arcosg-feat-Polarity.html) – [PronType](gd_arcosg-feat-PronType.html) – [Reflex](gd_arcosg-feat-Reflex.html) – [Tense](gd_arcosg-feat-Tense.html) – [VerbForm](gd_arcosg-feat-VerbForm.html)

## Relations

[acl](gd_arcosg-dep-acl.html) – [acl:relcl](gd_arcosg-dep-acl-relcl.html) – [advcl](gd_arcosg-dep-advcl.html) – [advmod](gd_arcosg-dep-advmod.html) – [amod](gd_arcosg-dep-amod.html) – [appos](gd_arcosg-dep-appos.html) – [case](gd_arcosg-dep-case.html) – [case:voc](gd_arcosg-dep-case-voc.html) – [cc](gd_arcosg-dep-cc.html) – [ccomp](gd_arcosg-dep-ccomp.html) – [compound](gd_arcosg-dep-compound.html) – [conj](gd_arcosg-dep-conj.html) – [cop](gd_arcosg-dep-cop.html) – [csubj:cleft](gd_arcosg-dep-csubj-cleft.html) – [csubj:cop](gd_arcosg-dep-csubj-cop.html) – [dep](gd_arcosg-dep-dep.html) – [det](gd_arcosg-dep-det.html) – [discourse](gd_arcosg-dep-discourse.html) – [dislocated](gd_arcosg-dep-dislocated.html) – [fixed](gd_arcosg-dep-fixed.html) – [flat](gd_arcosg-dep-flat.html) – [mark](gd_arcosg-dep-mark.html) – [mark:prt](gd_arcosg-dep-mark-prt.html) – [nmod](gd_arcosg-dep-nmod.html) – [nmod:poss](gd_arcosg-dep-nmod-poss.html) – [nsubj](gd_arcosg-dep-nsubj.html) – [nummod](gd_arcosg-dep-nummod.html) – [obj](gd_arcosg-dep-obj.html) – [obl](gd_arcosg-dep-obl.html) – [obl:smod](gd_arcosg-dep-obl-smod.html) – [obl:tmod](gd_arcosg-dep-obl-tmod.html) – [parataxis](gd_arcosg-dep-parataxis.html) – [punct](gd_arcosg-dep-punct.html) – [reparandum](gd_arcosg-dep-reparandum.html) – [root](gd_arcosg-dep-root.html) – [vocative](gd_arcosg-dep-vocative.html) – [xcomp](gd_arcosg-dep-xcomp.html) – [xcomp:pred](gd_arcosg-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2193 sentences, 42838 tokens and 42848 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 3840 tokens (9%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 844 types of words that contain both letters and punctuation. Examples: a', a’, 's, b', 'n, a-mach, [Name], 'na, ars', a-steach, an-diugh, ’s, ars’, bh', 'se, th', 'ga, co-dhiubh, h-uile, a-staigh, h-Alba, 'sa, a's, ‘s, a-rithist, d’, ma-thà, 'g, a-nis, dh’fhalbh, 'm, d', a-null, b’, co-dhiù, h-eileanan, 'ic, 'san, ‘n, a'm, a-nise, a-nuas, dh'fhalbh, a-sin, an-dràsda, eadar-dhealaichte, t-saoghal, 'nam, a-màireach, a-seo</li>
</ul>

<ul>
<li>This corpus contains 10 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 7 types of multi-word tokens. Examples: gun, Orra, cuimhneam, fhiosam, fiùs, na, sna.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 40 word types tagged as particles (PART): ', 'g, 'ga, 'gan, 'gar, 'm, 's, a, a', ag, air, am, an, a’, b', bu, cha, chan, d', do, d’, g', ga, gam, gan, gar, gu, gum, gun, gur, na, nach, nam, nan, nas, r', ri, ‘n, ’, ’g</li>
</ul>

<ul>
<li>This corpus contains 57 lemmas tagged as pronouns (PRON): a, a-seo, a-sin, aige, an, ann, aon, b'e, bith, brith, car, carson, chèile, chéile, cia, ciamar, co, cà, càil, cò, có, dhà, dà, dè, dé, e, fhein, fhèin, fhéin, fhìn, gar, ge, gu, i, iad, is, mar, mheud, mi, mis', sean, seo, seothach, sib', sibh, sin, sineach, sinn, siod, siodach, siud, son, thu, thus', trì, àsan, ì</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as determiners (DET): ', 'm, 'n, 'r, 'sa, a, a', am, an, ar, bhur, d', do, gach, m', mo, sa, seo, sin, sineach, siud, t', the, ud, uile, ur</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: a, an, seo, sin, sineach, siud</li>
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
    <li>NOUN: bhith, chur, thoirt, dhèanamh, dhol, thogail, ghabhail, ràdh, sgrìobhadh, chumail</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dol, ràdh, feuchainn, cur, tighinn, iarraidh, toirt, dèanamh, faighinn, cumail</li>
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
      <li>ADJ: eile, ùr, Buidhe, mhòr, mhór, bheag, làidir, mhath, dùthchail, mhòir</li>
      <li>ADP: leatha, aice, dhi, oirre, rithe, dhith, innte, bhuaipe, thuice, aice-se</li>
      <li>DET: na, an, a’, a, a', 'n, nan, nam, ‘n, '</li>
      <li>NOUN: bliadhna, cuid, Ghàidhlig, obair, Gàidhlig, dùil, uair, leithid, aghaidh, bhliadhna</li>
      <li>PRON: i, ise, h-ì</li>
      <li>PROPN: Màiri, Anna, [Name], Mairearad, Inis, Catrìona, Mo, Joan, Mairearaid, Mairead</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: eile, beag, ùr, mór, math, dubh, mòr, ghoirid, òg, ainmeil</li>
      <li>ADP: ann, air, aige, dha, ris, leis, roimhe, dheth, às, dhe</li>
      <li>DET: an, na, a, a’, am, nan, a', 'n, nam, 'm</li>
      <li>NOUN: duine, fear, latha, àite, taobh, rud, fhios, daoine, riaghaltas, àm</li>
      <li>PRON: e, esan, ise, aige, h-e, sinne</li>
      <li>PROPN: Iain, Dòmhnall, [Name], Tormod, lain, Alasdair, Eachann, Aonghais, Labhruinn, Dhòmhnaill</li>
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
      <li>NOUN: bhois, bhròig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: eile, móra, ùra, beaga, dùthchail, làidir, mòra, Èireannach, mhòr, Meadhanach</li>
      <li>ADP: aca, orra, againn, dhaibh, riutha, dhiubh, dhuinn, dhuibh, agaibh, oirnn</li>
      <li>DET: na, nan, an, nam, am, ar, ’n, ur, 'm, 'n</li>
      <li>NOUN: daoine, dhaoine, mionaidean, sùilean, cluicheadairean, gillean, bliadhnaichean, h-eileanan, seanchaidhean, dòighean</li>
      <li>PRON: iad, sinn, sibh, iadsan, sinne, sibhse, sib’, àsan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: eile, ùr, beag, math, mór, ghoirid, dubh, mhòr, òg, mòr</li>
      <li>ADP: ann, air, aige, agad, dha, ris, dhut, leatha, agam, leis</li>
      <li>DET: an, a’, a, na, a', am, 'n, mo, do, ‘n</li>
      <li>NOUN: duine, fear, bliadhna, latha, àite, taobh, rud, fhios, cuid, riaghaltas</li>
      <li>PRON: e, mi, i, esan, thu, ise, tu, mise, thusa, tusa</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: eile, ghoirid, ùr, móra, òg, dubh, ionadail, mór, Albannach, Eòrpach</li>
      <li>NOUN: taobh, àite, àm, thaobh, Ghàidhlig, aghaidh, riaghaltas, bhliadhna, adhart, duine</li>
      <li>PROPN: Iain, Dòmhnall, [Name], Màiri, Dhòmhnall, Garaidh, Labhruinn, Tormod, Aonghas, Catrìona</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: eile, Buidhe, Mhóir, Muileach, beaga, Albannach, Rìoghail, cèin, dùthchail, mhòir</li>
      <li>DET: na, an, nan, a’, a', nam, am</li>
      <li>NOUN: bliadhna, Gàidhlig, latha, obrach, dùthcha, airgid, pàrlamaid, dhaoine, sgìre, bàrdachd</li>
      <li>PROPN: Dhòmhnaill, Iain, lain, Dhonnchaidh, Lachlainn, Mairearaid, Ràghaill, Ailein, Alasdair, Eachainn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: eile, ùr, beag, math, mór, mòr, làidir, dubh, mhath, mhòr</li>
      <li>NOUN: fear, duine, fhios, rud, bliadhna, beagan, cuid, dùil, daoine, latha</li>
      <li>PROPN: Dòmhnall, Iain, Tormod, Màiri, Alasdair, Eachann, Anna, [Name], Labhruinn, Seumas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: òig</li>
      <li>NOUN: dhuine, 'ille, Rìgh, ghràidhein, 'ill', 'illean, bhalaich, charaid, ghràidh, luaidh</li>
      <li>PROPN: [Name], Aonghais, Raghnaill, Mhurchaidh, Dhòmhnaill, Sheonaidh, Iain</li>
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
      <li>ADJ: fhearr, fhaide, fheàrr, mhotha, motha, dlùithe, lugha, shine, sine, luaithe</li>
      <li>ADV: tràithe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
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
      <li>VERB: bhiodh, biodh, dhèanadh, faigheadh, thigeadh, rachadh, dh’fhaodadh, bheireadh, dèanadh, chuireadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: na</li>
      <li>VERB: feuch, can, abair, cuir, biodh, till, Cumaibh, bi, gabh, tog</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: ciamar, carson, càit, cà, Car, cuin, cuine, son, Càit', Dé</li>
      <li>NUM: cia, mheud</li>
      <li>PART: an, a, am, 'm, na, ‘n</li>
      <li>PRON: dè, cò, dé, gu, có, mheud, Ge, càil, Carson, Ciamar</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: bidh, thèid, feumaidh, tèid, bhios, bi, nì, faodaidh, gheibh, bheir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: bu, B', B’</li>
      <li>PART: do, d’, d'</li>
      <li>VERB: bha, robh, chaidh, thuirt, fhuair, rinn, chuir, ars', thàinig, ars’</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>VERB: tha, eil, bheil, th', th’, thà, maireann, thathar, Ar, Thathas</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADP: agamsa, agadsa, dhòmhsa, acasan, agaibhse, dhaibhsan, dhuinne, dhutsa, aca-san, aige-san</li>
      <li>PRON: esan, ise, mise, thusa, iadsan, sinne, tusa, mis', sibhse, thus'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>PART: an, a, am, 'm, na, ‘n</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PART: a, nach, na</li>
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
      <li>PRON: fhèin, fhéin, chèile, fhìn, chéile, a, fhein</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB: rinneadh, fhuaras, rugadh, feumar, thathar, bhathar, faodar, lorgadh, Thathas, bhathas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: againn, agam, orm, dhomh, dhuinn, a'm, agamsa, rium, oirnn, dhòmhsa</li>
      <li>DET: mo, ar, m', m’, ’r</li>
      <li>PRON: mi, sinn, mise, sinne, mis'</li>
      <li>VERB: chanainn, rachainn, bhithinn, bithinn, Bitheamaid, Dhèanainn, beirinn, bhiomaid, biomaid, bithinn-sa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: agad, dhut, ort, dhuibh, leat, agaibh, oirbh, riut, agadsa, a’d</li>
      <li>DET: do, d', t', ur, bhur, d’</li>
      <li>PRON: thu, tu, sibh, thusa, tusa, sibhse, sib’, thus'</li>
      <li>VERB: feuch, can, abair, cuir, till, Cumaibh, bi, gabh, tog, trobhad</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: ann, aca, air, aige, dha, orra, ris, dhaibh, leatha, leis</li>
      <li>DET: a, an, am, ’n, ', 'm, 'n</li>
      <li>PRON: e, iad, i, esan, ise, iadsan, aige, h-e, h-ì, sinne</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Giant, okay, Agricultural, Celtic, Royal, alright, brainy, fussy, knackered, left</li>
          <li>ADV: really, straight</li>
          <li>DET: the</li>
          <li>INTJ: no, Well, okay, sorry, thanks</li>
          <li>NOUN: contract, gym, Baby, Cheatharnaigh, Eachtra, Scouts, Society, balance, homework, test</li>
          <li>NUM: eighteen, fifty, five, nineteen, ninety, seven, three, twenty</li>
          <li>PRON: I</li>
          <li>PROPN: Sir, North, Uist</li>
          <li>SCONJ: so</li>
          <li>VERB: do, it’s, know</li>
          <li>X: contract, tribunal, and, bhunkhouse, on, theatre, Airways, British, Bus, Captain</li>
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
          <li>PART: gu, gun, gum, 'g, g'</li>
          <li>SCONJ: gun</li>
        </ul>
      </li>
      <li>Cmpl
        <ul>
          <li>PART: cha, nach, chan</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: nas, na, b', bu, 's</li>
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
          <li>PART: a, an, na, nach, am, 'm, ‘n</li>
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
      <li>VERB--NOUN (44)</li>
      <li>VERB--NOUN-Dat (6)</li>
      <li>VERB--NOUN-Dat-ADP([a]) (1)</li>
      <li>VERB--NOUN-Dat-ADP(de) (2)</li>
      <li>VERB--NOUN-Gen (3)</li>
      <li>VERB--NOUN-Nom (1327)</li>
      <li>VERB--NOUN-Nom-ADP(ach) (1)</li>
      <li>VERB--NOUN-Nom-ADP(eadar) (1)</li>
      <li>VERB--PRON (1767)</li>
      <li>VERB--PRON-ADP(ach) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (11)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Dat-ADP(mu) (1)</li>
      <li>VERB--NOUN-Nom (439)</li>
      <li>VERB--NOUN-Nom-ADP(a) (1)</li>
      <li>VERB--PRON (127)</li>
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
