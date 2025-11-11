---
layout: base
title:  'UD_Sicilian-STB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Sicilian STB

Language: [Sicilian](/scn/index.html) (code: `scn`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.17 release.

The following people have contributed to making this treebank part of UD: Cristina Bosco, Sabrina D'Alì, Elisa Di Nuovo, Mario Guglielmetti, Caterina Maria Cappello.

Repository: [UD_Sicilian-STB](https://github.com/UniversalDependencies/UD_Sicilian-STB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udscn_stb217)<br />
Download all treebanks: [UD 2.17](/#download)

License: CC BY-SA 4.0

Genre: fiction

Questions, comments?
General annotation questions (either Sicilian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Sicilian-STB/issues).
If you want to collaborate, please contact [cristina&nbsp;•&nbsp;bosco&nbsp;(æt)&nbsp;unito&nbsp;•&nbsp;it].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description

The Sicilian Treebank is a small parallel corpus of Sicilian texts, automatically parsed and then manually revised, with Italian translations. It includes both contemporary and folkloric materials. The main focus is documenting typical morphosyntactic features of the written Sicilian.


Sicilian-STB is the first treebank for the Sicilian language in the Universal Dependencies framework. It is a parallel resource aligned 1:1 at the sentence level between Sicilian and Italian. The texts included in this first release come from the Panzaredda website, as well as a third text consisting of 18 diatopic variants of the Sicilian legend of Colapisci. In the CoNLL-U files, each text includes a comment line at the beginning indicating the diatopic variant and, when available, the year of publication.

For the Italian translations, we used three LLMs accessed via GPT@JRC, a tool that provides safe, AI Act-compliant access to generative AI systems. Each model generated translations using three different prompting strategies. The preferred translation version was chosen based on subjective qualitative evaluations. This version was then manually corrected by native Sicilian speakers with linguistic training. The revised translations are included in the CoNLL-U files as comment lines aligned with each Sicilian sentence.

As no previous UD-formatted treebank exists for Sicilian, we generated an initial automatic annotation using pre-trained UD models for Italian. In particular, we tested parser trained on the ISDT and POSTWITA treebanks, the two largest Italian resources in the UD repository. Gold-standard sentence segmentation was applied before parsing.
The automatic annotation was manually revised using the Arborator tool. Each of the three texts was annotated by one annotator and reviewed by a second. Problematic phenomena were discussed collaboratively among the three main annotators, with additional consultation involving the rest of the authors when necessary.

For the first release of the treebank, only the Sicilian side is annotated in UD format and fully revised. The Italian side remains automatically annotated without manual correction.




## Acknowledgments

...

## References

* (citation)



# Statistics of UD Sicilian STB

## POS Tags

[ADJ](scn_stb-pos-ADJ.html) – [ADP](scn_stb-pos-ADP.html) – [ADV](scn_stb-pos-ADV.html) – [AUX](scn_stb-pos-AUX.html) – [CCONJ](scn_stb-pos-CCONJ.html) – [DET](scn_stb-pos-DET.html) – [INTJ](scn_stb-pos-INTJ.html) – [NOUN](scn_stb-pos-NOUN.html) – [NUM](scn_stb-pos-NUM.html) – [PART](scn_stb-pos-PART.html) – [PRON](scn_stb-pos-PRON.html) – [PROPN](scn_stb-pos-PROPN.html) – [PUNCT](scn_stb-pos-PUNCT.html) – [SCONJ](scn_stb-pos-SCONJ.html) – [VERB](scn_stb-pos-VERB.html)

## Features

[Clitic](scn_stb-feat-Clitic.html) – [Definite](scn_stb-feat-Definite.html) – [Degree](scn_stb-feat-Degree.html) – [ExtPos](scn_stb-feat-ExtPos.html) – [Gender](scn_stb-feat-Gender.html) – [Mood](scn_stb-feat-Mood.html) – [Number](scn_stb-feat-Number.html) – [NumType](scn_stb-feat-NumType.html) – [Person](scn_stb-feat-Person.html) – [Polarity](scn_stb-feat-Polarity.html) – [Poss](scn_stb-feat-Poss.html) – [PronType](scn_stb-feat-PronType.html) – [Reflex](scn_stb-feat-Reflex.html) – [Tense](scn_stb-feat-Tense.html) – [VerbForm](scn_stb-feat-VerbForm.html)

## Relations

[acl](scn_stb-dep-acl.html) – [acl:relcl](scn_stb-dep-acl-relcl.html) – [advcl](scn_stb-dep-advcl.html) – [advmod](scn_stb-dep-advmod.html) – [amod](scn_stb-dep-amod.html) – [appos](scn_stb-dep-appos.html) – [aux](scn_stb-dep-aux.html) – [aux:pass](scn_stb-dep-aux-pass.html) – [case](scn_stb-dep-case.html) – [cc](scn_stb-dep-cc.html) – [ccomp](scn_stb-dep-ccomp.html) – [ccomp:reported](scn_stb-dep-ccomp-reported.html) – [compound](scn_stb-dep-compound.html) – [conj](scn_stb-dep-conj.html) – [cop](scn_stb-dep-cop.html) – [csubj](scn_stb-dep-csubj.html) – [det](scn_stb-dep-det.html) – [det:poss](scn_stb-dep-det-poss.html) – [det:predet](scn_stb-dep-det-predet.html) – [discourse](scn_stb-dep-discourse.html) – [dislocated](scn_stb-dep-dislocated.html) – [expl](scn_stb-dep-expl.html) – [expl:impers](scn_stb-dep-expl-impers.html) – [expl:pass](scn_stb-dep-expl-pass.html) – [expl:pv](scn_stb-dep-expl-pv.html) – [fixed](scn_stb-dep-fixed.html) – [flat:name](scn_stb-dep-flat-name.html) – [iobj](scn_stb-dep-iobj.html) – [mark](scn_stb-dep-mark.html) – [nmod](scn_stb-dep-nmod.html) – [nsubj](scn_stb-dep-nsubj.html) – [nsubj:outer](scn_stb-dep-nsubj-outer.html) – [nsubj:pass](scn_stb-dep-nsubj-pass.html) – [nummod](scn_stb-dep-nummod.html) – [obj](scn_stb-dep-obj.html) – [obl](scn_stb-dep-obl.html) – [obl:agent](scn_stb-dep-obl-agent.html) – [parataxis](scn_stb-dep-parataxis.html) – [punct](scn_stb-dep-punct.html) – [root](scn_stb-dep-root.html) – [vocative](scn_stb-dep-vocative.html) – [xcomp](scn_stb-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 505 sentences, 10932 tokens and 11204 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2239 tokens (20%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 138 types of words that contain both letters and punctuation. Examples: l', 'n, 'na, d', cc', s', n', 'un, ch', 'nta, m', 'a, nn', 'n', 'u, st', cu', t', n’, su', va', 'nchianau, 'ntra, 'ntunnu, a', c', p', sutt', vo', âm', ‘n, 'argi, 'ccussì, 'nt', com', cu’, ddu', du’, ha', trent', vintiquattr', 'i, 'jutari, 'nchiana, 'nna, 'nnumani, 'nti, 'ntisu, 'ranni, 'rossu</li>
</ul>

<ul>
<li>This corpus contains 265 multi-word tokens. On average, one multi-word token consists of 2.03 syntactic words.</li>
<li>There are 91 types of multi-word tokens. Examples: dû, â, dâ, ô, ntâ, ntô, dî, ê, pû, cû, pâ, chî, câ, d''u, mâ, nnô, tâ, tû, nnâ, ntê, nâ, 'nt'ô, Datimi, Dimmi, all', ascutàtimi, d''a, dunni, fallu, fàricci, pî, sâ, sû, ôn, 'ell', 'ill', 'mminazzallu, 'napocu, 'ncapu, 'nt'ôn, 'rapirla, 'ttaccallu, Dicci, Facèmula, Fàrilu, Jamuninni, Rispùnnimi, Sparàgnati, abbrazzallu, accustàricci.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: SYM, X</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): a</li>
</ul>

<ul>
<li>This corpus contains 51 lemmas tagged as pronouns (PRON): a, autru, ca, certunu, chi, chiddu, chissu, chistu, ci, cosa, cui, idda, iddi, iddu, io, iu, jeu, ju, la, li, lu, me, mi, mia, nenti, ni, nuaiutri, nuautri, nuddu, nui, nuiautri, ognidunu, paru, picca, pocu, quali, quantu, quarchidunu, si, soccu, ti, tia, tu, tuo, tuttu, u, unu, vi, vuiautri, zoccu, àutru</li>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as determiners (DET): a, assai, autru, beni, certu, chi, chiddu, chissa, chissi, chissu, chistu, dda, ddu, il, lu, ma, me, mei, meu, miu, mè, nostru, nuddu, ogni, quantu, quarchi, so, stu, suou, sò, ta, tantu, toi, tuo, tuttu, u, unu, vostru</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: a, autru, chi, chiddu, chissu, chistu, lu, me, nuddu, quantu, tuo, tuttu, u, unu</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): aviri, duviri, essiri, jiri, putiri, sapiri, stari, vuliri</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: aviri, essiri, jiri, putiri, sapiri, stari, vuliri</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: era, è, avìa, sugnu, avia, stava, putìa, èramu, èranu, avìssiru</li>
    <li>VERB: dissi, era, è, fici, vitti, dici, vinni, avìa, avia, stava</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: jennu, vidennu, summuzzannu, Sintennu, dicennu, parrannu, putennu, scutulànnu, 'llavancànnu, 'spittannu</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: èssiri, avir, essiri</li>
    <li>VERB: fari, diri, sapiri, jiri, stari, pigghiari, vìdiri, dari, natari, assummari</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: pututu, statu</li>
    <li>VERB: vistu, mortu, ntisu, fattu, dittu, statu, 'ntisu, abbannunatu, chiamatu, mancatu</li>
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
      <li>ADJ: sana, autra, beḍḍa, sula, calla, fabbricata, janca, prima, rutta, vecchia</li>
      <li>AUX-Part: statu</li>
      <li>DET: la, a, na, li, 'na, sta, i, l', so, ḍḍa</li>
      <li>NOUN: vota, cosa, manu, Maistà, acqua, màchina, cosi, testa, facci, ura</li>
      <li>PRON: la, ci, una, l', a, àutra, cci, li, idda, 'a</li>
      <li>VERB-Part: 'mmarsamati, 'ncatinati, Finuta, Misa, accattatu, accucchiatu, arrivutata, assittata, astutata, caduta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: menzu, marinu, veru, funnutu, cuntenti, mezzu, mortu, autru, bonu, sanu</li>
      <li>AUX-Part: pututu, statu</li>
      <li>DET: lu, un, u, li, stu, i, l', n', tutti, so</li>
      <li>NOUN: Re, mari, pisci, funnu, omu, anni, occhi, jornu, tempu, puntu</li>
      <li>PRON: cci, lu, ci, iḍḍu, l', chistu, u, nenti, tutti, iddu</li>
      <li>VERB-Part: vistu, mortu, fattu, ntisu, dittu, statu, 'ntisu, abbannunatu, chiamatu, murtu</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grossi, priziusi, 'rossi, boni, duci, ferri, forti, granni, junciuti, lordi</li>
      <li>AUX-Fin: èramu, èranu, avìssiru, avìanu, fòru, avìssimu, eranu, foru, putimu, putìvanu</li>
      <li>DET: li, i, l', tutti, sti, so, la, tanti, ḍḍi, me</li>
      <li>NOUN: anni, occhi, cosi, uri, culonni, manu, Sireni, bastimenti, cristiani, jorna</li>
      <li>PRON: cci, ni, tutti, li, vi, autri, nuiautri, chiḍḍi, iḍḍi, nuaiutri</li>
      <li>VERB-Fin: passaru, eranu, fannu, ficiru, fìciru, jìvanu, âm', dèttiru, misiru, viditi</li>
      <li>VERB-Part: statu, 'mmarsamati, 'ncatinati, arristavu, arrisurbutu, assittati, attaccati, aḍḍumati, canciatu, mancatu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: menzu, marinu, autra, sana, veru, beḍḍa, funnutu, megghiu, sula, calla</li>
      <li>AUX-Fin: era, è, avìa, sugnu, avia, stava, putìa, pozzu, hâ, vosi</li>
      <li>AUX-Part: pututu, statu</li>
      <li>DET: lu, la, un, u, a, na, l', stu, 'na, sta</li>
      <li>NOUN: funnu, vota, cosa, acqua, omu, màchina, jornu, testa, manu, facci</li>
      <li>PRON: cci, ci, mi, lu, ti, la, l', tu, iḍḍu, chistu</li>
      <li>VERB-Fin: dissi, era, è, fici, vitti, dici, vinni, avìa, avia, stava</li>
      <li>VERB-Part: vistu, mortu, ntisu, fattu, dittu, 'ntisu, abbannunatu, chiamatu, murtu, purtatu</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: lu, la, li, u, a, l', i, 'a, 'u, nu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, na, 'na, n', 'n', unu, 'n, nu, una, n’</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: grannissimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: megghiu</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>INTJ: no</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV: sì</li>
      <li>INTJ: se, sì</li>
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
      <li>AUX-Fin: avissi, avìssiru, putissi, avìssimu, fussi, pozzu, sapisti, vòsimu</li>
      <li>VERB-Fin: avissi, facisti, giuvassi, pigghiasti, sunàssiru, vinisti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: hâ'</li>
      <li>VERB-Fin: di, Dati, ascutàti, va', Aspetta, Penza, Rispùnni, Sintiti, Sparagna, Talè</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: era, è, avìa, sugnu, avia, stava, èramu, èranu, hâ, pozzu</li>
      <li>VERB-Fin: dissi, era, è, fici, vitti, dici, vinni, avìa, avia, stava</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: putìa, avìssiru, avissi, avìa, avìssimu, era, putia, putissi, vulissi, èranu</li>
      <li>VERB-Fin: arrivava, avìssiru, dicissimu, firriassi, ha', jissi, nfuḍḍivu, sapissi, sapissiru, torna</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sarai</li>
      <li>VERB-Fin: vinirà, 'mmucci, Vutau, chiamirà, dicissimu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, avìa, avia, stava, putìa, èramu, èranu, avìanu, putia, avìssiru</li>
      <li>VERB-Fin: era, avìa, avia, stava, parìa, sapia, chiamava, eranu, jìvanu, purtava</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: vosi, fu, fòru, foru, potti, sapisti</li>
      <li>AUX-Part: pututu, statu</li>
      <li>VERB-Fin: dissi, fici, vitti, vinni, jittau, misi, pigghiau, appi, chiamau, assummau</li>
      <li>VERB-Part: vistu, mortu, ntisu, fattu, dittu, statu, 'ntisu, abbannunatu, chiamatu, mancatu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: è, sugnu, pozzu, hâ, sì, avissi, avìssiru, a', pò, staju</li>
      <li>VERB-Fin: è, dici, aspetta, fa, sacciu, veni, avi, va', avissi, di</li>
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
      <li>DET: lu, la, li, un, u, a, l', na, i, 'na</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: stu, sta, ḍḍa, ḍḍu, sti, st', ḍḍi, ssa, ssu, Chistu</li>
      <li>PRON: chistu, chiḍḍu, chiḍḍi, chiddu, chidda, chiddi, chissu, chista, Chisti, chiddru</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: chi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: quarchi, tutti, ogni, tanti, tuttu, Nuḍḍa, Tutta, assà, autri, bbeni</li>
      <li>PRON: nenti, una, tutti, nuḍḍu, àutra, autri, pocu, tuttu, unu, quarchidunu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: chi, quantu, quanti</li>
      <li>PRON: chi, zoccu, c', ch', quali, Cosa, qual', quant', quantu, soccu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nun, non, 'un, mancu, nimmancu, nu, ni, no</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: so, me, ma, sò, mè, sa, ta, Miei, miu, nostra</li>
      <li>PRON: cci, si, ci, cc', mi, lu, nni, ti, la, s'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>DET: quantu</li>
      <li>PRON: ca, chi, ch', cu', cu’, cui, pari, quantu</li>
      <li>SCONJ: ca, chi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutti, tuttu, tutta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: tri, quattru, dui, ddu', du’, trent', vintiquattr', dicidott', se', '62</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prima, terza, primi, primu, secunna, sicunnu, ùrtimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: so, me, ma, sò, mè, sa, ta, Miei, miu, nostra</li>
      <li>PRON: tua</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sugnu, èramu, pozzu, staju, avìa, vogghiu, Haju, aju, avìssimu, era</li>
      <li>PRON: mi, cci, io, ni, iu, m', mia, nuiautri, jeu, nuaiutri</li>
      <li>VERB-Fin: sacciu, vitti, scinnu, vegnu, âm', avissi, visti, accuminciammu, aju, attruvammu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: hâ, sì, a', putissi, sai, vo', hâ', po', putiti, pô'</li>
      <li>PRON: ti, tu, vi, t', tia, vuiautri, V', cci, u</li>
      <li>VERB-Fin: aspetta, va', di, hai, ha', viditi, Dati, ascutàti, dici, fa'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: era, è, avìa, avia, stava, èranu, avìssiru, putìa, vosi, fu</li>
      <li>PRON: si, cci, ci, lu, la, s', l', iḍḍu, u, iddu</li>
      <li>VERB-Fin: dissi, era, è, fici, avìa, dici, vinni, vitti, avia, jittau</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: ci, mi, si, ni, cci, vi, cc', lu, ti, u</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: senza, Sicunnu, a, comu, jintra, ntra</li>
          <li>ADV: nzèmmula, Ntra, appressu, comu, dintra, doppu, jintra, ncapu, supra, sutta</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADV: supra, davanzi, prima, agghiri, ntunnu, 'ntunnu, fora, jintra, Ddoppu, Doppu</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>INTJ: grazzi</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: Pi</li>
          <li>ADV: doppu, puru</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: essiri.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: aviri, putiri, vuliri, stari, essiri, duviri, jiri.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essiri.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (227)</li>
      <li>VERB-Fin--PRON (171)</li>
      <li>VERB-Ger--NOUN (1)</li>
      <li>VERB-Ger--PRON (6)</li>
      <li>VERB-Inf--NOUN (20)</li>
      <li>VERB-Inf--PRON (11)</li>
      <li>VERB-Part--NOUN (13)</li>
      <li>VERB-Part--PRON (16)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (201)</li>
      <li>VERB-Fin--PRON (151)</li>
      <li>VERB-Ger--NOUN (8)</li>
      <li>VERB-Ger--PRON (6)</li>
      <li>VERB-Inf--NOUN (80)</li>
      <li>VERB-Inf--PRON (55)</li>
      <li>VERB-Part--NOUN (14)</li>
      <li>VERB-Part--PRON (20)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--PRON (207)</li>
      <li>VERB-Ger--PRON (4)</li>
      <li>VERB-Inf--PRON (23)</li>
      <li>VERB-Part--PRON (8)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 3 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: arrisbigghiari ti, sparagnari ti, zittiri vi</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: vidiri si</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>ccomp:reported</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>flat:name</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
