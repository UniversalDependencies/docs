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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_idt27)<br />
Download all treebanks: [UD 2.7](/#download)

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

[Abbr](ga_idt-feat-Abbr.html) – [Case](ga_idt-feat-Case.html) – [Definite](ga_idt-feat-Definite.html) – [Degree](ga_idt-feat-Degree.html) – [Dialect](ga_idt-feat-Dialect.html) – [Foreign](ga_idt-feat-Foreign.html) – [Form](ga_idt-feat-Form.html) – [Gender](ga_idt-feat-Gender.html) – [Mood](ga_idt-feat-Mood.html) – [NounType](ga_idt-feat-NounType.html) – [Number](ga_idt-feat-Number.html) – [NumType](ga_idt-feat-NumType.html) – [PartType](ga_idt-feat-PartType.html) – [Person](ga_idt-feat-Person.html) – [Polarity](ga_idt-feat-Polarity.html) – [Poss](ga_idt-feat-Poss.html) – [PrepForm](ga_idt-feat-PrepForm.html) – [PronType](ga_idt-feat-PronType.html) – [Reflex](ga_idt-feat-Reflex.html) – [Tense](ga_idt-feat-Tense.html) – [VerbForm](ga_idt-feat-VerbForm.html) – [Voice](ga_idt-feat-Voice.html)

## Relations

[acl](ga_idt-dep-acl.html) – [acl:relcl](ga_idt-dep-acl-relcl.html) – [advcl](ga_idt-dep-advcl.html) – [advmod](ga_idt-dep-advmod.html) – [amod](ga_idt-dep-amod.html) – [appos](ga_idt-dep-appos.html) – [case](ga_idt-dep-case.html) – [case:voc](ga_idt-dep-case-voc.html) – [cc](ga_idt-dep-cc.html) – [ccomp](ga_idt-dep-ccomp.html) – [compound](ga_idt-dep-compound.html) – [compound:prt](ga_idt-dep-compound-prt.html) – [conj](ga_idt-dep-conj.html) – [cop](ga_idt-dep-cop.html) – [csubj:cleft](ga_idt-dep-csubj-cleft.html) – [csubj:cop](ga_idt-dep-csubj-cop.html) – [dep](ga_idt-dep-dep.html) – [det](ga_idt-dep-det.html) – [discourse](ga_idt-dep-discourse.html) – [dislocated](ga_idt-dep-dislocated.html) – [fixed](ga_idt-dep-fixed.html) – [flat](ga_idt-dep-flat.html) – [flat:foreign](ga_idt-dep-flat-foreign.html) – [flat:name](ga_idt-dep-flat-name.html) – [goeswith](ga_idt-dep-goeswith.html) – [list](ga_idt-dep-list.html) – [mark](ga_idt-dep-mark.html) – [mark:prt](ga_idt-dep-mark-prt.html) – [nmod](ga_idt-dep-nmod.html) – [nmod:poss](ga_idt-dep-nmod-poss.html) – [nsubj](ga_idt-dep-nsubj.html) – [nummod](ga_idt-dep-nummod.html) – [obj](ga_idt-dep-obj.html) – [obl](ga_idt-dep-obl.html) – [obl:prep](ga_idt-dep-obl-prep.html) – [obl:tmod](ga_idt-dep-obl-tmod.html) – [orphan](ga_idt-dep-orphan.html) – [parataxis](ga_idt-dep-parataxis.html) – [punct](ga_idt-dep-punct.html) – [root](ga_idt-dep-root.html) – [vocative](ga_idt-dep-vocative.html) – [xcomp](ga_idt-dep-xcomp.html) – [xcomp:pred](ga_idt-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 4910 sentences and 115969 tokens.</li>
</ul>

<ul>
<li>This corpus contains 11639 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 625 types of words that contain both letters and punctuation. Examples: d', d’, b', n-áirítear, nua-aimseartha, (b), m', (a), a', fho-alt, t-ábhar, Teo., Co., 'n, (c), t-airgead, t-aon, n-oileán, s', srl., O', n-ealaíon, t-am, Uimh., a'm, &quot;, 'na, (i), Dr., T.D., an-chuid, i.e., mb', n-éireoidh, n-úsáid, t-athrú, t-iomlán, 's, (d), (ii), Dublin.ie, an-dearfach, an-mhór, an-tábhachtach, c(h)ónaí, e.g., m.sh., n', t-ainm, t-aistriú</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 47 word types tagged as particles (PART): DA, MEDIA, Mag, Mc, Mhac, Mhic, Nic, O, O', UÍ, Uí, a, a', ab, an, ar, b', ba, cha, chan, d', de, do, dá, d’, faoina, go, gur, ina, inar, insa, is, le, lena, lenar, mac, n', n-a, nach, ná, nár, ní, níor, níos, trasna, trína, ó</li>
</ul>

<ul>
<li>This corpus contains 42 lemmas tagged as pronouns (PRON): cad, cad_é, ceachtar, cibé, contae, cé, céard, cén, ea, eisean, eo, ficsean, féin, hin, i, iad, is, ise, iúd, mise, muid, mé, pinsean, pinsin, pié, pé, seisean, seo, siad, sibh, sin, sinn, sise, siúd, sé, sí, that, tusa, té, tú, é, í</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as determiners (DET): Rialachan, a, achan, all, an, aon, bhur, cad, cibé, cé, cúpla, do, eile, gach, gach_aon, gach_uile, i, iomaí, leath, mo, na, our, s, seo, sin, siúd, the, uile, ár, úd</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as PRON and sometimes as DET: cad, cibé, cé, i, seo, sin, siúd</li>
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
    <li>PART: ba, ar, b', is, gur</li>
    <li>PRON: Caidé, cér, cérbh</li>
    <li>SCONJ: más, ós, dar, arb, murar, darb, murab, Is, Sular</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NOUN: fáil, chur, dhéanamh, bheith, cur, dul, thabhairt, siúl, rá, teacht</li>
    <li>PROPN: Forbairt, Astráil, Leathadh, Shaoráil, Fheidhmiú</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: déanta, curtha, bunaithe, leagtha, aontaithe, tugtha, scríofa, caite, dírithe, tagtha</li>
    <li>NOUN: ceannródaíochta, fheidhmithe, ionadaithe, pháirtithe, póilíneachta</li>
    <li>PROPN: Aontaithe</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dul, obair, teacht, cur, baint, iarraidh, déanamh, freastal, brath, tabhairt</li>
    <li>PROPN: Loisce</li>
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
      <li>ADJ: mhór, mhaith, poiblí, bheag, leanúnach, eacnamaíoch, ildánach, lárnach, speisialta, thábhachtach</li>
      <li>ADP: uirthi, di, ina, aici, léi, á, dá, inti, lena, chuici</li>
      <li>DET: na, a, an</li>
      <li>NOUN: chuid, leith, bhfeidhm, bliana, cathrach, bhliain, bliain, cuid, áit, gcuid</li>
      <li>NUM: 245a, n-ealaíon</li>
      <li>PRON: sí, í, sise, ise, hin, hí</li>
      <li>PROPN: cliath, Gaeltachta, Gaeilge, hÉireann, Chomhairle, Éirinn, hEorpa, Ghaeltacht, Ghaeltachta, Chathair</li>
      <li>SCONJ: dhá, toisc, áit</li>
      <li>VERB: fhreastail, phléasc</li>
      <li>X: open</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: mór, áitiúil, beag, leathan, iomlán, éigin, leanúnach, réigiúnach, áirithe, idirnáisiúnta</li>
      <li>ADP: ann, ina, leis, air, á, aige, dá, dó, lena, chuige</li>
      <li>ADV: timpeall</li>
      <li>AUX: sé</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a</li>
      <li>INTJ: No</li>
      <li>NOUN: duine, chéile, daoine, rud, cinn, ábhar, lá, pobail, am, fear</li>
      <li>NUM: 5in, 9.30rn, III, III+, fiche</li>
      <li>PART: Mhac, ní, Mac, a</li>
      <li>PRON: sé, é, seisean, hé, eisean, fhicsean, pinsean, pié</li>
      <li>PROPN: Átha, Bhaile, Údarás, Baile, Cliath, Coimisiún, Seán, mBaile, Airteagal, tAire</li>
      <li>SYM: Dublin.ie</li>
      <li>VERB: tá's, Bain, faigheann, ghníomhaíonn</li>
      <li>X: Celtica, Erris, Irish, Kill, Politics, Studica, The, Week, of</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: éagsúla, áitiúla, beaga, óga, móra, réigiúnacha, speisialta, Eorpacha, dlíthiúla, inniúla</li>
      <li>ADP: acu, sna, leo, orthu, ina, dóibh, againn, á, dúinn, dá</li>
      <li>DET: na, a, ár, bhur</li>
      <li>NOUN: daoine, seirbhísí, páistí, dhaoine, pháistí, rialacha, ealaíon, imeachtaí, gnóthaí, cúrsaí</li>
      <li>NUM: 5in, n-ealaíon</li>
      <li>PRON: iad, siad, muid, sibh, sinn, siadsan, hiad, iadsan, sinne</li>
      <li>PROPN: mBaile, Eorpach, gConamara, Coimisinéirí, Stáit, Gaeltachtaí, Mí, eastáit, Ballstáit, Ealaíon</li>
      <li>VERB: táimid, ceannaímid, bhíodar, déanfaimid, roghnaímid, faighimid, glacaimid, mbeimid, rabhadar, rinneamar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mór, áitiúil, mhór, éigin, iomlán, beag, leathan, leanúnach, mhaith, eacnamaíoch</li>
      <li>ADP: sa, den, ann, don, ina, san, ón, leis, á, air</li>
      <li>ADV: timpeall</li>
      <li>AUX: sé</li>
      <li>AUX-Cop: sé</li>
      <li>DET: an, na, a, do, mo, d', m', a', 'n, d’</li>
      <li>INTJ: No</li>
      <li>NOUN: féidir, duine, chuid, chéile, bith, rud, leith, cinn, bhfeidhm, cathrach</li>
      <li>NUM: 245a, 9.30rn, III, III+, fiche</li>
      <li>PART: níos, ba, Mhac, an, ní, Mac, a, a', insa</li>
      <li>PRON: sé, é, sí, mé, í, tú, cén, ea, mise, seisean</li>
      <li>PROPN: Átha, Bhaile, Cliath, Gaeltachta, Gaeilge, hÉireann, Chomhairle, Údarás, Éirinn, Baile</li>
      <li>SCONJ: dhá, toisc, áit</li>
      <li>SYM: Dublin.ie</li>
      <li>VERB: féach, bíodh, déan, cuir, tabhair, táim, bhíos, déarfá, rabhas, Bím</li>
      <li>X: Celtica, Erris, Irish, Kill, Politics, Studica, The, Week, of, open</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: gcrích, mbliana, láimh, tigh, chois, cionn, gcéin, chionn, gcionn, cloich</li>
      <li>PROPN: Éirinn, hÉirinn, Tigh, Arainn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: áitiúla, áitiúil, poiblí, speisialta, Eorpacha, éagsúla, Éireannacha, sóisialta, orgánach, beaga</li>
      <li>ADP: 'na</li>
      <li>DET: na, an, a</li>
      <li>NOUN: cinn, cathrach, bliana, pobail, oibre, phobail, tuaithe, teanga, Gaeltachta, imeachta</li>
      <li>NOUN-Inf: cosanta, pleanála, dhéanta, eagraithe, scriosta, tugtha, Fiosraithe, Forbartha, Gaelscolaíochta, athainmnithe</li>
      <li>NOUN-Vnoun: dhúnadh, fhiosraithe</li>
      <li>NUM: 245a, n-ealaíon</li>
      <li>PROPN: Átha, Gaeltachta, Gaeilge, hÉireann, Bhaile, hEorpa, Ghaeltachta, cliath, Chomhairle, Éireann</li>
      <li>VERB: corp</li>
    </ul>
  </li>
</ul>

<ul>
  <li>NomAcc
    <ul>
      <li>ADJ: beaga, mhaith, éigin, mór, chéanna, mhór, áitiúla, beag, leathan, óg</li>
      <li>ADP: of</li>
      <li>NOUN: duine, rud, chuid, fear, ábhar, leabhar, daoine, clár, bás, lá</li>
      <li>NOUN-Inf: athfhorasú, leasú</li>
      <li>NUM: fiche</li>
      <li>PROPN: Cliath, Bhaile, Coimisiún, Seán, Údarás, Mháire, Éire, Ghaeilge, Shráid, Baile</li>
      <li>SCONJ: áit</li>
      <li>VERB: Tá's, phléasc</li>
      <li>X: Kill, open</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: bhó, dhochtúir, fheara, Chapaillín, Dhaid, LIA, Oideachais, Rí, bhithiúnaigh, bhráithre</li>
      <li>PROPN: Mháire, Sheáin, Shéamais, Chití, Dhoráid, Fhinn, Learaí, Mham, Mhuire, Mháiréad</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: neamhbhailí</li>
      <li>ADP: 'na</li>
      <li>DET: an, na, gach, chuile, ngach, a, a', 'n, achan, cúpla</li>
      <li>NOUN: bliana, Roinn, tÚdarás, bhliain, cathrach, duine, fear, scéim, méid, chuid</li>
      <li>NUM: dá, dhá, t-aon, €5m</li>
      <li>PART: an, a'</li>
      <li>PROPN: Gaeltachta, hÉireann, Gaeilge, hEorpa, Chomhairle, Ghaeltacht, tAire, Údaráis, Aontais, Ghaeilge</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: gnóthaí, oibre, láimh, ainmneacha, dlíthe, gConarthaí, Criosanna, cionn, uibheacha</li>
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
      <li>ADJ: mó, fearr, fhearr, déanaí, faide, lú, mhó, gaire, airde, leithne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: maith, amháin, nua, mór, náisiúnta, sibhialta, léir, áirithe, idirnáisiúnta, fada</li>
      <li>ADV: láithreach</li>
      <li>NOUN: leabhar, ceart, meáin, pósta</li>
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
      <li>AUX-Cop: nach, ní, níor, nár, níorbh, Chan, nárbh</li>
      <li>NOUN: athnuachan, athbheochan, beochan, páirt-athnuachan</li>
      <li>PART: nach, ní, níor, ná, nár, chan, n', cha</li>
      <li>VERB: raibh, níl, bhfuil, bheidh, thug, chuireann, mbeidh, thagann, fhaca, ith</li>
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
      <li>AUX-Cop: ba, B', mba</li>
      <li>PART: An</li>
      <li>VERB: mbeadh, bheadh, fhéadfadh, dtiocfadh, bhféadfadh, bhféadfaí, fhéadfaí, gcuirfeadh, gcuirfí, rachadh</li>
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
      <li>PROPN: Ghael-linn, Lig, Mhartuinn</li>
      <li>VERB: bhíodh, féach, bíodh, mbíodh, déan, cuir, tabhair, déantar, Léigh, bhíos</li>
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
      <li>NOUN: foireann, luas, nAnaclann</li>
      <li>SCONJ: dar</li>
      <li>VERB: tá, bhí, atá, bhfuil, raibh, beidh, bheidh, níl, mbeidh, thug</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Cop: an, nach, nár, arbh, arb</li>
      <li>PART: nach, Ná</li>
      <li>VERB: mbíonn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Sub
    <ul>
      <li>VERB: ndéantar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>PART: go, Nár</li>
      <li>VERB: mbaintear, n-ithe, tugaimid, bhaintear, bhfeaca, bhfeice, bhfága, chroma, gcaitear, gcuirtear</li>
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
      <li>VERB: beidh, bheidh, mbeidh, féadfaidh, déanfaidh, cuirfidh, cuirfear, déanfar, caithfidh, tabharfaidh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: Cár</li>
      <li>AUX: ba, b', gur, nár, ar, níor, gurbh, níorbh, mba, ab</li>
      <li>AUX-Cop: ba, b', gur, nár, ar, níor, gurbh, níorbh, mba, ab</li>
      <li>PART: gur, níor, ar, nár, nach, ba, b', ná</li>
      <li>PART-Cop: ba, b', gur</li>
      <li>PROPN: Ghael-linn, Mhartuinn</li>
      <li>SCONJ: sular, murar, Dollar, murab, sarar</li>
      <li>SCONJ-Cop: murar, murab, Sular</li>
      <li>VERB: bhí, raibh, thug, tháinig, chuir, dúirt, cuireadh, rinne, bhíodh, rinneadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Cop: is, ní, gur, nach, gurb, ar, an, sea, Chan, nách</li>
      <li>NOUN: foireann, luas, nAnaclann</li>
      <li>PART: ar, is, an</li>
      <li>PART-Cop: ar, is</li>
      <li>SCONJ: Is, dar</li>
      <li>SCONJ-Cop: Is</li>
      <li>VERB: tá, atá, bhfuil, níl, bhaineann, leanas, cuireann, bhíonn, cuirtear, deir</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Auto
    <ul>
      <li>VERB: cuireadh, rinneadh, cuirtear, n-áirítear, déantar, cuirfear, déanfar, foilsíodh, tugadh, ndéantar</li>
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
      <li>ADP: sa, den, don, san, ón, faoin, sna, fén, ins, fán</li>
      <li>DET: an, na, a, a', 'n, Rialacha, The, aon</li>
      <li>PART: an, a', insa</li>
      <li>PROPN: an, na</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>AUX: sin, seo</li>
      <li>AUX-Cop: sin, seo</li>
      <li>DET: seo, sin, eile, úd, san, so, siúd, s'</li>
      <li>PRON: sin, seo, siúd, shin, san, in, cibé, hin, iúd, pinsin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADP: againne, domsa, agamsa, leatsa, liomsa, duitse, ormsa, agatsa, daoibhse, airsean</li>
      <li>PRON: mise, seisean, tusa, eisean, sise, ise, siadsan, iadsan, sinne, fhicsean</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: aon, uile, cibé, haon, t-aon, n-uile</li>
      <li>PRON: pé, ceachtar, té, Cibé, cheachtar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: conas, cá, Cad, Cár</li>
      <li>DET: cad, Cén</li>
      <li>PRON: cad, cé, cén, céard, éard, c, cér, cérbh</li>
      <li>PRON-Cop: cér, cérbh</li>
      <li>SCONJ: cé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADP: á, dhá</li>
      <li>NOUN: ghá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADP: le</li>
      <li>AUX: is, nach, ba, ab, nár, ar, nárbh, nách</li>
      <li>AUX-Cop: is, nach, ba, ab, nár, ar, nárbh, nách</li>
      <li>NOUN: luas</li>
      <li>PART: a, ina, lena, nach, dá, ar, inar, nár, faoina, ná</li>
      <li>PART-Cop: ba</li>
      <li>VERB: atá, leanas, bhíos, bheas, atáim, chuireas, eireos, fholmhaíos, tharlós, atáid</li>
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
      <li>NUM: dhá, trí, cúig, dá, seacht, sé, céad, deich, fiche, ceithre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: chéad, dara, tríú, gcéad, 18ú, naoú, seachtú, 10ú, 11ú, cheathrú</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADP: ina, á, dá, lena, arna, faoina, óna, dár, inár, lenár</li>
      <li>DET: a, do, mo, ár, d', m', bhur, d’, dh'</li>
      <li>NOUN: ghá</li>
      <li>PART: a</li>
      <li>SCONJ: dhá</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>NOUN: féin, fhéin</li>
      <li>PRON: féin</li>
      <li>PROPN: Féin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: liom, againn, agam, orm, dom, dúinn, linn, romhainn, orainn, chugainn</li>
      <li>DET: mo, ár, m'</li>
      <li>NOUN: Cairt, linn</li>
      <li>PRON: mé, muid, mise, sinn, sinne, me</li>
      <li>PROPN: Ghael-linn, Mhartuinn, Sinn</li>
      <li>VERB: táimid, táim, bhíos, ceannaímid, rabhas, Bím, creidim, déanfaimid, glacaim, roghnaímid</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: leat, duit, agat, ort, uait, agaibh, leatsa, libh, oraibh, daoibh</li>
      <li>DET: do, d', bhur, d’, dh'</li>
      <li>PRON: tú, sibh, tusa, thú, thusa</li>
      <li>PROPN: Lig</li>
      <li>VERB: féach, déan, cuir, tabhair, déarfá, Léigh, bhféadfá, labhair, téigh, éist</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: ina, ann, á, leis, air, acu, dá, aige, leo, lena</li>
      <li>AUX: sé</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a</li>
      <li>NOUN: ghá</li>
      <li>PART: a</li>
      <li>PRON: sé, é, iad, siad, sí, í, ea, seisean, hé, eisean</li>
      <li>SCONJ: dhá</li>
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
          <li>ADJ: Teo., Ltd</li>
          <li>ADV: i.e., e.g., srl., m.sh., .i., KB, etc</li>
          <li>NOUN: Dr., Uimh., Dr, srl., 4C, CBES, CD-ROM, EUR, I.R., IO</li>
          <li>NUM: 1A, 3B, S1067</li>
          <li>PRON: Co.</li>
          <li>PROPN: AE, AIE, UNESCO, TG4, BCE, Co., RTÉ, MABS, TD, fás</li>
          <li>SYM: Gcom, Dublin.ie, King.com, post@clubsult.com</li>
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
          <li>PART: ná</li>
          <li>PRON: san, so</li>
          <li>PROPN: Landtage, Ghaelainn</li>
          <li>VERB: dhein, deineadh, dein, Bhraitheas, bhfuilid, chuireas, chífeá, dtaibhreoid</li>
        </ul>
      </li>
      <li>Ulster
        <ul>
          <li>ADP: fá, domhsa, choinne, domh</li>
          <li>AUX-Cop: chan</li>
          <li>DET: achan</li>
          <li>NOUN: athnuachan, athbheochan, beochan, bhomaite, bádaí, cha, momaite, páirt-athnuachan</li>
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
          <li>ADJ: strong, necessary, other, white</li>
          <li>ADJ-Part: white</li>
          <li>ADP: in, by, off, with</li>
          <li>DET: The, all, a, our</li>
          <li>NOUN: euro, of, Captains, Chamara, Comptroller-General, Doctor, Enterprise, Lo-call, Opera, Paterson</li>
          <li>PRON: eo</li>
          <li>PROPN: John, Margaret, Ombudsman, Henrietta, Humphreys, tOmbudsman, Eurojust, Gilbert, Hayes, Ireland</li>
          <li>SYM: w​w​w​.​c​i​t​i​z​e​n​s​i​n​f​o​r​m​a​t​i​o​n​.​i​e, www.dublin.ie, www.udaras.ie</li>
          <li>VERB: bheitheá, cut, deemed</li>
          <li>X: the, of, Irish, Read, Right, to, for, on, Life, Love</li>
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
          <li>NOUN: bhfeidhm, gcuid, gceist, gcás, gcomhairle, gcónaí, mbliana, ndóigh, gcomhréir, dtaobh</li>
          <li>NOUN-Inf: gcur, ndéanamh, n-úsáid, Gaelscolaíochta, bhfeidhmiú, bhfoilsiú, bhfáil, bhféachaint, bhfíorú, gcailliúint</li>
          <li>NOUN-Vnoun: titim, nglacadh</li>
          <li>NUM: gcéad, dtríú, gceithre, díríú, gcomhoibriú, gcúig, gcúigiú, glao-ionad, n-aon, n-ealaíon</li>
          <li>PART: n-a</li>
          <li>PROPN: mBaile, gCúirt, nGaeilge, gConamara, gContae, bParlaimint, gCoiste, nDún, Mí, gCeathrú</li>
          <li>VERB: bhfuil, raibh, mbeadh, mbeidh, mbíonn, n-áirítear, mbaineann, ndéantar, dtagraítear, dtiocfadh</li>
        </ul>
      </li>
      <li>Ecl,Emp
        <ul>
          <li>VERB: bhféadfainnse, gceapaimse, mbínnse</li>
        </ul>
      </li>
      <li>Emp
        <ul>
          <li>ADP: domhsa</li>
          <li>NOUN: liostasa</li>
          <li>VERB: deirimse, Creidimidne, Feicimse, Táimse, adeirimse, atáimse, bhfeicimidne, cloisimse, déarfainnse, gcaithfeadsa</li>
        </ul>
      </li>
      <li>HPref
        <ul>
          <li>ADJ: háirithe, hiomlán, hamháin, héifeachtach, huathoibríoch, han-mhaith, hiontach, hálainn, héifeachtúil, hUachtarán</li>
          <li>ADP: hair</li>
          <li>DET: haon</li>
          <li>NOUN: haghaidh, hAirteagal, heagraíochtaí, haois, hionaid, háiteanna, húsáid, hinstitiúidí, hordú, háit</li>
          <li>NOUN-Inf: húsáid, haisíoc, himeacht, himirt, hithe, hordú, híoc, hól</li>
          <li>NUM: haon, hocht</li>
          <li>PRON: hé</li>
          <li>PROPN: hÉirinn, hAoine, h-Íde, Ioncaim, hEaglaise, hIaráice, mí</li>
        </ul>
      </li>
      <li>Len
        <ul>
          <li>ADJ: chóir, mhaith, cheart, chultúrtha, céanna, phoiblí, chéanna, mhór, shóisialta, bheag</li>
          <li>ADJ-Part: ghinearálta, Bhunaithe, ghinéaralta, shuidhte</li>
          <li>ADP: dhíobh, dhó, dho, dhom, dhóibh, dhaoibh, dhe, dhínn, dhúinn</li>
          <li>ADV: Thuaidh</li>
          <li>NOUN: chur, dhéanamh, bheith, chuid, chéile, thabhairt, fháil, fhorbairt, bhliain, bhaint</li>
          <li>NOUN-Inf: chur, dhéanamh, bheith, thabhairt, fháil, bhaint, fhorbairt, sholáthar, choinneáil, ghlacadh</li>
          <li>NOUN-Vnoun: bheartú, bhunú, chinntiú, dhúnadh, fhiosraithe, ghlacadh, pháirceáil</li>
          <li>NUM: chéad, cheithre, dhó, thrí, cheathrú, mhíle, chúig, dheich, chúigiú, leathchéad</li>
          <li>PART: Mhac</li>
          <li>PRON: cheachtar, thusa, thú</li>
          <li>PROPN: Bhaile, Átha, Ghaeltachta, Chomhairle, Mháire, Chonradh, Cliath, Dhún, Bhreithiúnais, Choiste</li>
          <li>PROPN-Inf: Fheidhmiú</li>
          <li>VERB: bhí, bhíonn, bheidh, thug, tháinig, raibh, chuir, bhaineann, bheadh, bhíodh</li>
          <li>X: The</li>
        </ul>
      </li>
      <li>VF
        <ul>
          <li>AUX-Cop: b', gurb, gurbh, níorbh, ab, mb', arbh, b’, nárbh, arb</li>
          <li>PART: b', ab</li>
          <li>PART-Cop: b'</li>
          <li>SCONJ-Cop: arb</li>
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
          <li>ADJ: beaga, móra, réigiúnacha, príobháideacha, óga, seachtracha, bunúsacha, cearta, leanúnacha, éagsúla</li>
          <li>NOUN: cearta</li>
          <li>PROPN: Beaga</li>
        </ul>
      </li>
      <li>Slender
        <ul>
          <li>ADJ: éagsúla, áitiúla, óga, dlíthiúla, inniúla, stairiúla, chearta, difriúla, pholaitiúla, praiticiúla</li>
          <li>NOUN: chearta</li>
        </ul>
      </li>
      <li>Strong
        <ul>
          <li>ADJ: áitiúla, éagsúla, polaitiúla, réigiúnacha, speisialta, beaga, deonacha, Seoirseacha, comhionanna, difriúla</li>
          <li>NOUN: daoine, páistí, seirbhísí, deiseanna, ndaoine, dteangacha, céilí, scileanna, teangacha, comhlachtaí</li>
          <li>PROPN: Cúirteanna, Charna, Fíoncheannaithe, Ghaeltachtaí, Gníomhartha, Orduithe, Teachtaí, Teangacha, gCríostaithe, nAirí</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>ADJ: orgánach, díreach, mór, Gaelach, cliniciúil, comhréidh, díograiseach, gorm, mín, plaisteach</li>
          <li>NOUN: ealaíon, clár, mballstát, ábhar, milliún, bpobal, bhailiúchán, gclár, réigiún, n-oileán</li>
          <li>PROPN: Eorpach, Ealaíon, Árann, Chumann, Náisiún, nUachtarán, Éireannach, Bhanc, gCeantar, Ardeaspag</li>
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
          <li>AUX-Cop: gur</li>
          <li>NOUN: ní, ba, níos</li>
          <li>PART: níos, ní, ab, ba, is</li>
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
          <li>PART: a, do, trasna, insa</li>
        </ul>
      </li>
      <li>Num
        <ul>
          <li>PART: a</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PART: ó, mac, Uí, de, Ní, Mhic, Nic, O', O, Mag</li>
          <li>PROPN: Ó</li>
        </ul>
      </li>
      <li>Sup
        <ul>
          <li>PART: is, ba, ab, nach</li>
          <li>PART-Cop: ba, is</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>AUX: ar</li>
          <li>NOUN: athnuachan, athbheochan, beochan, páirt-athnuachan</li>
          <li>PART: a, d', ní, an, gur, nach, do, d’, níor, ar</li>
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
          <li>ADP: ar, i, de, go, tar, le, in, éis, dtí, fud</li>
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
      <li>VERB--NOUN (1265)</li>
      <li>VERB--NOUN-ADP(de) (2)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--NOUN-ADP(os) (1)</li>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--NOUN-Gen (40)</li>
      <li>VERB--NOUN-Gen-ADP(go) (1)</li>
      <li>VERB--NOUN-NomAcc (1711)</li>
      <li>VERB--NOUN-NomAcc-ADP(ar) (2)</li>
      <li>VERB--NOUN-NomAcc-ADP(de) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(do) (2)</li>
      <li>VERB--NOUN-NomAcc-ADP(le) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(os) (7)</li>
      <li>VERB--PRON (1492)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1139)</li>
      <li>VERB--NOUN-ADP(ar) (1)</li>
      <li>VERB--NOUN-ADP(as) (1)</li>
      <li>VERB--NOUN-ADP(de) (1)</li>
      <li>VERB--NOUN-ADP(do) (4)</li>
      <li>VERB--NOUN-ADP(le) (1)</li>
      <li>VERB--NOUN-ADP(os) (1)</li>
      <li>VERB--NOUN-ADP(um) (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Gen (45)</li>
      <li>VERB--NOUN-Gen-ADP(chun) (1)</li>
      <li>VERB--NOUN-NomAcc (737)</li>
      <li>VERB--NOUN-NomAcc-ADP(as) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(do) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(gan) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(le) (1)</li>
      <li>VERB--PRON (255)</li>
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
<li>The following 5 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>aux</a>, <a>clf</a>, <a>reparandum</a></li>
</ul>
