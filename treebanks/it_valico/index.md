---
layout: base
title:  'UD_Italian-Valico'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian Valico

Language: [Italian](/it/index.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.8 release.

The following people have contributed to making this treebank part of UD: Elisa Di Nuovo, Manuela Sanguinetti, Cristina Bosco, Alessandro Mazzei.

Repository: [UD_Italian-Valico](https://github.com/UniversalDependencies/UD_Italian-Valico)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_valico29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: learner-essays

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian-Valico/issues).
If you want to collaborate, please contact [elisa&nbsp;•&nbsp;dinuovo&nbsp;(æt)&nbsp;unito&nbsp;•&nbsp;it].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | annotated manually |
| Features | annotated manually, natively in UD style |
| Relations | annotated manually, natively in UD style |

## Description
Manually corrected Treebank of Learner Italian drawn from the Valico corpus and correspondent corrected sentences.



UD Italian-Valico is a collection of 36 Italian as a Second Language texts (398 sentences and 6,784 tokens), in the Universal Dependencies formalism elicited from a comic strip. Each text is matched with a corrected version (TH) and both are automatically annotated and then manually corrected. The corrected texts are in corrected/it_thvalico-ud-test.conllu. In addition, error annotation is provided in the err field. The annotations follow the standard Italian UD guidelines, along with a set of supplementary guidelines for error and dependency annotation (https://github.com/ElisaDiNuovo/VALICO-UD_guidelines). The treebank represents English, French, German, and Spanish learners of Italian at three different year of study. There are 9 texts for each native language and 3 texts per year of study.

The treebank is realised as test set (TH are in corrected folder).

Each sentence id is structured as a-bb_xx-c, where:

a is the number of the text (from 1 to 36);

bb is the number of the sentence in the text;

xx is the ISO code for the learner's native language;

c is the learner's year of study of Italian.

For example:

1-01_fr-3 indicates the 1st sentence of the 1st text of the treebank which is written by a French learner at their 3rd year of study; and

35-27_en-1 indicates the 27th sentence of the 35th text of the treebank which is written by a English learner at their 1st year of study.

## Acknowledgments

The treebank development has also been possible thanks to Prof. Elisa Corino's (Dipartimento di Lingue e Letterature Straniere e Culture Moderne, University of Turin) valuable advice.


# Statistics of UD Italian Valico

## POS Tags

[ADJ](it_valico-pos-ADJ.html) – [ADP](it_valico-pos-ADP.html) – [ADV](it_valico-pos-ADV.html) – [AUX](it_valico-pos-AUX.html) – [CCONJ](it_valico-pos-CCONJ.html) – [DET](it_valico-pos-DET.html) – [INTJ](it_valico-pos-INTJ.html) – [NOUN](it_valico-pos-NOUN.html) – [NUM](it_valico-pos-NUM.html) – [PRON](it_valico-pos-PRON.html) – [PROPN](it_valico-pos-PROPN.html) – [PUNCT](it_valico-pos-PUNCT.html) – [SCONJ](it_valico-pos-SCONJ.html) – [SYM](it_valico-pos-SYM.html) – [VERB](it_valico-pos-VERB.html) – [X](it_valico-pos-X.html)

## Features

[Clitic](it_valico-feat-Clitic.html) – [Definite](it_valico-feat-Definite.html) – [Degree](it_valico-feat-Degree.html) – [Gender](it_valico-feat-Gender.html) – [Mood](it_valico-feat-Mood.html) – [Number](it_valico-feat-Number.html) – [NumType](it_valico-feat-NumType.html) – [Person](it_valico-feat-Person.html) – [Polarity](it_valico-feat-Polarity.html) – [Poss](it_valico-feat-Poss.html) – [PronType](it_valico-feat-PronType.html) – [Tense](it_valico-feat-Tense.html) – [VerbForm](it_valico-feat-VerbForm.html)

## Relations

[acl](it_valico-dep-acl.html) – [acl:relcl](it_valico-dep-acl-relcl.html) – [advcl](it_valico-dep-advcl.html) – [advmod](it_valico-dep-advmod.html) – [amod](it_valico-dep-amod.html) – [appos](it_valico-dep-appos.html) – [aux](it_valico-dep-aux.html) – [aux:pass](it_valico-dep-aux-pass.html) – [case](it_valico-dep-case.html) – [cc](it_valico-dep-cc.html) – [ccomp](it_valico-dep-ccomp.html) – [conj](it_valico-dep-conj.html) – [cop](it_valico-dep-cop.html) – [csubj](it_valico-dep-csubj.html) – [dep](it_valico-dep-dep.html) – [det](it_valico-dep-det.html) – [det:poss](it_valico-dep-det-poss.html) – [det:predet](it_valico-dep-det-predet.html) – [discourse](it_valico-dep-discourse.html) – [dislocated](it_valico-dep-dislocated.html) – [expl](it_valico-dep-expl.html) – [expl:impers](it_valico-dep-expl-impers.html) – [fixed](it_valico-dep-fixed.html) – [flat:name](it_valico-dep-flat-name.html) – [goeswith](it_valico-dep-goeswith.html) – [iobj](it_valico-dep-iobj.html) – [mark](it_valico-dep-mark.html) – [nmod](it_valico-dep-nmod.html) – [nsubj](it_valico-dep-nsubj.html) – [nsubj:pass](it_valico-dep-nsubj-pass.html) – [nummod](it_valico-dep-nummod.html) – [obj](it_valico-dep-obj.html) – [obl](it_valico-dep-obl.html) – [obl:agent](it_valico-dep-obl-agent.html) – [orphan](it_valico-dep-orphan.html) – [parataxis](it_valico-dep-parataxis.html) – [punct](it_valico-dep-punct.html) – [root](it_valico-dep-root.html) – [vocative](it_valico-dep-vocative.html) – [xcomp](it_valico-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 398 sentences, 6508 tokens and 6784 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 906 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 15 types of words that contain both letters and punctuation. Examples: l', un', c', d', Mi-mi-mio, Pero', Quest', T-SHIRT, eta', h', k.o., piu', s', tes-tes-or-ro, vuòl'</li>
</ul>

<ul>
<li>This corpus contains 273 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 73 types of multi-word tokens. Examples: al, del, nel, all', alla, sul, della, sulla, aiutarla, sulle, nella, dei, alle, dalla, lasciami, nelle, sull, dal, degli, dell', dello, portarla, prenderla, salvarla, 9h30, Lasciaglela, Lasciala, Nei, Nell, ai, allo, annegarsi, aspettandomi, auitarmi, averecela, averla, averlo, cambiarle, cargarla, col, conoscerlo, crederlo, dall', dalle, derribarle, dimnticarsi, farle, farne, gridarmi, incontrarsi.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 45 lemmas tagged as pronouns (PRON): _, altro, ce, che, chi, ci, ciò, cosa, cui, dove, entrambi, eso, gle, gli, io, la, le, lei, li, lo, loro, lui, me, mi, molto, ne, nessuno, niente, noi, qualchosa, qualcosa, qualcuno, quale, que, quello, questo, qui, s, se, si, ti, tutto, una, uno, vi</li>
</ul>

<ul>
<li>This corpus contains 33 lemmas tagged as determiners (DET): alcun, alcuno, alquino, altro, che, degli, dei, delle, gli, i, il, la, le, lo, loro, mio, molto, nessuno, nostro, ogni, otro, proprio, qualche, quel, quello, questo, suo, tanto, tuo, tutto, un, una, uno</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as PRON and sometimes as DET: altro, che, gli, la, le, lo, loro, molto, nessuno, quello, questo, tutto, una, uno</li>
</ul>

<ul>
<li>This corpus contains 6 lemmas tagged as auxiliaries (AUX): avere, dovere, essere, potere, stare, volere</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avere, essere, stare, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: ha, ho, era, è, sono, aveva, stava, ero, avevo, e</li>
    <li>VERB: era, portava, aveva, sembrava, leggeva, gridava, pensava, amo, lascia, pensavo</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: leggendo, portando, gridando, camminando, dicendo, facendo, GUARDANDO, ascoltando, aspettando, ballando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: essere, aver</li>
    <li>VERB: fare, andare, leggere, aiutar, salvare, aiutare, chiamare, avere, camminare, capire</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: stato, stata, dovuto, potuto, stati, viuto, voluto</li>
    <li>VERB: detto, visto, fatto, pensato, sentito, seduto, cominciato, andato, gridato, salvato</li>
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
      <li>ADJ: bella, contenta, bionda, arrabiata, strana, arraviata, brutta, cattiva, destra, furiosa</li>
      <li>AUX-Part: stata</li>
      <li>DET: la, una, le, sua, un', l', mia, questa, altra, delle</li>
      <li>NOUN: donna, ragazza, terra, spalle, borsa, città, spalla, cosa, situazione, casa</li>
      <li>NUM: diecisette</li>
      <li>PRON: la, lei, le, l', questa, quella, altre, molte, queste, una</li>
      <li>VERB-Part: andata, salvata, arrivata, alzata, arrabbiata, arrabiata, caduta, chiamata, chiusa, comprata</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: brutto, simpatico, bel, bello, carino, muscoloso, timido, improviso, nuovo, robusto</li>
      <li>AUX-Part: stato, dovuto, potuto, stati, viuto, voluto</li>
      <li>DET: il, un, l', suo, i, mio, questo, altro, lo, gli</li>
      <li>NOUN: uomo, parco, ragazzo, giornale, amore, momento, banco, giorno, marito, fidanzato</li>
      <li>PRON: lui, lo, l', gli, quello, li, questo, nessuno, tutti, entrambi</li>
      <li>VERB-Part: detto, visto, fatto, pensato, sentito, seduto, cominciato, andato, gridato, salvato</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grande, biondi, contenti, deboli, grandi, importanti, CORTI, NERE, SCURI, aperte</li>
      <li>AUX-Fin: sono, erano, hanno, abiamo, stavamo, Siamo, abbiamo, avete, eranno, stavano</li>
      <li>AUX-Part: stati</li>
      <li>DET: le, i, gli, suoi, molti, delle, dei, miei, queste, sue</li>
      <li>NOUN: spalle, occhiali, parole, piedi, amici, capelli, anni, giardini, minuti, occhi</li>
      <li>NUM: diecisette</li>
      <li>PRON: li, loro, le, tutti, entrambi, gli, Noi, altre, ci, cose</li>
      <li>VERB-Fin: litigavano, Cominciamo, DIVERTIVANO, ERANO, GIOCAVANO, Littigavano, arrivano, avevano, cantarono, colpivano</li>
      <li>VERB-Part: andati, caduti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: grande, brutto, forte, bella, felice, giovane, gentile, normale, simpatico, contenta</li>
      <li>AUX-Fin: ha, ho, era, è, aveva, sono, stava, ero, avevo, e</li>
      <li>AUX-Part: stato, stata, dovuto, potuto, viuto, voluto</li>
      <li>DET: il, la, un, una, l', suo, sua, mio, questo, un'</li>
      <li>NOUN: uomo, donna, parco, ragazza, ragazzo, giornale, amore, terra, momento, banco</li>
      <li>PRON: mi, la, lui, lei, l', me, lo, quello, io, gli</li>
      <li>VERB-Fin: era, portava, aveva, sembrava, leggeva, gridava, pensava, amo, lascia, pensavo</li>
      <li>VERB-Part: detto, visto, fatto, pensato, sentito, seduto, cominciato, andato, gridato, salvato</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, l', le, i, lo, gli, l</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, un', uno</li>
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
      <li>ADJ: grandissimo, Carissimo, bellissima, fortissimo, furiosissimo, tentissimo</li>
      <li>ADV: moltissimo, moltissomo, prestissimo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: migliora</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: no</li>
      <li>INTJ: no</li>
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
      <li>AUX-Fin: sarebbe, dovrebbe, sarei</li>
      <li>VERB-Fin: farebbe, continuerei, lascerebbe, piacerebbe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: lascia, scusi, aspetti, scusate, smetti, vada, vai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: ha, ho, era, è, sono, aveva, stava, ero, avevo, e</li>
      <li>VERB-Fin: era, portava, aveva, sembrava, leggeva, gridava, pensava, amo, pensavo, piace</li>
      <li>VERB-Part: seguiro</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: fosse, abbia, avesse, dovesse, dovessi, possa, potesse, stesse, volesse</li>
      <li>VERB-Fin: desse, dicesse, lasciasse, riceva, senta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>VERB-Fin: Avrai, anderò, continuerò, farò</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, aveva, stava, ero, avevo, voleva, erano, stavo, fosse, dovevo</li>
      <li>VERB-Fin: era, portava, aveva, sembrava, leggeva, gridava, pensava, pensavo, faceva, sapeva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Part: stato, stata, dovuto, potuto, stati, viuto, voluto</li>
      <li>VERB-Fin: andò, pasò, alzai, battai, cantarono, prese, sentiì, venne, è</li>
      <li>VERB-Part: detto, visto, fatto, pensato, sentito, seduto, cominciato, andato, gridato, salvato</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: ha, ho, è, sono, e, a, hai, hanno, abiamo, sarebbe</li>
      <li>VERB-Fin: amo, lascia, piace, fa, farebbe, ha, ho, penso, scusi, sta</li>
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
      <li>DET: il, la, un, una, l', le, i, un', lo, gli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADJ: tale</li>
      <li>DET: questo, questa, quel, queste, Quest', quella, quello, questi</li>
      <li>PRON: quello, questo, questa, quella, ciò, eso, queste</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: che</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: altro, altra, molti, ogni, delle, qualche, alcun, dei, tutti, Alcuni</li>
      <li>PRON: niente, qualcosa, nessuno, tutti, entrambi, qualchosa, altre, altro, molte, qualcuno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: che</li>
      <li>PRON: che, cosa, chi, cose</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non, no, neanche</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: suo, sua, mio, mia, suoi, miei, nostra, nostro, sue, tuo</li>
      <li>PRON: mi, si, la, lui, lei, l', me, lo, gli, c'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: che, dove, cui, que, quale, chi, qui</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutta, tutto, tutti</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: due, 1, 10, 28, 30, 700, 9, 95, 99, catordieci</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: prima, ventottesimo</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: suo, sua, mio, mia, suoi, miei, nostra, nostro, sue, tuo</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ho, sono, ero, avevo, stavo, abiamo, dovevo, stavamo, Siamo, abbiamo</li>
      <li>PRON: mi, me, io, Noi, ci</li>
      <li>VERB-Fin: amo, pensavo, avevo, ho, penso, aiuto, capisco, leggevo, Cominciamo, Esperavo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: hai, sei, avete</li>
      <li>PRON: ti, vi</li>
      <li>VERB-Fin: lascia, Avrai, Sai, arrarbi, fai, parlavate, scusate, smetti, vai</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: ha, era, è, aveva, sono, stava, e, voleva, erano, a</li>
      <li>PRON: si, la, lui, l', lei, lo, gli, le, li, se</li>
      <li>VERB-Fin: era, portava, aveva, sembrava, leggeva, gridava, pensava, piace, faceva, sapeva</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: mi, si, la, l', lo, gli, c', le, li, me</li>
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
<li>This corpus uses 6 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, stare, volere, dovere, potere.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--NOUN (81)</li>
      <li>VERB-Fin--PRON (74)</li>
      <li>VERB-Ger--NOUN (9)</li>
      <li>VERB-Ger--PRON (6)</li>
      <li>VERB-Inf--NOUN (4)</li>
      <li>VERB-Inf--PRON (6)</li>
      <li>VERB-Part--NOUN (63)</li>
      <li>VERB-Part--PRON (35)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB-Fin--NOUN (99)</li>
      <li>VERB-Fin--PRON (47)</li>
      <li>VERB-Ger--NOUN (25)</li>
      <li>VERB-Ger--PRON (2)</li>
      <li>VERB-Inf--NOUN (59)</li>
      <li>VERB-Inf--PRON (40)</li>
      <li>VERB-Part--NOUN (92)</li>
      <li>VERB-Part--NOUN-ADP(a) (1)</li>
      <li>VERB-Part--PRON (67)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (30)</li>
      <li>VERB-Ger--PRON (2)</li>
      <li>VERB-Inf--PRON (3)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--PRON (23)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>compound</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
