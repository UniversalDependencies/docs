---
layout: base
title:  'UD_Portuguese-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Portuguese PUD

Language: [Portuguese](/pt/index.html) (code: `pt`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Gustavo Mendonça, Larissa Rinaldi, Martin Popel, Daniel Zeman, Valeria de Paiva.

Repository: [UD_Portuguese-PUD](https://github.com/UniversalDependencies/UD_Portuguese-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpt_pud26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Portuguese-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Portuguese-PUD/issues).
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

# Statistics of UD Portuguese PUD

## POS Tags

[ADJ](pt_pud-pos-ADJ.html) – [ADP](pt_pud-pos-ADP.html) – [ADV](pt_pud-pos-ADV.html) – [AUX](pt_pud-pos-AUX.html) – [CCONJ](pt_pud-pos-CCONJ.html) – [DET](pt_pud-pos-DET.html) – [NOUN](pt_pud-pos-NOUN.html) – [NUM](pt_pud-pos-NUM.html) – [PRON](pt_pud-pos-PRON.html) – [PROPN](pt_pud-pos-PROPN.html) – [PUNCT](pt_pud-pos-PUNCT.html) – [SYM](pt_pud-pos-SYM.html) – [VERB](pt_pud-pos-VERB.html) – [X](pt_pud-pos-X.html)

## Features

[Aspect](pt_pud-feat-Aspect.html) – [Case](pt_pud-feat-Case.html) – [Foreign](pt_pud-feat-Foreign.html) – [Gender](pt_pud-feat-Gender.html) – [Mood](pt_pud-feat-Mood.html) – [Number](pt_pud-feat-Number.html) – [Number[psor]](pt_pud-feat-Number-psor.html) – [Person](pt_pud-feat-Person.html) – [Polarity](pt_pud-feat-Polarity.html) – [PronType](pt_pud-feat-PronType.html) – [Tense](pt_pud-feat-Tense.html)

## Relations

[acl](pt_pud-dep-acl.html) – [acl:relcl](pt_pud-dep-acl-relcl.html) – [advcl](pt_pud-dep-advcl.html) – [advmod](pt_pud-dep-advmod.html) – [amod](pt_pud-dep-amod.html) – [appos](pt_pud-dep-appos.html) – [aux](pt_pud-dep-aux.html) – [aux:pass](pt_pud-dep-aux-pass.html) – [case](pt_pud-dep-case.html) – [cc](pt_pud-dep-cc.html) – [cc:preconj](pt_pud-dep-cc-preconj.html) – [ccomp](pt_pud-dep-ccomp.html) – [compound](pt_pud-dep-compound.html) – [compound:prt](pt_pud-dep-compound-prt.html) – [conj](pt_pud-dep-conj.html) – [cop](pt_pud-dep-cop.html) – [csubj](pt_pud-dep-csubj.html) – [csubj:pass](pt_pud-dep-csubj-pass.html) – [dep](pt_pud-dep-dep.html) – [det](pt_pud-dep-det.html) – [det:predet](pt_pud-dep-det-predet.html) – [discourse](pt_pud-dep-discourse.html) – [fixed](pt_pud-dep-fixed.html) – [flat](pt_pud-dep-flat.html) – [flat:name](pt_pud-dep-flat-name.html) – [iobj](pt_pud-dep-iobj.html) – [mark](pt_pud-dep-mark.html) – [nmod](pt_pud-dep-nmod.html) – [nsubj](pt_pud-dep-nsubj.html) – [nsubj:pass](pt_pud-dep-nsubj-pass.html) – [nummod](pt_pud-dep-nummod.html) – [obj](pt_pud-dep-obj.html) – [obl](pt_pud-dep-obl.html) – [obl:tmod](pt_pud-dep-obl-tmod.html) – [orphan](pt_pud-dep-orphan.html) – [parataxis](pt_pud-dep-parataxis.html) – [punct](pt_pud-dep-punct.html) – [root](pt_pud-dep-root.html) – [vocative](pt_pud-dep-vocative.html) – [xcomp](pt_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 21889 tokens and 23365 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2610 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 63 types of words that contain both letters and punctuation. Examples: a.C., Sr., Grã-Bretanha, porta-voz, terça-feira, B.C., Joliot-Curie, Sr.ª, Sra., cidade-estado, cidades-estado, e-mails, ex-ministro, pré-históricos, pós-guerra, quinta-feira, sul-coreana, 1.º, B-29s, Brisbane's, Dr., Franco-Monegasco, G.D.P, Gordon-Levitt, Hitchhiker's, Indo-Australiana, Ministro-presidente, No., St., Super-heróis, U.S, Z., Zettel's, al-Jadaan, anti-fascista, arranha-céus, austro-prussiano, auto-governadas, auto-governados, bem-sucedido, co-escritas, comandante-chefe, e-mail, extra-conjugal, governador-geral, linguado-areeiro, longas-metragens, mão-de-obra, norte-americanas, norte-sul</li>
</ul>

<ul>
<li>This corpus contains 1476 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 33 types of multi-word tokens. Examples: da, do, no, na, dos, ao, das, à, nos, pelo, pela, nas, pelos, às, aos, desta, disso, deste, deles, numa, pelas, dele, num, desses, nesta, destes, delas, neste, Nisto, dela, destas, disto, nisso.</li>
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
<li>This corpus contains 6 lemmas tagged as pronouns (PRON): _, ela, elas, ele, eles, este</li>
</ul>

<ul>
<li>This corpus contains 5 lemmas tagged as determiners (DET): _, esse, este, o, um</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: _, este</li>
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


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>ADJ: primeira, nova, grande, mais, maior, grandes, segunda, última, americana, britânica</li>
      <li>ADP: a, nessa, daquela, naquela, àquela</li>
      <li>AUX: consideradas, deixada, nomeada</li>
      <li>DET: a, as, uma, esta, várias, outras, muitas, cada, própria, estas</li>
      <li>NOUN: vez, guerra, pessoas, parte, cidade, região, vida, vezes, volta, área</li>
      <li>NUM: duas, uma, 760, 15,001, 19,999, 330.000, 360, 500, 600.000</li>
      <li>PRON: sua, ela, suas, a, elas, esta, minha, nossa, cuja, essa</li>
      <li>PROPN: China, América, Austrália, Europa, França, Grécia, Itália, Albânia, Clinton, Paris</li>
      <li>VERB: conhecidas, construída, derrotada, destruída, dividida, encontrada, estabelecidas, formada, levantadas, ligada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: grande, mais, novos, primeiro, últimos, novo, Unidos, maior, todo, melhor</li>
      <li>ADP: naquele, naquilo, nesse, Aqueles, consigo, daquele, naqueles, nele, neles, nestes</li>
      <li>AUX: declarado, proclamado, chamado, considerados, tornado</li>
      <li>DET: o, os, um, este, muitos, cada, isso, outros, vários, alguns</li>
      <li>NOUN: anos, ano, governo, estado, mundo, acordo, mar, século, tempo, norte</li>
      <li>NUM: dois, um, 1, 1492, 2010, 2012, 2014, 2015, 2017, 1980</li>
      <li>PRON: ele, seu, eles, o, seus, isso, isto, lo, este, estes</li>
      <li>PROPN: Trump, the, Caribe, EUA, Hong, Kong, Donald, Joseph, Alpes, Rafferty</li>
      <li>VERB: devido, feito, realizado, conhecido, construído, coprotagonizado, dito, usado, utilizado, acusado</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: novos, grandes, últimos, mais, Unidos, agrícolas, indígenas, políticos, Olímpicos, americanos</li>
      <li>ADP: Aqueles, naqueles, neles, nestes</li>
      <li>AUX: são, foram, eram, estão, estavam, consideradas, somos, Estávamos, chamam, considerados</li>
      <li>DET: os, as, muitos, várias, outras, muitas, outros, vários, alguns, estes</li>
      <li>NOUN: anos, pessoas, vezes, estados, meses, ações, dados, partes, terras, dias</li>
      <li>NUM: milhões, bilhões, bn</li>
      <li>PRON: eles, suas, seus, quais, nós, estes, aqueles, elas, os, vocês</li>
      <li>PROPN: EUA, Alpes, Balcãs, Kitai, Américas, Antillas, Caribs, Humblebums, Lovings, Maldivas</li>
      <li>VERB: foram, estão, podem, têm, são, tinham, estavam, incluem, começaram, dizem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: grande, primeira, maior, nova, mais, primeiro, nacional, novo, melhor, segunda</li>
      <li>ADP: naquele, a, naquilo, nessa, nesse, consigo, daquela, daquele, naquela, nele</li>
      <li>AUX: é, foi, era, tornou, seria, está, estava, permaneceu, será, torna</li>
      <li>DET: o, a, um, uma, esta, este, cada, isso, mesmo, outro</li>
      <li>NOUN: vez, guerra, parte, ano, governo, cidade, estado, mundo, acordo, mar</li>
      <li>NUM: bilhão, bn, milhão, um, Cinco</li>
      <li>PRON: ele, sua, seu, ela, eu, o, qual, isso, isto, lo</li>
      <li>PROPN: China, Trump, América, the, Austrália, Europa, França, Grécia, Hong, Itália</li>
      <li>VERB: foi, é, está, disse, tem, tinha, pode, há, estava, começou</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>DET: os</li>
      <li>PRON: o, lo, a, os, ele, eles, la, lhe, me, te</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>DET: os</li>
      <li>PRON: lhe, me</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: ele, eles, ela, eu, nós, você, elas, vocês</li>
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
      <li>ADV: não, nem, nunca</li>
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
      <li>AUX: é, são, era, seria, está, eram, estava, estão, sendo, tornando</li>
      <li>VERB: é, está, tem, tinha, pode, há, estava, estão, incluindo, podem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: foi, sido, tornou, foram, tornado, permaneceu, consideradas, considerado, declarado, declarou</li>
      <li>VERB: foi, sido, foram, disse, começou, fez, devido, houve, feito, teve</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: seria, entregaria, ficaria, seriam, tornaria</li>
      <li>VERB: poderia, iria, poderiam, teriam, deveria, iriam, seria, teria, acharia, ajudaria</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB: Largue, Mate, procure</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: é, foi, são, era, tornou, está, foram, eram, estava, estão</li>
      <li>VERB: foi, é, foram, está, disse, tem, tinha, pode, há, estava</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: for, fossem, seja, tornar</li>
      <li>VERB: seja, tenham, Andes, tenha, tivesse, for, fosse, agissem, assistam, assumisse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: será, for, serão, tornar</li>
      <li>VERB: haverá, poderá, será, serão, terá, for, irão, ajudará, atenuará, colocará</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: foi, era, tornou, foram, eram, estava, estavam, permaneceu, declarou, ficou</li>
      <li>VERB: foi, foram, disse, tinha, estava, começou, tinham, fez, estavam, havia</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: é, são, está, estão, torna, somos, aparece, chamam, considera, continuam</li>
      <li>VERB: é, está, tem, pode, há, estão, podem, têm, diz, são</li>
    </ul>
  </li>
</ul>



<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: sua, seu, suas, seus, nosso, minha, nossa, meu, meus, Nossos</li>
    </ul>
  </li>
</ul>




<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: somos, Estávamos, estou, ficaria, passei, sinto</li>
      <li>DET: os</li>
      <li>PRON: eu, nós, nosso, minha, nossa, me, meu, meus, Nossos, mim</li>
      <li>VERB: estamos, penso, estou, podemos, temos, conheço, precisamos, sei, vamos, Amo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>PRON: te</li>
      <li>VERB: Andes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: consigo, nele, neles</li>
      <li>AUX: é, foi, são, era, tornou, seria, está, foram, eram, estava</li>
      <li>PRON: se, ele, sua, seu, eles, ela, suas, seus, o, lo</li>
      <li>VERB: foi, é, foram, está, disse, tem, tinha, pode, há, estava</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PRON: suas, sua, seus, seu, nosso, nossa, Nossos, nossas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>PRON: sua, seu, seus, suas, minha, meu, meus</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: capita, Select, all, and, maiorum</li>
          <li>PROPN: Kong, ', of, -, Association, Bonds, Film, Hill, My, You</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: _, a.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as auxiliaries (<a>aux</a>). Examples: _.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (522)</li>
      <li>VERB--NOUN-ADP(_) (1)</li>
      <li>VERB--PRON (151)</li>
      <li>VERB--PRON-Nom (173)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (709)</li>
      <li>VERB--NOUN-ADP(em) (1)</li>
      <li>VERB--PRON (34)</li>
      <li>VERB--PRON-Acc (35)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON-Dat (7)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:predet</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>expl</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
