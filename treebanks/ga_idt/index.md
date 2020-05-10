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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_idt26)<br />
Download all treebanks: [UD 2.6](/#download)

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

A Universal Dependencies 2924-sentence treebank for modern Irish.



The Irish UD Treebank (IUDT) is a conversion of the Irish Dependency Treebank
(IDT), which was part of a PhD research project by Teresa Lynn at Dublin City University, Ireland (Lynn, 2016).

---- The (smaller) IDT dataset has also been released on [GitHub]
(https://github.com/tlynn747/IrishDependencyTreebank). ----

The Treebank contains 2924 sentences taken from the New Corpus of
Ireland-Irish (NCII), with text from books, newswire, websites and other media. These sentences are a subset of a gold-standard POS-tagged corpus for Irish. ----

The conversion from the IDT annotation scheme to the UD annotation
scheme for the first release was designed by Teresa Lynn and Jennifer Foster at Dublin City University, Ireland. The mapping to UD is reported in Lynn et al., (2016) Conversion of sentences 1-1020 was automatic, with manual review. Subsequent updates or changes have been a combination of automatic labelling and manual review.
All trees with sentence ID greater than 1021 were created through an automatic pre-parsing approach followed by manual review.

The UD Treebank is split into two sets as follows:

* 454 trees (test)
* 451 trees (dev)
* 1161 trees (train)

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

[acl](ga_idt-dep-acl.html) – [acl:relcl](ga_idt-dep-acl-relcl.html) – [advcl](ga_idt-dep-advcl.html) – [advmod](ga_idt-dep-advmod.html) – [amod](ga_idt-dep-amod.html) – [appos](ga_idt-dep-appos.html) – [case](ga_idt-dep-case.html) – [case:voc](ga_idt-dep-case-voc.html) – [cc](ga_idt-dep-cc.html) – [ccomp](ga_idt-dep-ccomp.html) – [compound](ga_idt-dep-compound.html) – [compound:prt](ga_idt-dep-compound-prt.html) – [conj](ga_idt-dep-conj.html) – [cop](ga_idt-dep-cop.html) – [csubj:cleft](ga_idt-dep-csubj-cleft.html) – [csubj:cop](ga_idt-dep-csubj-cop.html) – [det](ga_idt-dep-det.html) – [discourse](ga_idt-dep-discourse.html) – [dislocated](ga_idt-dep-dislocated.html) – [fixed](ga_idt-dep-fixed.html) – [flat](ga_idt-dep-flat.html) – [flat:foreign](ga_idt-dep-flat-foreign.html) – [flat:name](ga_idt-dep-flat-name.html) – [goeswith](ga_idt-dep-goeswith.html) – [list](ga_idt-dep-list.html) – [mark](ga_idt-dep-mark.html) – [mark:prt](ga_idt-dep-mark-prt.html) – [nmod](ga_idt-dep-nmod.html) – [nmod:poss](ga_idt-dep-nmod-poss.html) – [nsubj](ga_idt-dep-nsubj.html) – [nummod](ga_idt-dep-nummod.html) – [obj](ga_idt-dep-obj.html) – [obl](ga_idt-dep-obl.html) – [obl:prep](ga_idt-dep-obl-prep.html) – [obl:tmod](ga_idt-dep-obl-tmod.html) – [orphan](ga_idt-dep-orphan.html) – [parataxis](ga_idt-dep-parataxis.html) – [punct](ga_idt-dep-punct.html) – [root](ga_idt-dep-root.html) – [vocative](ga_idt-dep-vocative.html) – [xcomp](ga_idt-dep-xcomp.html) – [xcomp:pred](ga_idt-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2924 sentences and 64745 tokens.</li>
</ul>

<ul>
<li>This corpus contains 7125 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 430 types of words that contain both letters and punctuation. Examples: d', b', a', (b), fho-alt, (a), m', 'n, (c), Co., s', O', a'm, t-am, &quot;, 'na, Dr., Uimh., mb', n-áirítear, n-éireoidh, t-aon, t-ábhar, 's, (d), (i), (ii), an-chuid, e.g., n', nua-aimseartha, t-ainm, t-airgead, t-údar, .i., J., a's, an-tóir, fho-ailt, h-Íde, i.e., lán-aimseartha, n-a, n-oibreacha, n-úsáid, t-amhras, t-athair, t-athrú, t-iomlán, t-uisce</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 45 word types tagged as particles (PART): DA, Mag, Mc, Mhac, Mhic, Nic, O, O', UÍ, Uí, a, a', ab, an, ar, b', ba, cha, chan, d', de, do, dá, faoina, go, gur, ina, inar, insa, is, le, lena, lenar, mac, n', n-a, nach, ná, nár, ní, níor, níos, trasna, trína, ó</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as pronouns (PRON): cad, cad_é, ceachtar, cibé, contae, cé, céard, cén, ea, eisean, eo, féin, hin, i, iad, is, ise, iúd, mise, muid, mé, pé, seisean, seo, siad, sibh, sin, sinn, sise, siúd, sé, sí, that, tusa, té, tú, é, í</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as determiners (DET): a, achan, an, aon, bhur, cad, cibé, cé, cúpla, do, eile, gach, gach_aon, gach_uile, i, iomaí, leath, mo, na, s, seo, sin, siúd, the, uile, ár, úd</li>
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
    <li>AUX: is, ba, gur, ní, b', nach, gurb, ar, nár, gurbh</li>
    <li>PART: b', ba, ar, gur, is</li>
    <li>PRON: Caidé, cér, cérbh</li>
    <li>SCONJ: más, ós, dar, darb, murab, Is, Sular, murar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NOUN: bheith, chur, fáil, dhéanamh, rá, dul, thabhairt, cur, siúl, úsáid</li>
    <li>PROPN: Forbairt, Leathadh, Fheidhmiú</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: déanta, curtha, bunaithe, imithe, scríofa, caite, leagtha, ráite, tugtha, aontaithe</li>
    <li>NOUN: ceannródaíochta, póilíneachta</li>
    <li>PROPN: Aontaithe</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: dul, teacht, iarraidh, obair, déanamh, baint, cur, caint, rá, éirí</li>
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
      <li>ADJ: mhór, mhaith, bheag, éigin, bhreá, chéanna, iomlán, láidir, náisiúnta, óg</li>
      <li>ADP: uirthi, ina, di, aici, léi, á, dá, inti, lena, chuici</li>
      <li>DET: na, a</li>
      <li>NOUN: chuid, leith, áit, bhliain, cuid, uair, bliain, bliana, tír, gcuid</li>
      <li>PRON: sí, í, sise, ise, hin, hí</li>
      <li>PROPN: Gaeilge, hÉireann, Mháire, Éirinn, Ghaeilge, hEorpa, Gaeltachta, Máire, Chomhairle, Fraince</li>
      <li>SCONJ: dhá, toisc, áit</li>
      <li>VERB: phléasc</li>
      <li>X: open, shilling</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: mór, éigin, beag, óg, céanna, fada, iomlán, áirithe, ceart, ard</li>
      <li>ADP: ann, leis, air, ina, aige, á, dá, dó, de, lena</li>
      <li>ADV: timpeall</li>
      <li>AUX: sé</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a</li>
      <li>INTJ: No</li>
      <li>NOUN: duine, rud, daoine, chéile, lá, fear, scéal, am, fad, leabhar</li>
      <li>NUM: fiche</li>
      <li>PART: Mhac, ní, Mac, a</li>
      <li>PRON: sé, é, seisean, hé, eisean</li>
      <li>PROPN: Átha, Seán, Baile, Bhaile, Cliath, Pádraig, mBaile, Béarla, Cill, Naomh</li>
      <li>VERB: tá's, Bain</li>
      <li>X: Celtica, Erris, Irish, Kill, Politics, Studica, The, Week, a, cut</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: éagsúla, beaga, móra, óga, áirithe, difriúla, fada, géara, maithe, neamhspleácha</li>
      <li>ADP: acu, orthu, leo, dóibh, ina, sna, againn, á, dúinn, díobh</li>
      <li>DET: na, a, ár, bhur</li>
      <li>NOUN: daoine, dhaoine, cúrsaí, scéalta, imeachtaí, rialacha, rudaí, tithe, tíortha, blianta</li>
      <li>PRON: iad, siad, muid, sibh, sinn, siadsan, hiad, iadsan, sinne</li>
      <li>PROPN: mBaile, Coimisinéirí, Éireannaigh, Mumhan, Stáit, Teachtaí, gConamara, Ceiltigh, Cluichí, Ealaíon</li>
      <li>VERB: táimid, bhíodar, faighimid, rabhadar, Tógaimis, beimid, bhfuilid, bhfuilimid, bhídís, bígí</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: mór, mhór, éigin, mhaith, beag, óg, iomlán, chéanna, ard, bheag</li>
      <li>ADP: sa, ann, den, ina, leis, air, san, don, ón, aige</li>
      <li>ADV: timpeall</li>
      <li>AUX: sé, An</li>
      <li>AUX-Cop: sé</li>
      <li>DET: an, na, a, mo, do, m', a', 'n, d', Cén</li>
      <li>INTJ: No</li>
      <li>NOUN: duine, bith, rud, chuid, féidir, chéile, lá, fear, oiread, leith</li>
      <li>NUM: fiche</li>
      <li>PART: níos, ba, Mhac, an, ní, Mac, a, a', insa</li>
      <li>PRON: sé, é, mé, sí, í, tú, cén, ea, mise, seisean</li>
      <li>PROPN: Gaeilge, Átha, hÉireann, Seán, Baile, Éirinn, Bhaile, Mháire, Cliath, Pádraig</li>
      <li>SCONJ: dhá, toisc, áit</li>
      <li>VERB: bíodh, cuir, tabhair, déan, féach, táim, bhíos, déarfá, rabhas, chuireas</li>
      <li>X: Bhraitheas, Celtica, Erris, Irish, Kill, Politics, Studica, The, Week, a</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: láimh, tigh, cionn, gcrích, mbliana, chionn, chois, gcéin, gcionn, cloich</li>
      <li>PROPN: Éirinn, Tigh, hÉirinn, Arainn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: mhóir, éagsúla, speisialta, Shóisialaigh, beaga, dhaonna, eachtraigh, mór, nua, polaitiúla</li>
      <li>ADP: 'na</li>
      <li>DET: na</li>
      <li>NOUN: cinn, bliana, oibre, tíre, léinn, airgid, seachtaine, scéil, lae, phobail</li>
      <li>NOUN-Inf: pleanála, cosanta, dhéanta, scriosta, tugtha, Fiosraithe, athainmnithe, bailithe, bearrtha, bhreithnithe</li>
      <li>PROPN: Gaeilge, Átha, hÉireann, Bhaile, cliath, hEorpa, Gaeltachta, mBaile, Fraince, Chill</li>
    </ul>
  </li>
</ul>

<ul>
  <li>NomAcc
    <ul>
      <li>ADJ: éigin, mór, mhaith, chéanna, mhór, óg, beaga, fada, beag, iomlán</li>
      <li>NOUN: fear, rud, chuid, duine, leabhar, lá, leith, bhliain, chéile, áit</li>
      <li>NUM: fiche</li>
      <li>PROPN: Mháire, Seán, Ghaeilge, Gaeilge, nGaeilge, Éire, Bhreandán, Chorcaí, Eoin, Fianna</li>
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
      <li>PROPN: Mháire, Sheáin, Shéamais, Chití, Dhoráid, Fhinn, Learaí, Mhuire, Mháiréad, Phádraig</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADP: 'na</li>
      <li>AUX: An</li>
      <li>DET: an, na, gach, chuile, a, a', 'n, achan, ngach, chaon</li>
      <li>NOUN: fear, bliana, leabhar, bhliain, saol, teach, áit, daoine, méid, scéal</li>
      <li>NUM: dá, dhá, t-aon</li>
      <li>PART: an, a'</li>
      <li>PROPN: hÉireann, Gaeilge, hEorpa, Gaeltachta, Ghaeilge, Coimisinéirí, Chomhairle, tAire, Aontais, Taoiseach</li>
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
      <li>ADJ: mó, fearr, fhearr, déanaí, lú, mhó, faide, measa, leithne, mheasa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: maith, amháin, mór, léir, nua, sásta, fada, minic, céanna, áirithe</li>
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
      <li>AUX-Cop: ní, nach, nár, níor, níorbh, Chan, nárbh</li>
      <li>NOUN: cha, chan</li>
      <li>PART: nach, ní, níor, ná, nár, chan, n', cha</li>
      <li>VERB: raibh, níl, bheidh, bhfuil, thug, fhaca, ith, mbeidh, bhain, chuireann</li>
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
      <li>AUX-Cop: B', Ba, mba</li>
      <li>PART: An</li>
      <li>VERB: mbeadh, bheadh, dtiocfadh, fhéadfadh, bhféadfaí, bhféadfadh, rachadh, dhéanfadh, gcuirfeadh, déarfadh</li>
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
      <li>VERB: bhíodh, bíodh, mbíodh, cuir, tabhair, déan, féach, bhíos, chuirtí, dhéanadh</li>
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
      <li>VERB: bhí, tá, raibh, atá, bhfuil, thug, chuir, níl, bheidh, tháinig</li>
      <li>X: Bhraitheas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Cop: nach, an, nár, Arbh</li>
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
      <li>VERB: n-ithe, bhaintear, bhfeaca, bhfeice, bhfága, chroma, gcuirtear, lige, mbaintear, n-imí</li>
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
      <li>VERB: bheidh, beidh, mbeidh, déanfaidh, caithfidh, féadfaidh, cuirfidh, caithfear, déanfar, ndéanfaidh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADV: Cár</li>
      <li>AUX: ba, b', gur, nár, gurbh, níor, níorbh, mba, ar, ab</li>
      <li>AUX-Cop: ba, b', gur, nár, gurbh, níor, níorbh, mba, ab, ar</li>
      <li>PART: gur, níor, ar, nár, nach, b', ba, ná</li>
      <li>PART-Cop: b', ba, gur</li>
      <li>PROPN: Ghael-linn, Mhartuinn</li>
      <li>SCONJ: sular, murab, sarar, murar</li>
      <li>SCONJ-Cop: murab, Sular, murar</li>
      <li>VERB: bhí, raibh, thug, chuir, tháinig, dúirt, bhíodh, chuaigh, rinne, cuireadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Cop: is, ní, gur, nach, gurb, an, ar, sea, Chan, nách</li>
      <li>NOUN: luas</li>
      <li>PART: ar, an, is</li>
      <li>PART-Cop: ar, is</li>
      <li>SCONJ: Is, dar</li>
      <li>SCONJ-Cop: Is</li>
      <li>VERB: tá, atá, bhfuil, níl, deir, dar, bhaineann, leanas, adeir, cuirtear</li>
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
      <li>VERB: cuireadh, rinneadh, foilsíodh, cuirtear, bhféadfaí, tugadh, tógadh, déantar, ndéantar, caithfear</li>
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
      <li>ADP: sa, den, san, don, ón, faoin, sna, fén, ins, fán</li>
      <li>AUX: An</li>
      <li>DET: an, na, a, a', 'n, The, aon</li>
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
      <li>DET: seo, sin, eile, úd, san, so, s', siúd</li>
      <li>PRON: sin, seo, shin, siúd, san, in, hin, iúd, súd, that</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADP: againne, domsa, agamsa, leatsa, liomsa, ormsa, agatsa, daoibhse, airsean, chugamsa</li>
      <li>PRON: mise, seisean, sise, tusa, eisean, ise, siadsan, iadsan, sinne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: aon, uile, cibé, haon, n-uile, t-aon</li>
      <li>PRON: pé, té, ceachtar, Cibé, cheachtar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: conas, cá, Cad, Cár</li>
      <li>DET: cad, Cén</li>
      <li>PRON: cad, cé, cén, céard, c, cér, cérbh</li>
      <li>PRON-Cop: cér, cérbh</li>
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
      <li>AUX: is, ba, nach, ab, nár, ar, nárbh, nách</li>
      <li>AUX-Cop: is, ba, nach, ab, nár, nárbh, nách</li>
      <li>NOUN: luas</li>
      <li>PART: a, ina, nach, ar, dá, inar, lena, nár, faoina, ná</li>
      <li>PART-Cop: ba</li>
      <li>VERB: atá, leanas, bhíos, atáim, bheas, chuireas, eireos, fholmhaíos, tharlós, atáid</li>
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
      <li>NUM: dhá, trí, dá, cúig, deich, seacht, céad, sé, ceithre, aon</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: chéad, dara, tríú, gcéad, 18ú, 10ú, 11ú, seachtú, cheathrú, 13ú</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADP: ina, á, dá, lena, faoina, arna, óna, dár, im, inár</li>
      <li>DET: a, mo, do, ár, m', bhur, d', dh'</li>
      <li>PART: a</li>
      <li>SCONJ: dhá</li>
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
      <li>ADP: liom, agam, againn, orm, dom, dúinn, chugainn, chugam, againne, domsa</li>
      <li>DET: mo, ár, m'</li>
      <li>PRON: mé, muid, mise, sinn, sinne, me</li>
      <li>PROPN: Ghael-linn, Mhartuinn, Sinn</li>
      <li>VERB: táimid, táim, bhíos, rabhas, chuireas, creidim, déarfainn, faighimid, mbínn, Bím</li>
      <li>X: Bhraitheas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: agat, leat, duit, ort, uait, leatsa, oraibh, agaibh, libh, agatsa</li>
      <li>DET: do, bhur, d', dh'</li>
      <li>PRON: tú, sibh, tusa, thú, thusa</li>
      <li>PROPN: Lig</li>
      <li>VERB: cuir, tabhair, déan, féach, déarfá, labhair, éist, Breathnaigh, bheifeá, bhféadfá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: ann, ina, leis, air, á, acu, aige, dá, orthu, dó</li>
      <li>AUX: sé</li>
      <li>AUX-Cop: sé</li>
      <li>DET: a</li>
      <li>PART: a</li>
      <li>PRON: sé, é, sí, iad, siad, í, ea, seisean, hé, sise</li>
      <li>SCONJ: dhá</li>
      <li>VERB: bíodh, bhíodar, rabhadar, bhfuilid, bhídís, chuadar, chuireadar, mbeidís, ndéanfaidís, Chuiridís</li>
      <li>X: a</li>
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
          <li>ADV: e.g., i.e., .i., KB, etc, srl.</li>
          <li>NOUN: Dr., Dr, Uimh., 4C, I.R., IO, Mr., lch., lgh., 2RN</li>
          <li>NUM: 1A, 3B, S1067</li>
          <li>PRON: Co.</li>
          <li>PROPN: RTÉ, Co., FÁS, TG4, BBC, CLG, D., DUP, GPA, IRA</li>
          <li>SYM: post@clubsult.com</li>
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
          <li>NOUN: fachta</li>
          <li>PART: ná</li>
          <li>PRON: san, so</li>
          <li>PROPN: Ghaelainn</li>
          <li>VERB: dhein, deineadh, dein, bhfuilid, chuireas, chífeá, dtaibhreoid</li>
          <li>X: Bhraitheas</li>
        </ul>
      </li>
      <li>Ulster
        <ul>
          <li>ADP: fá, domhsa, choinne, domh</li>
          <li>AUX-Cop: chan</li>
          <li>DET: achan</li>
          <li>NOUN: bhomaite, bádaí, cha, chan, momaite</li>
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
          <li>ADP: by</li>
          <li>DET: The</li>
          <li>NOUN: Comptroller-General, Doctor, Jordan, Lo-call, Opera, Paterson, Shoneen, an-weekend, bhe, biro</li>
          <li>PRON: eo</li>
          <li>PROPN: Gaidhlig, Hamstead, John, Lambert, MacGill, Michael, Pierre, Wilson, Alister, Alvord</li>
          <li>VERB: bheitheá, deemed</li>
          <li>X: the, of, Irish, on, May, a, fakir, men, you, Agent</li>
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
          <li>NOUN: gcuid, gceist, gcás, ndóigh, bhfeidhm, mbliana, dtaobh, gcónaí, bhfad, mbaile</li>
          <li>NOUN-Inf: gcur, ndéanamh, n-úsáid, bhfeidhmiú, bhfoilsiú, bhfáil, bhféachaint, bhfíorú, gcailliúint, gcaitheamh</li>
          <li>NOUN-Vnoun: titim</li>
          <li>NUM: gcéad, dtríú, gceithre, gcúig, gcúigiú, n-aon, naoi, seacht</li>
          <li>PART: n-a</li>
          <li>PROPN: mBaile, nGaeilge, gContae, bhFrainc, nGaillimh, Feirste, Mumhan, gColáiste, gConamara, mBéal</li>
          <li>VERB: bhfuil, raibh, mbeadh, mbeidh, mbíonn, dtiocfadh, mbíodh, bhfaca, bhféadfaí, mbaineann</li>
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
          <li>ADJ: háirithe, hamháin, hiomlán, hiontach, hálainn, héifeachtach, han-luath, han-mhaith, hingearach, hionann</li>
          <li>ADP: hair</li>
          <li>DET: haon</li>
          <li>NOUN: haghaidh, haois, háit, hordú, huair, háiteanna, haigne, hainm, heagraíochtaí, himeacht</li>
          <li>NOUN-Inf: húsáid, haisíoc, himeacht, himirt, hithe, hordú, hól</li>
          <li>NUM: haon, hocht</li>
          <li>PRON: hé</li>
          <li>PROPN: h-Íde, hÉirinn, Ioncaim, hAoine, hEaglaise, hIaráice, mí</li>
        </ul>
      </li>
      <li>Len
        <ul>
          <li>ADJ: mhaith, chóir, céanna, cheart, chéanna, bheag, fhada, mhór, mhinic, phoiblí</li>
          <li>ADJ-Part: Bhunaithe, ghinéaralta, shuidhte</li>
          <li>ADP: dhíobh, dhó, dhom, dhóibh, dhaoibh, dhe, dho, dhínn, dhúinn</li>
          <li>ADV: Thuaidh</li>
          <li>NOUN: bheith, chur, dhéanamh, chuid, chéile, thabhairt, fhéidir, fhios, thaobh, bhliain</li>
          <li>NOUN-Inf: bheith, chur, dhéanamh, thabhairt, bhaint, fháil, choinneáil, chaitheamh, dhul, theacht</li>
          <li>NUM: chéad, dhó, cheithre, cheathrú, mhíle, chúig, thrí, chúigiú, dheich, sheacht</li>
          <li>PART: Mhac</li>
          <li>PRON: cheachtar, thusa, thú</li>
          <li>PROPN: Mháire, Átha, Bhaile, Phádraig, Chill, Bhéal, Chonradh, Chonamara, Cliath, Dhún</li>
          <li>PROPN-Inf: Fheidhmiú</li>
          <li>VERB: bhí, raibh, thug, chuir, bheidh, bhíonn, tháinig, bheadh, bhíodh, chuaigh</li>
          <li>X: The</li>
        </ul>
      </li>
      <li>VF
        <ul>
          <li>AUX-Cop: b', gurb, gurbh, níorbh, ab, mb', nárbh, Arbh, darbh</li>
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
          <li>ADJ: beaga, móra, óga, difriúla, dubha, fiara, glasa, géara, ingearacha, maithe</li>
          <li>PROPN: Beaga</li>
        </ul>
      </li>
      <li>Slender
        <ul>
          <li>ADJ: éagsúla, óga, Shinsearacha, rathúla, áitiúla, Chonallacha, aisteacha, bhradacha, bhréana, bhuaircíneacha</li>
        </ul>
      </li>
      <li>Strong
        <ul>
          <li>ADJ: éagsúla, beaga, polaitiúla, Neamhspleácha, Ultacha, bána, comhionanna, deonacha, difriúla, gairide</li>
          <li>NOUN: daoine, ndaoine, ban, oibreacha, blianta, cásanna, n-oibreacha, rudaí, scríbhneoirí, amhránaithe</li>
          <li>PROPN: Cúirteanna, Fíoncheannaithe, Ghaeltachtaí, Gníomhartha, Orduithe, Teachtaí, Teangacha, gCríostaithe, nDrámaí, nGaeltachtaí</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>ADJ: mór, Gaelach, cliniciúil, comhréidh, díograiseach, díreach, gorm, mín, orgánach, plaisteach</li>
          <li>NOUN: súl, ábhar, Fiontar, Náisiún, bhflaitheas, bhfocal, bord, bpobal, breiseán, clár</li>
          <li>PROPN: Ealaíon, Eorpach, Náisiún, Ardeaspag, Bhaisleac, Bhéal, Ceapachán, Chlann, Chumann, Cúng</li>
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
          <li>PART: níos, ní, ba</li>
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
          <li>PART: is, ba, ab</li>
          <li>PART-Cop: ba, is</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>AUX: ar</li>
          <li>NOUN: cha, chan</li>
          <li>PART: a, d', ní, gur, an, do, níor, nach, ar, ná</li>
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
          <li>ADP: i, ar, go, de, tar, in, dtí, le, éis, réir</li>
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
      <li>VERB--NOUN (1056)</li>
      <li>VERB--NOUN-ADP(de) (2)</li>
      <li>VERB--NOUN-Dat (2)</li>
      <li>VERB--NOUN-Gen (15)</li>
      <li>VERB--NOUN-NomAcc (625)</li>
      <li>VERB--NOUN-NomAcc-ADP(le) (1)</li>
      <li>VERB--PRON (1113)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (626)</li>
      <li>VERB--NOUN-ADP(ar) (1)</li>
      <li>VERB--NOUN-ADP(de) (1)</li>
      <li>VERB--NOUN-ADP(do) (1)</li>
      <li>VERB--NOUN-ADP(le) (1)</li>
      <li>VERB--NOUN-ADP(os) (1)</li>
      <li>VERB--NOUN-ADP(um) (1)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Gen (10)</li>
      <li>VERB--NOUN-Gen-ADP(chun) (1)</li>
      <li>VERB--NOUN-NomAcc (370)</li>
      <li>VERB--NOUN-NomAcc-ADP(as) (1)</li>
      <li>VERB--NOUN-NomAcc-ADP(le) (1)</li>
      <li>VERB--PRON (212)</li>
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
