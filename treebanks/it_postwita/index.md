---
layout: base
title:  'UD_Italian-PoSTWITA'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian PoSTWITA

Language: [Italian](/it/index.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Cristina Bosco, Manuela Sanguinetti.

Repository: [UD_Italian-PoSTWITA](https://github.com/UniversalDependencies/UD_Italian-PoSTWITA)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udit_postwita28)<br />
Download all treebanks: [UD 2.8](/#download)

License: CC BY-NC-SA 4.0

Genre: social

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian-PoSTWITA/issues).
If you want to collaborate, please contact [msanguin&nbsp;(æt)&nbsp;di&nbsp;•&nbsp;unito&nbsp;•&nbsp;it].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | assigned by a program, with some manual corrections, but not a full manual verification |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | assigned by a program, with some manual corrections, but not a full manual verification |

## Description

PoSTWITA-UD is a collection of Italian tweets annotated in Universal Dependencies that can be exploited for the training of NLP systems to enhance their performance on social media texts.




PoSTWITA-UD has been created by enriching the dataset used for the EVALITA 2016 task of Part-of-Speech tagging of Social Media (see (Bosco et al. 2016)).
The original corpus consists of 6,438 tweets of the development set (114,967 tokens) and 300 tweets of the test set (4,759 tokens), annotated at PoS level only.
The conversion and syntactic annotation process was carried out through alternating steps of automatic scripting and manual revision, and finally with some out-of-domain parsing experiments. Parsing results also underwent a manual revision by two independent annotators.

**New since v2.3**: In order to meet the requirements of the EU General Data Protection Regulation (GDPR), entered into force on May 2018, the resource content has been pseudonymized, by substituting original tweet IDs and user names.

## Acknowledgments

The treebank development has also been possible thanks to the contribution of Fabio Tamburini (University of Bologna), who used AnIta for lemmatization and morphological analysis, and of Oronzo Antonelli (University of Bologna), Alberto Lavelli (FBK, Trento), and Alessandro Mazzei (University of Turin), who worked on the parsing experiments.



# Statistics of UD Italian PoSTWITA

## POS Tags

[ADJ](it_postwita-pos-ADJ.html) – [ADP](it_postwita-pos-ADP.html) – [ADV](it_postwita-pos-ADV.html) – [AUX](it_postwita-pos-AUX.html) – [CCONJ](it_postwita-pos-CCONJ.html) – [DET](it_postwita-pos-DET.html) – [INTJ](it_postwita-pos-INTJ.html) – [NOUN](it_postwita-pos-NOUN.html) – [NUM](it_postwita-pos-NUM.html) – [PRON](it_postwita-pos-PRON.html) – [PROPN](it_postwita-pos-PROPN.html) – [PUNCT](it_postwita-pos-PUNCT.html) – [SCONJ](it_postwita-pos-SCONJ.html) – [SYM](it_postwita-pos-SYM.html) – [VERB](it_postwita-pos-VERB.html) – [X](it_postwita-pos-X.html)

## Features

[Clitic](it_postwita-feat-Clitic.html) – [Definite](it_postwita-feat-Definite.html) – [Degree](it_postwita-feat-Degree.html) – [Gender](it_postwita-feat-Gender.html) – [Mood](it_postwita-feat-Mood.html) – [Number](it_postwita-feat-Number.html) – [NumType](it_postwita-feat-NumType.html) – [Person](it_postwita-feat-Person.html) – [Poss](it_postwita-feat-Poss.html) – [PronType](it_postwita-feat-PronType.html) – [Tense](it_postwita-feat-Tense.html) – [VerbForm](it_postwita-feat-VerbForm.html)

## Relations

[acl](it_postwita-dep-acl.html) – [acl:relcl](it_postwita-dep-acl-relcl.html) – [advcl](it_postwita-dep-advcl.html) – [advmod](it_postwita-dep-advmod.html) – [amod](it_postwita-dep-amod.html) – [appos](it_postwita-dep-appos.html) – [aux](it_postwita-dep-aux.html) – [aux:pass](it_postwita-dep-aux-pass.html) – [case](it_postwita-dep-case.html) – [cc](it_postwita-dep-cc.html) – [ccomp](it_postwita-dep-ccomp.html) – [compound](it_postwita-dep-compound.html) – [conj](it_postwita-dep-conj.html) – [cop](it_postwita-dep-cop.html) – [csubj](it_postwita-dep-csubj.html) – [dep](it_postwita-dep-dep.html) – [det](it_postwita-dep-det.html) – [det:poss](it_postwita-dep-det-poss.html) – [det:predet](it_postwita-dep-det-predet.html) – [discourse](it_postwita-dep-discourse.html) – [discourse:emo](it_postwita-dep-discourse-emo.html) – [dislocated](it_postwita-dep-dislocated.html) – [expl](it_postwita-dep-expl.html) – [expl:impers](it_postwita-dep-expl-impers.html) – [expl:pass](it_postwita-dep-expl-pass.html) – [fixed](it_postwita-dep-fixed.html) – [flat](it_postwita-dep-flat.html) – [flat:foreign](it_postwita-dep-flat-foreign.html) – [flat:name](it_postwita-dep-flat-name.html) – [goeswith](it_postwita-dep-goeswith.html) – [iobj](it_postwita-dep-iobj.html) – [list](it_postwita-dep-list.html) – [mark](it_postwita-dep-mark.html) – [nmod](it_postwita-dep-nmod.html) – [nsubj](it_postwita-dep-nsubj.html) – [nsubj:pass](it_postwita-dep-nsubj-pass.html) – [nummod](it_postwita-dep-nummod.html) – [obj](it_postwita-dep-obj.html) – [obl](it_postwita-dep-obl.html) – [obl:agent](it_postwita-dep-obl-agent.html) – [orphan](it_postwita-dep-orphan.html) – [parataxis](it_postwita-dep-parataxis.html) – [parataxis:appos](it_postwita-dep-parataxis-appos.html) – [parataxis:discourse](it_postwita-dep-parataxis-discourse.html) – [parataxis:hashtag](it_postwita-dep-parataxis-hashtag.html) – [parataxis:insert](it_postwita-dep-parataxis-insert.html) – [parataxis:nsubj](it_postwita-dep-parataxis-nsubj.html) – [parataxis:obj](it_postwita-dep-parataxis-obj.html) – [punct](it_postwita-dep-punct.html) – [root](it_postwita-dep-root.html) – [vocative](it_postwita-dep-vocative.html) – [vocative:mention](it_postwita-dep-vocative-mention.html) – [xcomp](it_postwita-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 6713 sentences, 119376 tokens and 124557 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 13288 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 4116 types of words that contain both letters and punctuation. Examples: @user, l', #grillo, #monti, @user1, @user2, #governo, e', c', #serviziopubblico, @user3, #piazzapulita, #m5s, d', un', #manovra, #berlusconi, #mario, #politica, @user4, #lega, #ministri, #pd, #italia, :D, #Napolitano, po', #oramonti, #sapevatelo, #bersani, #rimontiamo, #pdl, @user5, B., #fullmonti, #bossi, c:, #rt, #crisi, #m5stour, #news, #roma, #fatepresto, #liberalizzazioni, #ballarò, #cinemaInChiesa, #movimento5stelle, #antipolitica, #opencamera, #postofisso</li>
</ul>

<ul>
<li>This corpus contains 5153 multi-word tokens. On average, one multi-word token consists of 2.01 syntactic words.</li>
<li>There are 459 types of multi-word tokens. Examples: del, della, al, alla, dei, nel, sul, dal, dell', all', alle, ai, delle, sulla, nella, dalla, degli, sui, nei, sulle, agli, dai, col, dall', nell', dalle, sull', allo, dello, nelle, seguimi, farlo, farsi, negli, dagli, farci, coi, ditemi, glielo, dirlo, nello, parlarne, spararsi, dallo, dargli, dirla, farla, farmi, fatemi, permettersi.</li>
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
<li>This corpus contains 70 lemmas tagged as pronouns (PRON): alcuno, altro, ce, che, chi, chiunque, ché, ci, ciò, coloro, cosa, costui, cui, c’, egli, entrambi, esso, gli, il, io, la, le, lei, li, lo, loro, lui, me, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, ognuno, parecchio, poco, qual, qualche, qualcosa, qualcosaltro, qualcuno, quale, quando, quanto, quello, questo, se, si, stesso, suo, sé, tanto, te, terzo, ti, tu, tuo, tutto, una, uni, uno, ve, vi, voi, voialtri, vostro</li>
</ul>

<ul>
<li>This corpus contains 43 lemmas tagged as determiners (DET): 1, alcuno, altro, certo, che, del, della, di, diverso, il, l', lo, loro, mio, molto, nessuno, niente, nostro, ogni, poco, proprio, qualche, quale, qualsiasi, qualunque, quanto, quello, questo, simile, stesso, sto, suo, tale, tantissimo, tanto, troppo, tuo, tutto, un, uno, vario, vostro, ‎lo</li>
</ul>

<ul>
<li>Out of the above, 24 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, che, il, lo, loro, mio, molto, nessuno, niente, nostro, poco, qualche, quale, quanto, quello, questo, stesso, suo, tanto, tuo, tutto, uno, vostro</li>
</ul>

<ul>
<li>This corpus contains 8 lemmas tagged as auxiliaries (AUX): andare, avere, dovere, essere, potere, sapere, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: andare, avere, dovere, essere, potere, sapere, venire, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: è, sono, ha, e', ho, siamo, sei, può, hanno, sarà</li>
    <li>VERB: fa, è, ha, dice, piace, va, ho, parla, amo, fanno</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>AUX: essendo, avendo, dovendo</li>
    <li>VERB: facendo, aspettando, andando, dando, dicendo, dimostrando, guardando, cercando, diventando, parlando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: essere, aver, voler, esser, poter, avere, dover, potere, volere</li>
    <li>VERB: fare, far, dire, vedere, andare, avere, pagare, parlare, ridere, uscire</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: stato, stata, stati, state, potuto, dovuto, dovuta, ststa</li>
    <li>VERB: fatto, detto, dato, nominato, fatta, messo, trovato, letto, perso, iniziato</li>
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
      <li>ADJ: bella, buona, nuova, prima, politica, italiana, unica, vera, prime, economica</li>
      <li>AUX-Part: stata, state, dovuta, ststa</li>
      <li>DET: la, le, una, mia, questa, un', sua, tua, nostra, sue</li>
      <li>NOUN: crisi, politica, manovra, vita, tv, foto, cosa, fiducia, gente, fine</li>
      <li>PRON: la, le, lei, quella, questa, tutte, quelle, una, tua, sua</li>
      <li>VERB-Part: fatta, finita, chiamata, fatte, andata, stata, varata, arrivata, dedicata, morta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: nuovo, buon, primo, vero, giusto, fisso, tecnico, bello, bravo, italiano</li>
      <li>AUX-Part: stato, stati, potuto, dovuto</li>
      <li>DET: il, i, un, gli, lo, questo, mio, suo, uno, suoi</li>
      <li>NOUN: governo, video, anni, premier, lavoro, presidente, partiti, paese, italiani, professor</li>
      <li>PRON: lo, tutti, tutto, quello, l', li, gli, questo, uno, nessuno</li>
      <li>PROPN: pepe</li>
      <li>VERB-Part: fatto, detto, dato, nominato, messo, trovato, letto, perso, iniziato, rotto</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grande, migliori, sociali, deboli, inutili, forti, primi, prime, giovani, importanti</li>
      <li>AUX-Fin: sono, siamo, hanno, abbiamo, siete, saranno, avete, dobbiamo, stanno, erano</li>
      <li>AUX-Part: stati, state</li>
      <li>DET: i, le, gli, suoi, questi, miei, sue, nostri, sti, queste</li>
      <li>NOUN: anni, partiti, italiani, politici, cose, ministri, giorni, elezioni, parole, voti</li>
      <li>PRON: ci, tutti, c', noi, vi, li, ce, voi, loro, altri</li>
      <li>VERB-Fin: fanno, speriamo, hanno, sono, fate, dicono, abbiamo, parlano, vediamo, dite</li>
      <li>VERB-Part: fatte, costretti, messi, morti, nati, visti, abituati, ammessi, dati, diventati</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: nuovo, bella, buon, possibile, facile, buona, primo, forte, migliore, sociale</li>
      <li>AUX-Fin: è, ha, sono, ho, e', sei, può, sarà, sia, sta</li>
      <li>AUX-Part: stato, stata, potuto, dovuto, dovuta, state, ststa</li>
      <li>DET: il, la, l', un, una, lo, questo, mio, mia, questa</li>
      <li>NOUN: governo, politica, manovra, vita, presidente, lavoro, cosa, fiducia, paese, gente</li>
      <li>PRON: mi, lo, ti, io, tutto, me, la, quello, te, tu</li>
      <li>VERB: fa, fatto, è, ha, dice, piace, va, ho, detto, parla</li>
      <li>VERB-Fin: fa, è, ha, dice, piace, va, ho, parla, amo, so</li>
      <li>VERB-Part: fatto, detto, dato, nominato, fatta, messo, trovato, letto, perso, iniziato</li>
      <li>X: te</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: il, la, i, l', le, gli, lo, l, del, Lle</li>
      <li>PRON: le</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, un', uno, na, 1, l', n', io, kol</li>
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
      <li>ADJ: bellissimo, bellissima, bravissimo, felicissima, gentilissimo, grandissima, grandissimo, bellissime, bravissimi, dolcissimo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: peggiori</li>
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
      <li>AUX-Fin: sarebbe, dovrebbe, potrebbe, vorrei, avrebbe, avrebbero, avrei, potrebbero, potrei, potremmo</li>
      <li>VERB-Fin: vorrei, direi, farebbe, bisognerebbe, vorrebbe, andrebbero, faresti, andrebbe, avrebbe, avremmo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: abbiamo, siate, Siamo, vogliamo, Sii, stai, state, stiamo</li>
      <li>VERB: speriamo, fate, segui, Controlla, dite, scusa, guarda, vai, scusate, vediamo</li>
      <li>VERB-Fin: speriamo, fate, segui, Controlla, dite, scusa, guarda, vai, scusate, vediamo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: è, sono, ha, e', ho, sei, siamo, può, hanno, sarà</li>
      <li>VERB-Fin: fa, è, ha, dice, piace, va, ho, parla, amo, fanno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sia, fosse, siano, abbia, possa, stia, fossi, avesse, dobbiamo, fossero</li>
      <li>VERB-Fin: faccia, sia, vada, dica, abbia, fosse, dia, arrivi, duri, facciano</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sarà, saranno, avrà, saremo, dovrà, sarò, verrà, sara', sarai, dovrò</li>
      <li>VERB-Fin: farà, sarà, andrà, faremo, avrà, arriverà, sara', toccherà, andremo, durerà</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: era, fosse, avevo, erano, ero, poteva, aveva, fossi, voleva, doveva</li>
      <li>VERB-Fin: era, aveva, faceva, fosse, erano, pensavo, avevo, diceva, facesse, stavo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fu, venne, dovette, voleste</li>
      <li>AUX-Part: stato, stata, stati, state, potuto, dovuto, dovuta, ststa</li>
      <li>VERB-Fin: disse, evasi, appesi, compresi, dette, divenne, multò, nacque, por, prese</li>
      <li>VERB-Part: fatto, detto, dato, nominato, fatta, messo, trovato, letto, perso, iniziato</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: è, sono, ha, ho, e', siamo, sei, può, hanno, sia</li>
      <li>VERB: fa, è, ha, dice, piace, va, ho, parla, amo, fanno</li>
      <li>VERB-Fin: fa, è, ha, dice, piace, va, ho, parla, amo, fanno</li>
      <li>VERB-Part: esistenti, dominante, funzionante, parlante, preoccupante, ridotta, tendenti, vivente</li>
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
      <li>DET: il, la, i, l', un, le, una, gli, lo, un'</li>
      <li>PRON: le, una</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: questo, questa, quel, sto, sta, questi, stesso, quei, ste, stessa</li>
      <li>PRON: quello, questo, quelli, ciò, quella, questa, questi, stesso, quelle, quel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Exc
    <ul>
      <li>DET: che, quanto, quanta, quante, quanti</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: tutti, tutto, ogni, qualche, tutta, tutte, altro, tanti, nessun, altri</li>
      <li>PRON: tutti, tutto, niente, nulla, uno, qualcosa, nessuno, qualcuno, altro, altri</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: che, quale, quali, quanta, quanti, quanto, ke, quante</li>
      <li>PRON: cosa, chi, che, quanto, cos', quale, cos, qnti, qual', quali</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: non, nn, no</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: mio, mia, suo, sua, suoi, tuo, loro, nostro, tua, miei</li>
      <li>PRON: si, mi, ci, lo, ti, io, c', me, la, ne</li>
      <li>X: te</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>CCONJ: che</li>
      <li>PRON: che, chi, cui, quanto, ke, quale, chiunque, cha, k, quanta</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: tutti, tutto, tutta, tutte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: 2, 3, 1, due, 5, 4, 7, 6, 10, 20</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primo, prima, primi, prime, ennesimo, seconda, terzo, 1°, terza, ennesima</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: mio, mia, suo, sua, suoi, tuo, loro, nostro, tua, miei</li>
      <li>PRON: tua, mio, sua, suoi, mia, miei, mie, suo, LORO, nostri</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: sono, ho, siamo, devo, posso, abbiamo, sto, vorrei, voglio, dobbiamo</li>
      <li>PRON: mi, ci, io, c', me, noi, ce, m', ioooooo, c</li>
      <li>VERB-Fin: ho, amo, so, visto, speriamo, credo, spero, faccio, capito, vedo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: sei, hai, siete, avete, puoi, devi, dovete, siate, vuoi, potresti</li>
      <li>PRON: ti, te, tu, vi, voi, ve, v', TU', de, foi</li>
      <li>VERB: fai, fate, hai, segui, pensi, sai, Controlla, vai, dite, scusa</li>
      <li>VERB-Fin: fai, fate, hai, segui, pensi, sai, Controlla, vai, dite, scusa</li>
      <li>VERB-Part: rimorchiate</li>
      <li>X: te</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: è, ha, sono, e', può, hanno, sarà, sta, era, sia</li>
      <li>PRON: si, lo, la, l', lui, li, gli, le, se, loro</li>
      <li>VERB-Fin: fa, è, ha, dice, piace, va, parla, fanno, sembra, sa</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>PRON: si, mi, ci, lo, ti, c', la, ne, vi, l'</li>
          <li>X: te</li>
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
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, potere, dovere, volere, andare, sapere, venire.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire, andare.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1169)</li>
      <li>VERB-Fin--NOUN-ADP(di) (4)</li>
      <li>VERB-Fin--NOUN-ADP(senza) (1)</li>
      <li>VERB-Fin--PRON (912)</li>
      <li>VERB-Fin--PRON-ADP(a) (1)</li>
      <li>VERB-Fin--PRON-ADP(in) (1)</li>
      <li>VERB-Ger--NOUN (28)</li>
      <li>VERB-Ger--PRON (27)</li>
      <li>VERB-Inf--NOUN (93)</li>
      <li>VERB-Inf--PRON (74)</li>
      <li>VERB-Inf--PRON-ADP(per) (1)</li>
      <li>VERB-Part--NOUN (177)</li>
      <li>VERB-Part--NOUN-ADP(oltre) (1)</li>
      <li>VERB-Part--PRON (151)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1670)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(di) (3)</li>
      <li>VERB-Fin--NOUN-ADP(su) (1)</li>
      <li>VERB-Fin--PRON (949)</li>
      <li>VERB-Fin--PRON-ADP(contro) (1)</li>
      <li>VERB-Ger--NOUN (76)</li>
      <li>VERB-Ger--PRON (28)</li>
      <li>VERB-Inf--NOUN (815)</li>
      <li>VERB-Inf--PRON (342)</li>
      <li>VERB-Inf--PRON-ADP(a) (1)</li>
      <li>VERB-Part--NOUN (350)</li>
      <li>VERB-Part--PRON (151)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (682)</li>
      <li>VERB-Fin--PRON-ADP(a) (3)</li>
      <li>VERB-Ger--PRON (12)</li>
      <li>VERB-Inf--NOUN-ADP(a) (1)</li>
      <li>VERB-Inf--PRON (95)</li>
      <li>VERB-Part--PRON (131)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 33 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: fare si, vedere si, pagare si, sentire si, abbassare si, accusare si, assumere si, avere si, cambiare si, capitare si, definire si, eliminare si, girare si, guardare si, mandare si, militarizzare si, misurare si, montare si, negare si, organizzare si, perdere si, rafforzare si, riassumere si, rinforzire si, rivedere si, scegliere si, seguire si, sentire mi, stare si, utilizzare si, vergognare si, volere ci, votare si</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 18 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>det:poss</a>, <a>det:predet</a>, <a>discourse:emo</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>parataxis:appos</a>, <a>parataxis:discourse</a>, <a>parataxis:hashtag</a>, <a>parataxis:insert</a>, <a>parataxis:nsubj</a>, <a>parataxis:obj</a>, <a>vocative:mention</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>reparandum</a></li>
</ul>
