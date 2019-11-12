---
layout: base
title:  'UD_Italian-TWITTIRO'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian TWITTIRO

Language: [Italian](/it/index.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.5 release.

The following people have contributed to making this treebank part of UD: Alessandra T. Cignarella, Cristina Bosco, Manuela Sanguinetti.

Repository: [UD_Italian-TWITTIRO](https://github.com/UniversalDependencies/UD_Italian-TWITTIRO)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_twittiro25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: social

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian-TWITTIRO/issues).
If you want to collaborate, please contact [cigna&nbsp;(æt)&nbsp;di&nbsp;•&nbsp;unito&nbsp;•&nbsp;it].
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

TWITTIRÒ-UD is a collection of ironic Italian tweets annotated in Universal Dependencies.
The treebank can be exploited for the training of NLP systems to enhance their performance on social media texts, and in particular, for irony detection purposes.




TWITTIRÒ-UD has been created by enriching a resource originally developed for training and testing irony detection systems, also exploited as a benchmark for the Italian irony detection task held in EVALITA 2018
(Cignarella et al., 2018c). The treebank comprises both the fine-grained annotation for irony applied in Karoui et al. (2017), and the morphological and syntactic information encoded by the UD format.

The original corpus consists of 1,424 tweets (28,387 tokens). The syntactic annotation process was carried out through alternating steps of automatic scripting and manual revision, and finally with some out-of-domain parsing experiments. Parsing results also underwent a manual revision by two independent annotators.

In order to meet the requirements of the EU General Data Protection Regulation (GDPR), entered into force on May 2018, the resource content has been pseudonymized, by substituting original tweet IDs and user names.

:warning: An overall amount of 527 tweets overlaps with [PoSTWITA-UD](https://github.com/UniversalDependencies/UD_Italian-PoSTWITA).
The overlapping content however has been distributed such that it ends up in the same partition in both treebanks.


## Acknowledgments

# Statistics of UD Italian TWITTIRO

## POS Tags

[ADJ](it_twittiro-pos-ADJ.html) – [ADP](it_twittiro-pos-ADP.html) – [ADV](it_twittiro-pos-ADV.html) – [AUX](it_twittiro-pos-AUX.html) – [CCONJ](it_twittiro-pos-CCONJ.html) – [DET](it_twittiro-pos-DET.html) – [INTJ](it_twittiro-pos-INTJ.html) – [NOUN](it_twittiro-pos-NOUN.html) – [NUM](it_twittiro-pos-NUM.html) – [PRON](it_twittiro-pos-PRON.html) – [PROPN](it_twittiro-pos-PROPN.html) – [PUNCT](it_twittiro-pos-PUNCT.html) – [SCONJ](it_twittiro-pos-SCONJ.html) – [SYM](it_twittiro-pos-SYM.html) – [VERB](it_twittiro-pos-VERB.html) – [X](it_twittiro-pos-X.html)

## Features

[Clitic](it_twittiro-feat-Clitic.html) – [Definite](it_twittiro-feat-Definite.html) – [Degree](it_twittiro-feat-Degree.html) – [Foreign](it_twittiro-feat-Foreign.html) – [Gender](it_twittiro-feat-Gender.html) – [Mood](it_twittiro-feat-Mood.html) – [Number](it_twittiro-feat-Number.html) – [NumType](it_twittiro-feat-NumType.html) – [Person](it_twittiro-feat-Person.html) – [Polarity](it_twittiro-feat-Polarity.html) – [Poss](it_twittiro-feat-Poss.html) – [PronType](it_twittiro-feat-PronType.html) – [Tense](it_twittiro-feat-Tense.html) – [VerbForm](it_twittiro-feat-VerbForm.html)

## Relations

[acl](it_twittiro-dep-acl.html) – [acl:relcl](it_twittiro-dep-acl-relcl.html) – [advcl](it_twittiro-dep-advcl.html) – [advmod](it_twittiro-dep-advmod.html) – [amod](it_twittiro-dep-amod.html) – [appos](it_twittiro-dep-appos.html) – [aux](it_twittiro-dep-aux.html) – [aux:pass](it_twittiro-dep-aux-pass.html) – [case](it_twittiro-dep-case.html) – [cc](it_twittiro-dep-cc.html) – [ccomp](it_twittiro-dep-ccomp.html) – [compound](it_twittiro-dep-compound.html) – [conj](it_twittiro-dep-conj.html) – [cop](it_twittiro-dep-cop.html) – [csubj](it_twittiro-dep-csubj.html) – [csubj:pass](it_twittiro-dep-csubj-pass.html) – [dep](it_twittiro-dep-dep.html) – [det](it_twittiro-dep-det.html) – [det:poss](it_twittiro-dep-det-poss.html) – [det:predet](it_twittiro-dep-det-predet.html) – [discourse](it_twittiro-dep-discourse.html) – [discourse:emo](it_twittiro-dep-discourse-emo.html) – [dislocated](it_twittiro-dep-dislocated.html) – [expl](it_twittiro-dep-expl.html) – [expl:impers](it_twittiro-dep-expl-impers.html) – [expl:pass](it_twittiro-dep-expl-pass.html) – [fixed](it_twittiro-dep-fixed.html) – [flat](it_twittiro-dep-flat.html) – [flat:foreign](it_twittiro-dep-flat-foreign.html) – [flat:name](it_twittiro-dep-flat-name.html) – [goeswith](it_twittiro-dep-goeswith.html) – [iobj](it_twittiro-dep-iobj.html) – [list](it_twittiro-dep-list.html) – [mark](it_twittiro-dep-mark.html) – [nmod](it_twittiro-dep-nmod.html) – [nsubj](it_twittiro-dep-nsubj.html) – [nsubj:pass](it_twittiro-dep-nsubj-pass.html) – [nummod](it_twittiro-dep-nummod.html) – [obj](it_twittiro-dep-obj.html) – [obl](it_twittiro-dep-obl.html) – [obl:agent](it_twittiro-dep-obl-agent.html) – [orphan](it_twittiro-dep-orphan.html) – [parataxis](it_twittiro-dep-parataxis.html) – [parataxis:appos](it_twittiro-dep-parataxis-appos.html) – [parataxis:discourse](it_twittiro-dep-parataxis-discourse.html) – [parataxis:hashtag](it_twittiro-dep-parataxis-hashtag.html) – [parataxis:insert](it_twittiro-dep-parataxis-insert.html) – [parataxis:nsubj](it_twittiro-dep-parataxis-nsubj.html) – [parataxis:obj](it_twittiro-dep-parataxis-obj.html) – [punct](it_twittiro-dep-punct.html) – [root](it_twittiro-dep-root.html) – [vocative](it_twittiro-dep-vocative.html) – [vocative:mention](it_twittiro-dep-vocative-mention.html) – [xcomp](it_twittiro-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1424 sentences, 28387 tokens and 29605 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 4475 tokens (16%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 675 types of words that contain both letters and punctuation. Examples: @user, #labuonascuola, l', #monti, @user1, @user2, c', #renzi, e', #scuola, @user3, h​t​t​p​:​/​/​t​.​c​o​/​o​D​P​U​t​x​2​D​v​V, #Grillo, #governo, h​t​t​p​:​/​/​t​.​c​o​/​o​D​P​U​t​x​k​M​K​3, l’, un', #midaperruolo, d', po', #tfaordinario, h​t​t​p​s​:​/​/​t​.​c​o​/​o​D​P​U​t​x​2​D​v​V, #manovra, @user4, cit., h​t​t​p​:​/​/​t​.​c​o​/​o​D​P​U​t​x​T​q​U​7, #​l​a​b​u​o​n​a​s​c​u​o​l​a​u​n​c​a​z​z​o, #m5s, #mario, #passodopopasso, #Quota96Scuola, #giannini, #jobsact, #rimontiamo, #berlusconi, #fullmonti, #ministri, #sapevatelo, #riformascuola, @user5, cos', h​t​t​p​:​/​/​t​.​c​o​/​8​R​E​e​G​q​I​h​C​K, quest', #elezioni, #fatepresto, #lascuolaingiusta, #liberalizzazioni, #oramonti, #pd, #postofisso</li>
</ul>

<ul>
<li>This corpus contains 1213 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 174 types of multi-word tokens. Examples: del, della, al, alla, nel, dei, ai, dal, delle, dell', all', alle, nella, sul, degli, dalla, sulla, sui, col, sull', agli, dall', nei, sulle, nelle, dai, dalle, negli, allo, nell', farlo, dagli, glielo, dello, dirlo, ditemi, essersi, farci, farla, ricordargli, AMMETTILO, Armiamoci, Avendolo, Cercasi, Chiediamolo, Consolati, Convincetemi, Dicesi, Eccolo, Fatevi.</li>
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
<li>This corpus contains 63 lemmas tagged as pronouns (PRON): Gello, alcuno, altro, ce, che, chi, chiunque, ché, ci, ciò, cos', cosa, cui, delinque, dove, egli, entrambi, gli, il, io, la, le, lei, li, lo, loro, lui, me, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, poco, qual, qualcosa, qualcuno, quale, quanto, quello, questo, se, si, stesso, suo, tanto, te, terzo, ti, tu, tuo, tutte, tutti, tutto, una, uno, ve, vi, voi</li>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as determiners (DET): #celemeritiamotutto, al, alcun, alcuno, altro, certo, che, della, di, i, il, la, lo, loro, mio, molto, nessuna, nessuno, niente, nostro, ogni, poco, qualche, quale, qualsiasi, quanto, quello, questo, simile, stesso, suo, tanto, troppo, tuo, tutto, un, una, uno, vostro</li>
</ul>

<ul>
<li>Out of the above, 24 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, che, il, la, lo, loro, mio, molto, nessuno, niente, nostro, poco, quale, quanto, quello, questo, stesso, suo, tanto, tuo, tutto, una, uno</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): andare, avere, dovere, essere, potere, stare, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: andare, avere, dovere, essere, potere, stare, venire, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: è, ha, sono, era, e', siamo, hanno, ho, sarà, può</li>
    <li>VERB: continua, è, fa, ha, dice, va, parla, sembra, fanno, ho</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: Avendo</li>
    <li>VERB: facendo, guardando, aspettando, attrezzando, sapendo, Dimostrando, Minacciando, Portando, Producendo, Trasformando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: essere, aver, esser, voler, potere, stare, volere, è</li>
    <li>VERB: fare, dire, far, avere, andare, parlare, dare, lavorare, prendere, cambiare</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: stata, stato, potuto, stati</li>
    <li>VERB: fatto, detto, morto, messo, avuto, dato, letto, arrivato, capito, lasciato</li>
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
      <li>ADJ: buona, bella, italiana, pubblica, prima, unica, igienica, nuova, prime, nuove</li>
      <li>AUX-Part: stata</li>
      <li>DET: la, le, una, un', questa, sua, mia, tutte, quella, tua</li>
      <li>NOUN: scuola, riforma, cosa, casa, crisi, vita, foto, volta, cit., fine</li>
      <li>PRON: la, quella, questa, le, lei, quelle, una, altra, mia, tante</li>
      <li>VERB: fatta, letta, interrogata, varata, iniziata, ritrovata, scritta, trovata, @user, Basta</li>
      <li>VERB-Part: fatta, letta, interrogata, varata, iniziata, ritrovata, scritta, trovata, @user, Basta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: nuovo, primo, buon, italiano, bel, caro, giusto, italiani, unico, bello</li>
      <li>ADV: tutti</li>
      <li>AUX-Part: stato, potuto, stati</li>
      <li>DET: il, i, un, gli, lo, suo, tutti, mio, questo, uno</li>
      <li>NOUN: governo, anni, lavoro, anno, italiani, mesi, mondo, tagli, merito, ministro</li>
      <li>PRON: lo, tutti, tutto, li, gli, quello, questo, altro, nessuno, qualcuno</li>
      <li>PROPN: Folletto</li>
      <li>SYM: #cambiaverso</li>
      <li>VERB-Part: fatto, detto, morto, messo, avuto, dato, letto, arrivato, capito, lasciato</li>
      <li>X: mal</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: elementari, grande, italiani, civili, giovani, bravi, prime, altri, brevi, brutti</li>
      <li>ADV: tutti</li>
      <li>AUX-Fin: sono, siamo, hanno, saranno, avete, abbiamo, erano, possono, siete, vogliono</li>
      <li>AUX-Part: stati</li>
      <li>DET: i, le, gli, tutti, tutte, nostri, dei, questi, sue, suoi</li>
      <li>NOUN: docenti, anni, insegnanti, italiani, mesi, tagli, giorni, precari, studenti, scuole</li>
      <li>PRON: ci, tutti, c', noi, li, vi, ce, voi, quelli, altri</li>
      <li>VERB-Fin: fanno, hanno, sono, speriamo, fate, dicono, dite, abbiamo, andiamo, aspettiamo</li>
      <li>VERB-Part: assunti, abilitati, morti, riusciti, tolti, @user, Arrestati, Comprese, Eliminati, acquisite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: buona, nuovo, grande, primo, buon, bella, italiana, possibile, pubblica, italiano</li>
      <li>AUX-Fin: è, ha, era, e', ho, sarà, può, deve, sono, sia</li>
      <li>AUX-Part: stata, stato, potuto</li>
      <li>DET: il, la, un, l', una, lo, l’, suo, ogni, un'</li>
      <li>NOUN: governo, scuola, riforma, lavoro, anno, cosa, casa, vita, mondo, volta</li>
      <li>PRON: lo, mi, ti, la, io, tutto, gli, me, lui, quello</li>
      <li>PROPN: Folletto</li>
      <li>SYM: #cambiaverso</li>
      <li>VERB: continua, è, fa, fatto, ha, detto, dice, va, parla, sembra</li>
      <li>VERB-Fin: continua, è, fa, ha, dice, va, parla, sembra, ho, pare</li>
      <li>VERB-Part: fatto, detto, morto, messo, avuto, dato, letto, arrivato, capito, lasciato</li>
      <li>X: mal</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, i, l', le, gli, lo, l’, l, a1</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, un', uno, na, 1, n', nà</li>
      <li>PRON: una</li>
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
      <li>ADJ: PERICOLOSISSIMO, bellissimo, fedelissimi, piccolissimo, utilissimo, vivissimi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: inferiore, inodori, miglior, superiori</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>INTJ: No</li>
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
      <li>AUX-Fin: sarebbe, dovrebbe, potrebbe, avrebbe, avrei, vorrei, dovrei, potrei, Sareste, avremmo</li>
      <li>VERB-Fin: bisognerebbe, direbbe, direi, farei, sarebbe, servirebbe, vorrebbe, vorrei, #nelmulinochevorrei, Ebbero</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: abbiamo, siate, Siamo</li>
      <li>VERB: CONTINUA, speriamo, vai, dite, leggi, scusate, pensa, venga, Aspettiamo, Venite</li>
      <li>VERB-Fin: CONTINUA, speriamo, vai, dite, leggi, scusate, pensa, venga, Aspettiamo, Venite</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: è, ha, sono, era, e', hanno, siamo, ho, sarà, può</li>
      <li>VERB-Fin: continua, è, fa, ha, dice, va, sembra, parla, fanno, ho</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sia, fosse, siano, abbia, avessero, fossero, possa, stia, voglia, Possiamo</li>
      <li>VERB-Fin: vada, dica, faccia, abbia, arrivi, fossero, sia, spieghi, trovi, Dipendesse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sarà, saranno, verrà, saremo, avrà, dovrà, potranno, potrà, dovranno, sara'</li>
      <li>VERB-Fin: farà, andremo, metterà, saranno, vedremo, arriverà, avrò, capirete, fara', faranno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, fosse, erano, aveva, ero, avevo, poteva, voleva, avessero, avevano</li>
      <li>VERB-Fin: era, aveva, bastava, facevo, fossero, pensavo, Dipendesse, ESISTEVA, Stavo, Voleva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fu, voleste</li>
      <li>AUX-Part: stata, stato, potuto, stati</li>
      <li>VERB-Fin: accorsero, appesi, compresi, dichiarò, entrò, farai, formò, morì, recò, scritte</li>
      <li>VERB-Part: fatto, detto, morto, messo, avuto, dato, letto, arrivato, capito, lasciato</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: è, ha, sono, e', siamo, hanno, ho, può, deve, sia</li>
      <li>VERB: continua, è, fa, ha, dice, va, parla, sembra, fanno, ho</li>
      <li>VERB-Fin: continua, è, fa, ha, dice, va, parla, sembra, fanno, ho</li>
      <li>VERB-Part: avente</li>
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
      <li>DET: il, la, i, un, l', le, una, gli, lo, l’</li>
      <li>PRON: una</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: questa, questo, sto, quel, quest', quella, questi, quelle, sti, qst</li>
      <li>PRON: quello, quella, questo, questa, quelli, quelle, questi, ciò, stesso, Gelli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: che, Ke, quanta, quanto</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: tutti</li>
      <li>DET: ogni, qualche, tutto, tutti, nessun, tutta, tutte, tanti, altro, nessuna</li>
      <li>PRON: tutti, tutto, altro, qualcosa, niente, nessuno, qualcuno, uno, nulla, altri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: che, quale, quanta, quanti, ke, quanto</li>
      <li>PRON: cosa, chi, cos', che, quanto, quale, cos, qual', quanti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non, nn, neanche, no, Mica, nemmeno, neppure</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>ADV: proprio</li>
      <li>DET: suo, mio, sua, mia, loro, nostri, nostro, sue, suoi, tua</li>
      <li>PRON: si, ci, lo, mi, c', ti, la, ne, noi, gli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: che, chi, cui, quanto, quale, cha, delinque, dove, quali, quanta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutti, tutte, tutto, #celemeritiamotutte, tutta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: 1'</li>
      <li>NUM: due, 3, 2, mila, tre, 1, 12, 5, 7, 10</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primo, prima, prime, primi, terza, 1', 1mo, 3, ennesima, seconda</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADV: proprio</li>
      <li>DET: suo, mio, sua, mia, loro, nostri, nostro, sue, suoi, tua</li>
      <li>PRON: mia, LORO, mio, nostri, suo, tuo</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: siamo, ho, sono, abbiamo, ero, posso, avevo, dobbiamo, stiamo, possiamo</li>
      <li>PRON: ci, mi, c', noi, io, me, ce, miiiii</li>
      <li>VERB-Fin: ho, so, visto, speriamo, vedo, amo, faccio, abbiamo, andiamo, aspettiamo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: sei, avete, siete, puoi, vuoi, hai, siate, sarai, volete, 6</li>
      <li>PRON: ti, vi, te, voi, tu, ve, TU', t, t'</li>
      <li>VERB: CONTINUA, vai, fate, dite, hai, vuoi, fai, leggi, scusate, andate</li>
      <li>VERB-Fin: CONTINUA, vai, fate, dite, hai, vuoi, fai, leggi, scusate, andate</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: è, ha, sono, era, e', hanno, sarà, può, deve, sia</li>
      <li>PRON: si, lo, la, li, gli, lui, l', se, le, glie</li>
      <li>VERB-Fin: continua, è, fa, ha, dice, va, sembra, parla, fanno, pare</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: si, ci, lo, mi, c', ti, la, ne, gli, li</li>
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
          <li>X: indoor</li>
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
<li>This corpus uses 7 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, potere, dovere, volere, stare, andare.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (330)</li>
      <li>VERB-Fin--NOUN-ADP(di) (2)</li>
      <li>VERB-Fin--PRON (158)</li>
      <li>VERB-Fin--PRON-ADP(in) (1)</li>
      <li>VERB-Ger--NOUN (2)</li>
      <li>VERB-Ger--PRON (5)</li>
      <li>VERB-Inf--NOUN (24)</li>
      <li>VERB-Inf--PRON (15)</li>
      <li>VERB-Part--NOUN (65)</li>
      <li>VERB-Part--NOUN-ADP(quattro) (1)</li>
      <li>VERB-Part--PRON (41)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (424)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(di) (2)</li>
      <li>VERB-Fin--PRON (182)</li>
      <li>VERB-Ger--NOUN (11)</li>
      <li>VERB-Ger--PRON (10)</li>
      <li>VERB-Inf--NOUN (201)</li>
      <li>VERB-Inf--NOUN-ADP(da) (1)</li>
      <li>VERB-Inf--NOUN-ADP(in) (1)</li>
      <li>VERB-Inf--PRON (77)</li>
      <li>VERB-Part--NOUN (96)</li>
      <li>VERB-Part--NOUN-ADP(di) (1)</li>
      <li>VERB-Part--PRON (40)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--PRON (126)</li>
      <li>VERB-Fin--PRON-ADP(a) (3)</li>
      <li>VERB-Ger--PRON (3)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-ADP(a) (1)</li>
      <li>VERB-Inf--PRON (22)</li>
      <li>VERB-Inf--PRON-ADP(a) (1)</li>
      <li>VERB-Part--NOUN-ADP(a) (1)</li>
      <li>VERB-Part--PRON (35)</li>
      <li>VERB-Part--PRON-ADP(a) (1)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 13 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: fare si, anticipare si, commemorare si, dare se, diagnosticare si, distruggere si, guardare si, mandare si, prevedere si, riassumere si, sentire si, tagliare si, vistare s'</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 19 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>det:predet</a>, <a>discourse:emo</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>parataxis:appos</a>, <a>parataxis:discourse</a>, <a>parataxis:hashtag</a>, <a>parataxis:insert</a>, <a>parataxis:nsubj</a>, <a>parataxis:obj</a>, <a>vocative:mention</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>reparandum</a></li>
</ul>
