---
layout: base
title:  'UD_Spanish-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Spanish PUD

Language: [Spanish](/es/index.html) (code: `es`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Hector Fernandez Alcalde, Laura Moreno Romero, Martin Popel, Daniel Zeman, Héctor Martínez Alonso.

Repository: [UD_Spanish-PUD](https://github.com/UniversalDependencies/UD_Spanish-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udes_pud25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Spanish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Spanish-PUD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | not available |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

This is a part of the Parallel Universal Dependencies (PUD) treebanks created
for the [CoNLL 2017 shared task on Multilingual Parsing from Raw Text to
Universal Dependencies](http://universaldependencies.org/conll17/).




There are
1000 sentences in each language, always in the same order. (The sentence
alignment is 1-1 but occasionally a sentence-level segment actually consists
of two real sentences.) The sentences are taken from the news domain (sentence
id starts in ‘n’) and from Wikipedia (sentence id starts with ‘w’). There are
usually only a few sentences from each document, selected randomly, not
necessarily adjacent. The digits on the second and third position in the
sentence ids encode the original language of the sentence. The first 750
sentences are originally English (01). The remaining 250 sentences are
originally German (02), French (03), Italian (04) or Spanish (05) and they
were translated to other languages via English. Translation into German,
French, Italian, Spanish, Arabic, Hindi, Chinese, Indonesian, Japanese,
Korean, Portuguese, Russian, Thai and Turkish has been provided by DFKI and
performed (except for German) by professional translators. Then the data has
been annotated morphologically and syntactically by Google according to Google
universal annotation guidelines; finally, it has been converted by members of
the UD community to UD v2 guidelines.

Additional languages have been provided (both translation and native UD v2
annotation) by other teams: Czech by Charles University, Finnish by University
of Turku and Swedish by Uppsala University.

The entire treebank is labeled as test set (and was used for testing in the
shared task). If it is used for training in future research, the users should
employ ten-fold cross-validation.


## Acknowledgments

# Statistics of UD Spanish PUD

## POS Tags

[ADJ](es_pud-pos-ADJ.html) – [ADP](es_pud-pos-ADP.html) – [ADV](es_pud-pos-ADV.html) – [AUX](es_pud-pos-AUX.html) – [CCONJ](es_pud-pos-CCONJ.html) – [DET](es_pud-pos-DET.html) – [NOUN](es_pud-pos-NOUN.html) – [NUM](es_pud-pos-NUM.html) – [PRON](es_pud-pos-PRON.html) – [PROPN](es_pud-pos-PROPN.html) – [PUNCT](es_pud-pos-PUNCT.html) – [SYM](es_pud-pos-SYM.html) – [VERB](es_pud-pos-VERB.html) – [X](es_pud-pos-X.html)

## Features

[Aspect](es_pud-feat-Aspect.html) – [Case](es_pud-feat-Case.html) – [Definite](es_pud-feat-Definite.html) – [Degree](es_pud-feat-Degree.html) – [Foreign](es_pud-feat-Foreign.html) – [Gender](es_pud-feat-Gender.html) – [Mood](es_pud-feat-Mood.html) – [Number](es_pud-feat-Number.html) – [NumType](es_pud-feat-NumType.html) – [Person](es_pud-feat-Person.html) – [Polarity](es_pud-feat-Polarity.html) – [Polite](es_pud-feat-Polite.html) – [Poss](es_pud-feat-Poss.html) – [PrepCase](es_pud-feat-PrepCase.html) – [PronType](es_pud-feat-PronType.html) – [Reflex](es_pud-feat-Reflex.html) – [Tense](es_pud-feat-Tense.html) – [VerbForm](es_pud-feat-VerbForm.html) – [Voice](es_pud-feat-Voice.html)

## Relations

[acl](es_pud-dep-acl.html) – [acl:relcl](es_pud-dep-acl-relcl.html) – [advcl](es_pud-dep-advcl.html) – [advmod](es_pud-dep-advmod.html) – [amod](es_pud-dep-amod.html) – [appos](es_pud-dep-appos.html) – [aux](es_pud-dep-aux.html) – [aux:pass](es_pud-dep-aux-pass.html) – [case](es_pud-dep-case.html) – [cc](es_pud-dep-cc.html) – [cc:preconj](es_pud-dep-cc-preconj.html) – [ccomp](es_pud-dep-ccomp.html) – [compound:prt](es_pud-dep-compound-prt.html) – [conj](es_pud-dep-conj.html) – [cop](es_pud-dep-cop.html) – [csubj](es_pud-dep-csubj.html) – [csubj:pass](es_pud-dep-csubj-pass.html) – [dep](es_pud-dep-dep.html) – [det](es_pud-dep-det.html) – [det:predet](es_pud-dep-det-predet.html) – [discourse](es_pud-dep-discourse.html) – [fixed](es_pud-dep-fixed.html) – [flat](es_pud-dep-flat.html) – [flat:name](es_pud-dep-flat-name.html) – [goeswith](es_pud-dep-goeswith.html) – [iobj](es_pud-dep-iobj.html) – [mark](es_pud-dep-mark.html) – [nmod](es_pud-dep-nmod.html) – [nsubj](es_pud-dep-nsubj.html) – [nsubj:pass](es_pud-dep-nsubj-pass.html) – [nummod](es_pud-dep-nummod.html) – [obj](es_pud-dep-obj.html) – [obl](es_pud-dep-obl.html) – [obl:tmod](es_pud-dep-obl-tmod.html) – [orphan](es_pud-dep-orphan.html) – [parataxis](es_pud-dep-parataxis.html) – [punct](es_pud-dep-punct.html) – [root](es_pud-dep-root.html) – [vocative](es_pud-dep-vocative.html) – [xcomp](es_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 22822 tokens and 23287 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2321 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 8 types of words with spaces. Examples: 10 000, 15 000, 168 000, 25 000, 330 000, 35 000, 5 000, 6 000</li>
</ul>

<ul>
<li>This corpus contains 11 types of words that contain both letters and punctuation. Examples: a., C., d., n.°, B-29, E.E.UU, EE., EE.UU., Z., ca., p.m.</li>
</ul>

<ul>
<li>This corpus contains 465 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 61 types of multi-word tokens. Examples: del, al, verlo, beneficiarse, convirtiéndose, hacerlo, recuperarlo, adminiéndolo, alejarse, aplicándolo, centrarse, centrándose, comprometerse, concentrase, convertirse, convirtiéndola, darle, dedicarme, dedicarse, deduciéndolo, deslizándose, desplazarse, desplegarse, detenerse, enfrentarse, enfriarse, esperarnos, estarse, examinarlo, formarse, gastarse, haberse, iluminarse, impidiéndole, irritándote, llevarlo, movilizarse, pidiéndole, ponerse, poniéndole, poniéndose, presionarles, protegerse, quedarse, referirse, registrarse, relajarse, reunirse, reuniéndose, salirse.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 14 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SCONJ, PART, INTJ</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as pronouns (PRON): _, tú, yo, él</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as determiners (DET): _, el, uno</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as auxiliaries (AUX): _, haber, poder, ser, tener</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: _, haber, poder, ser, tener</li>
</ul>

<ul>
<li>There are 1 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: es, fue, ha, había, está, era, puede, son, ser, sido</li>
    <li>VERB: dijo, es, debido, tiene, hacer, hay, está, hace, hecho, tener</li>
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
      <li>ADJ: primera, nueva, británica, gran, mayor, segunda, nuevas, americana, nacional, propia</li>
      <li>AUX-Fin: llamada, consideradas, declarada</li>
      <li>DET: la, las, una, esta, muchas, todas, otra, cada, varias, estas</li>
      <li>NOUN: guerra, parte, ciudad, vez, personas, historia, región, mayoría, vida, veces</li>
      <li>NUM: dos, tres, 10, 760, cuatro, diez, ocho, 10.000, 12.000, 125</li>
      <li>PRON: su, que, sus, ella, la, cual, cuales, nuestra, mi, nuestras</li>
      <li>PROPN: Clinton, BBC, Kesha, Rona, luna, Blunt, Guinea, Jasmine, UE, Anaya</li>
      <li>VERB-Fin: dirigida, coprotagonizada, derrotada, destruida, dividida, formada, localizadas, perdidas, realizada, relacionada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: gran, primer, últimos, nuevos, Unidos, grandes, mayor, nacional, Unido, mismo</li>
      <li>AUX-Fin: llamados, declarado, elegido, escrito, nombrado, proclamado</li>
      <li>DET: el, los, un, este, esto, ese, cada, muchos, eso, estos</li>
      <li>NOUN: años, año, lugar, gobierno, estado, millones, día, embargo, mar, mundo</li>
      <li>NUM: dos, 1, 10, 3, mil, tres, seis, 70, cuatro, 100</li>
      <li>PRON: que, lo, su, sus, ellos, él, cual, quien, nuestro, cuales</li>
      <li>PROPN: Trump, mediterráneo, EUA, Donald, Caribe, Joseph, Rafferty, Andes, Antonio, Bogd</li>
      <li>VERB-Fin: involucrados, seguido, acusado, construido, destruido, enviado, escrito, establecido, expuestos, firmado</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grandes, últimos, nuevos, Unidos, diferentes, nuevas, primeros, importantes, Olímpicos, electrónicos</li>
      <li>AUX-Fin: son, fueron, han, habían, pueden, estaban, están, eran, hayan, debemos</li>
      <li>DET: los, las, muchos, estos, muchas, otros, todas, varios, esos, unos</li>
      <li>NOUN: años, millones, personas, estados, veces, ciudades, datos, elecciones, inversores, meses</li>
      <li>PRON: que, sus, ellos, les, cuales, nos, quienes, los, nuestras, nuestros</li>
      <li>PROPN: EUA, Andes, Balcanes, Alpes, B-29, CBS, Caribs, Indias, Loving, Maldivas</li>
      <li>VERB-Fin: tienen, están, incluyen, llegaron, tenían, tuvieron, afirman, dieron, corresponden, decidieron</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: gran, primera, mayor, nueva, nacional, primer, británica, segunda, Unido, mismo</li>
      <li>AUX-Fin: es, fue, ha, había, está, era, puede, estaba, podría, sea</li>
      <li>DET: el, la, un, una, este, esta, esto, cada, ese, eso</li>
      <li>NOUN: año, guerra, lugar, parte, gobierno, mar, ciudad, estado, vez, día</li>
      <li>PRON: su, que, lo, le, cual, me, él, ella, quien, la</li>
      <li>PROPN: China, Europa, Italia, Australia, Pekín, Albania, Francia, Trump, Bretaña, España</li>
      <li>VERB-Fin: dijo, es, tiene, hay, está, hace, dice, afirmó, convirtió, era</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: lo, la, los, sí, You, las, mí</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Dat
    <ul>
      <li>PRON: se, me, nos, te, os</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Nom
    <ul>
      <li>PRON: ellos, él, ella, ello, usted, ustedes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>PRON: consigo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: le, les</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: yo, Ya, You, tú</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepCase</a></li>
</ul>

<ul>
  <li>Npr
    <ul>
      <li>PRON: se, lo, me, nos, la, los, te, las, os</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pre
    <ul>
      <li>PRON: sí, mí</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: el, la, los, las</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, unos, unas</li>
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
      <li>ADJ: altísima</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: mayor, mejores, mejor, mayores, peor, menor, menores, peores</li>
      <li>ADV: más, menos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: máxima, pésimo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: no, nunca, t, tampoco</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: es, está, era, puede, son, ser, estaba, podría, pueden, estaban</li>
      <li>VERB-Fin: es, tiene, hacer, hay, está, hace, tener, tienen, ver, dice</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX-Fin: fue, ha, había, fueron, han, habían, haber, hayan, comenzó, empezaron</li>
      <li>VERB-Fin: dijo, afirmó, convirtió, tuvo, declaró, hizo, fue, lanzó, llegaron, llegó</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX-Fin: podría, sería, debería, podrían, serían, habrían, moriría, resultaría, tendría, tendrían</li>
      <li>VERB-Fin: aplicaría, estaría, asistiría, ayudaría, conocerían, convertiría, echaría, estudiaría, gustaría, irían</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: Don</li>
      <li>VERB-Fin: Knuck</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: es, fue, ha, había, está, era, puede, son, fueron, han</li>
      <li>VERB-Fin: dijo, es, tiene, hay, está, hace, tienen, dice, afirmó, convirtió</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sea, hayan, hubiera, fueran, fuese, sean, continuase, declarase, empezasen, estuviese</li>
      <li>VERB-Fin: escogiera, produzcan, tuviese, utilice, vaya, Avancemos, Digamos, Fueran, acepten, actuaran</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, contendrán, deberán, dejará, estaré, seguirá, serán, tendrá, volverá</li>
      <li>VERB-Fin: habrá, hará, reducirá, será, tendrá, Evaluaremos, Jugarán, asistirán, cambiará, continuará</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fue, ha, había, era, fueron, han, estaba, habían, estaban, eran</li>
      <li>VERB-Fin: dijo, afirmó, convirtió, era, tuvo, declaró, tenía, hizo, fue, lanzó</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: es, está, puede, son, pueden, están, sea, debemos, debe, estamos</li>
      <li>VERB-Fin: es, tiene, hay, está, hace, tienen, dice, están, incluyen, encuentra</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: es, ha, había, está, era, fue, son, han, puede, estaba</li>
      <li>VERB-Fin: dijo, es, tiene, hay, está, hace, tienen, afirmó, convirtió, dice</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: fue, fueron, ha, había, ser, puede, son, habían, pueden, era</li>
      <li>VERB-Fin: conoce, aplicaría, conocen, construyó, cree, dijo, espera, incluyen, lanzó, llevó</li>
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
      <li>DET: el, la, los, un, las, una, unos, unas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: este, esta, esto, ese, eso, estos, esos, estas, esa, esas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: muchos, muchas, otros, varios, otra, otro, algunos, varias, otras, The</li>
      <li>PRON: My, You, Her, Ya</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>DET: que, qué</li>
      <li>PRON: que, cual, cuales, quien, qué, cuál, quienes, cuanto, cuyo, quién</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ninguna, ningún</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: se, su, lo, sus, le, me, ellos, él, les, ella</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: cada, todas, todo, todos, toda, ambos, Ambas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: muchos, muchas, ambos, poca, mucha, mucho, pocos, Ambas</li>
      <li>NUM: dos, tres, cuatro, 1, 10, 3, mil, seis, 70, 100</li>
      <li>PRON: cuanto</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: su, sus, nuestro, mi, nuestra, cuyo, nuestras, nuestros, cuya, cuyos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, me, nos, sí, consigo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: debemos, he, estamos, hemos, podemos, Declaro, Tengo, Voy, era, estaré</li>
      <li>PRON: me, nos, yo, nuestro, mi, nuestra, My, nuestras, nuestros, mis</li>
      <li>VERB-Fin: creo, creemos, espero, estamos, estoy, quería, sé, Avancemos, Avanzamos, Descubrí</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: tienes, Don, Terminas, habéis, has, puedes</li>
      <li>PRON: You, te, Ya, os, tu, tú, usted, ustedes</li>
      <li>VERB-Fin: Buck, Knew, Knuck, oyes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: es, fue, ha, había, está, era, puede, son, fueron, han</li>
      <li>PRON: se, su, lo, sus, le, ellos, él, les, ella, la</li>
      <li>VERB-Fin: dijo, es, tiene, hay, está, hace, tienen, dice, afirmó, convirtió</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>PRON: usted, ustedes</li>
    </ul>
  </li>
</ul>



<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: maiorum</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: _, ser.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: _, poder, haber, ser, soler, tener, volver.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (595)</li>
      <li>VERB-Fin--PRON (152)</li>
      <li>VERB-Fin--PRON-Acc,Nom (17)</li>
      <li>VERB-Fin--PRON-Nom (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (660)</li>
      <li>VERB-Fin--PRON (33)</li>
      <li>VERB-Fin--PRON-Acc (45)</li>
      <li>VERB-Fin--PRON-Acc,Dat (5)</li>
      <li>VERB-Fin--PRON-Com (1)</li>
      <li>VERB-Fin--PRON-Dat (8)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Acc,Dat (8)</li>
      <li>VERB-Fin--PRON-Dat (39)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: _ consigo</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
