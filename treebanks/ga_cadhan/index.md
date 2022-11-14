---
layout: base
title:  'UD_Irish-Cadhan'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Irish Cadhan

Language: [Irish](/ga/index.html) (code: `ga`)<br/>
Family: Indo-European, Celtic

This treebank has been part of Universal Dependencies since the UD v2.11 release.

The following people have contributed to making this treebank part of UD: Kevin Scannell.

Repository: [UD_Irish-Cadhan](https://github.com/UniversalDependencies/UD_Irish-Cadhan)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udga_cadhan211)<br />
Download all treebanks: [UD 2.11](/#download)

License: CC BY-SA 4.0

Genre: fiction, nonfiction, bible

Questions, comments?
General annotation questions (either Irish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Irish-Cadhan/issues).
If you want to collaborate, please contact [kscanne&nbsp;(æt)&nbsp;gmail&nbsp;•&nbsp;com].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

This is the Cadhan Aonair UD treebank, consisting of
150 sentences randomly sampled from six pre-standard Irish texts.



Irish underwent a major spelling standardization in the 1940’s and 1950’s,
and as a result it can be challenging to apply modern language technologies
to older, “pre-standard” texts.
For many years now, the general strategy for tagging and parsing
older Irish texts has been to pre-process them with an automatic
standardizer (Scannell, 2014), and to then use existing tools designed for
the modern language. This approach has been successful, but has some
inherent limitations. First and foremost, since there are no resources
for directly tagging or parsing pre-standard texts, the standardizer must
do its job without the benefit of linguistic annotations.
This places an upper bound on the performance of the standardizer,
and therefore on the full pipeline for analyzing older texts.
In addition, there are certain grammatical phenomena that have all
but disappeared in the modern language (e.g. the dative case);
these cannot be properly handled with the existing approach.

Our primary aim in creating this treebank was to establish a test set for
evaluating lemmatization, tagging, and parsing of pre-standard Irish texts.
This should enable experimentation with various approaches
that we hope will eventually outperform the existing pipeline.
Although the test set is quite small (150 sentences, 3804 tokens),
we hope to expand it enough to allow the training of a
parser designed to act directly on pre-standard texts.

The corpus contains 25 sentences each from six different books
published between 1602 and 1936.
Texts published in the late 19th century and early 20th century
are much easier to process than older texts. The orthography,
while quite different from the standard, is much more consistent
than what one finds in texts published before the 1880s.
We selected three books
published in this later period, one
from each of the major Irish dialects: _Deoraidheacht_ by
Pádraic Ó Conaire (1910, Connacht Irish),
_Peig_ by Peig Sayers (1936, Munster Irish),
and _Scairt an Dúthchais_, a translation
of Jack London’s Call of the Wild by Niall Ó Domhnaill (1932, Ulster Irish).
We then selected three older (and consequently more challenging) texts
to round out the corpus: _Foras Feasa ar Éirinn_
by Seathrún Céitinn (1634), the 1602 translation of the
Gospel of John by Uilliam Ó Domhnaill,
and _Cín Lae Amhlaoibh_, a diary kept by Amhlaoibh Ó
Súilleabháin between 1827 and 1835.

The annotations were produced by standardizing the texts,
parsing them with a UDPipe model trained on the
[modern Irish treebank](https://github.com/UniversalDependencies/UD_Irish-IDT),
projecting the annotations back to the source texts, and then
manually correcting the results. Full details are available
in (Scannell, 2022).

## Acknowledgments

* Thanks to Teresa Lynn for her many years of work on the Irish treebank,
without which none of this research would be possible.
* Thanks to my undergraduate students Sai Shreyas Bhavanasi and Jianjun Zhang at Saint Louis University for many discussions that helped me understand the mathematics behind cross-lingual word embeddings more deeply.
* This project arose out of conversations with Charlie Dillon at the
Royal Irish Academy in early 2020 just before the COVID pandemic;
my thanks to Charlie and the RIA for hosting me during that visit,
and for inspiring this line of research.

## References

* Scannell, Kevin P. (2014) [_Statistical models for text normalization and machine translation_](https://cs.slu.edu/~scannell/pub/coling14.pdf), Proceedings of the 1st Celtic Language Technology Workshop at COLING 2014, Baile Átha Cliath, 23 August 2014.
* Scannell, Kevin P. (2022) [_Diachronic Parsing of Pre-Standard Irish_](https://cs.slu.edu/~scannell/pub/dppsi.pdf), Proceedings of the 4th Celtic Language Technology Workshop (CLTW 2022) at LREC 2022, Marseille, France, 20 June 2022.



# Statistics of UD Irish Cadhan

## POS Tags

[ADJ](ga_cadhan-pos-ADJ.html) – [ADP](ga_cadhan-pos-ADP.html) – [ADV](ga_cadhan-pos-ADV.html) – [AUX](ga_cadhan-pos-AUX.html) – [CCONJ](ga_cadhan-pos-CCONJ.html) – [DET](ga_cadhan-pos-DET.html) – [INTJ](ga_cadhan-pos-INTJ.html) – [NOUN](ga_cadhan-pos-NOUN.html) – [NUM](ga_cadhan-pos-NUM.html) – [PART](ga_cadhan-pos-PART.html) – [PRON](ga_cadhan-pos-PRON.html) – [PROPN](ga_cadhan-pos-PROPN.html) – [PUNCT](ga_cadhan-pos-PUNCT.html) – [SCONJ](ga_cadhan-pos-SCONJ.html) – [VERB](ga_cadhan-pos-VERB.html) – [X](ga_cadhan-pos-X.html)

## Features

[Abbr](ga_cadhan-feat-Abbr.html) – [Aspect](ga_cadhan-feat-Aspect.html) – [Case](ga_cadhan-feat-Case.html) – [Definite](ga_cadhan-feat-Definite.html) – [Degree](ga_cadhan-feat-Degree.html) – [Foreign](ga_cadhan-feat-Foreign.html) – [Form](ga_cadhan-feat-Form.html) – [Gender](ga_cadhan-feat-Gender.html) – [Mood](ga_cadhan-feat-Mood.html) – [NounType](ga_cadhan-feat-NounType.html) – [Number](ga_cadhan-feat-Number.html) – [NumType](ga_cadhan-feat-NumType.html) – [PartType](ga_cadhan-feat-PartType.html) – [Person](ga_cadhan-feat-Person.html) – [Polarity](ga_cadhan-feat-Polarity.html) – [Poss](ga_cadhan-feat-Poss.html) – [PrepForm](ga_cadhan-feat-PrepForm.html) – [PronType](ga_cadhan-feat-PronType.html) – [Reflex](ga_cadhan-feat-Reflex.html) – [Tense](ga_cadhan-feat-Tense.html) – [VerbForm](ga_cadhan-feat-VerbForm.html)

## Relations

[acl](ga_cadhan-dep-acl.html) – [acl:relcl](ga_cadhan-dep-acl-relcl.html) – [advcl](ga_cadhan-dep-advcl.html) – [advmod](ga_cadhan-dep-advmod.html) – [amod](ga_cadhan-dep-amod.html) – [appos](ga_cadhan-dep-appos.html) – [case](ga_cadhan-dep-case.html) – [case:voc](ga_cadhan-dep-case-voc.html) – [cc](ga_cadhan-dep-cc.html) – [ccomp](ga_cadhan-dep-ccomp.html) – [conj](ga_cadhan-dep-conj.html) – [cop](ga_cadhan-dep-cop.html) – [csubj:cleft](ga_cadhan-dep-csubj-cleft.html) – [csubj:cop](ga_cadhan-dep-csubj-cop.html) – [det](ga_cadhan-dep-det.html) – [fixed](ga_cadhan-dep-fixed.html) – [flat:foreign](ga_cadhan-dep-flat-foreign.html) – [flat:name](ga_cadhan-dep-flat-name.html) – [mark](ga_cadhan-dep-mark.html) – [mark:prt](ga_cadhan-dep-mark-prt.html) – [nmod](ga_cadhan-dep-nmod.html) – [nmod:poss](ga_cadhan-dep-nmod-poss.html) – [nsubj](ga_cadhan-dep-nsubj.html) – [nummod](ga_cadhan-dep-nummod.html) – [obj](ga_cadhan-dep-obj.html) – [obl](ga_cadhan-dep-obl.html) – [obl:prep](ga_cadhan-dep-obl-prep.html) – [obl:tmod](ga_cadhan-dep-obl-tmod.html) – [parataxis](ga_cadhan-dep-parataxis.html) – [punct](ga_cadhan-dep-punct.html) – [root](ga_cadhan-dep-root.html) – [vocative](ga_cadhan-dep-vocative.html) – [xcomp](ga_cadhan-dep-xcomp.html) – [xcomp:pred](ga_cadhan-dep-xcomp-pred.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 150 sentences, 3764 tokens and 3804 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 510 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 54 types of words that contain both letters and punctuation. Examples: d', d'á, 'na, m', n-a, .i., ó'n, 'sa', 'san, agam-sa, do'n, droch-nós, n-Éirinn, orm-sa, 'e, 'n, 'n-a, 's, 'á, Shean-Ghallaibh, an-mheidhir, chroidhe-se, chughaibh-se, d'ár, de'n, fa'r, h-ala, h-anfa, h-iomhadh, h-éin, leath-phinginighe, lán-cheaptha, lér', mbocht-chara, mion-roinn, n-ainmhianaibh, n-an', n-anmanna, n-anál, n-easnamh, n-Áird, n-áit, ndeárn', neamh-shaoghalta, ná'r, príosúntacht', ró-mhall, seana-chapall, sibh-se, t-ochtmhadh</li>
</ul>

<ul>
<li>This corpus contains 37 multi-word tokens. On average, one multi-word token consists of 2.08 syntactic words.</li>
<li>There are 31 types of multi-word tokens. Examples: 'fhios, anadhbharsin, aoinne, dorinne, gidheadh, lem', Cilldaluadh, FitzUrsula, ad, adeir, adeirthear, aoinní, arsa'n, cia, dhiáidhsin, dhobhí, dhona, dochluinim, dochualadar, dochuáidh, dochí, dochúaidh, doním, dó-dhéag, fearso, im', leacoidhre, lálá, neitheadhso, neithese, shiar-thuaith.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 33 word types tagged as particles (PART): An, Ua, Ui, Uí, a, ar, ba, d', d'á, dho, do, dá, fa'r, go, gu, gur, lér', mac, mic, nach, nachar, nior, noch, ná, nách, nár, ní, níor, níos, ro, ré, Ó, ór'</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as pronouns (PRON): cad, ceachtar, cé, ea, féin, iad, is, mise, mé, seisean, seo, siad, sibh, sin, sinn, sé, sí, tusa, tú, é, í</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as determiners (DET): a, an, aon, bhur, do, eile, gach, mo, na, seo, sin, uile, ár, úd</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: seo, sin</li>
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
    <li>AUX: is, gurab, nach, ní, ba, fá, dobadh, gur, Ag, an</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>NOUN: bheith, dhéanamh, chur, déanamh, rádh, scríobhadh, thabhairt, breith, bualadh, ceileabhradh</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: Cinnte, briste, ceaptha, cuachta, dúnta, foghlumtha, fágtha, fáighte, saluighthe, stróctha</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: cur, tabhairt, teacht, dul, gabháil, baint, breith, brúghadh, ceapadh, déanamh</li>
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
      <li>ADJ: mhaith, bhán, breagh, buidhe, direach, dubh, fada, feargach, feósaidhe, mhór</li>
      <li>ADP: aici, uirre, dhi, di, lei, léithi, ría</li>
      <li>DET: na, a, n-a, ná</li>
      <li>NOUN: bliadhna, cuid, oidhche, réir, laimh, leith, láimh, uair, aít, bhuidhin</li>
      <li>PRON: sí, í, si, sise</li>
      <li>PROPN: Éireann, Éirinn, Danann, Uladh, n-Éirinn, Callain, Casga, Chill, Chnámhchoill, Cásg</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: beag, mór, maith, Caoimh, Caoin, Sasanach, aisteach, allta, amhain, andeas</li>
      <li>ADP: ann, aige, air, 'na, na, d'á, dó, as, dá, ina</li>
      <li>DET: a, an, n-a, do</li>
      <li>NOUN: lá, duine, fhios, bith, fear, la, ainm, mac, bhfearann, bhflaitheas</li>
      <li>PRON: sé, é, hé, se, seision, e, eisean, seisean</li>
      <li>PROPN: Iósa, Dia, Dé, Sacsaibh, Ursula, Beare, Bheannchair, Dhía, Laighean, Pilát</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: creapalta, dearga, dlightheacha, dubha, feósaidhe, maslaightheacha, ruadha, uathbhásach', éugcruaidhe, úra</li>
      <li>ADP: aca, againn, orra, riú, díobh, ana, ionnta, leó, léo, agaibh</li>
      <li>DET: na, a, bhur, mur, ar</li>
      <li>NOUN: bliadhna, Gall, comhmbráithribh, daoine, dáoinibh, fhearaibh, mac, sgeachóirighe, súile, Anmann</li>
      <li>PRON: siad, iad, iád, hiád, sibh, sibh-se, sinn, siád</li>
      <li>PROPN: Sacsaibh, Caomhánaigh, Fhidhic, Gaileoin, Gall, Picti, Shean-Ghallaibh, Tuathaibh, gConnachtaibh</li>
      <li>VERB: Táid, atáid, Bhamar, anfaidís, bhfacadar, bhfuairsiod, bhíd, bhídís, choimhédadar, chrochadar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: beag, mór, breagh, buidhe, dubh, feargach, maith, mhaith, Caoimh, Caoin</li>
      <li>ADP: ann, aige, air, 'na, agam, liom, na, d'á, dó, orm</li>
      <li>DET: an, a, mo, na, m', n-a, do, mó, 'n, d'</li>
      <li>NOUN: lá, duine, fhios, bith, la, ainm, cuid, fear, oidhche, réir</li>
      <li>PRON: sé, é, mé, hé, sí, tú, mise, se, tusa, í</li>
      <li>PROPN: Iósa, dia, Éireann, Uladh, Éirinn, Dé, Ursula, Beare, Bheannchair, Danann</li>
      <li>VERB: Tuig, chualas, féuch, Bhíos, Bíodh, Dhíolas, Feicim, Fuaras, Inneosad, Rugas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>NOUN: laimh, leith, láimh, comhmbráithribh, droing, dáoinibh, fhearaibh, gcéill, Bhreathnachaibh, Gaedhealaibh</li>
      <li>PROPN: Éirinn, Sacsaibh, n-Éirinn, Shean-Ghallaibh, Tuathaibh, gConnachtaibh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Caoimh, allta, bhig, bhuidhe, buidhe, caitliceach, chruim, dearbh, faon, gallda</li>
      <li>DET: na, an, ná</li>
      <li>NOUN: Gall, Mathghamhna, athar, creidimh, fhir, hoidhche, mac, mic, oidhche, sgoile</li>
      <li>PROPN: Éireann, Uladh, Dé, Bheannchair, Danann, Laighean, Bhuck, Cairbre, Callain, Casga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: beag, mór, breagh, dubh, feargach, maith, mhaith, Caoin, Sasanach, aisteach</li>
      <li>NOUN: lá, duine, fhios, bith, la, ainm, bliadhna, cuid, fear, réir</li>
      <li>PROPN: Dia, Iósa, Ursula, Beare, Dhía, Pilát, Séamas, Andóid, Arimathea, Bangor</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>NOUN: thighearna, léaghthóir, athuir, bhuachaill</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: an, na, gach, gac, 'n, ná, san</li>
      <li>NOUN: la, lá, bhfearann, bhflaitheas, duine, fhios, laimh, réir, uair, Tighearna</li>
      <li>NOUN-Inf: bhfhaicsin, choinneáil, chur, dhéanamh, soillsiughadh</li>
      <li>PROPN: Iósa, dia, Éireann, Uladh, Éirinn, Dé, Hanmer, Sacsaibh, Ursula, Beare</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: mó</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp,Sup
    <ul>
      <li>ADJ: mó, críona, mhó</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: maith, amháin, ionann, geal, sásta, amhaín, aoibhin, beag, bog, breugach</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>AUX-Cop: nach, ní, muna, ni, ná'r</li>
      <li>PART: ní, nach, ná, nior, níor, nách, nachar, nár</li>
      <li>VERB: rabh, raibh, bheadh, Níl, beadh, bhiadh, bhíonn, chualas, chualasa, dheachaidh</li>
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
      <li>VERB: bhíd, bhíonn, bionn</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: bhíodh, Teidheadh, bhídís, chleachtadh, mbiodh, ndéantaoi, thógadh, tugadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>VERB: mbeadh, bheadh, bainfeadh, iarrfadh, leigfeadh, rachadh, Bhrisfeadh, Tharraingeochadh, anfaidís, beadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>PART: ná</li>
      <li>VERB: Tuig, féuch, Bíodh, abair, bean, féuchuidh, imhigh, tógbhuidh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>VERB: bhí, raibh, rabh, adubhairt, bhfuil, thug, atá, arsa, tug, tá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>AUX-Cop: Nach, an</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>PART: Go</li>
      <li>VERB: Oirdnidhe, sábháilidh, ttugadh</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB: Brisfidh, Inneosad, bhaileochaidh, bheidh, bhuailfidh, bhéas, chreidfe, chreidfios, chuire, fhaice</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Cop: gurab, ba, fá, dobadh, dobudh, dárab, mba, ná'r</li>
      <li>PART: gur, nior, níor, a, ar, go, gu, lér', nachar, ór'</li>
      <li>VERB: bhí, raibh, rabh, adubhairt, thug, arsa, tug, bhíodh, chuir, Dhearc</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Cop: is, gurab, nach, ní, gur, Ag, an, as, darab, muna</li>
      <li>VERB: bhfuil, atá, tá, Adeir, Táid, atáid, fhuil, ngairthear, ngoirthear, ta</li>
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
      <li>ADP: ó'n, 'sa', 'san, don, annsa, den, do'n, san, de'n, sa</li>
      <li>DET: an, na, 'n, ná, san</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: eile, so, sin, soin, seo, se, úd, adaí</li>
      <li>PRON: sin, so, Seo, shoin</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>ADP: agam-sa, orm-sa, chughaibh-se, dhamhsa, fúthasan, ionnadsa, ionnamsa, leatsa</li>
      <li>PRON: mise, tusa, meisi, seision, eisean, seisean, sibh-se, sise</li>
      <li>VERB: mbéidision</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: aon, uile</li>
      <li>PRON: ceachtar</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: cá</li>
      <li>PRON: cé, cad, cia, céard</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADP: 'á, ghá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADP: d'á, d'ár, dá</li>
      <li>AUX-Cop: nach, dobadh, fá, ba, dobudh</li>
      <li>PART: a, do, d'á, dho, noch, dá, fa'r, ar, lér', ro</li>
      <li>VERB: atá, tá, áta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: trí, ceithre, dhá, míle, sé, cuig, céad, cúig, deich, dá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: dara, treas, chéad, naomhadh, seiseadh, t-ochtmhadh, mhíle</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADP: 'na, d'á, na, dá, ana, ina, dhá, 'n-a, 'á, arna</li>
      <li>DET: a, mo, m', n-a, bhur, do, mur, mó, ar, d'</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: féin, fein, fhéin</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB: cuireadh, ngairthear, ngoirthear, adeirthear, buaileadh, chonnaictheas, deirtear, dtáinigtheas, dubhradh, gcuirfidhe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>ADP: agam, againn, liom, orm, agam-sa, dhom, dhíom, orm-sa, asam, chugam</li>
      <li>DET: mo, m', mó, ar</li>
      <li>PRON: mé, mise, meisi, me, mhé, sinn</li>
      <li>VERB: chualas, Bhamar, Bhíos, Dhíolas, Feicim, Fuaras, Inneosad, Rugas, Thangas, Táim</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>ADP: uáit, agaibh, chughaibh-se, duit, díbh, ionnadsa, leat, leatsa, libh, ribh</li>
      <li>DET: bhur, do, mur, d'</li>
      <li>PRON: tú, tusa, sibh, sibh-se, thú</li>
      <li>VERB: Tuig, féuch, abair, bean, dhéanfá, féuchuidh, imhigh, ndéanfá, shílféa, tógbhuidh</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: ann, aige, air, aca, 'na, d'á, na, dá, dó, orra</li>
      <li>DET: a, n-a, do, na</li>
      <li>PRON: sé, é, siad, hé, sí, se, í, ea, iad, iád</li>
      <li>VERB: Táid, atáid, Bíodh, anfaidís, bhfacadar, bhfuairsiod, bhíd, bhídís, choimhédadar, chrochadar</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: .i.</li>
          <li>ADV: .i.</li>
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
          <li>PROPN: Buck, Bhuck, Dyea, Klondike, Mercedes, Rapids, Rink, Uestchester, Yukon, Hanmer</li>
          <li>X: Salt, Water</li>
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
          <li>PART: a, do, noch, ro</li>
          <li>VERB: atá, tá, áta</li>
        </ul>
      </li>
      <li>Direct,Len
        <ul>
          <li>PART: dho</li>
        </ul>
      </li>
      <li>Ecl
        <ul>
          <li>AUX-Cop: mba</li>
          <li>NOUN: bhfearann, bhflaitheas, bhfear, dtaobh, gcomhnaidhe, gcédna, gcéill, ndeireadh, ndiaidh, Níuduidheadh</li>
          <li>NOUN-Inf: bhfhaicsin, mbeith</li>
          <li>NUM: naon, náon</li>
          <li>PROPN: n-Éirinn, bhFailghe, bhFréamhainn, gConnachtaibh, mBaile, n-Áird, neabhra</li>
          <li>VERB: bhfuil, mbeadh, ngairthear, ngoirthear, bhfacadar, bhfhuilim, bhfuairsiod, dtaínig, dteagmhadh, dtáinigtheas</li>
        </ul>
      </li>
      <li>Ecl,Emp
        <ul>
          <li>NOUN: Ndíasa, mbreithirsean, natharsa</li>
        </ul>
      </li>
      <li>Emp
        <ul>
          <li>NOUN: ainmsean, sonsan, tsáoghailsi</li>
        </ul>
      </li>
      <li>Emp,Len
        <ul>
          <li>NOUN: chroidhe-se</li>
          <li>VERB: ghlacadarsan</li>
        </ul>
      </li>
      <li>HPref
        <ul>
          <li>ADJ: haereach, haireach, holc</li>
          <li>NOUN: hoidhche, Hiudaighe, Híudaidhe, h-ala, h-anfa, h-éin, haicmeadha, haimsir, haimsire, haois</li>
          <li>PRON: hé, hiád</li>
          <li>PROPN: hAodh, hÉireann</li>
          <li>VERB: háitigheadh</li>
        </ul>
      </li>
      <li>Indirect
        <ul>
          <li>PART: a, d'á, dá, ar, lér', ór'</li>
        </ul>
      </li>
      <li>Len
        <ul>
          <li>ADJ: mhaith, mhór, bhig, bhuidhe, bhán, cheart, chruim, chumhang, chéadna, chóir</li>
          <li>ADP: dhe, dho, dhochum, dhom, dhá, dhíom, dhamh, dhamhsa, dhi, dhíobh</li>
          <li>NOUN: fhios, bheith, dhéanamh, chur, thabhairt, thighearna, bhocsa, bhuidhin, cheann, chodladh</li>
          <li>NOUN-Inf: bheith, dhéanamh, chur, thabhairt, bhriseadh, choinneáil, chongbhail, dhul, dhéunamh, dhúsachd</li>
          <li>NUM: dhá, chéad, thrí, cheithre, dhó, fhichid, mhíle</li>
          <li>PART: dho</li>
          <li>PRON: fhéin, mhé, shoin, thú</li>
          <li>PROPN: Bheannchair, Dhía, Bhuck, Chairbre, Chesar, Chill, Chomhghaill, Chomhghall, Fhidheach, Fhidhic</li>
          <li>SCONJ: dhá</li>
          <li>VERB: bhí, thug, bheadh, bhíodh, chuir, Dhearc, chualas, fhuil, fhág, ghabh</li>
        </ul>
      </li>
      <li>VF
        <ul>
          <li>AUX-Cop: gurab, darab, dárab</li>
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
          <li>ADJ: dearga, dubha, ruadha, úra</li>
        </ul>
      </li>
      <li>Strong
        <ul>
          <li>NOUN: bpóilíní, mbáillí, ndáoine</li>
        </ul>
      </li>
      <li>Weak
        <ul>
          <li>NOUN: mac, Bolg, Gall, bhflaitheas, deisgiobal, fear, gcor, madadh, mionn, nGabhar</li>
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
          <li>PART: go, gu</li>
        </ul>
      </li>
      <li>Cmpl
        <ul>
          <li>PART: go, gu, nach, ná, nachar, nách, nár</li>
        </ul>
      </li>
      <li>Comp
        <ul>
          <li>PART: níos, a, ba</li>
        </ul>
      </li>
      <li>Inf
        <ul>
          <li>PART: a, do, d', dho</li>
        </ul>
      </li>
      <li>Pat
        <ul>
          <li>PART: mac, Ua, Ó, Ui, Uí, mic</li>
        </ul>
      </li>
      <li>Vb
        <ul>
          <li>PART: do, a, ní, d', gur, An, dho, go, nior, noch</li>
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
          <li>ADP: ar, i, tar, d', do, go, le, re, ós, thar</li>
          <li>NOUN: eis, ndiaidh, nós, éis, coinne, cois, dtí, feadh, leith, linn</li>
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
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (87)</li>
      <li>VERB--NOUN-Nom-ADP(ach) (2)</li>
      <li>VERB--PRON (78)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN-Gen (1)</li>
      <li>VERB--NOUN-Nom (70)</li>
      <li>VERB--PRON (20)</li>
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
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>case:voc</a>, <a>csubj:cleft</a>, <a>csubj:cop</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>mark:prt</a>, <a>nmod:poss</a>, <a>obl:prep</a>, <a>obl:tmod</a>, <a>xcomp:pred</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>csubj</a>, <a>flat</a></li>
<li>The following 12 relation types are not used in this corpus at all: <a>iobj</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>aux</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
