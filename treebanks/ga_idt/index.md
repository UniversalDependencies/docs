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

The following people have contributed to making this treebank part of UD: Teresa Lynn, Jennifer Foster, Sarah McGuinness, Abigail Walsh, Jason Phelan, Kevin Scannell.

Repository: [UD_Irish-IDT](https://github.com/UniversalDependencies/UD_Irish-IDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_idt29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 3.0

Genre: news, fiction, web, legal, government

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
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

A Universal Dependencies 4910-sentence treebank for modern Irish.



The Irish UD Treebank (IUDT) is a conversion of the Irish Dependency Treebank
(IDT), which was part of a PhD research project by Teresa Lynn at Dublin City University, Ireland (Lynn, 2016).

---- The (smaller) IDT dataset has also been released on [GitHub]
(https://github.com/tlynn747/IrishDependencyTreebank). ----

The Treebank contains 4910 sentences.

The first 2924 of which were taken from the New Corpus of Ireland-Irish (NCII), with text from books, newswire, websites and other media. These sentences are a subset of a gold-standard POS-tagged corpus for Irish made available by Elaine Uí Dhonnchadha of Trinity College Dublin. ----

The subsequent 1986 sentences were taken from a corpus of Irish public administration translations and are available under the Open Data (PSI) directive for sharing of pubic data:
Citizens information website: (20%)
Dublin City Council (DCC): (25%)
DEpartment of Culture, Heritage and the Gaeltacht (DCHG):(9%)
Udaras na Gaeltachta: (25%)
EUbookshop: (21%)



The conversion from the IDT annotation scheme to the UD annotation scheme for the first release (1020 IDT trees) was designed by Teresa Lynn and Jennifer Foster at Dublin City University, Ireland. The mapping to UD is reported in Lynn et al., (2016) Conversion of sentences 1-1020 was automatic, with manual review. Subsequent updates or changes have been a combination of automatic labelling and manual review.
All trees with sentence ID greater than 1021 were created through an automatic pre-parsing approach followed by manual review.

The UD Treebank is split into two sets as follows:

* 454 trees (test)
* 451 trees (dev)
* 4005 trees (train)

Note: the 451 dev trees were taken from the set of newly annotated
trees in the v2.5 release. Selection of test sentences haven't changed since v1.0
(but annotations and quality have!)


## Acknowledgments

We wish to thank all of the contributors to the original IDT annotation, including Elaine Uí Dhonnchadha for her gold POS-tagged corpus and linguistic advice. We would also like to acknowledge linguistic advice offered by Kevin Scannell in the conversion to UD effort.

Expansion of the IUDT from 2019-2021 is funded by the Irish Government
Department of Culture, Heritage and the Gaeltacht under the GaelTech project.

This research is partially supported by Science Foundation Ireland through the ADAPT Centre for Digital Content Technology. The ADAPT Centre for Digital Content Technology is funded under the SFI Research Centres Programme (Grant 13/RC/2106)
and is co-funded under the European Regional Development Fund.



# Statistics of UD Irish IDT

## POS Tags

[ADJ](ga_idt-pos-ADJ.html) – [ADP](ga_idt-pos-ADP.html) – [ADV](ga_idt-pos-ADV.html) – [AUX](ga_idt-pos-AUX.html) – [CCONJ](ga_idt-pos-CCONJ.html) – [DET](ga_idt-pos-DET.html) – [INTJ](ga_idt-pos-INTJ.html) – [NOUN](ga_idt-pos-NOUN.html) – [NUM](ga_idt-pos-NUM.html) – [PART](ga_idt-pos-PART.html) – [PRON](ga_idt-pos-PRON.html) – [PROPN](ga_idt-pos-PROPN.html) – [PUNCT](ga_idt-pos-PUNCT.html) – [SCONJ](ga_idt-pos-SCONJ.html) – [SYM](ga_idt-pos-SYM.html) – [VERB](ga_idt-pos-VERB.html) – [X](ga_idt-pos-X.html)

## Features

[Abbr](ga_idt-feat-Abbr.html) – [Aspect](ga_idt-feat-Aspect.html) – [Case](ga_idt-feat-Case.html) – [Definite](ga_idt-feat-Definite.html) – [Degree](ga_idt-feat-Degree.html) – [Dialect](ga_idt-feat-Dialect.html) – [Foreign](ga_idt-feat-Foreign.html) – [Form](ga_idt-feat-Form.html) – [Gender](ga_idt-feat-Gender.html) – [Mood](ga_idt-feat-Mood.html) – [NounType](ga_idt-feat-NounType.html) – [Number](ga_idt-feat-Number.html) – [NumType](ga_idt-feat-NumType.html) – [PartType](ga_idt-feat-PartType.html) – [Person](ga_idt-feat-Person.html) – [Polarity](ga_idt-feat-Polarity.html) – [Poss](ga_idt-feat-Poss.html) – [PrepForm](ga_idt-feat-PrepForm.html) – [PronType](ga_idt-feat-PronType.html) – [Reflex](ga_idt-feat-Reflex.html) – [Tense](ga_idt-feat-Tense.html) – [Typo](ga_idt-feat-Typo.html) – [VerbForm](ga_idt-feat-VerbForm.html)

## Relations

[acl](ga_idt-dep-acl.html) – [acl:relcl](ga_idt-dep-acl-relcl.html) – [advcl](ga_idt-dep-advcl.html) – [advmod](ga_idt-dep-advmod.html) – [amod](ga_idt-dep-amod.html) – [appos](ga_idt-dep-appos.html) – [case](ga_idt-dep-case.html) – [case:voc](ga_idt-dep-case-voc.html) – [cc](ga_idt-dep-cc.html) – [ccomp](ga_idt-dep-ccomp.html) – [compound](ga_idt-dep-compound.html) – [compound:prt](ga_idt-dep-compound-prt.html) – [conj](ga_idt-dep-conj.html) – [cop](ga_idt-dep-cop.html) – [csubj:cleft](ga_idt-dep-csubj-cleft.html) – [csubj:cop](ga_idt-dep-csubj-cop.html) – [det](ga_idt-dep-det.html) – [discourse](ga_idt-dep-discourse.html) – [dislocated](ga_idt-dep-dislocated.html) – [fixed](ga_idt-dep-fixed.html) – [flat](ga_idt-dep-flat.html) – [flat:foreign](ga_idt-dep-flat-foreign.html) – [flat:name](ga_idt-dep-flat-name.html) – [goeswith](ga_idt-dep-goeswith.html) – [list](ga_idt-dep-list.html) – [mark](ga_idt-dep-mark.html) – [mark:prt](ga_idt-dep-mark-prt.html) – [nmod](ga_idt-dep-nmod.html) – [nmod:poss](ga_idt-dep-nmod-poss.html) – [nsubj](ga_idt-dep-nsubj.html) – [nummod](ga_idt-dep-nummod.html) – [obj](ga_idt-dep-obj.html) – [obl](ga_idt-dep-obl.html) – [obl:prep](ga_idt-dep-obl-prep.html) – [obl:tmod](ga_idt-dep-obl-tmod.html) – [orphan](ga_idt-dep-orphan.html) – [parataxis](ga_idt-dep-parataxis.html) – [punct](ga_idt-dep-punct.html) – [root](ga_idt-dep-root.html) – [vocative](ga_idt-dep-vocative.html) – [xcomp](ga_idt-dep-xcomp.html) – [xcomp:pred](ga_idt-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4910 sentences and 115990 tokens.</li>
</ul>

<ul>
<li>This corpus contains 11650 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 620 types of words that contain both letters and punctuation. Examples: d', d’, b', n-áirítear, nua-aimseartha, (b), m', (a), a', fho-alt, t-ábhar, Teo., Co., 'n, (c), t-airgead, t-aon, n-oileán, s', srl., 's, O', n-ealaíon, t-am, Uimh., a'm, &quot;, 'na, (i), Dr., T.D., an-chuid, i.e., mb', n-éireoidh, n-úsáid, t-athrú, t-iomlán, (d), (ii), Dublin.ie, an-dearfach, an-mhór, an-tábhachtach, c(h)ónaí, e.g., m.sh., n', t-ainm, t-aistriú</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 44 word types tagged as particles (PART): DA, Mag, Mc, Mhac, Mhic, Nic, O, O', O’, UÍ, Uí, a, ab, an, ar, b', ba, cha, chan, d', de, do, dá, d’, faoina, go, gur, ina, inar, is, le, lena, lenar, mac, n', n-a, nach, ná, nár, ní, níor, níos, trína, ó</li>
</ul>

<ul>
<li>This corpus contains 36 lemmas tagged as pronouns (PRON): a, ar, cad, cad_é, ceachtar, cibé, cé, céard, ea, eisean, eo, féin, iad, is, ise, iúd, mise, muid, mé, pé, seisean, seo, siad, sibh, sin, sinn, sise, siúd, sé, séard, sí, that, tusa, tú, é, í</li>
</ul>

<ul>
<li>This corpus contains 22 lemmas tagged as determiners (DET): a, achan, all, an, aon, bhur, cibé, do, eile, gach, gach_aon, gach_uile, leath, mo, s, seo, sin, siúd, the, uile, ár, úd</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as PRON and sometimes as DET: a, cibé, seo, sin, siúd</li>
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
    <li>AUX: is, ba, ní, gur, b', nach, ar, gurb, nár, an</li>
    <li>PART: ba, b'</li>
    <li>PRON: Caidé, cér, cérbh</li>
    <li>SCONJ: más, ós, mura, arb, murar, dar, murab, Sular</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NOUN: fáil, chur, dhéanamh, bheith, cur, thabhairt, dul, siúl, rá, teacht</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: déanta, curtha, bunaithe, leagtha, aontaithe, caite, tugtha, scríofa, dírithe, fostaithe</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dul, obair, teacht, cur, baint, iarraidh, déanamh, freastal, brath, tabhairt</li>
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
      <li>ADJ: nua, náisiúnta, mhór, éagsúla, poiblí, amháin, idirnáisiúnta, mhaith, ildánach, áitiúil</li>
      <li>ADP: uirthi, di, ina, aici, léi, á, dá, inti, lena, chuici</li>
      <li>DET: na, a, 'na, n-a</li>
      <li>NOUN: chuid, réir, leith, bhfeidhm, bliana, cathrach, bhliain, bliain, cuid, áit</li>
      <li>NOUN-Inf: dtabhairt, nginiuint, reáchtáil</li>
      <li>PRON: sí, í, sise, ise, hí</li>
      <li>PROPN: cliath, Gaeltachta, Gaeilge, hÉireann, Ghaeltacht, Chomhairle, Éirinn, Ghaeilge, hEorpa, Ghaeltachta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem,Masc
    <ul>
      <li>ADP: ina, dá, lena</li>
      <li>DET: a</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: nua, mór, amháin, sibhialta, céanna, náisiúnta, áirithe, áitiúil, áitiúla, Eorpach</li>
      <li>ADP: ann, ina, leis, air, á, aige, dá, dó, lena, chuige</li>
      <li>AUX-Cop: sé</li>
      <li>DET: an, a, a'</li>
      <li>NOUN: duine, chéile, daoine, rud, cinn, ábhar, lá, pobail, am, bith</li>
      <li>NOUN-Inf: soláthar, athinfheistiú, dhéanamh, dtíolacadh, gcothú, hiniúchadh, lorg, scríbbh, sheoladh, áiteamh</li>
      <li>PRON: sé, é, seisean, hé, eisean, éard, se</li>
      <li>PROPN: Átha, Bhaile, Údarás, Baile, Seán, Coimisiún, mBaile, Béarla, Fómhair, Údaráis</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: éagsúla, nua, áirithe, áitiúla, náisiúnta, poiblí, beaga, óga, réigiúnacha, speisialta</li>
      <li>ADP: acu, sna, leo, orthu, ina, dóibh, againn, á, lena, dúinn</li>
      <li>DET: na, a, ár, bhur, á</li>
      <li>NOUN: daoine, seirbhísí, páistí, dhaoine, ealaíon, pháistí, rialacha, gnóthaí, imeachtaí, leabharlanna</li>
      <li>PRON: iad, siad, muid, sibh, sinn, siadsan, hiad, iadsan, sinne, said</li>
      <li>PROPN: cliath, nGall, Fianna, Gaeltachtaí, Gael, Árann, Gaeil, Coistí, Cúirteanna, Doirí</li>
      <li>VERB: táimid, ceannaímid, bhíodar, cuirimid, déanfaimid, roghnaímid, faighimid, féachaimid, glacaimid, mbeimid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: nua, amháin, mór, náisiúnta, sibhialta, áitiúil, céanna, mhór, iomlán, Eorpach</li>
      <li>ADP: sa, den, ann, don, ina, san, ón, leis, á, air</li>
      <li>AUX-Cop: sé</li>
      <li>DET: an, na, a, do, mo, d', m', a', 'n, d’</li>
      <li>NOUN: duine, féidir, chuid, chéile, réir, rud, leith, éis, cinn, bhfeidhm</li>
      <li>NOUN-Inf: soláthar, athinfheistiú, dhéanamh, dtabhairt, dtíolacadh, gcothú, hiniúchadh, lorg, nginiuint, reáchtáil</li>
      <li>PART: ba, ní</li>
      <li>PRON: sé, é, sí, mé, í, tú, cén, ea, mise, seisean</li>
      <li>PROPN: Átha, Bhaile, Gaeltachta, Gaeilge, hÉireann, Údarás, Ghaeltacht, Chomhairle, Éirinn, Baile</li>
      <li>VERB: féach, bíodh, déan, cuir, tabhair, táim, bhíos, déarfá, fheadar, rabhas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: leith, cionn, gcrích, mbliana, láimh, chois, cois, gcéin, chionn, gcionn</li>
      <li>PROPN: Éirinn, hÉirinn, Tigh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Eorpaigh, réigiúnacha, náisiúnta, poiblí, áitiúil, nua, sóisialta, sibhialta, éagsúla, idirnáisiúnta</li>
      <li>DET: na, an, a', a, 'na</li>
      <li>NOUN: cinn, cathrach, bliana, pobail, forbartha, oibre, tuaithe, phobail, oideachais, imeachta</li>
      <li>NOUN-Inf: pleanála, dhéanta, Fiosraithe, Gaelscolaíochta, athainmnithe, bearrtha, bhreithnithe, chanta, chleachta, claonta</li>
      <li>NOUN-Vnoun: dhúnadh, fhiosraithe</li>
      <li>PROPN: Átha, cliath, Gaeltachta, Gaeilge, hÉireann, Bhaile, hEorpa, Ghaeltachta, Éireann, Fómhair</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: nua, amháin, náisiúnta, mór, éagsúla, céanna, sibhialta, áirithe, idirnáisiúnta, iomlán</li>
      <li>NOUN: féidir, chuid, duine, réir, rud, éis, bhfeidhm, lá, daoine, bhliain</li>
      <li>NOUN-Inf: fhoilsiú, soláthar, Fhorbairt, Shaoráil, athfhorasú, athinfheistiú, athréimniú, bharbarú, bhunú, dhéanamh</li>
      <li>PROPN: Bhaile, Ghaeltacht, Seán, Coimisiún, Chathair, Éire, Ghaeilge, Údarás, Mháire, Dhún</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: ghil</li>
      <li>NOUN: bhó, dhochtúir, Chapaillín, Dhaid, LIA, Rí, bhithiúnaigh, bhráithre, bhráthair, chumannaigh</li>
      <li>PROPN: Mháire, Sheáin, Shéamais, Tom, Bheartla, Bhobby, Chití, Dhoráid, Fhinn, Learaí</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: an, na, gach, ngach, chuile, a, a', 'n, achan, 'na</li>
      <li>NOUN: chuid, chéile, bhliain, duine, bliana, gcuid, lá, am, roinn, Airteagal</li>
      <li>NOUN-Inf: dhéanamh, chur, lorg, gcur, cur, mhaoiniú, chinntiú, rá, déanamh, iarraidh</li>
      <li>NOUN-Vnoun: bunú, Ceiliúradh, Cumhachtú, bheartú, bhunú, chinntiú, deireadh, dtabhairt, dul, fhiosraithe</li>
      <li>PROPN: Átha, cliath, Bhaile, Gaeltachta, Gaeilge, Údarás, hÉireann, Ghaeltacht, Chomhairle, Éirinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: gnóthaí, oibre, dlíthe, láimh, Criosanna, ainmneacha, cionn</li>
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
      <li>ADJ: mó, fearr, déanaí, faide, lú, fhearr, airde, gaire, leithne, luaithe</li>
      <li>ADJ-Part: réitithe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: maith, mór, amháin, léir, minic, sásta, fada, háirithe, tábhachtach, saor</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Cop: ní, nach, nár, níor, níorbh, nárbh, chan, nách</li>
      <li>PART: nach, ní, níor, nár, ná, chan, n', cha</li>
      <li>VERB: níl, raibh, bhfuil, bheidh, mbeadh, mbeidh, bheadh, dhéanfaidh, fhaca, bhfaca</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Hab
    <ul>
      <li>VERB: bhíonn, bíonn, mbíonn, Bím, bhíos, bhímid, bímid, Bítear, mbímid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: bhíodh, mbíodh, dhéanadh, chuirtí, mbínn, thagadh, Théadh, bhídís, dtugadh, ligeadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Cop: ba, B', mba</li>
      <li>VERB: mbeadh, bheadh, fhéadfadh, dtiocfadh, bhféadfadh, rachadh, bhféadfaí, fhéadfaí, gcuirfeadh, gcuirfí</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cnd,Int
    <ul>
      <li>VERB: mbeadh, bhfeicfeadh, bhfillfinn, bhféadfainn, bhféadfá, dteipfeadh, gceapfaí, gcloisfimis, soláthróinn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: ná</li>
      <li>VERB: féach, bíodh, déan, cuir, tabhair, téigh, Léigh, bain, dein, labhair</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: tá, bhí, atá, bhfuil, raibh, beidh, bheidh, níl, mbeidh, thug</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Cop: an, nach, nár, arbh, arb</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>PART: go, Nár</li>
      <li>VERB: bhfeaca, bhfeice, bhfága, chroma, lige, n-imí, n-ithe, raibh, sábhála</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: beidh, bheidh, mbeidh, féadfaidh, déanfaidh, cuirfidh, déanfar, cuirfear, caithfidh, tabharfaidh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: Cár</li>
      <li>AUX-Cop: ba, b', gur, nár, ar, gurbh, níor, níorbh, mba, ab</li>
      <li>PART: gur, níor, nár, ar, ba, inar, b', lenar</li>
      <li>PART-Cop: ba, b'</li>
      <li>SCONJ: sular, murar, sarar</li>
      <li>SCONJ-Cop: murar, Sular</li>
      <li>VERB: bhí, raibh, thug, tháinig, chuir, dúirt, cuireadh, rinne, bhíodh, rinneadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Cop: is, ní, gur, nach, ar, gurb, an, sé, sea, dar</li>
      <li>SCONJ-Cop: mura, murab</li>
      <li>VERB: tá, atá, bhfuil, níl, bhaineann, bhíonn, bíonn, leanas, cuireann, cuirtear</li>
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
      <li>ADP: sa, den, don, san, ón, faoin, sna, fén, ins, insa</li>
      <li>DET: an, na, a, a', 'n, 'na, un</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>AUX-Cop: sin, seo</li>
      <li>DET: seo, sin, eile, úd, san, so, s', siúd, siud</li>
      <li>PRON: sin, seo, siúd, shin, san, hin, in, cibé, iúd, shoin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADP: againne, domsa, agamsa, leatsa, liomsa, duitse, ormsa, agatsa, daoibhse, domhsa</li>
      <li>PRON: mise, seisean, tusa, eisean, sise, ise, siadsan, iadsan, sinne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: aon, uile, cibé, uilig, t-aon, haon, n-uile</li>
      <li>PRON: pé, ceachtar, Cibé, cheachtar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: conas, cá, Cár</li>
      <li>PRON: cad, cé, céard, cén, c, cér, cérbh</li>
      <li>PRON-Cop: cér, cérbh</li>
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
      <li>ADP: dá, faoina, lenar</li>
      <li>AUX-Cop: is, nach, ba, ab, nár, ar, nárbh, inar, nách</li>
      <li>PART: a, ina, nach, lena, ar, dá, inar, nár, faoina, ná</li>
      <li>PRON: a, ar</li>
      <li>VERB: atá, leanas, bheas, atáim, atáthar, eireos, fholmhaíos, tharlós, ata, atáid</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: trí, dhá, dá, cúig, seacht, sé, céad, deich, fiche, ceithre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: chéad, dara, tríú, gcéad, 18ú, seachtú, naoú, 10ú, 11ú, ceathrú</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADP: ina, á, dá, lena, arna, faoina, óna, inár, dár, lenár</li>
      <li>DET: a, do, mo, d', ár, m', bhur, d’, dh', n-a</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: féin, fhéin, fein</li>
      <li>PROPN: Féin, Fein</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB: cuireadh, rinneadh, cuirtear, n-áirítear, déanfar, déantar, cuirfear, tugadh, foilsíodh, ndéantar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: liom, againn, agam, orm, dom, dúinn, linn, romhainn, orainn, chugainn</li>
      <li>DET: mo, ár, m'</li>
      <li>PRON: mé, muid, mise, sinn, sinne, me</li>
      <li>VERB: táimid, táim, bhíos, ceannaímid, fheadar, rabhas, Bím, chuireas, creidim, cuirimid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: leat, duit, agat, ort, uait, agaibh, leatsa, libh, oraibh, daoibh</li>
      <li>DET: do, d', bhur, d’, dh'</li>
      <li>PRON: tú, sibh, tusa, thú, thusa</li>
      <li>VERB: féach, déan, cuir, tabhair, déarfá, téigh, Léigh, bain, bhféadfá, dein</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: ina, ann, á, leis, air, acu, dá, aige, lena, leo</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a, n-a, á</li>
      <li>PRON: sé, é, iad, siad, sí, í, ea, seisean, hé, eisean</li>
      <li>VERB: bíodh, bhíodar, rabhadar, Dáileadh, bhfuilid, bhídís, chuadar, chuireadar, mbeidís, ndéanfaidís</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: Teo., Teo, Ltd</li>
          <li>ADV: i.e., e.g., srl., m.sh., .i., KB, etc</li>
          <li>NOUN: Co., Uimh., Dr., Dr, m, srl., 4C, CD-ROM, EUR, I.R.</li>
          <li>NUM: 1A, 3B, J., S1067</li>
          <li>PROPN: AE, AIE, UNESCO, BCE, TG4, MABS, RTÉ, TD, DCPL, FLAC</li>
          <li>SYM: Dublin.ie, Gcom, King.com, post@clubsult.com</li>
          <li>X: A, .i., IRA, Uimh.</li>
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
          <li>ADP: acub</li>
          <li>ADV: indiu</li>
          <li>NOUN: ceantracha, nuaíochta</li>
          <li>PRON: Caidé</li>
        </ul>
      </li>
      <li>Munster
        <ul>
          <li>ADP: age, des</li>
          <li>DET: san, so</li>
          <li>NOUN: tigh, thigh</li>
          <li>PART: ná</li>
          <li>PRON: san, so</li>
          <li>PROPN: Ghaelainn</li>
          <li>VERB: dhein, deineadh, dein, Bhraitheas, bhfuilid, chuireas, chífeá, dhineann, dtaibhreoid</li>
        </ul>
      </li>
      <li>Ulster
        <ul>
          <li>ADP: fá, domhsa, domh</li>
          <li>AUX-Cop: chan</li>
          <li>DET: achan</li>
          <li>NOUN: bhomaite, bádaí, cha, choinne, momaite</li>
          <li>PART: chan, cha</li>
          <li>PRON-Cop: Caidé</li>
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
          <li>ADJ: general, strong, white, Ltd</li>
          <li>ADP: in</li>
          <li>DET: all, The</li>
          <li>NOUN: euro, of, tOmbudsman, abalone, Captains, Enterprise, FRANCA, Jail-Deliverer, LINGUA, Ombudsman</li>
          <li>PRON: eo, that</li>
          <li>PROPN: John, Margaret, Henrietta, Humphreys, Ombudsman, Eurojust, Gilbert, Hayes, Ireland, Richmond</li>
          <li>SYM: www.citizensinformation.ie, www.dublin.ie</li>
          <li>X: the, Irish, of, Life, for, Port, Preparing, Read, Right, to</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Form</a>
    <ul>
      <li>Direct
        <ul>
          <li>PART: a, nach, nár, do, ná</li>
          <li>VERB: atá, atáim, atáthar, ata, atáid, tá</li>
        </ul>
      </li>
      <li>Direct,Emp
        <ul>
          <li>VERB: atáimse</li>
        </ul>
      </li>
      <li>Ecl
        <ul>
          <li>ADJ: bhfurast, dtréan, gcéanna</li>
          <li>ADP: dtí</li>
          <li>AUX-Cop: mba</li>
          <li>DET: ngach, n-a, n-uile</li>
          <li>NOUN: bhfeidhm, dtí, gcuid, gceist, gcás, mbliana, gcomhairle, gcónaí, ndiaidh, mbun</li>
          <li>NOUN-Inf: gcur, ndéanamh, n-úsáid, bhfeidhmiú, gceadú, mbunú, bhfeiceáil, bhfoilsiú, bhfáil, bhféachaint</li>
          <li>NOUN-Vnoun: dtabhairt, gcaitheamh, nglacadh</li>
          <li>NUM: gcéad, dtríú, gceithre, gcúig, gcúigiú, n-aon</li>
          <li>PROPN: mBaile, nGall, gCoimisiún, gCúirt, nGaeilge, gConamara, gClár, nDún, nGaillimh, bhFrainc</li>
          <li>VERB: bhfuil, mbeadh, mbeidh, mbíonn, n-áirítear, mbaineann, ndéantar, dtagraítear, dtiocfadh, mbíodh</li>
          <li>X: nAll</li>
        </ul>
      </li>
      <li>Ecl,Emp
        <ul>
          <li>VERB: bhfeicimidne, bhféadfainnse, gcaithfeadsa, gceapaimse, mbínnse</li>
        </ul>
      </li>
      <li>Ecl,Indirect
        <ul>
          <li>PART: n-a</li>
        </ul>
      </li>
      <li>Ecl,VF
        <ul>
          <li>AUX-Cop: mb'</li>
        </ul>
      </li>
      <li>Emp
        <ul>
          <li>NOUN: Roinnse, achomharcsa, leithscéalsa, liostasa</li>
          <li>VERB: deirimse, Creidimidne, Feicimse, Tabharfadsa, Táimse, adeirimse, cloisimse, déarfainnse, nílirse</li>
        </ul>
      </li>
      <li>Emp,Len
        <ul>
          <li>NOUN: thuairimse, chroíse, ghrúpa-san, mháthairse</li>
          <li>VERB: bhainfinnse, fheadarsa, thuigeadarsan, thángas-sa</li>
        </ul>
      </li>
      <li>HPref
        <ul>
          <li>ADJ: háirithe, hiomlán, hamháin, hidirnáisiúnta, hiondúil, huathoibríoch, hálainn, héifeachtach, hiontach, han-mhaith</li>
          <li>ADP: hair</li>
          <li>DET: haon</li>
          <li>NOUN: haghaidh, haois, heagraíochtaí, hathruithe, hinstitiúidí, húdaráis, healaíona, hoíche, háite, hAirteagal</li>
          <li>NOUN-Inf: húsáid, híoc, haisíoc, haithint, hasbhaint, hathbhreithniú, hathréimiú, himeacht, himirt, hiniúchadh</li>
          <li>NOUN-Vnoun: hainmniú, hathréimiú, húsáid</li>
          <li>NUM: haon, hocht</li>
          <li>PRON: hé, hiad, hí</li>
          <li>PROPN: hÉireann, hEorpa, hÉirinn, hEaglaise, hAlban, hAoine, h-Íde, hOstaire, hAlbain, hAthbheochana</li>
          <li>VERB: habair, haithneodh, hiarradh, héilítear, híocaigí, húsáideadh</li>
          <li>X: hamazon</li>
        </ul>
      </li>
      <li>Indirect
        <ul>
          <li>PART: a, ina, lena, ar, nach, dá, inar, faoina, DA, go</li>
        </ul>
      </li>
      <li>Len
        <ul>
          <li>ADJ: mhaith, mhór, chóir, cheart, phoiblí, chéanna, bheag, chultúrtha, fhearr, shóisialta</li>
          <li>ADJ-Part: ghinearálta, bhunaithe, chlóite, dheimhnithe, shínithe, bheartaithe, chaite, cheadaithe, chláraithe, chomhcheangailte</li>
          <li>ADP: dhá, thríd, dhíobh, dhó, dhóibh, dhe, dho, dhom, dhuit, thrí</li>
          <li>ADV: bheith</li>
          <li>AUX-Cop: chan</li>
          <li>DET: chuile, chaon, dh'</li>
          <li>NOUN: chur, dhéanamh, bheith, chuid, chéile, thabhairt, bhliain, fhorbairt, fháil, bhaint</li>
          <li>NOUN-Inf: chur, dhéanamh, bheith, thabhairt, fháil, bhaint, fhorbairt, choinneáil, sholáthar, ghlacadh</li>
          <li>NOUN-Vnoun: bhaint, bheartú, bhunú, chinntiú, choimisiúnú, chruthaithe, dheonú, dhíriú, dhúnadh, fhionnachtain</li>
          <li>NUM: dhá, chéad, cheithre, dhó, thrí, cheathrú, dheich, mhíle, chúig, dhara</li>
          <li>PART: Mhic, Mhac</li>
          <li>PRON: shin, fhéin, thú, cheachtar, shoin, thusa</li>
          <li>PROPN: Bhaile, Ghaeltacht, Chomhairle, Ghaeilge, Ghaeltachta, Chathair, Mháire, Dhún, Chiarraí, Choiste</li>
          <li>SCONJ: dhá</li>
          <li>VERB: bhí, bheidh, thug, tháinig, chuir, bhaineann, bheadh, bhíonn, bhíodh, chuaigh</li>
        </ul>
      </li>
      <li>VF
        <ul>
          <li>AUX-Cop: b', gurb, gurbh, níorbh, ab, arbh, b’, nárbh, arb, darbh</li>
          <li>PART: ab, b'</li>
          <li>PART-Cop: b'</li>
          <li>PRON-Cop: cérbh</li>
          <li>SCONJ-Cop: arb, murab</li>
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
          <li>ADJ: éagsúla, nua, áirithe, poiblí, beaga, óga, náisiúnta, móra, idirnáisiúnta, áitiúla</li>
        </ul>
      </li>
      <li>Slender
        <ul>
          <li>ADJ: áitiúla, éagsúla, náisiúnta, nua, Eorpacha, phoiblí, speisialta, chruthaitheacha, Éireannacha, áirithe</li>
        </ul>
      </li>
      <li>Strong
        <ul>
          <li>ADJ: réigiúnacha, éagsúla, Slachtmhara, beaga, móra, nua-aimseartha, náisiúnta, áirithe, míosúla, nua</li>
          <li>NOUN: daoine, gnóthaí, seirbhísí, páistí, ndaoine, acmhainní, leanaí, bhforálacha, mbailte, scéalta</li>
          <li>PROPN: Cúirteanna, Brioscaí, Dhoirí, Feabhra, Foundation, Fíoncheannaithe, Ghaeltachtaí, Gníomhartha, Leanaí, Saoirsí</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>ADJ: Eorpach, áitiúil, poiblí, domhanda, díomhaoin, sóisialta, Éireannach, áirithe, Cúng, Feirsteach</li>
          <li>NOUN: ealaíon, clár, mballstát, ábhar, gComhphobal, gceantar, leabhar, n-ealaíon, n-oileán, pobal</li>
          <li>PROPN: cliath, nGall, Gael, Árann, Ealaíon, Tionóntán, nUachtarán, Ardeaspag, Chlann, Chumann</li>
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
          <li>PART: go, nach, nár, ná</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: níos, ní, ba, Mhac, ab, b', is</li>
          <li>PART-Cop: b'</li>
        </ul>
      </li>
      <li>Cop
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Deg
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>PART: a, do</li>
        </ul>
      </li>
      <li>Num
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PART: ó, mac, Uí, de, Ní, Nic, O', Mhic, O, Mag</li>
        </ul>
      </li>
      <li>Sup
        <ul>
          <li>PART: is, ba, ab, b', nach</li>
          <li>PART-Cop: ba, b'</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>PART: a, d', ní, an, gur, d’, nach, níor, do, ar</li>
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

<ul>
  <li><a>PrepForm</a>
    <ul>
      <li>Cmpd
        <ul>
          <li>ADP: i, ar, de, le, go, tar, in, os, faoi, thar</li>
          <li>NOUN: réir, éis, dtí, fud, linn, haghaidh, feadh, rith, nós, measc</li>
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
          <li>ADJ: neamhspléach, teanta, Aitiúil, Tradisiúnta, aiteanta, am-tábhachtach, amhain, amáin, ardchaighdéanach, bréatha</li>
          <li>ADJ-Part: teanta, deághléasta, ghinéaralta</li>
          <li>ADP: o, dho, dó, an, dí, ós</li>
          <li>ADV: anoirthear, isteacht, sios</li>
          <li>CCONJ: no</li>
          <li>DET: siud, un, á</li>
          <li>NOUN: reachtáil, deileáil, diospóidí, gniomhú, oidreachta, sharú, taibléidí, vóltas, éadochas, Chlarú</li>
          <li>NOUN-Inf: reachtáil, deileáil, sharú, chailliúnt, choimead, chose, chulghairm, cábhrú, cóilíniú, dhreachtadh</li>
          <li>NOUN-Vnoun: gniomhú, breathú</li>
          <li>NUM: dha, triú</li>
          <li>PART: DA</li>
          <li>PRON: me, fein, said, se</li>
          <li>PROPN: Gaidhlig, Leamhchán, Chiarain, Fein, Gaeltacha, Gearmaine, Kila, Meiricea, Mhuscraí, Mona</li>
          <li>VERB: féadfidh, eireos, Bailimid, Duradh, ata, athfoilsítear, chineann, chur, deileáiltear, dheánann</li>
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
      <li>VERB--NOUN (39)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--NOUN-Gen (4)</li>
      <li>VERB--NOUN-Nom (3042)</li>
      <li>VERB--NOUN-Nom-ADP(ar) (2)</li>
      <li>VERB--NOUN-Nom-ADP(de) (2)</li>
      <li>VERB--NOUN-Nom-ADP(do) (2)</li>
      <li>VERB--NOUN-Nom-ADP(le) (1)</li>
      <li>VERB--NOUN-Nom-ADP(os) (7)</li>
      <li>VERB--PRON (1501)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (25)</li>
      <li>VERB--NOUN-Gen (2)</li>
      <li>VERB--NOUN-Gen-ADP(chun) (1)</li>
      <li>VERB--NOUN-Nom (1933)</li>
      <li>VERB--NOUN-Nom-ADP(as) (2)</li>
      <li>VERB--NOUN-Nom-ADP(do) (1)</li>
      <li>VERB--NOUN-Nom-ADP(gan) (1)</li>
      <li>VERB--NOUN-Nom-ADP(le) (1)</li>
      <li>VERB--NOUN-Nom-ADP(os) (1)</li>
      <li>VERB--NOUN-Nom-ADP(um) (1)</li>
      <li>VERB--PRON (263)</li>
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
<li>The following 1 main types are not used alone, they are always subtyped: <a>csubj</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
