---
layout: base
title:  'UD_Irish-IDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Irish IDT

Language: [Irish](/ga/index.html) (code: `ga`)<br/>
Family: Indo-European, Celtic

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Teresa Lynn, Jennifer Foster, Sarah McGuinness, Abigail Walsh, Jason Phelan.

Repository: [UD_Irish-IDT](https://github.com/UniversalDependencies/UD_Irish-IDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_idt25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 3.0

Genre: news, fiction, web, legal

Questions, comments?
General annotation questions (either Irish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Irish-IDT/issues).
If you want to collaborate, please contact [teresa&nbsp;•&nbsp;lynn&nbsp;(æt)&nbsp;adaptcentre&nbsp;•&nbsp;ie; jennifer&nbsp;•&nbsp;foster&nbsp;(æt)&nbsp;dcu&nbsp;•&nbsp;ie].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

A Universal Dependencies 1763-sentence treebank for modern Irish.



The Irish UD Treebank is a conversion of the Irish Dependency Treebank
(IDT), which was part of a PhD research project by Teresa Lynn at Dublin City University, Ireland (Lynn, 2016).

---- The IDT data has been released on [GitHub] (https://github.com/tlynn747/IrishDependencyTreebank). The Treebank
contains 1020 sentences taken from the New Corpus of Ireland-Irish
(NCII), with text from books, newswire, websites and other media. These sentences are a subset of a gold-standard POS-tagged corpus for Irish. ----

The conversion from the IDT annotation scheme to the UD annotation scheme was designed by Teresa Lynn and Jennifer Foster at Dublin City University, Ireland. The mapping to UD is reported in Lynn et al., (2016)

The UD Treebank is split into two sets as follows:

* 454 trees (test)
* 451 trees (dev)
* 858 trees (train)

Note: the 451 dev trees were taken from the set of newly annotated trees. The rest of the newly annotated trees have been added to the
training set.

## Acknowledgments

We wish to thank all of the contributors to the original IDT annotation, including Elaine Uí Dhonnchadha for her gold POS-tagged corpus and linguistic advice. We would also like to acknowledge linguistic advice offered by Kevin Scannell in the conversion to UD effort.

Expansion of the IUDT from 2019-2021 is funded by the Irish Government Department of Culture, Heritage and the Gaeltacht.

This research is partially supported by Science Foundation Ireland through the ADAPT Centre for Digital Content Technology. The ADAPT Centre for Digital Content Technology is funded under the SFI Research Centres Programme (Grant 13/RC/2106)
and is co-funded under the European Regional Development Fund.



# Statistics of UD Irish IDT

## POS Tags

[ADJ](ga_idt-pos-ADJ.html) – [ADP](ga_idt-pos-ADP.html) – [ADV](ga_idt-pos-ADV.html) – [AUX](ga_idt-pos-AUX.html) – [CCONJ](ga_idt-pos-CCONJ.html) – [DET](ga_idt-pos-DET.html) – [INTJ](ga_idt-pos-INTJ.html) – [NOUN](ga_idt-pos-NOUN.html) – [NUM](ga_idt-pos-NUM.html) – [PART](ga_idt-pos-PART.html) – [PRON](ga_idt-pos-PRON.html) – [PROPN](ga_idt-pos-PROPN.html) – [PUNCT](ga_idt-pos-PUNCT.html) – [SCONJ](ga_idt-pos-SCONJ.html) – [SYM](ga_idt-pos-SYM.html) – [VERB](ga_idt-pos-VERB.html) – [X](ga_idt-pos-X.html)

## Features

[Abbr](ga_idt-feat-Abbr.html) – [Case](ga_idt-feat-Case.html) – [Definite](ga_idt-feat-Definite.html) – [Degree](ga_idt-feat-Degree.html) – [Dialect](ga_idt-feat-Dialect.html) – [Foreign](ga_idt-feat-Foreign.html) – [Form](ga_idt-feat-Form.html) – [Gender](ga_idt-feat-Gender.html) – [Mood](ga_idt-feat-Mood.html) – [NounType](ga_idt-feat-NounType.html) – [Number](ga_idt-feat-Number.html) – [NumType](ga_idt-feat-NumType.html) – [PartType](ga_idt-feat-PartType.html) – [Person](ga_idt-feat-Person.html) – [Polarity](ga_idt-feat-Polarity.html) – [Poss](ga_idt-feat-Poss.html) – [PrepForm](ga_idt-feat-PrepForm.html) – [PronType](ga_idt-feat-PronType.html) – [Reflex](ga_idt-feat-Reflex.html) – [Tense](ga_idt-feat-Tense.html) – [VerbForm](ga_idt-feat-VerbForm.html) – [Voice](ga_idt-feat-Voice.html)

## Relations

[acl:relcl](ga_idt-dep-acl-relcl.html) – [advcl](ga_idt-dep-advcl.html) – [advmod](ga_idt-dep-advmod.html) – [amod](ga_idt-dep-amod.html) – [appos](ga_idt-dep-appos.html) – [case](ga_idt-dep-case.html) – [case:voc](ga_idt-dep-case-voc.html) – [cc](ga_idt-dep-cc.html) – [ccomp](ga_idt-dep-ccomp.html) – [compound](ga_idt-dep-compound.html) – [compound:prt](ga_idt-dep-compound-prt.html) – [conj](ga_idt-dep-conj.html) – [cop](ga_idt-dep-cop.html) – [csubj:cleft](ga_idt-dep-csubj-cleft.html) – [csubj:cop](ga_idt-dep-csubj-cop.html) – [det](ga_idt-dep-det.html) – [discourse](ga_idt-dep-discourse.html) – [fixed](ga_idt-dep-fixed.html) – [flat](ga_idt-dep-flat.html) – [flat:foreign](ga_idt-dep-flat-foreign.html) – [flat:name](ga_idt-dep-flat-name.html) – [list](ga_idt-dep-list.html) – [mark](ga_idt-dep-mark.html) – [mark:prt](ga_idt-dep-mark-prt.html) – [nmod](ga_idt-dep-nmod.html) – [nmod:poss](ga_idt-dep-nmod-poss.html) – [nsubj](ga_idt-dep-nsubj.html) – [nummod](ga_idt-dep-nummod.html) – [obj](ga_idt-dep-obj.html) – [obl](ga_idt-dep-obl.html) – [obl:prep](ga_idt-dep-obl-prep.html) – [obl:tmod](ga_idt-dep-obl-tmod.html) – [parataxis](ga_idt-dep-parataxis.html) – [punct](ga_idt-dep-punct.html) – [root](ga_idt-dep-root.html) – [vocative](ga_idt-dep-vocative.html) – [xcomp](ga_idt-dep-xcomp.html) – [xcomp:pred](ga_idt-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1763 sentences and 40572 tokens.</li>
</ul>

<ul>
<li>This corpus contains 4408 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 299 types of words that contain both letters and punctuation. Examples: d', b', fho-alt, (b), a', (a), m', 'n, (c), Co., Dr., O', a'm, s', t-am, (d), (ii), Uimh., mb', n-áirítear, t-airgead, t-ábhar, &quot;, 's, (i), an-tóir, fho-ailt, h-Íde, n', n-a, n-oibreacha, n-éireoidh, nua-aimseartha, (f), (iv), .i., Anne-Marie, Ard-Chomhairle, Ard-Mhúsaem, D., I.R., J., Mr., P., Príomh-Acht, an-chuid, bhfo-alt, e.g., i.e., lch.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 42 word types tagged as particles (PART): DA, Mc, Mhac, Mhic, Nic, O', UÍ, Uí, a, a', ab, an, ar, b', ba, d', de, do, dá, faoina, go, gur, ina, inar, is, le, lena, lenar, mac, n', n-a, nach, ná, nár, ní, níor, níos, o, trasna, trína, ó, óna</li>
</ul>

<ul>
<li>This corpus contains 31 lemmas tagged as pronouns (PRON): cad, ceachtar, cibé, cé, céard, ea, eisean, féin, iad, ise, iúd, mise, muid, mé, pé, seisean, seo, siad, sibh, sin, sinn, sise, siúd, sé, sí, that, tusa, té, tú, é, í</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): a, achan, an, aon, cad, cibé, cé, do, eile, gach, gach_uile, iomaí, leath, mo, na, s, seo, sin, siúd, the, uile, ár, úd</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: cad, cibé, cé, seo, sin, siúd</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): is</li>
</ul>

<ul>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Cop
  <ul>
    <li>AUX: is, ba, gur, ní, b', nach, gurb, níor, gurbh, mba</li>
    <li>PART: b', ba, ar, gur, is</li>
    <li>SCONJ: más, ós, dar, darb, Is, Sular, murab</li>
    <li>X: Caidé</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NOUN: bheith, fáil, dhéanamh, chur, rá, dul, cur, thabhairt, siúl, teacht</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: déanta, bunaithe, curtha, imithe, caite, scríofa, tugtha, leagtha, ráite, aontaithe</li>
    <li>NOUN: póilíneachta</li>
    <li>PROPN: Aontaithe</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dul, teacht, iarraidh, obair, cur, éirí, baint, déanamh, faire, brath</li>
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
      <li>ADJ: mhór, mhaith, bheag, éigin, bhreá, chéanna, fada, iomlán, poiblí, sóisialta</li>
      <li>ADP: uirthi, di, aici, ina, léi, á, inti, dá, léithe, chuici</li>
      <li>CCONJ: toisc</li>
      <li>DET: na, a</li>
      <li>NOUN: chuid, leith, bhliain, áit, bliain, uair, cuid, tír, gcuid, oíche</li>
      <li>PRON: sí, í, sise, ise, hí</li>
      <li>PROPN: Gaeilge, hÉireann, Mháire, Éirinn, Ghaeilge, Fraince, Máire, nGaeilge, Éire, hEorpa</li>
      <li>SCONJ: toisc</li>
      <li>X: Ghaelainn, open, shilling</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: mór, éigin, beag, iomlán, fada, óg, chéanna, céanna, áirithe, ard</li>
      <li>ADP: ann, air, ina, leis, aige, á, dá, dó, lena, de</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a</li>
      <li>INTJ: No</li>
      <li>NOUN: duine, rud, fear, lá, chéile, daoine, fad, am, ceann, leabhar</li>
      <li>NUM: fiche</li>
      <li>PART: Mhac, ní, Mac</li>
      <li>PRON: sé, é, seisean, hé, eisean</li>
      <li>PROPN: Átha, Baile, Seán, Bhaile, mBaile, Phádraig, Cill, Pádraig, Euro, Fianna</li>
      <li>VERB: Bain, Tá's</li>
      <li>X: fá, Celtica, Erris, Irish, Kill, Politics, Skinner, Studica, The, Week</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: beaga, éagsúla, móra, óga, difriúla, maithe, áirithe, Sóisialta, aisteacha, deonacha</li>
      <li>ADP: acu, orthu, ina, leo, sna, dóibh, againn, dúinn, á, díobh</li>
      <li>DET: na, a, ár</li>
      <li>NOUN: daoine, dhaoine, cúrsaí, blianta, rudaí, tithe, tíortha, lámha, rialacha, scéalta</li>
      <li>PRON: iad, siad, muid, sibh, sinn, hiad, siadsan, sinne, iadsan</li>
      <li>PROPN: mBaile, Éireannaigh, Coimisinéirí, Eorpach, Mumhan, Stáit, gCill, gConamara, hIceadha, Aontachtaíocha</li>
      <li>VERB: táimid, bhíodar, chuadar, chuamar, mbeidís, rabhadar, Amharcaigí, Bhíomar, Buailimid, Casaimid</li>
      <li>X: bádaí</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mór, mhór, éigin, mhaith, iomlán, chéanna, óg, beag, fada, ard</li>
      <li>ADP: sa, ann, den, ina, air, san, don, leis, ón, faoin</li>
      <li>AUX: sé, An, Cén</li>
      <li>AUX-Cop: sé, Cén</li>
      <li>CCONJ: toisc</li>
      <li>DET: an, na, a, mo, do, m', 'n, a', cén, The</li>
      <li>INTJ: No</li>
      <li>NOUN: duine, rud, bith, chuid, lá, féidir, chéile, fear, leith, bhliain</li>
      <li>NUM: fiche</li>
      <li>PART: níos, Mhac, an, ba, ní, Mac, a'</li>
      <li>PRON: sé, é, mé, sí, í, tú, cén, ea, mise, seisean</li>
      <li>PROPN: Gaeilge, Átha, hÉireann, Baile, Seán, Bhaile, Éirinn, Mháire, Cill, Ghaeilge</li>
      <li>SCONJ: toisc</li>
      <li>VERB: bíodh, féach, cuir, déan, tabhair, bhíos, rabhas, labhair, mbínn, bheifeá</li>
      <li>X: fá, dein, domhsa, Bhraitheas, Celtica, Erris, Ghaelainn, Irish, Kill, Politics</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: cionn, láimh, tigh, gcrích, chois, mbliana, chionn, dtigh, gcionn, gcéin</li>
      <li>PROPN: Éirinn, hÉirinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Shóisialaigh, beaga, dhaonna, eachtraigh, mhóir, speisialta, sóisialta, éagsúla, Caitlicí, Gaelach</li>
      <li>DET: na</li>
      <li>NOUN: cinn, bliana, tíre, airgid, oibre, léinn, scéil, Gaeltachta, scoile, seachtaine</li>
      <li>NOUN-Inf: pleanála, scriosta, Fiosraithe, bailithe, bhreithnithe, chanta, chleachta, claonta, cosanta, craptha</li>
      <li>PROPN: Gaeilge, Átha, hÉireann, Bhaile, mBaile, Fraince, Phádraig, hEorpa, Chaoin, Chill</li>
    </ul>
  </li>
</ul>

<ul>
  <li>NomAcc
    <ul>
      <li>ADJ: éigin, mór, mhaith, chéanna, mhór, óg, beaga, fada, beag, iomlán</li>
      <li>NOUN: rud, chuid, duine, fear, lá, leith, bhliain, chéile, áit, daoine</li>
      <li>NUM: fiche</li>
      <li>PROPN: Seán, Mháire, Ghaeilge, Gaeilge, nGaeilge, Éire, Bhreandán, Chorcaí, Fianna, John</li>
      <li>VERB: Tá's</li>
      <li>X: Kill, open</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: bhó, fheara, Chapaillín, Dhaid, Dhochtúir, Oideachais, Rí, bhithiúnaigh, bhráithre, bran</li>
      <li>PROPN: Dhoráid, Mháire, Mháiréad, Phádraig, Pháidín, Sheáin, Tom</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>AUX: An</li>
      <li>DET: an, na, gach, chuile, 'n, a', a, ngach, achan, iomaí</li>
      <li>NOUN: bhliain, fear, saol, leabhar, lá, duine, méid, bliana, tAire, áit</li>
      <li>NUM: dá, dhá</li>
      <li>PART: an, a'</li>
      <li>PROPN: Gaeilge, hÉireann, Ghaeilge, hEorpa, na, an, Afraic, Cholóim, Coileánach, Coimisinéirí</li>
      <li>X: achan, Ghaelainn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: láimh, oibre, Criosanna, ainmneacha, cionn, dlíthe, gnóthaí, uibheacha</li>
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
      <li>ADJ: mó, fearr, fhearr, déanaí, mhó, faide, measa, báine, caoile, lú</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: maith, amháin, léir, mór, nua, fada, céanna, minic, áirithe, mó</li>
      <li>NOUN: leabhar, ceart, pósta</li>
      <li>PROPN: Náisiúnta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Cop: ní, nach, níor, nár, níorbh, nárbh</li>
      <li>PART: nach, ní, níor, ná, nár, n'</li>
      <li>VERB: raibh, níl, bheidh, bhfuil, fhaca, bhain, chuireann, dhéanfadh, mbeidh, thug</li>
      <li>X: chan, cha, dein, ná</li>
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
      <li>AUX-Cop: Ba, B', mba</li>
      <li>VERB: bheadh, mbeadh, dtiocfadh, fhéadfadh, bhféadfaí, bhféadfadh, dhéanfadh, fhéadfaí, rachadh, thiocfadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd,Int
    <ul>
      <li>VERB: gceapfaí, gcloisfimis, mbeadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: ná</li>
      <li>PROPN: Lig</li>
      <li>VERB: bhíodh, bíodh, féach, cuir, mbíodh, déan, tabhair, dhéanadh, labhair, mbínn</li>
      <li>X: dein</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp,Int
    <ul>
      <li>VERB: mbíodh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: luas</li>
      <li>SCONJ: dar</li>
      <li>VERB: bhí, tá, raibh, atá, bhfuil, bheidh, beidh, thug, chuir, tháinig</li>
      <li>X: dhein, Bhraitheas, chuireas, deineadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Cop: an, nach, nár, Arbh, Cén</li>
      <li>PART: nach</li>
      <li>VERB: mbíonn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>PART: go</li>
      <li>VERB: n-ithe, Loisce, Roinne, bhfeaca, bhfága, chroma, n-imí, ndéileáiltear, raibh, shéide</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>PART: an</li>
      <li>VERB: bheidh, beidh, mbeidh, caithfidh, déanfaidh, féadfaidh, cuirfidh, déanfar, measfaidh, ndéanfar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: Cár</li>
      <li>AUX-Cop: ba, b', gur, níor, gurbh, nár, mba, ab, níorbh, mb'</li>
      <li>PART: gur, níor, ar, nár, b', nach, ba</li>
      <li>PART-Cop: b', ba, gur</li>
      <li>SCONJ: sular, murab</li>
      <li>SCONJ-Cop: Sular, murab</li>
      <li>VERB: bhí, raibh, thug, chuir, tháinig, dúirt, bhíodh, rinne, chuaigh, cuireadh</li>
      <li>X: dhein, chuireas, deineadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Cop: is, ní, gur, nach, gurb, an, sea, ar, nách, sé</li>
      <li>NOUN: luas</li>
      <li>PART-Cop: ar, is</li>
      <li>SCONJ: Is, dar</li>
      <li>SCONJ-Cop: Is</li>
      <li>VERB: tá, atá, bhfuil, níl, deir, bhaineann, dar, adeir, chuireann, leanas</li>
      <li>X: Bhraitheas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Auto
    <ul>
      <li>VERB: cuireadh, rinneadh, foilsíodh, cuirtear, tugadh, bhféadfaí, déantar, faightear, baineadh, dtagraítear</li>
      <li>X: deineadh</li>
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
      <li>ADP: sa, den, san, don, ón, faoin, sna, fén, ins, dena</li>
      <li>AUX: An, Cén</li>
      <li>AUX-Cop: Cén</li>
      <li>DET: an, na, 'n, a', a, The, aon</li>
      <li>PART: an, a'</li>
      <li>PROPN: an, na</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>AUX: Sin, seo</li>
      <li>AUX-Cop: seo, Sin</li>
      <li>DET: seo, sin, eile, úd, san, so, s', siúd</li>
      <li>PRON: sin, seo, shin, siúd, san, in, iúd, súd, that, so</li>
      <li>X: san, so</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADP: againne, agamsa, domsa, liomsa, agatsa, daoibhse, leatsa, airsean, chugamsa, duitse</li>
      <li>PRON: mise, seisean, sise, eisean, ise, siadsan, sinne, tusa, iadsan</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: aon, uile, cibé, haon, n-uile, t-aon</li>
      <li>PRON: pé, Cibé, ceachtar, té, cheachtar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: conas, cá, Cad, Cár</li>
      <li>DET: cad, cén</li>
      <li>PRON: cad, cé, cén, céard</li>
      <li>SCONJ: cé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADP: á, dhá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADP: le</li>
      <li>AUX-Cop: nach, is, ba, ab, nár, nách, nárbh</li>
      <li>NOUN: luas</li>
      <li>PART: a, nach, ina, inar, ar, lena, faoina, nár, dá, n-a</li>
      <li>PART-Cop: ba</li>
      <li>VERB: atá, leanas, bhíos, eireos, atáid, atáimse, chaoinfeas, chuireas, fhéadas, mharcálas</li>
      <li>X: ná</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NOUN: céad</li>
      <li>NUM: dhá, trí, céad, dá, cúig, seacht, sé, ceithre, fiche, deich</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: chéad, dara, gcéad, 18ú, 10ú, tríú, 11ú, 17ú, 26ú, 31ú</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADP: ina, á, dá, lena, faoina, arna, óna, im, dhá, lenár</li>
      <li>DET: a, mo, do, ár, m', d', dh'</li>
      <li>X: a</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: fhéin</li>
      <li>PRON: féin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: liom, agam, orm, againn, dom, dúinn, chugam, chugainn, linn, a'm</li>
      <li>DET: mo, ár, m'</li>
      <li>PRON: mé, muid, mise, sinn, sinne, me</li>
      <li>PROPN: Sinn</li>
      <li>VERB: táimid, bhíos, rabhas, mbínn, chuamar, chuireas, cuirfead, glacaim, leanas, mbeinn</li>
      <li>X: domhsa, Bhraitheas, chuireas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: leat, agat, duit, ort, oraibh, uait, agatsa, asat, daoibhse, dhuit</li>
      <li>DET: do, d', dh'</li>
      <li>PRON: tú, sibh, tusa, thusa, thú</li>
      <li>PROPN: Lig</li>
      <li>VERB: féach, cuir, déan, tabhair, labhair, bheifeá, dóigh, faigh, lig, shílfeá</li>
      <li>X: dein</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: ann, ina, air, leis, á, acu, dá, aige, orthu, dó</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a</li>
      <li>PRON: sé, é, sí, iad, í, siad, ea, seisean, hé, sise</li>
      <li>VERB: bíodh, bhíodar, chuadar, mbeidís, rabhadar, Chuiridís, Sheoladar, atáid, bhailíodar, bheidís</li>
      <li>X: fá, a</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: KB, i.e.</li>
          <li>NUM: 1A, 3B, A, S1067</li>
          <li>PROPN: UNDDSMS</li>
          <li>SYM: post@clubsult.com</li>
          <li>X: Co., Dr., FÁS, RTÉ, Uimh., Dr, 4C, A, D., I.R.</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Dialect</a>
    <ul>
      <li>Connaught
        <ul>
          <li>X: Caidé</li>
        </ul>
      </li>
      <li>Munster
        <ul>
          <li>DET: san, so</li>
          <li>PRON: san, so</li>
          <li>VERB: dhein</li>
          <li>X: dhein, age, dein, des, fachta, ná, Bhraitheas, Ghaelainn, chuireas, deineadh</li>
        </ul>
      </li>
      <li>Ulster
        <ul>
          <li>ADP: domh</li>
          <li>AUX-Cop: chan</li>
          <li>DET: achan</li>
          <li>X: fá, chan, achan, cha, domhsa, Caidé, bádaí, choinne</li>
          <li>X-Cop: Caidé</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: necessary, other, white</li>
          <li>ADJ-Part: white</li>
          <li>ADP: by</li>
          <li>DET: The</li>
          <li>NOUN: Office, Regeneration, tasks, cheap</li>
          <li>PROPN: major</li>
          <li>VERB: bheitheá, deemed</li>
          <li>X: The, tally, -e, Comptroller-General, Cyrano, Diamond, End, Era, Forget, Green</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Form</a>
    <ul>
      <li>Ecl
        <ul>
          <li>ADJ: chéanna, gcéanna</li>
          <li>AUX-Cop: mba</li>
          <li>DET: ngach, gach</li>
          <li>NOUN: gcás, gcuid, gceist, ndóigh, dtaobh, gcónaí, mbliana, bhfeidhm, gcomhairle, mbaile</li>
          <li>NOUN-Inf: gcur, ndéanamh, bhfeidhmiú, bhféachaint, bhfíorú, gcailliúint, gcaitheamh, gcló, gcomhlíonadh, gcomhnascadh</li>
          <li>NOUN-Vnoun: titim</li>
          <li>NUM: gcéad, dtríú, gceithre, n-aon, naoi</li>
          <li>PART: n-a</li>
          <li>PROPN: mBaile, nGaeilge, nGaillimh, Mumhan, bhFrainc, gCill, gConamara, Feirste, Macha, Mullen</li>
          <li>VERB: bhfuil, raibh, mbeadh, mbeidh, mbíonn, dtiocfadh, bhfaca, mbíodh, mbaineann, bhféadfaí</li>
        </ul>
      </li>
      <li>Ecl,Emp
        <ul>
          <li>VERB: bhféadfainnse, mbínnse</li>
        </ul>
      </li>
      <li>Emp
        <ul>
          <li>NOUN: liostasa</li>
          <li>VERB: Creidimidne, atáimse, deirimse, gcaithfeadsa, nílirse</li>
          <li>X: domhsa</li>
        </ul>
      </li>
      <li>HPref
        <ul>
          <li>ADJ: háirithe, hamháin, hiomlán, hiontach, héifeachtach, han-luath, han-mhaith, hingearach, háitiúil, hálainn</li>
          <li>ADP: hair</li>
          <li>DET: haon</li>
          <li>NOUN: háit, haghaidh, hordú, haigne, haois, heagraíochtaí, háiteanna, húsáid, hOileáin, hOllscoile</li>
          <li>NOUN-Inf: húsáid, haisíoc, himeacht, hithe, hordú, hól</li>
          <li>NUM: haon</li>
          <li>PRON: hé</li>
          <li>PROPN: h-Íde, hIaráice, hÉirinn, mí</li>
        </ul>
      </li>
      <li>Len
        <ul>
          <li>ADJ: chóir, mhaith, cheart, céanna, chéanna, Bhriotáineach, bheag, mhór, phoiblí, bhreá</li>
          <li>ADJ-Part: Bhunaithe, shuidhte</li>
          <li>ADP: dhaoibh, dhom, dhíobh, dhó, dhóibh, dhúinn</li>
          <li>ADV: Thuaidh</li>
          <li>NOUN: bheith, chur, dhéanamh, chuid, chéile, thabhairt, thaobh, bhaint, fhios, bhliain</li>
          <li>NOUN-Inf: bheith, chur, dhéanamh, thabhairt, bhaint, fháil, chaitheamh, choinneáil, dhul, bhualadh</li>
          <li>NUM: chéad, dhó, cheathrú, cheithre, chúig, mhíle, thrí, dheich, sheacht, sheasca</li>
          <li>PART: Mhac</li>
          <li>PRON: cheachtar, thusa, thú</li>
          <li>PROPN: Átha, Bhaile, Mháire, Phádraig, Bhreandán, Chill, Chonamara, Ghaeilge, Mhaigh, Bhéal</li>
          <li>VERB: bhí, raibh, bheidh, bhíonn, thug, chuir, tháinig, bheadh, bhíodh, chuaigh</li>
          <li>X: dhein, The, chuireas</li>
        </ul>
      </li>
      <li>VF
        <ul>
          <li>AUX-Cop: b', gurb, gurbh, ab, níorbh, mb', Arbh, nárbh</li>
          <li>PART-Cop: b'</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NounType</a>
    <ul>
      <li>NotSlender
        <ul>
          <li>ADJ: beaga, móra, difriúla, fiara, ingearacha, maithe, príomhúla, seachtracha, óga, Oilimpeacha</li>
          <li>PROPN: Beaga</li>
        </ul>
      </li>
      <li>Slender
        <ul>
          <li>ADJ: éagsúla, áitiúla, óga, Chonallacha, aisteacha, bhradacha, bhréana, chuí, cháilitheacha, dheonacha</li>
        </ul>
      </li>
      <li>Strong
        <ul>
          <li>ADJ: beaga, éagsúla, Ultacha, bána, comhionanna, deonacha, difriúla, gairide, inmheánacha, lán-aimseartha</li>
          <li>NOUN: daoine, oibreacha, ban, n-oibreacha, ndaoine, scríbhneoirí, amhránaithe, ceoltóirí, cásanna, cúrsaí</li>
          <li>PROPN: Fíoncheannaithe</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>ADJ: Gaelach, cliniciúil, díograiseach, mór, orgánach, plaisteach, saor</li>
          <li>NOUN: súl, Fiontar, Náisiún, bhflaitheas, bhfocal, bord, bpobal, breiseán, crann, fear</li>
          <li>PROPN: Eorpach, Bhaisleac, Cúng, gCeantar, Árann, Éireannach</li>
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
          <li>PART: go, le</li>
        </ul>
      </li>
      <li>Cmpl
        <ul>
          <li>AUX-Cop: nach</li>
          <li>PART: go, nach, nár, ná</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>AUX-Cop: ba</li>
          <li>NOUN: ní, ba, níos</li>
          <li>PART: níos, ba, ní</li>
          <li>PART-Cop: ba</li>
        </ul>
      </li>
      <li>Cop
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>ADP: dá</li>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>PART: a, do, trasna, a'</li>
        </ul>
      </li>
      <li>Num
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PART: ó, mac, de, Uí, Ní, Mhic, O', Nic, Mc, O</li>
          <li>PROPN: Ó</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>PART: a, d', ní, gur, nach, do, an, níor, ar, ná</li>
          <li>X: chan, cha, ná</li>
        </ul>
      </li>
      <li>Voc
        <ul>
          <li>ADJ: chairdiúil, uaisle, Eachtraigh, chóir, fáinneach, ghil, ghrinn</li>
          <li>PART: a</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepForm</a>
    <ul>
      <li>Cmpd
        <ul>
          <li>ADP: i, ar, de, go, tar, le, in, réir, os, éis</li>
          <li>X: choinne, fá</li>
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
      <li>VERB--NOUN (458)</li>
      <li>VERB--NOUN-ADP(de) (1)</li>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--NOUN-Gen (9)</li>
      <li>VERB--NOUN-NomAcc (618)</li>
      <li>VERB--NOUN-NomAcc-ADP(le) (1)</li>
      <li>VERB--PRON (685)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (259)</li>
      <li>VERB--NOUN-ADP(ar) (1)</li>
      <li>VERB--NOUN-ADP(de) (1)</li>
      <li>VERB--NOUN-ADP(le) (1)</li>
      <li>VERB--NOUN-ADP(um) (1)</li>
      <li>VERB--NOUN-Gen (7)</li>
      <li>VERB--NOUN-Gen-ADP(chun) (1)</li>
      <li>VERB--NOUN-NomAcc (348)</li>
      <li>VERB--NOUN-NomAcc-ADP(as) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(le) (1)</li>
      <li>VERB--PRON (132)</li>
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
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>case:voc</a>, <a>compound:prt</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>mark:prt</a>, <a>nmod:poss</a>, <a>obl:prep</a>, <a>obl:tmod</a>, <a>xcomp:pred</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>acl</a>, <a>csubj</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>aux</a>, <a>clf</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
