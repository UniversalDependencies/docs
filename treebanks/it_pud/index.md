---
layout: base
title:  'UD_Italian-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian PUD

Language: [Italian](/it/index.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Hans Uszkoreit, Vivien Macketanz, Aljoscha Burchardt, Kim Harris, Katrin Marheinecke, Slav Petrov, Tolga Kayadelen, Mohammed Attia, Ali Elkahky, Zhuoran Yu, Emily Pitler, Saran Lertpradit, Antonio Stella, Davide Rovati, Martin Popel, Daniel Zeman, Maria Simi, Manuela Sanguinetti.

Repository: [UD_Italian-PUD](https://github.com/UniversalDependencies/UD_Italian-PUD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_pud29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 3.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian-PUD/issues).
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

# Statistics of UD Italian PUD

## POS Tags

[ADJ](it_pud-pos-ADJ.html) – [ADP](it_pud-pos-ADP.html) – [ADV](it_pud-pos-ADV.html) – [AUX](it_pud-pos-AUX.html) – [CCONJ](it_pud-pos-CCONJ.html) – [DET](it_pud-pos-DET.html) – [NOUN](it_pud-pos-NOUN.html) – [NUM](it_pud-pos-NUM.html) – [PART](it_pud-pos-PART.html) – [PRON](it_pud-pos-PRON.html) – [PROPN](it_pud-pos-PROPN.html) – [PUNCT](it_pud-pos-PUNCT.html) – [SCONJ](it_pud-pos-SCONJ.html) – [SYM](it_pud-pos-SYM.html) – [VERB](it_pud-pos-VERB.html) – [X](it_pud-pos-X.html)

## Features

[Aspect](it_pud-feat-Aspect.html) – [Case](it_pud-feat-Case.html) – [Definite](it_pud-feat-Definite.html) – [Degree](it_pud-feat-Degree.html) – [Foreign](it_pud-feat-Foreign.html) – [Gender](it_pud-feat-Gender.html) – [Mood](it_pud-feat-Mood.html) – [Number](it_pud-feat-Number.html) – [Number[psor]](it_pud-feat-Number-psor.html) – [Person](it_pud-feat-Person.html) – [Polarity](it_pud-feat-Polarity.html) – [PronType](it_pud-feat-PronType.html) – [Reflex](it_pud-feat-Reflex.html) – [Tense](it_pud-feat-Tense.html) – [Voice](it_pud-feat-Voice.html)

## Relations

[acl](it_pud-dep-acl.html) – [acl:relcl](it_pud-dep-acl-relcl.html) – [advcl](it_pud-dep-advcl.html) – [advmod](it_pud-dep-advmod.html) – [amod](it_pud-dep-amod.html) – [appos](it_pud-dep-appos.html) – [aux](it_pud-dep-aux.html) – [aux:pass](it_pud-dep-aux-pass.html) – [case](it_pud-dep-case.html) – [cc](it_pud-dep-cc.html) – [ccomp](it_pud-dep-ccomp.html) – [compound](it_pud-dep-compound.html) – [conj](it_pud-dep-conj.html) – [cop](it_pud-dep-cop.html) – [csubj](it_pud-dep-csubj.html) – [csubj:pass](it_pud-dep-csubj-pass.html) – [dep](it_pud-dep-dep.html) – [det](it_pud-dep-det.html) – [det:poss](it_pud-dep-det-poss.html) – [discourse](it_pud-dep-discourse.html) – [expl](it_pud-dep-expl.html) – [expl:impers](it_pud-dep-expl-impers.html) – [fixed](it_pud-dep-fixed.html) – [flat](it_pud-dep-flat.html) – [iobj](it_pud-dep-iobj.html) – [mark](it_pud-dep-mark.html) – [nmod](it_pud-dep-nmod.html) – [nsubj](it_pud-dep-nsubj.html) – [nsubj:pass](it_pud-dep-nsubj-pass.html) – [nummod](it_pud-dep-nummod.html) – [obj](it_pud-dep-obj.html) – [obl](it_pud-dep-obl.html) – [obl:tmod](it_pud-dep-obl-tmod.html) – [orphan](it_pud-dep-orphan.html) – [parataxis](it_pud-dep-parataxis.html) – [punct](it_pud-dep-punct.html) – [root](it_pud-dep-root.html) – [vocative](it_pud-dep-vocative.html) – [xcomp](it_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1000 sentences, 22182 tokens and 23731 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 2886 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 38 types of words that contain both letters and punctuation. Examples: l', un', d', c', a.C., quest', dell', e-mail, all', d.C., Trent', a.C, nord-occidentale, p.e.v., quell', 's, B-29, Didn', Don', Fa', N., Sant', St., Z., austro-prussiano, co-protagonisti, dall', dopo-show, franco-monegasco, indo-australiana, nord-orientale, nord-ovest, po', post-classico, s', storico-culturale, sud-occidentale, thai-cinesi</li>
</ul>

<ul>
<li>This corpus contains 1547 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 99 types of multi-word tokens. Examples: del, della, nel, dell', al, dei, alla, delle, all', nella, degli, nell', dal, nei, nelle, dalla, sul, ai, dai, dall', negli, alle, sulla, dalle, sull', agli, sui, dagli, dello, sulle, nello, dallo, essersi, allo, col, sullo, dandogli, farlo, Formatasi, Rivolgendosi, abrogandola, accentratesi, accusandolo, allontanandosi, allontanarsi, amarla, andarsene, aspettarsi, assumersi, averlo.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: INTJ</li>
</ul>

<ul>
<li>This corpus contains 5 word types tagged as particles (PART): 's, avanti, ci, fuori, via</li>
</ul>

<ul>
<li>This corpus contains 43 lemmas tagged as pronouns (PRON): che, chi, chiunque, ci, cosa, cui, egli, esempio, esse, essi, esso, gli, il, io, la, le, lei, li, lo, loro, lui, me, mi, mio, ne, noi, nostro, perché, più, proprio, quale, quali, quanto, quello, questo, se, si, sua, suo, sé, te, vi, voi</li>
</ul>

<ul>
<li>This corpus contains 44 lemmas tagged as determiners (DET): I, L', Le, Un, alcuno, altro, certo, che, ciascuno, ciò, coloro, di, diverso, il, la, li, lo, moltissimi, molto, nessuno, numerose, numerosi, numeroso, ogni, più, poco, qualche, quale, quali, qualsiasi, qualunque, quello, quest', questi, questo, suo, svariato, tale, tali, troppo, ulteriore, uno, vario, vario|varo</li>
</ul>

<ul>
<li>Out of the above, 11 lemmas occurred sometimes as PRON and sometimes as DET: che, il, la, li, lo, più, quale, quali, quello, questo, suo</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): avere, dovere, essere, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: avere, essere, potere, sapere, stare, venire, volere</li>
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
      <li>ADJ: prima, maggior, gran, grande, alta, maggiore, meridionale, americana, nuova, seconda</li>
      <li>ADP: alla, della, alle, dalla, dell', nella</li>
      <li>AUX: stata, state</li>
      <li>CCONJ: che</li>
      <li>DET: la, le, l', una, un', questa, altre, molte, queste, diverse</li>
      <li>NOUN: parte, città, persone, volta, guerra, vita, popolazione, regione, storia, crescita</li>
      <li>NUM: una</li>
      <li>PRON: che, sua, loro, sue, cui, quella, propria, le, la, lei</li>
      <li>PROPN: Cina, Francia, guerra, Europa, Gran, Hong, Italia, Kong, Russia, Albania</li>
      <li>VERB: considerate, diventata, usata, basata, cresciute, lasciata, pubblicate, riguardanti, utilizzata, considerata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ultimi, nuovi, nuovo, stesso, primo, tutti, tutto, grande, scorso, ultimo</li>
      <li>ADP: al, del, dell', all', Da, Sulla, ai, allo, dagli, dai</li>
      <li>ADV: più</li>
      <li>AUX: stato, stati</li>
      <li>CCONJ: che</li>
      <li>DET: il, i, un, l', gli, lo, questo, ciò, molti, altri</li>
      <li>NOUN: anni, anno, governo, secolo, stato, tempo, giorno, mondo, numero, periodo</li>
      <li>NUM: uno, un</li>
      <li>PRON: che, suo, lo, loro, questo, cui, suoi, gli, lui, quali</li>
      <li>PROPN: Mar, Stati, Uniti, Trump, Mediterraneo, Nord, Regno, Caraibi, Donald, Joseph</li>
      <li>VERB: fatto, utilizzato, inclusi, stato, accusato, detto, diretto, fondato, pubblicato, seguiti</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: ultimi, nuovi, grandi, tutti, nuove, primi, americani, entrambi, nazionali, olimpici</li>
      <li>ADP: Da, ai, alle, dagli, dai</li>
      <li>AUX: sono, hanno, erano, vennero, furono, possono, avevano, stati, vengono, fossero</li>
      <li>DET: i, le, gli, molti, alcuni, altri, altre, molte, queste, questi</li>
      <li>NOUN: anni, persone, dati, dollari, mesi, agenti, città, giorni, membri, effetti</li>
      <li>PRON: che, si, sue, suoi, loro, quali, cui, propri, quelli, ci</li>
      <li>PROPN: Stati, Uniti, Caraibi, Alpi, Giochi, Ande, Balcani, Bassi, Ottomani, Paesi</li>
      <li>VERB: sono, hanno, avevano, considerate, fanno, inclusi, affermano, cominciarono, comprendono, cresciute</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: prima, grande, maggior, nuovo, stesso, maggiore, gran, nazionale, primo, meridionale</li>
      <li>ADP: al, alla, dell', del, all', della, Sulla, allo, dal, dall'</li>
      <li>ADV: più</li>
      <li>AUX: è, ha, era, fu, stato, venne, può, aveva, stata, fosse</li>
      <li>CCONJ: che</li>
      <li>DET: il, la, l', un, una, lo, un', questo, questa, ciò</li>
      <li>NOUN: parte, anno, governo, volta, guerra, città, stato, tempo, giorno, mondo</li>
      <li>PRON: si, che, sua, suo, loro, lo, cui, questo, quella, gli</li>
      <li>PROPN: Cina, Mar, Trump, America, Francia, Mediterraneo, Nord, guerra, Europa, Gran</li>
      <li>VERB: ha, afferma, aveva, iniziò, sembra, ebbe, fatto, riguarda, dichiarò, diventò</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: lo, gli, ne, lui, l', le, mi, la, ci, lei</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: lei, egli, essi, io, lui</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, l', i, le, gli, lo</li>
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
      <li>ADJ: massima, Suprema, massime, miglior, migliori, minime, moltissime, moltissimi, piccolissima, piccolissimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: maggior, maggiore, migliori, maggiori, miglior, migliore, peggior, peggiori</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non, no</li>
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
      <li>AUX: era, erano, aveva, avevano, veniva, stavano, venivano, stava, ero, poteva</li>
      <li>VERB: aveva, avevano, considerava, trovavano, era, erano, includeva, riguardava, sembrava, trovava</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>AUX: fu, venne, vennero, furono, dovettero</li>
      <li>VERB: iniziò, ebbe, dichiarò, diventò, portò, divenne, mise, cominciarono, continuò, crebbe</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Cnd
    <ul>
      <li>AUX: potrebbe, sarebbe, avrebbe, potrebbero, dovrebbe, avrebbero, dovrebbero, verrebbe, Avrei, Sarei</li>
      <li>VERB: Vorrebbe, aggirerebbe, andrebbero, mitigherebbe, pagherebbero, renderebbe, ridurrebbe, scagionerebbe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX: Devi</li>
      <li>VERB: Fa', Metti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX: è, ha, sono, era, fu, hanno, venne, può, erano, aveva</li>
      <li>VERB: ha, afferma, aveva, iniziò, sono, hanno, avevano, sembra, ebbe, riguarda</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX: fosse, fossero, abbia, abbiano, possa, sia, avesse, siano, venissero, potesse</li>
      <li>VERB: aspetti, sia, abbia, affluissero, agissero, avessero, avvii, avvistasse, conoscessi, continui</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX: sarà, dovrà, potranno, saranno, verranno</li>
      <li>VERB: sarà, terrà, Passerà, Suoneranno, Valuteremo, aiuterà, aumenteranno, avrà, causeranno, cesserà</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX: era, fu, stato, venne, erano, aveva, stata, vennero, fosse, furono</li>
      <li>VERB: affermato, detto, fatto, avuto, portato, aveva, deciso, iniziò, raggiunto, messo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX: è, ha, sono, hanno, può, possono, potrebbe, sarebbe, sta, vengono</li>
      <li>VERB: ha, afferma, sono, hanno, sembra, riguarda, legge, trova, fanno, tratta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX: è, ha, sono, era, hanno, essere, aver, fu, può, aveva</li>
      <li>VERB: avere, far, ha, fare, afferma, partire, portare, aveva, iniziò, sono</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX: essere, venne, è, fu, vennero, sono, furono, vengono, era, veniva</li>
      <li>VERB: diretto, inclusi, pubblicato, accusato, causato, dato, fatto, fondato, guidati, impiegato</li>
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
      <li>DET: il, la, l', i, le, gli, lo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>PRON: quella, quello, quelli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>NOUN: altro, un</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: sua</li>
      <li>PRON: sua, suo, loro, sue, suoi, propria, propri, nostra, nostro, mia</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sé, se</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: ho, sono, dobbiamo, abbiamo, possiamo, ero, stiamo, Avrei, Devo, Sarei</li>
      <li>PRON: mi, ci, nostra, nostro, me, mia, mio, noi, nostri, io</li>
      <li>VERB: penso, so, Amavo, Amo, Dichiaro, Diciamo, Ho, Odio, Rivolsi, Superiamo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: Devi, avete, hai</li>
      <li>PRON: te, vi, voi</li>
      <li>VERB: Fa', Litighi, Metti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: è, ha, sono, era, fu, hanno, venne, può, erano, aveva</li>
      <li>DET: sua</li>
      <li>PRON: si, sua, loro, suo, lo, sue, suoi, gli, ne, lui</li>
      <li>VERB: ha, afferma, aveva, iniziò, sono, hanno, avevano, sembra, ebbe, riguarda</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>PRON: loro, nostra, nostro, nostri, proprio, nostre, propri, propria</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: sua</li>
      <li>PRON: sua, suo, sue, suoi, propria, propri, mia, mio, miei, proprie</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: Nostrum</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: essere.</li>
</ul>

<ul>
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, potere, dovere, stare, volere, sapere.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire, avere.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (490)</li>
      <li>VERB--PRON (151)</li>
      <li>VERB--PRON-Nom (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (694)</li>
      <li>VERB--NOUN-ADP(fino) (1)</li>
      <li>VERB--PRON (26)</li>
      <li>VERB--PRON-Acc (50)</li>
      <li>VERB--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON-Acc (21)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 7 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>expl:impers</a>, <a>nsubj:pass</a>, <a>obl:tmod</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
