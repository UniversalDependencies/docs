---
layout: base
title:  'UD_Spanish-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Spanish PUD

Language: [Spanish](../es/overview/es-hub.html) (code: `es`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Hector Fernandez Alcalde, Laura Moreno Romero, Martin Popel, Daniel Zeman, Héctor Martínez Alonso.

Repository: [UD_Spanish-PUD](https://github.com/UniversalDependencies/UD_Spanish-PUD)

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

[Aspect](es_pud-feat-Aspect.html) – [Case](es_pud-feat-Case.html) – [Foreign](es_pud-feat-Foreign.html) – [Gender](es_pud-feat-Gender.html) – [Mood](es_pud-feat-Mood.html) – [Number](es_pud-feat-Number.html) – [Person](es_pud-feat-Person.html) – [Polarity](es_pud-feat-Polarity.html) – [Tense](es_pud-feat-Tense.html) – [Voice](es_pud-feat-Voice.html)

## Relations

[acl](es_pud-dep-acl.html) – [acl:relcl](es_pud-dep-acl-relcl.html) – [advcl](es_pud-dep-advcl.html) – [advmod](es_pud-dep-advmod.html) – [amod](es_pud-dep-amod.html) – [appos](es_pud-dep-appos.html) – [aux](es_pud-dep-aux.html) – [aux:pass](es_pud-dep-aux-pass.html) – [case](es_pud-dep-case.html) – [cc](es_pud-dep-cc.html) – [cc:preconj](es_pud-dep-cc-preconj.html) – [ccomp](es_pud-dep-ccomp.html) – [compound:prt](es_pud-dep-compound-prt.html) – [conj](es_pud-dep-conj.html) – [cop](es_pud-dep-cop.html) – [csubj](es_pud-dep-csubj.html) – [csubj:pass](es_pud-dep-csubj-pass.html) – [dep](es_pud-dep-dep.html) – [det](es_pud-dep-det.html) – [det:predet](es_pud-dep-det-predet.html) – [discourse](es_pud-dep-discourse.html) – [fixed](es_pud-dep-fixed.html) – [flat](es_pud-dep-flat.html) – [flat:name](es_pud-dep-flat-name.html) – [goeswith](es_pud-dep-goeswith.html) – [iobj](es_pud-dep-iobj.html) – [mark](es_pud-dep-mark.html) – [nmod](es_pud-dep-nmod.html) – [nsubj](es_pud-dep-nsubj.html) – [nsubj:pass](es_pud-dep-nsubj-pass.html) – [nummod](es_pud-dep-nummod.html) – [obj](es_pud-dep-obj.html) – [obl](es_pud-dep-obl.html) – [obl:tmod](es_pud-dep-obl-tmod.html) – [orphan](es_pud-dep-orphan.html) – [parataxis](es_pud-dep-parataxis.html) – [punct](es_pud-dep-punct.html) – [root](es_pud-dep-root.html) – [vocative](es_pud-dep-vocative.html) – [xcomp](es_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 1000 sentences, 22822 tokens and 23287 syntactic words.</li>
<li>This corpus contains 2318 tokens (10%) that are not followed by a space.</li>
<li>This corpus contains 8 types of words with spaces. Examples: 10 000, 15 000, 168 000, 25 000, 330 000, 35 000, 5 000, 6 000</li>
<li>This corpus contains 11 types of words that contain both letters and punctuation. Examples: a., C., d., n.°, B-29, E.E.UU, EE., EE.UU., Z., ca., p.m.</li>
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
<li>This corpus contains 1 lemmas tagged as pronouns (PRON): _</li>
</ul>

<ul>
<li>This corpus contains 2 lemmas tagged as determiners (DET): _, el</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as PRON and sometimes as DET: _</li>
</ul>

<ul>
<li>This corpus contains 1 lemmas tagged as auxiliaries (AUX): _</li>
</ul>

<ul>
<li>Out of the above, 1 lemmas occurred sometimes as AUX and sometimes as VERB: _</li>
</ul>

<ul>
<li>This corpus does not use the VerbForm feature.</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>ADJ: primera, nueva, británica, gran, mayor, segunda, nuevas, americana, nacional, propia</li>
        <li>AUX: llamada, consideradas, declarada</li>
        <li>DET: la, las, una, esta, el, muchas, todas, otra, cada, varias</li>
        <li>NOUN: guerra, parte, ciudad, vez, personas, historia, región, mayoría, vida, veces</li>
        <li>NUM: dos, tres, 10, 760, cuatro, diez, ocho, 10.000, 12.000, 125</li>
        <li>PRON: su, que, sus, ella, le, cual, cuales, la, nuestra, mi</li>
        <li>PROPN: Clinton, BBC, Kesha, Rona, luna, Blunt, Guinea, Jasmine, UE, Anaya</li>
        <li>VERB: dirigida, coprotagonizada, derrotada, destruida, dividida, formada, localizadas, perdidas, realizada, relacionada</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: gran, primer, últimos, nuevos, Unidos, grandes, mayor, nacional, Unido, mismo</li>
        <li>AUX: llamados, declarado, elegido, escrito, nombrado, proclamado</li>
        <li>DET: el, los, un, lo, este, esto, ese, cada, muchos, eso</li>
        <li>NOUN: años, año, lugar, gobierno, estado, millones, día, embargo, mar, mundo</li>
        <li>NUM: dos, 1, 10, 3, mil, tres, seis, 70, cuatro, 100</li>
        <li>PRON: que, su, lo, sus, ellos, le, él, el, cual, les</li>
        <li>PROPN: Trump, mediterráneo, EUA, Donald, Caribe, Joseph, Rafferty, Andes, Antonio, Bogd</li>
        <li>VERB: involucrados, seguido, acusado, construido, destruido, enviado, escrito, establecido, expuestos, firmado</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: grandes, últimos, nuevos, Unidos, diferentes, nuevas, primeros, importantes, mejores, Olímpicos</li>
        <li>AUX: son, eran, fueron, llamados, sean, serían, aparecen, consideradas, consideran, contendrán</li>
        <li>DET: los, las, muchos, estos, muchas, otros, todas, varios, esos, unos</li>
        <li>NOUN: años, millones, personas, estados, veces, ciudades, datos, elecciones, inversores, meses</li>
        <li>PRON: que, se, sus, ellos, les, cuales, nos, quienes, Cuáles, Quiénes</li>
        <li>PROPN: EUA, Andes, Balcanes, Alpes, B-29, CBS, Caribs, Indias, Loving, Maldivas</li>
        <li>VERB: han, fueron, están, habían, tienen, estaban, pueden, son, incluyen, llegaron</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: gran, primera, mayor, nueva, nacional, primer, británica, segunda, Unido, mismo</li>
        <li>AUX: es, era, fue, está, sea, sería, estaba, mantuvo, será, fuese</li>
        <li>DET: el, la, un, una, lo, este, esta, esto, cada, ese</li>
        <li>NOUN: año, guerra, lugar, parte, gobierno, mar, ciudad, estado, vez, día</li>
        <li>PRON: se, su, que, lo, le, cual, me, él, quien, el</li>
        <li>PROPN: China, Europa, Italia, Australia, Pekín, Albania, Francia, Trump, Bretaña, España</li>
        <li>VERB: ha, fue, había, está, dijo, es, puede, tiene, estaba, hay</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>PRON: lo, la, le, les, nos, los, me, You, las</li>
      </ul>
    </li>
    <li>Dat
      <ul>
        <li>PRON: le, les, me, nos, lo, te</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>PRON: el, ella, ellos, yo, él, lo, Ya, You, usted</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Degree and Polarity</h3>


<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADV: no, nunca, t, tampoco</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>

<li><a>Aspect</a>
  <ul>
    <li>Imp
      <ul>
        <li>AUX: es, era, son, ser, está, siendo, sea, eran, sería, estaba</li>
        <li>VERB: está, es, puede, tiene, hacer, tener, estaba, ser, hay, están</li>
      </ul>
    </li>
    <li>Perf
      <ul>
        <li>AUX: fue, fueron, mantuvo, apareció, consideró, declaró, estuvieron, mostraron, nombró, salió</li>
        <li>VERB: ha, fue, había, dijo, han, fueron, habían, afirmó, convirtió, empezó</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX: sería, serían, moriría, resultaría</li>
        <li>VERB: podría, debería, podrían, aplicaría, estaría, asistiría, ayudaría, conocerían, convertiría, echaría</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>VERB: Don, Knuck</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX: es, era, fue, son, está, eran, fueron, estaba, mantuvo, será</li>
        <li>VERB: ha, fue, había, está, dijo, es, puede, tiene, han, estaba</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX: sea, fuese, sean, declarase, fueran, parezca, seamos</li>
        <li>VERB: hayan, hubiera, escogiera, fueran, haya, hubiese, produzcan, tuviese, utilice, vaya</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX: será, contendrán</li>
        <li>VERB: habrá, será, tendrá, hará, reducirá, Evaluaremos, Jugarán, asistirán, cambiará, continuará</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX: era, fue, eran, fueron, estaba, mantuvo, fuese, apareció, consideró, declaraba</li>
        <li>VERB: ha, fue, había, dijo, han, estaba, fueron, habían, era, estaban</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX: es, son, está, sea, sean, Declaro, aparece, aparecen, considera, consideran</li>
        <li>VERB: está, es, puede, tiene, hay, están, hace, tienen, pueden, dice</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Act
      <ul>
        <li>AUX: es, era, fue, son, está, sea, eran, fueron, ser, sería</li>
        <li>VERB: ha, había, está, dijo, es, tiene, puede, han, estaba, hay</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>AUX: considera, consideran, declaró</li>
        <li>VERB: fue, fueron, ha, había, ser, puede, son, habían, pueden, conoce</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>





<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX: Declaro, era, estamos, seamos, siento, somos</li>
        <li>PRON: me, nos, yo, nuestro, mi, nuestra, My, nuestras, nuestros, mis</li>
        <li>VERB: debemos, estamos, he, creo, hemos, podemos, creemos, espero, estoy, quería</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>PRON: You, te, Ya, os, tu, tú</li>
        <li>VERB: tienes, Buck, Don, Knew, Knuck, Terminas, habéis, has, oyes, puedes</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX: es, era, fue, son, está, sea, eran, fueron, sería, estaba</li>
        <li>PRON: se, su, sus, lo, le, ellos, él, les, el, ella</li>
        <li>VERB: ha, fue, había, está, dijo, es, puede, tiene, han, estaba</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>

<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: maiorum</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (595)</li>
      <li>VERB--PRON (152)</li>
      <li>VERB--PRON-Nom (32)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (660)</li>
      <li>VERB--PRON (34)</li>
      <li>VERB--PRON-Acc (58)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON-Acc (1)</li>
      <li>VERB--PRON-Dat (47)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>compound</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
