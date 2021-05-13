---
layout: base
title:  'UD_Italian-VIT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian VIT

Language: [Italian](/it/index.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.4 release.

The following people have contributed to making this treebank part of UD: Fabio Tamburini, Maria Simi, Cristina Bosco.

Repository: [UD_Italian-VIT](https://github.com/UniversalDependencies/UD_Italian-VIT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_vit28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-NC-SA 3.0

Genre: nonfiction, news

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian-VIT/issues).
If you want to collaborate, please contact [simi&nbsp;(æt)&nbsp;di&nbsp;•&nbsp;unipi&nbsp;•&nbsp;it].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The UD_Italian-VIT corpus was obtained by conversion from VIT (Venice Italian Treebank), developed at the Laboratory of Computational Linguistics of the Università Ca' Foscari in Venice (Delmonte et al. 2007; Delmonte 2009; http://rondelmo.it/resource/VIT/Browser-VIT/index.htm).



The VIT is the effort of the collaboration of people working at the Laboratory of Computational Linguistics (LCL) of the University of Venice in the years 1995-2005. It is partly the result of annotation carried out and partly related to the development of a lexicon, a morphological analyzer, a tagger, a deep parser of Italian. All these resources were finally ready at the beginning of the 90s when the LCL got involved in the first Italian national projects.

VIT originated as a constituency based treebank following the theoretical framework described in (Delmonte et al. 2007), and was later converted into a dependency representation in ConLL-X format (Delmonte 2009). The annotation follows general X-bar criteria with 29 constituency labels and 102 PoS tags. VIT is also made available in a broad annotation version with 10 constituency labels and 22 PoS tags for machine learning purposes. The format is plain text with square bracketing and a UPenn style version which is readable by the open source query language has been also provided. The VIT contains about 272,000 words distributed over six different domains, and this is what makes it so relevant for the study of the structure of Italian language. VIT includes linguistic materials of diverse nature, extracted from five different text genres: news (170,000 words), burocratic (20,000 words), political (40,000 words), Economic and financial (12,000 words), scientific (20,000 words) and literary (10,000 words) genres (Delmonte et al. 2007). In addition, some 60,000 tokens of spoken dialogues in different Italian varieties were annotated.

Similarly to what we did for other Italian treebanks, the UD version of the VIT treebank was obtained by first converting to an unriched version of the MIDT (Merged Italian Dependency Treebank) scheme (Bosco, Montemagni, Simi 2012). Then a further conversion step from MIDT+ to UDv2 was performed. Conversion was followed by a series of semi-automatic harmonization steps, in order to compensate for several differences in the use of the target annotation scheme with respect to the other Italian treebanks.
The splitting into training, devel and test was done maintaining as much as possible the original sequence and respecting the proportions indicated in the guidelines (80%, 10%, 10%).

## Acknowledgments

We are indebted to Rodolfo Del Monte and his collaborators, Antonella Bristot and Sara Tonelli, for the initial work on the VIT treebank; we also acknowledge the contribution of Linda Alfieri and Elzara Khaialieva to the implementation of the conversion process from VIT to MIDT+, which consisted in setting up the automatic conversion rules and in checking the treebank manually.

## References

* Alfieri L., Tamburini F. (2016). (Almost) Automatic Conversion of the
Venice Italian Treebank into the Merged Italian Dependency Treebank
Format. In Proc. of the Third Italian Conference on Computational
Linguistics - CLiC-IT 2016, Napoli, 5-6 December 2016, 19-23.

* Bosco C., Montemagni S., Simi, M. (2012) Harmonization and Merging of two Italian Dependency Treebanks, Workshop on Merging of Language Resources, in Proceedings of LREC 2012, Workshop on Language Resource Merging, Instanbul, May 2012, ELRA, pp. 23-30.

* Rodolfo Delmonte, Antonella Bristot, and Sara Tonelli (2007). VIT -
Venice Italian Treebank: Syntactic and Quantitative Features. In Proc.
Sixth International Workshop on Treebanks and Linguistic Theories.

* Delmonte, R. (2009). Treebanking in VIT: from Phrase Structure to
Dependency Representation. In Sergei Nirenburg (ed.) Language
Engineering for Lesser-Studied Languages, pages 51–81. IOS Press,
Amsterdam, The Netherlands.

* Tamburini F. (2017). Semgrex-Plus: a Tool for Automatic
Dependency-Graph Rewriting In Proc. of the Fourth International
Conference on Dependency Linguistics - Depling 2017, Pisa, 18-20
September 2017, 248-254.



# Statistics of UD Italian VIT

## POS Tags

[ADJ](it_vit-pos-ADJ.html) – [ADP](it_vit-pos-ADP.html) – [ADV](it_vit-pos-ADV.html) – [AUX](it_vit-pos-AUX.html) – [CCONJ](it_vit-pos-CCONJ.html) – [DET](it_vit-pos-DET.html) – [INTJ](it_vit-pos-INTJ.html) – [NOUN](it_vit-pos-NOUN.html) – [NUM](it_vit-pos-NUM.html) – [PART](it_vit-pos-PART.html) – [PRON](it_vit-pos-PRON.html) – [PROPN](it_vit-pos-PROPN.html) – [PUNCT](it_vit-pos-PUNCT.html) – [SCONJ](it_vit-pos-SCONJ.html) – [SYM](it_vit-pos-SYM.html) – [VERB](it_vit-pos-VERB.html) – [X](it_vit-pos-X.html)

## Features

[Clitic](it_vit-feat-Clitic.html) – [Definite](it_vit-feat-Definite.html) – [Degree](it_vit-feat-Degree.html) – [Foreign](it_vit-feat-Foreign.html) – [Gender](it_vit-feat-Gender.html) – [Mood](it_vit-feat-Mood.html) – [Number](it_vit-feat-Number.html) – [NumType](it_vit-feat-NumType.html) – [Person](it_vit-feat-Person.html) – [Polarity](it_vit-feat-Polarity.html) – [Poss](it_vit-feat-Poss.html) – [PronType](it_vit-feat-PronType.html) – [Tense](it_vit-feat-Tense.html) – [VerbForm](it_vit-feat-VerbForm.html)

## Relations

[acl](it_vit-dep-acl.html) – [acl:relcl](it_vit-dep-acl-relcl.html) – [advcl](it_vit-dep-advcl.html) – [advmod](it_vit-dep-advmod.html) – [amod](it_vit-dep-amod.html) – [appos](it_vit-dep-appos.html) – [aux](it_vit-dep-aux.html) – [aux:pass](it_vit-dep-aux-pass.html) – [case](it_vit-dep-case.html) – [cc](it_vit-dep-cc.html) – [ccomp](it_vit-dep-ccomp.html) – [compound](it_vit-dep-compound.html) – [conj](it_vit-dep-conj.html) – [cop](it_vit-dep-cop.html) – [csubj](it_vit-dep-csubj.html) – [dep](it_vit-dep-dep.html) – [det](it_vit-dep-det.html) – [det:poss](it_vit-dep-det-poss.html) – [det:predet](it_vit-dep-det-predet.html) – [discourse](it_vit-dep-discourse.html) – [dislocated](it_vit-dep-dislocated.html) – [expl](it_vit-dep-expl.html) – [expl:impers](it_vit-dep-expl-impers.html) – [expl:pass](it_vit-dep-expl-pass.html) – [fixed](it_vit-dep-fixed.html) – [flat](it_vit-dep-flat.html) – [flat:foreign](it_vit-dep-flat-foreign.html) – [flat:name](it_vit-dep-flat-name.html) – [iobj](it_vit-dep-iobj.html) – [list](it_vit-dep-list.html) – [mark](it_vit-dep-mark.html) – [nmod](it_vit-dep-nmod.html) – [nsubj](it_vit-dep-nsubj.html) – [nsubj:pass](it_vit-dep-nsubj-pass.html) – [nummod](it_vit-dep-nummod.html) – [obj](it_vit-dep-obj.html) – [obl](it_vit-dep-obl.html) – [obl:agent](it_vit-dep-obl-agent.html) – [orphan](it_vit-dep-orphan.html) – [parataxis](it_vit-dep-parataxis.html) – [punct](it_vit-dep-punct.html) – [root](it_vit-dep-root.html) – [vocative](it_vit-dep-vocative.html) – [xcomp](it_vit-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 10087 sentences, 259479 tokens and 279984 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 36646 tokens (14%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 85 types of words that contain both letters and punctuation. Examples: l', d', un', c', quest', s', all', vent', anch', quell', trent', tutt', com', /ter, c-c, cos', dell', g-1, quarant', 14/a, baby-sitter, centro-sinistra, dev', g/1, joint-venture, n', po', senz', 1990-equ-100, Banfield-tripcovich, Bèghin-say, Lehnigk-emden, Sant', bloc-notes, h-1, mezz', nient', null', qual', sessant', 's, /bis, 0,03%minus, 108/a, 12-mo, 38-ma, 5/h9/051, 500-equ-250, Alain-gauze, Avanti_!</li>
</ul>

<ul>
<li>This corpus contains 20496 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 560 types of multi-word tokens. Examples: del, della, al, dei, dell', delle, nel, alla, all', nella, ai, dal, degli, dalla, alle, sul, dall', nell', sulla, nei, nelle, agli, dello, sui, dalle, dai, negli, sulle, sull', dagli, allo, nello, sugli, dallo, col, sullo, farsi, essersi, farlo, misurarsi, coi, darsi, trovarsi, disporsi, impegnarsi, porsi, averla, battersi, confrontarsi, diffondersi.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): 's</li>
</ul>

<ul>
<li>This corpus contains 102 lemmas tagged as pronouns (PRON): Carlo, adattare, alcuno, altri, altro, ambedue, ce, certo, ch, che, chi, chiunque, ci, ciascuno, ciò, coloro, come, cosa, costoro, costui, cui, donde, dov, dove, egli, entrambi, essa, esse, essi, esso, gli, granché, il, io, la, laddove, le, lei, li, lo, loro, lui, me, medesimo, meglio, meno, mi, mio, molto, n, ne, nessuno, niente, noi, nostro, nulla, ogni, ognuna, ognuno, ove, parecchio, parte, perché, più, poco, proprio, pò, qual, qualche, qualcosa, qualcuno, quale, qualunque, quando, quanto, quello, questo, s, se, si, stessi, stesso, suo, sé, tale, tanto, te, ti, troppo, tu, tuo, tutta, tutto, ultima, ultimi, ultimo, un, una, unico, uno, vi, voi</li>
</ul>

<ul>
<li>This corpus contains 51 lemmas tagged as determiners (DET): alcuno, altrettanto, altro, ambedue, certo, che, ciascuno, codesto, cui, del, delle, determinato, diverso, entrambi, il, l, la, loro, mio, molto, nessuna, nessuno, niente, nostro, nulla, ogni, parecchio, più, poco, proprio, qualche, quale, qualsiasi, qualunque, quanta, quanto, quello, questo, sua, suo, tale, taluno, tanto, the, troppo, tuo, tutta, tutto, un, uno, vostro</li>
</ul>

<ul>
<li>Out of the above, 37 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, ambedue, certo, che, ciascuno, cui, entrambi, il, la, loro, mio, molto, nessuno, niente, nostro, nulla, ogni, parecchio, più, poco, proprio, qualche, quale, qualunque, quanto, quello, questo, suo, tale, tanto, troppo, tuo, tutta, tutto, un, uno</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): andare, avere, dovere, essere, fare, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: andare, avere, dovere, essere, fare, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADV: pare</li>
    <li>AUX: è, ha, sono, hanno, era, sarà, deve, può, sia, aveva</li>
    <li>CCONJ: pesino</li>
    <li>NOUN: dice, vedo</li>
    <li>VERB: è, ha, fa, hanno, dice, sono, scade, sembra, va, tratta</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: essendo, avendo</li>
    <li>NOUN: lenendo</li>
    <li>VERB: facendo, cercando, parlando, indicando, passando, avendo, portando, utilizzando, aggiungendo, partendo</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: essere, aver, esser, poter, far, avere, voler, dover, fare, esserne</li>
    <li>VERB: fare, far, avere, dare, dire, partire, riempire, chiedere, andare, trovare</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: abilitati, illegittima, morta, sommato</li>
    <li>AUX: stato, stata, stati, state, potuto, dovuto, voluto, fatto, dovuta, fatta</li>
    <li>NOUN: redigente, controllanti, cauzionante</li>
    <li>PRON: adattate</li>
    <li>VERB: fatto, detto, approvato, previsto, avuto, previsti, deciso, ottenuto, visto, chiesto</li>
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
      <li>ADJ: altre, nuova, italiana, altra, nuove, politica, stessa, pubblica, economica, politiche</li>
      <li>ADJ-Part: illegittima, morta</li>
      <li>ADV: estremamente, inizialmente, costantemente, normalmente, celermente, contrariamente, lungamente, solamente, una, Molte</li>
      <li>AUX-Part: stata, state, dovuta, fatta, voluta</li>
      <li>CCONJ: essa</li>
      <li>DET: la, le, una, un', sua, questa, tutte, queste, sue, quella</li>
      <li>NOUN: società, attività, parte, legge, titolarità, provincia, città, sede, domanda, gestione</li>
      <li>NUM: un', terza, una, mezza</li>
      <li>PRON: quella, la, quelle, le, una, essa, questa, queste, altra, esse</li>
      <li>PRON-Part: adattate</li>
      <li>PUNCT: le</li>
      <li>VERB: prevista, indicate, presentata, comprese, effettuata, fatta, richiesta, data, previste, richieste</li>
      <li>VERB-Part: prevista, indicate, presentata, comprese, effettuata, fatta, richiesta, data, previste, richieste</li>
      <li>X: area, city, deregulation, force, legis, mountain, ope, private, task</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: altri, nuovo, economico, stesso, nuovi, scorso, altro, finanziario, ultimo, italiano</li>
      <li>ADJ-Part: abilitati, sommato</li>
      <li>ADP: dietro, mezzo, per, ne, niente, rispetto, vicini</li>
      <li>ADV: volta, molto, poco, fa, lungo, troppo, no, seguito, casual, dietro</li>
      <li>AUX: stato, stati, potuto, dovuto, voluto, fatto, dovuti, essere, voluti</li>
      <li>AUX-Part: stato, stati, potuto, dovuto, voluto, fatto, dovuti, voluti</li>
      <li>CCONJ: quanti, altro, caso, quanto</li>
      <li>DET: il, i, un, gli, lo, questo, suo, tutti, questi, uno</li>
      <li>INTJ: ok</li>
      <li>NOUN: anni, miliardi, anno, posti, presidente, punto, governo, stato, gruppo, lavoro</li>
      <li>NUM: miliardi, milioni, un, primi, terzi, bis, rientro, uno</li>
      <li>PRON: lo, quello, quale, quelli, questo, tutti, gli, li, lui, quanto</li>
      <li>SCONJ: quanto, addebitati, caso, nel</li>
      <li>VERB: fatto, detto, approvato, previsto, avuto, previsti, deciso, ottenuto, visto, dato</li>
      <li>VERB-Part: fatto, detto, approvato, previsto, avuto, previsti, deciso, ottenuto, visto, chiesto</li>
      <li>X: personal, station, work, computer, bond, open, space, business, condicio, dragon</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grandi, altri, sociali, altre, disponibili, nuovi, seguenti, titolari, nuove, internazionali</li>
      <li>ADJ-Part: abilitati</li>
      <li>ADP: quali, ne, per, vicini</li>
      <li>ADV: Molte, inesigibili, infine, soli, altri, prese, prossimi, semi, volte</li>
      <li>AUX: hanno, sono, stati, possono, devono, saranno, erano, siano, abbiamo, siamo</li>
      <li>AUX-Fin: hanno, sono, possono, devono, saranno, erano, siano, abbiamo, siamo, vengono</li>
      <li>AUX-Part: stati, state, dovuti, voluti</li>
      <li>CCONJ: quanti, pesino</li>
      <li>CCONJ-Fin: pesino</li>
      <li>DET: i, le, gli, loro, tutti, questi, tutte, suoi, tali, queste</li>
      <li>NOUN: anni, miliardi, insegnanti, posti, trasferimenti, docenti, servizi, giorni, milioni, lire</li>
      <li>NOUN-Part: controllanti</li>
      <li>NUM: miliardi, milioni, primi, terzi</li>
      <li>PRON: ci, c', quelli, quali, quelle, tutti, vi, li, noi, le</li>
      <li>PRON-Part: adattate</li>
      <li>PUNCT: le</li>
      <li>SCONJ: addebitati</li>
      <li>VERB: hanno, derivanti, sono, previsti, fanno, provenienti, effettuati, disposti, aventi, compresi</li>
      <li>VERB-Fin: hanno, sono, fanno, costituiscono, vanno, dicono, restano, abbiamo, rappresentano, considerano</li>
      <li>VERB-Part: previsti, effettuati, disposti, compresi, indicati, assegnati, iscritti, indicate, trasferiti, comprese</li>
      <li>X: private, super</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: precedente, grande, presente, netto, generale, nazionale, sociale, possibile, finanziaria, civile</li>
      <li>ADJ-Part: illegittima, morta, sommato</li>
      <li>ADP: stante, Per, niente, rispetto</li>
      <li>ADV: pò, molto, poco, troppo, generale, ogni, nulla, seguito, una, orizzontale</li>
      <li>ADV-Fin: pare</li>
      <li>AUX-Fin: è, ha, sono, era, sarà, deve, può, sia, aveva, ho</li>
      <li>AUX-Part: stato, stata, potuto, dovuto, voluto, fatto, dovuta, fatta, voluta</li>
      <li>CCONJ: altro, caso, essa, quanto</li>
      <li>DET: il, la, l', un, una, lo, questo, un', sua, suo</li>
      <li>NOUN: anno, parte, legge, presidente, governo, stato, gruppo, provincia, lavoro, trasferimento</li>
      <li>NOUN-Fin: dice, vedo</li>
      <li>NOUN-Part: redigente, cauzionante</li>
      <li>NUM: un', terza, un, una, mezza, rientro, uno</li>
      <li>PRON: lo, quello, mi, quella, quale, la, questo, l', quanto, io</li>
      <li>SCONJ: quanto, come, cosa, quando, caso, nel</li>
      <li>VERB: è, ha, fatto, fa, dice, detto, approvato, scade, previsto, sembra</li>
      <li>VERB-Fin: è, ha, fa, dice, scade, sembra, va, tratta, prevede, spiega</li>
      <li>VERB-Part: fatto, detto, approvato, previsto, avuto, deciso, ottenuto, visto, chiesto, chiuso</li>
      <li>X: computer, personal, open, space, area, city, condicio, deregulation, dragon, local</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, l', i, le, gli, lo, un, the</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, un', uno</li>
      <li>NUM: uno</li>
      <li>PRON: altro, Tutti, altri, ognuna, qualcosa, una</li>
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
      <li>ADJ: altissimo, altissima, gravissima, lunghissimo, bellissima, biondissima, brevissimo, difficilissima, durissimo, gravissimi</li>
      <li>ADV: benissimo, moltissimo, pochissimo</li>
      <li>DET: moltissime, moltissimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: maggiore, superiore, maggior, maggiori, inferiore, minori, superiori, migliore, minore, migliori</li>
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
      <li>NOUN: no</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADV: sì</li>
      <li>INTJ: sì</li>
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
      <li>AUX-Fin: potrebbe, sarebbe, dovrebbe, avrebbe, potrebbero, sarebbero, dovrebbero, avrebbero, avrei, vorrebbe</li>
      <li>VERB-Fin: sarebbe, avrebbe, andrebbe, farebbe, deriverebbe, direi, significherebbe, verrebbe, andresti, consentirebbe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Cessate, leggi, Ascolta, Finiamola, Inviate, Lasciatemi, Mandateci, Rassegnamo, Riparliamo, Ripetiamo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV-Fin: pare</li>
      <li>AUX-Fin: è, ha, sono, hanno, era, sarà, deve, può, sia, aveva</li>
      <li>CCONJ-Fin: pesino</li>
      <li>NOUN-Fin: dice, vedo</li>
      <li>VERB-Fin: è, ha, fa, hanno, dice, sono, scade, sembra, va, tratta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: fosse, abbia, abbiano, fossero, avesse, dovesse, dovessero, potesse, avessero, sia</li>
      <li>VERB-Fin: abbiano, abbia, fosse, sappiano, aprisse, avessi, avessimo, fossero, mancasse, ponesse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sarà, saranno, dovrà, potranno, potrà, verrà, verranno, dovranno, potrò, avranno</li>
      <li>VERB-Fin: avrà, saranno, farà, andrà, darà, sarà, partirà, servirà, vedremo, avverrà</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, aveva, erano, fosse, avevano, poteva, avevo, fossero, doveva, avesse</li>
      <li>VERB-Fin: era, aveva, sembrava, faceva, andava, sapeva, stava, avevano, erano, avevo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: abilitati, illegittima, morta, sommato</li>
      <li>AUX-Fin: fu, venne, furono, vennero, dovette, dovettero, ebbi, fece, fui, potè</li>
      <li>AUX-Part: stato, stata, stati, state, potuto, dovuto, voluto, fatto, dovuta, fatta</li>
      <li>PRON-Part: adattate</li>
      <li>VERB-Fin: disse, ebbe, fece, chiese, cominciò, divenne, prese, rispose, portò, rimase</li>
      <li>VERB-Part: fatto, detto, approvato, previsto, avuto, previsti, deciso, ottenuto, visto, chiesto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADV-Fin: pare</li>
      <li>AUX-Fin: è, ha, sono, hanno, deve, può, sia, possono, devono, ho</li>
      <li>CCONJ-Fin: pesino</li>
      <li>NOUN-Fin: dice, vedo</li>
      <li>NOUN-Part: redigente, controllanti, cauzionante</li>
      <li>VERB-Fin: è, ha, fa, hanno, dice, sono, scade, sembra, va, tratta</li>
      <li>VERB-Part: crescenti, caratterizzante, paralizzanti, assordanti, aventi, coabitante, crescente, delegittimanti, grufolanti, modernizzanti</li>
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
      <li>DET: il, la, l', i, le, un, gli, una, lo, un'</li>
      <li>NUM: uno</li>
      <li>PRON: altro, Tutti, altri, ognuna, qualcosa, una</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADJ: altro, dato, tali</li>
      <li>DET: questo, questa, questi, tale, tali, queste, quest', quella, quel, quei</li>
      <li>PRON: quello, ciò, quella, quelli, questo, quelle, questi, questa, queste, coloro</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: che, quanta, quante</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: altro, altra, mezzo, troppi</li>
      <li>ADV: meno</li>
      <li>DET: tutti, ogni, tutte, più, qualche, alcuni, tutto, alcune, tutta, molti</li>
      <li>PRON: tutti, più, tutto, uno, altro, nessuno, una, altri, nulla, niente</li>
      <li>VERB: vale</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: Perché</li>
      <li>DET: che, quale, quali, qual, quante, quanti</li>
      <li>PRON: chi, perché, dove, quando, cosa, come, che, quanto, quale, qual</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non, mai, né, neppure, neanche, nemmeno, no, mica, Niente, certamente</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: sua, suo, loro, nostro, suoi, sue, nostra, mia, mio, propria</li>
      <li>PRON: si, ci, lo, c', ne, mi, la, l', vi, io</li>
      <li>PRON-Part: adattate</li>
      <li>PUNCT: :</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>AUX-Part: stata</li>
      <li>DET: cui, Quanta, quanti</li>
      <li>PRON: che, cui, dove, chi, quale, quali, quanto, quando, ove, quanti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutti, tutto, molta, tutta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: prima</li>
      <li>NOUN: 6</li>
      <li>NUM: due, tre, cento, 15, 1, 1973, 2, quattro, 30, 6</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primo, seconda, prima, secondo, terzo, prime, primi, quarto, quinto, terza</li>
      <li>NUM: I, III</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Range
    <ul>
      <li>NUM: 268/73, 29/09/73, 21:30, 1,5, 127/91, 1975/1983, 270/1982, 31/10/75, 820/71, 1.300</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: stessa, stesso</li>
      <li>DET: sua, suo, loro, nostro, suoi, sue, nostra, mia, mio, propria</li>
      <li>PRON: tuo, sua, mio, essa, suo, suoi, che, loro, nostra, nostro</li>
      <li>PRON-Part: adattate</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sono, sia, ho, abbiamo, siamo, possa, avevo, stiamo, dobbiamo, avrei</li>
      <li>NOUN-Fin: vedo</li>
      <li>PRON: ci, c', mi, io, noi, ce, me</li>
      <li>VERB-Fin: credo, abbiamo, so, veda, penso, sia, ho, vedremo, sento, avevo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: hai, state, sei, avete, stai, siete, volete, vorresti, volevi, vuoi</li>
      <li>PRON: vi, ti, voi, tu, te</li>
      <li>VERB-Fin: vai, mangi, hai, preferisci, andate, fai, vieni, pensi, andresti, metti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADJ: la</li>
      <li>ADV-Fin: pare</li>
      <li>AUX-Fin: è, ha, hanno, sono, era, sarà, deve, può, aveva, possono</li>
      <li>CCONJ-Fin: pesino</li>
      <li>NOUN-Fin: dice</li>
      <li>PRON: si, lo, ne, la, l', gli, li, lui, le, loro</li>
      <li>VERB-Fin: è, ha, fa, hanno, dice, sono, scade, sembra, va, tratta</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: si, ci, lo, c', ne, mi, la, l', vi, gli</li>
          <li>PUNCT: :</li>
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
          <li>ADJ: scientific</li>
          <li>ADP: of</li>
          <li>NOUN: coalition, dogs, fascist, revolutions, structure</li>
          <li>X: joint, venture, baby, cd, sitter, rom, condicio, par, est, facile</li>
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
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, potere, dovere, volere, stare, fare, andare, venire, sapere.</li>
<li>This corpus uses 9 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire, andare, avere, dovere, potere, stare, fare, volere.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB-Fin--NOUN (2821)</li>
      <li>VERB-Fin--PRON (1683)</li>
      <li>VERB-Ger--NOUN (42)</li>
      <li>VERB-Ger--PRON (31)</li>
      <li>VERB-Inf--NOUN (407)</li>
      <li>VERB-Inf--PRON (179)</li>
      <li>VERB-Part--NOUN (1241)</li>
      <li>VERB-Part--PRON (546)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (90)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB-Fin--NOUN (2221)</li>
      <li>VERB-Fin--PRON (546)</li>
      <li>VERB-Ger--NOUN (369)</li>
      <li>VERB-Ger--PRON (44)</li>
      <li>VERB-Inf--NOUN (2209)</li>
      <li>VERB-Inf--PRON (262)</li>
      <li>VERB-Part--NOUN (1253)</li>
      <li>VERB-Part--PRON (341)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (2)</li>
      <li>VERB-Fin--PRON (85)</li>
      <li>VERB-Ger--PRON (2)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--PRON (30)</li>
      <li>VERB-Part--PRON (52)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 1 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: determinare si</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 10 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
