---
layout: base
title:  'UD_Galician-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Galician PUD

Language: [Galician](/gl/index.html) (code: `gl`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.14 release.

The following people have contributed to making this treebank part of UD: Albina Sarymsakova, Xulia Sánchez-Rodríguez, Marcos Garcia.

Repository: [UD_Galician-PUD](https://github.com/UniversalDependencies/UD_Galician-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udgl_pud214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-SA 4.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Galician-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Galician-PUD/issues).
If you want to collaborate, please contact [marcos&nbsp;•&nbsp;garcia&nbsp;•&nbsp;gonzalez&nbsp;(æt)&nbsp;usc&nbsp;•&nbsp;gal].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | annotated manually, natively in UD style |

## Description

The Galician PUD is a treebank for Galician developed at CiTIUS (Universidade de Santiago de Compostela).



There are 1000 sentences in each language, always in the same order. (The sentence alignment is 1-1 but occasionally a sentence-level segment actually consists of two real sentences.) The sentences are taken from the news domain (sentence id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are usually only a few sentences from each document, selected randomly, not necessarily adjacent. The digits on the second and third position in the sentence ids encode the original language of the sentence. The first 750 sentences are originally English (01). The remaining 250 sentences are originally German (02), French (03), Italian (04) or Spanish (05) and they were translated to other languages via English. Translation into German, French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese, Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and performed (except for German) by professional translators. Then the data has been annotated morphologically and syntactically by Google according to Google universal annotation guidelines; finally, it has been converted by members of the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2 annotation) by other teams: Czech by Charles University, Finnish by University of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the shared task). If it is used for training in future research, the users should employ ten-fold cross-validation.

The linguistic annotation was first carried out using state-of-the-art NLP tools for Galician, and then reviewed by two experts, achieving a high inter-annotator agreement.

## Acknowledgments

* Marcos Garcia. 2016. *Universal Dependencies Guidelines for the Galician-Treegal Treebank.* Technical Report. LyS Group, Universidade da Coruña.

* Xulia Sánchez-Rodríguez, Albina Sarymsakova, Laura Castro, and Marcos Garcia. 2024. Increasing manually annotated resources for Galician: the Parallel Universal Dependencies Treebank. In *Proceedings of the 16th International Conference on Computational Processing of Portuguese*, pages 587–592, Santiago de Compostela, Galicia/Spain. Association for Computational Lingustics.

We would also like to thank Pablo Gamallo and Iria de-Dios-Flores for helpful discussions and feedback, and Laura Castro, Sandra Rodríguez Rey and Helena Pérez Puente for their assistance with the translations.

## References

If you use the Galician PUD treebank, you are encouraged to cite this paper:
<pre>
@inproceedings{sanchez-rodriguez-etal-2024-increasing,
title = "Increasing manually annotated resources for {G}alician: the Parallel {U}niversal {D}ependencies Treebank",
author = "S{\'a}nchez-Rodr{\'\i}guez, Xulia and
Sarymsakova, Albina and
Castro, Laura and
Garcia, Marcos",
editor = "Gamallo, Pablo and
Claro, Daniela and
Teixeira, Ant{\'o}nio and
Real, Livy and
Garcia, Marcos and
Oliveira, Hugo Gon{\c{c{% raw %}}}{% endraw %}alo and
Amaro, Raquel",
booktitle = "Proceedings of the 16th International Conference on Computational Processing of Portuguese",
month = mar,
year = "2024",
address = "Santiago de Compostela, Galicia/Spain",
publisher = "Association for Computational Lingustics",
url = "https://aclanthology.org/2024.propor-1.65",
pages = "587--592",
}
</pre>

# Statistics of UD Galician PUD

## POS Tags

[ADJ](gl_pud-pos-ADJ.html) – [ADP](gl_pud-pos-ADP.html) – [ADV](gl_pud-pos-ADV.html) – [AUX](gl_pud-pos-AUX.html) – [CCONJ](gl_pud-pos-CCONJ.html) – [DET](gl_pud-pos-DET.html) – [NOUN](gl_pud-pos-NOUN.html) – [NUM](gl_pud-pos-NUM.html) – [PRON](gl_pud-pos-PRON.html) – [PROPN](gl_pud-pos-PROPN.html) – [PUNCT](gl_pud-pos-PUNCT.html) – [SCONJ](gl_pud-pos-SCONJ.html) – [SYM](gl_pud-pos-SYM.html) – [VERB](gl_pud-pos-VERB.html)

## Features

[AdpType](gl_pud-feat-AdpType.html) – [Case](gl_pud-feat-Case.html) – [Definite](gl_pud-feat-Definite.html) – [Gender](gl_pud-feat-Gender.html) – [Mood](gl_pud-feat-Mood.html) – [Number](gl_pud-feat-Number.html) – [Number[psor]](gl_pud-feat-Number-psor.html) – [NumType](gl_pud-feat-NumType.html) – [Person](gl_pud-feat-Person.html) – [Polarity](gl_pud-feat-Polarity.html) – [Poss](gl_pud-feat-Poss.html) – [PronType](gl_pud-feat-PronType.html) – [Tense](gl_pud-feat-Tense.html) – [VerbForm](gl_pud-feat-VerbForm.html)

## Relations

[acl](gl_pud-dep-acl.html) – [advcl](gl_pud-dep-advcl.html) – [advmod](gl_pud-dep-advmod.html) – [amod](gl_pud-dep-amod.html) – [appos](gl_pud-dep-appos.html) – [aux](gl_pud-dep-aux.html) – [aux:pass](gl_pud-dep-aux-pass.html) – [case](gl_pud-dep-case.html) – [cc](gl_pud-dep-cc.html) – [ccomp](gl_pud-dep-ccomp.html) – [compound](gl_pud-dep-compound.html) – [conj](gl_pud-dep-conj.html) – [cop](gl_pud-dep-cop.html) – [csubj](gl_pud-dep-csubj.html) – [det](gl_pud-dep-det.html) – [discourse](gl_pud-dep-discourse.html) – [expl](gl_pud-dep-expl.html) – [fixed](gl_pud-dep-fixed.html) – [flat](gl_pud-dep-flat.html) – [flat:foreign](gl_pud-dep-flat-foreign.html) – [flat:name](gl_pud-dep-flat-name.html) – [iobj](gl_pud-dep-iobj.html) – [mark](gl_pud-dep-mark.html) – [nmod](gl_pud-dep-nmod.html) – [nsubj](gl_pud-dep-nsubj.html) – [nsubj:pass](gl_pud-dep-nsubj-pass.html) – [nummod](gl_pud-dep-nummod.html) – [obj](gl_pud-dep-obj.html) – [obl](gl_pud-dep-obl.html) – [orphan](gl_pud-dep-orphan.html) – [parataxis](gl_pud-dep-parataxis.html) – [punct](gl_pud-dep-punct.html) – [root](gl_pud-dep-root.html) – [vocative](gl_pud-dep-vocative.html) – [xcomp](gl_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 21836 tokens and 23510 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2604 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 13 types of words that contain both letters and punctuation. Examples: a., C., Sra., Sr., EE.UU., d., B-29, Don't, Hitchhiker's, Jr., St., Z., Zettel's</li>
</ul>

<ul>
<li>This corpus contains 1668 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 184 types of multi-word tokens. Examples: do, da, no, na, ao, dos, á, das, nos, polo, co, nun, dunha, nas, ás, coa, dun, nunha, pola, aos, coas, cos, polas, cun, deste, desta, doutra, atópase, cunha, neste, polos, pódese, del, deles, destes, pódense, doutro, facelo, fíxose, naquela, nese, nesta, atópanse, destas, diso, disto, díxolle, enfróntase, espérase, mostráronse.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: PART, INTJ, X</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 38 lemmas tagged as pronouns (PRON): algo, alguén, algún, ambos, aquel, aquela, aquilo, cal, el, ese, este, eu, iso, isto, lle, me, mesmo, moito, nada, ninguén, ningún, nos, nós, o, outro, pouco, que, quen, se, seu, si, tal, te, ti, todo, un, vos, vostede</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as determiners (DET): algún, ambos, aquel, cada, calquera, canto, certo, cuxo, el, ese, este, mesmo, meu, moito, ningún, noso, o, outro, pouco, propio, que, quenquera, seu, tanto, teu, todo, un, varios</li>
</ul>

<ul>
<li>Out of the above, 16 lemmas occurred sometimes as PRON and sometimes as DET: algún, ambos, aquel, el, ese, este, mesmo, moito, ningún, o, outro, pouco, que, seu, todo, un</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): deber, deixar, estar, ir, parecer, poder, querer, ser, ter, vir</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: deber, deixar, estar, ir, parecer, poder, querer, ser, ter, vir</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: está, Son, pode, poidan</li>
    <li>VERB: Están, observan, parece, permite, pilota</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: sendo, tendo</li>
    <li>VERB: incluíndo, axudando, convertendo, crecendo, dicindo, iniciando, preparando, traballando, utilizando, aliviando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: ser, estar, poder</li>
    <li>VERB: facer, ver, ter, manter, axudar, deixar, enviar, establecer, partir, pensar</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>VERB: debido, baseadas, dirixida, incluídos, localizadas, mediados, publicado, acusado, anticipado, coprotagonizado</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: gran, per, anterior, confidenciais, conservacionistas, dixital, escalofriante, especial, habitual, impactante</li>
      <li>NOUN: parte, final, partes, axentes, cápita, defensa, mañá, axente, modelo, C</li>
      <li>PRON: se, lle, me, nos, eu, lles, mesmo, nós, que, quen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: Buena, aqueménidas, bancaria, centrais, exitosa, inusual, iézidis, meterolóxica, minoristas, pacífica</li>
      <li>DET: a, as, unha, súa, súas, esta, varias, outra, cada, estas</li>
      <li>NOUN: persoas, guerra, cidade, vez, rexión, vida, historia, maioría, forma, policía</li>
      <li>PRON: a, ela, unha, esta, moitas, as, estas, que, Outras, algunhas</li>
      <li>PROPN: Córsega, Liña</li>
      <li>VERB: baseadas, dirixida, localizadas, coñecidas, formada, perdidas, preparada, procedentes, publicadas, seguidas</li>
      <li>VERB-Part: baseadas, dirixida, localizadas, coñecidas, formada, perdidas, preparada, procedentes, publicadas, seguidas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: argumentativo, austro, autosómicos, conservador, distinto, franco, inapropriado, local, medio, monegasco</li>
      <li>DET: o, os, un, seu, este, seus, todo, moitos, outros, algúns</li>
      <li>NOUN: anos, lugar, ano, estado, goberno, mar, día, millóns, mundo, século</li>
      <li>NUM: mil, 1,4, 1,5, 103,7, 15.000, 16, 2</li>
      <li>PRON: o, el, un, eles, todo, os, que, ambos, estes, outros</li>
      <li>PROPN: Knott</li>
      <li>VERB-Part: debido, incluídos, mediados, publicado, acusado, anticipado, deseñado, destruído, feito, formado</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>PRON: que, isto, iso, cal, alguén, cales, algo, nada, ninguén, aquilo</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: aqueménidas, autosómicos, centrais, confidenciais, conservacionistas, iézidis, legais, minoristas, novos, poboacionais</li>
      <li>AUX: foron, poden, están, estaban, eran, poderían, Estamos, podemos, debemos, estiveron</li>
      <li>AUX-Fin: Son, poidan</li>
      <li>DET: os, as, súas, seus, moitos, outros, varias, algúns, uns, estas</li>
      <li>NOUN: anos, persoas, millóns, estados, países, veces, eleccións, datos, dólares, empresas</li>
      <li>NUM: 1,5, 15.000</li>
      <li>PRON: eles, nos, lles, os, ambos, estes, outros, cales, moitas, que</li>
      <li>VERB: teñen, inclúen, tiñan, acabaron, están, tiveron, adoitan, afirman, atopan, baseadas</li>
      <li>VERB-Fin: Están, observan</li>
      <li>VERB-Inf: cumpriren, asumiren, desempeñaren, realizaren, superaren, xurdiren</li>
      <li>VERB-Part: baseadas, incluídos, localizadas, mediados, coñecidas, involucrados, liderados, perdidas, presentados, procedentes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: gran, per, Buena, anterior, argumentativo, austro, bancaria, conservador, distinto, dixital</li>
      <li>AUX: é, foi, está, pode, era, son, estaba, podería, fora, sería</li>
      <li>AUX-Fin: está, pode</li>
      <li>DET: o, a, un, unha, súa, seu, este, esta, todo, mesmo</li>
      <li>NOUN: lugar, ano, guerra, parte, estado, cidade, goberno, mar, día, mundo</li>
      <li>PRON: lle, o, el, un, a, ela, me, todo, unha, cal</li>
      <li>PROPN: Córsega, Knott, Liña</li>
      <li>VERB: hai, dixo, ten, tivo, comezou, fixo, declarou, é, tiña, afirmou</li>
      <li>VERB-Fin: parece, permite, pilota</li>
      <li>VERB-Part: debido, dirixida, publicado, acusado, anticipado, coprotagonizado, deseñado, destruído, dirixido, feito</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: o, a, os, as, si, te</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: lle, lles</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: eu</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: o, a, os, as, súa, seu, este, súas, esta, seus</li>
      <li>PRON: a, o</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, unha, todo, cada, moitos, outros, varias, algúns, mesmo, outra</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd,Ind
    <ul>
      <li>AUX: podería, poderían, sería, serían, debería, deberían, estaría, tería, terían</li>
      <li>VERB: crearían, debería, resultaría, sería, Sorprendería, afectaría, axudaría, caracterizarían, deixaría, descoñecerían</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: é, foi, está, pode, son, era, estaba, foron, poden, están</li>
      <li>AUX-Fin: está, Son, pode</li>
      <li>VERB: hai, dixo, ten, tivo, comezou, fixo, declarou, é, tiña, afirmou</li>
      <li>VERB-Fin: Están, observan, parece, permite, pilota</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: sexa, fose, fosen, poidan, puidesen, estea, estivese, podes, sexan</li>
      <li>AUX-Fin: poidan</li>
      <li>VERB: fixese, introducise, produzan, teñan, tivese, Fosen, acabase, actuasen, acudisen, adopte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: será, deixará, estarei, poderán, terá</li>
      <li>VERB: haberá, reducirá, terá, Avaliaremos, Botará, Xogarán, activarán, asistirán, axudará, cambiará</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: era, estaba, estaban, eran, fose, fosen, podía, puidesen, tiñan, Parecía</li>
      <li>VERB: tiña, era, tiñan, había, quería, aparecía, dependía, dicía, entendía, estaba</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: foi, foron, estiveron, estivo, tiveron, tivo</li>
      <li>VERB: dixo, tivo, comezou, fixo, declarou, afirmou, converteu, lanzou, permitiu, decidiu</li>
      <li>VERB-Part: acusadas, empregado</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pqp
    <ul>
      <li>AUX: fora, foran, estivera</li>
      <li>VERB: deixaran, perdera, salvara, Conmovera, adestraran, afastara, anticiparan, aparecera, asinara, atacara</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: é, está, pode, son, poden, están, ten, sexa, Estamos, podemos</li>
      <li>AUX-Fin: está, Son, pode, poidan</li>
      <li>VERB: hai, ten, é, teñen, di, inclúen, afirma, atopa, axuda, contén</li>
      <li>VERB-Fin: Están, observan, parece, permite, pilota</li>
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
      <li>DET: o, a, os, as, un, unha, todo, cada, moitos, outros</li>
      <li>PRON: o, a, unha, Un, outros, ambos, as, mesmo, poucos, todas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: este, esta, ese, estas, estes, eses, aquela, esa, aquelas, aquel</li>
      <li>PRON: isto, iso, este, estes, esta, aqueles, estas, aquela, aquilo, esa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: quenquera, mesma, outros, tanto</li>
      <li>PRON: todo, un, alguén, algo, ambos, mesmo, unha, moitas, moitos, nada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: que</li>
      <li>PRON: cal</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: os</li>
      <li>PRON: se, lle, o, el, ela, eles, me, a, nos, eu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: onde</li>
      <li>DET: cuxa</li>
      <li>PRON: que, quen, cal, cales</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: dous, tres, dúas, 1, catro, seis, 10, 3, dez, 100</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>NUM: primeira, primeiro, segunda, primeiros, I, segundo, terceiro, III, IV, primeiras</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: súa, seu, súas, seus, noso, nosa, meu, miña, meus, nosas</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: son, era, fora, sexa, Estamos, podemos, debemos, fose, Podo, Teño</li>
      <li>DET: noso, nosa, meu, miña, meus, nosas</li>
      <li>PRON: me, nos, eu, nós</li>
      <li>VERB: tiña, era, Avanzamos, cremos, deixamos, espero, Avaliaremos, Avistei, Conmovera, Contamos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: Debedes, Tes, podes</li>
      <li>PRON: te, ti, vos</li>
      <li>VERB: Acabas, aforas, decatastes, dominaches, oes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: é, foi, está, pode, estaba, foron, poden, están, podería, estaban</li>
      <li>AUX-Fin: está, Son, pode, poidan</li>
      <li>DET: súa, seu, súas, seus, os</li>
      <li>PRON: se, lle, o, el, ela, eles, a, lles, os, si</li>
      <li>VERB: hai, dixo, ten, tivo, comezou, fixo, declarou, é, afirmou, converteu</li>
      <li>VERB-Fin: Están, observan, parece, permite, pilota</li>
      <li>VERB-Inf: cumpriren, asumiren, desempeñaren, realizaren, superaren, xurdiren</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: noso, nosa, nosas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: meu, miña, meus, teu</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: de, en, a, por, con, para, como, sobre, entre, durante</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: ser, estar.</li>
</ul>

<ul>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: poder, estar, ter, deber, parecer, ir, ser, deixar, querer, vir.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, estar.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (546)</li>
      <li>VERB--NOUN-ADP(a) (4)</li>
      <li>VERB--PRON (242)</li>
      <li>VERB--PRON-ADP(a) (2)</li>
      <li>VERB--PRON-ADP(con) (1)</li>
      <li>VERB--PRON-ADP(para) (1)</li>
      <li>VERB--PRON-ADP(sobre) (1)</li>
      <li>VERB--PRON-Nom (6)</li>
      <li>VERB-Fin--PRON (2)</li>
      <li>VERB-Ger--NOUN (9)</li>
      <li>VERB-Ger--PRON (3)</li>
      <li>VERB-Inf--NOUN (46)</li>
      <li>VERB-Inf--PRON (14)</li>
      <li>VERB-Part--NOUN (9)</li>
      <li>VERB-Part--PRON (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (478)</li>
      <li>VERB--NOUN-ADP(a) (21)</li>
      <li>VERB--NOUN-ADP(ata) (1)</li>
      <li>VERB--NOUN-ADP(até) (1)</li>
      <li>VERB--NOUN-ADP(de) (6)</li>
      <li>VERB--NOUN-ADP(por) (1)</li>
      <li>VERB--PRON (35)</li>
      <li>VERB--PRON-ADP(a) (1)</li>
      <li>VERB--PRON-Acc (24)</li>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Ger--NOUN (29)</li>
      <li>VERB-Ger--PRON (1)</li>
      <li>VERB-Ger--PRON-Acc (3)</li>
      <li>VERB-Inf--NOUN (209)</li>
      <li>VERB-Inf--NOUN-ADP(a) (6)</li>
      <li>VERB-Inf--NOUN-ADP(cara) (1)</li>
      <li>VERB-Inf--NOUN-ADP(de)-ADP(a) (1)</li>
      <li>VERB-Inf--PRON (7)</li>
      <li>VERB-Inf--PRON-Acc (14)</li>
      <li>VERB-Part--NOUN (5)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN-ADP(a) (11)</li>
      <li>VERB--PRON (10)</li>
      <li>VERB--PRON-Dat (26)</li>
      <li>VERB-Ger--NOUN-ADP(a) (1)</li>
      <li>VERB-Ger--PRON (1)</li>
      <li>VERB-Ger--PRON-Dat (3)</li>
      <li>VERB-Inf--NOUN-ADP(a) (2)</li>
      <li>VERB-Inf--PRON-Dat (4)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>aux:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
