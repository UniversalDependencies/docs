---
layout: base
title:  'UD_Italian-PoSTWITA'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian PoSTWITA

Language: [Italian](../it/overview/it-hub.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Cristina Bosco, Manuela Sanguinetti.

Repository: [UD_Italian-PoSTWITA](https://github.com/UniversalDependencies/UD_Italian-PoSTWITA)

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




PoSTWITA-UD was created by enriching the dataset used for the EVALITA 2016 task of Part-of-Speech tagging of Social Media (see (Bosco et al. 2016)).
The original corpus consists of 6,438 tweets of the development set (114,967 tokens) and 300 tweets of the test set (4,759 tokens), annotated at PoS level only.
The conversion and syntactic annotation process was carried out through alternating steps of automatic scripting and manual revision, and finally with some out-of-domain parsing experiments. Parsing results also underwent a manual revision by two independent annotators.


## Acknowledgments

The treebank development has also been possible thanks to the contribution of Fabio Tamburini (University of Bologna), who used AnIta for lemmatization and morphological analysis, and of Alberto Lavelli (FBK, Trento) and Alessandro Mazzei (University of Turin), who worked on the parsing experiments.

## References

* Manuela Sanguinetti, Cristina Bosco, Alessandro Mazzei, Alberto Lavelli, Fabio Tamburini. 2017. Annotating Italian Social Media Texts in Universal Dependencies. In: Proceedings of the Fourth International Conference on Dependency Linguistics (Depling 2017), Pisa (Italy), pp. 229–239

* Cristina Bosco, Fabio Tamburini, Andrea Bolioli, Alessandro Mazzei. 2016. Overview of the EVALITA 2016 Part Of Speech on TWitter for ITAlian task. In: Proceedings of Evalita 2016


# Statistics of UD Italian PoSTWITA

## POS Tags

[ADJ](it_postwita-pos-ADJ.html) – [ADP](it_postwita-pos-ADP.html) – [ADV](it_postwita-pos-ADV.html) – [AUX](it_postwita-pos-AUX.html) – [CCONJ](it_postwita-pos-CCONJ.html) – [DET](it_postwita-pos-DET.html) – [INTJ](it_postwita-pos-INTJ.html) – [NOUN](it_postwita-pos-NOUN.html) – [NUM](it_postwita-pos-NUM.html) – [PRON](it_postwita-pos-PRON.html) – [PROPN](it_postwita-pos-PROPN.html) – [PUNCT](it_postwita-pos-PUNCT.html) – [SCONJ](it_postwita-pos-SCONJ.html) – [SYM](it_postwita-pos-SYM.html) – [VERB](it_postwita-pos-VERB.html) – [X](it_postwita-pos-X.html)

## Features

[Clitic](it_postwita-feat-Clitic.html) – [Definite](it_postwita-feat-Definite.html) – [Degree](it_postwita-feat-Degree.html) – [Gender](it_postwita-feat-Gender.html) – [Mood](it_postwita-feat-Mood.html) – [Number](it_postwita-feat-Number.html) – [NumType](it_postwita-feat-NumType.html) – [Person](it_postwita-feat-Person.html) – [Poss](it_postwita-feat-Poss.html) – [PronType](it_postwita-feat-PronType.html) – [Tense](it_postwita-feat-Tense.html) – [VerbForm](it_postwita-feat-VerbForm.html)

## Relations

[acl](it_postwita-dep-acl.html) – [acl:relcl](it_postwita-dep-acl-relcl.html) – [advcl](it_postwita-dep-advcl.html) – [advmod](it_postwita-dep-advmod.html) – [amod](it_postwita-dep-amod.html) – [appos](it_postwita-dep-appos.html) – [aux](it_postwita-dep-aux.html) – [aux:pass](it_postwita-dep-aux-pass.html) – [case](it_postwita-dep-case.html) – [cc](it_postwita-dep-cc.html) – [ccomp](it_postwita-dep-ccomp.html) – [compound](it_postwita-dep-compound.html) – [conj](it_postwita-dep-conj.html) – [cop](it_postwita-dep-cop.html) – [csubj](it_postwita-dep-csubj.html) – [dep](it_postwita-dep-dep.html) – [det](it_postwita-dep-det.html) – [det:poss](it_postwita-dep-det-poss.html) – [det:predet](it_postwita-dep-det-predet.html) – [discourse](it_postwita-dep-discourse.html) – [discourse:emo](it_postwita-dep-discourse-emo.html) – [dislocated](it_postwita-dep-dislocated.html) – [expl](it_postwita-dep-expl.html) – [expl:impers](it_postwita-dep-expl-impers.html) – [expl:pass](it_postwita-dep-expl-pass.html) – [fixed](it_postwita-dep-fixed.html) – [flat](it_postwita-dep-flat.html) – [flat:foreign](it_postwita-dep-flat-foreign.html) – [flat:name](it_postwita-dep-flat-name.html) – [goeswith](it_postwita-dep-goeswith.html) – [iobj](it_postwita-dep-iobj.html) – [list](it_postwita-dep-list.html) – [mark](it_postwita-dep-mark.html) – [nmod](it_postwita-dep-nmod.html) – [nsubj](it_postwita-dep-nsubj.html) – [nsubj:pass](it_postwita-dep-nsubj-pass.html) – [nummod](it_postwita-dep-nummod.html) – [obj](it_postwita-dep-obj.html) – [obl](it_postwita-dep-obl.html) – [obl:agent](it_postwita-dep-obl-agent.html) – [orphan](it_postwita-dep-orphan.html) – [parataxis](it_postwita-dep-parataxis.html) – [parataxis:hashtag](it_postwita-dep-parataxis-hashtag.html) – [parataxis:insert](it_postwita-dep-parataxis-insert.html) – [parataxis:nsubj](it_postwita-dep-parataxis-nsubj.html) – [parataxis:obj](it_postwita-dep-parataxis-obj.html) – [punct](it_postwita-dep-punct.html) – [reparandum](it_postwita-dep-reparandum.html) – [root](it_postwita-dep-root.html) – [vocative](it_postwita-dep-vocative.html) – [vocative:mention](it_postwita-dep-vocative-mention.html) – [xcomp](it_postwita-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 3510 sentences, 61887 tokens and 64538 syntactic words.</li>
<li>This corpus contains 6693 tokens (11%) that are not followed by a space.</li>
<li>This corpus does not contain words with spaces.</li>
<li>This corpus contains 3582 types of words that contain both letters and punctuation. Examples: l', #grillo, #monti, e', #governo, c', #serviziopubblico, d', #m5s, #piazzapulita, un', @youtube, #manovra, #mario, po', #italia, #Napolitano, #berlusconi, #ministri, #politica, @beppe_grillo, #lega, #oramonti, @addthis, #bersani, #fullmonti, #pd, #sapevatelo, @fattoquotidiano, :D, #pdl, #rt, @SkyTg24, @repubblicait, B., c:, #news, #rimontiamo, #roma, #ballarò, #bossi, #movimento5stelle, #opencamera, #xf7, perche', #fatepresto, #liberalizzazioni, #nomonti, #postofisso, #vendola</li>
<li>This corpus contains 2639 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 278 types of multi-word tokens. Examples: del, della, al, alla, dei, nel, sul, all', alle, dal, dell', ai, delle, sui, nella, sulla, degli, dalla, nei, agli, col, sulle, sull', dall', dai, allo, dalle, nell', nelle, seguimi, dello, ditemi, farlo, negli, dagli, farsi, farci, farmi, permettersi, risolverla, INFORMATEVI, andarmene, andarsene, cercasi, chiedermi, coi, comunicarvi, dallo, dirgli, ditelo.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
<li>This corpus contains 64 lemmas tagged as pronouns (PRON): alcuno, altro, ce, che, chi, chiunque, ci, ciò, cosa, cui, c’, dove, egli, entrambi, esso, gli, il, io, la, le, li, lo, loro, me, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, ognuno, parecchio, poco, qual, qualche, qualcosa, qualcosaltro, qualcuno, quale, quando, quanto, quello, questo, se, si, stesso, suo, sè, tanto, te, ti, tu, tuo, tutto, una, uno, ve, vi, voi, voialtri, vostro</li>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as determiners (DET): 1, alcuno, altro, certo, che, del, della, di, diverso, il, lo, loro, mio, molto, nessuno, niente, nostro, ogni, poco, proprio, qualche, quale, qualsiasi, qualunque, quanto, quello, questo, simile, stesso, sto, suo, tanto, troppo, tuo, tutto, uno, vario, vostro, ‎lo</li>
</ul>

<ul>
<li>Out of the above, 24 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altro, che, il, lo, loro, mio, molto, nessuno, niente, nostro, poco, qualche, quale, quanto, quello, questo, stesso, suo, tanto, tuo, tutto, uno, vostro</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): andare, avere, dovere, essere, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as AUX and sometimes as VERB: andare, avere, dovere, essere, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: è, ha, sono, e', ho, può, siamo, sei, sarà, hanno</li>
    <li>VERB: fa, è, ha, dice, piace, ho, va, parla, so, fanno</li>
    <li>X: amo, preciso</li>
  </ul>
  </li>
  <li>Ger
  <ul>
    <li>AUX: essendo, avendo, dovendo</li>
    <li>VERB: facendo, aspettando, andando, cambiando, sostenendo, comprando, considerando, dando, dicendo, iniziando</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: essere, aver, voler, esser, avere, dover, poter, potere, volere</li>
    <li>VERB: fare, far, dire, vedere, avere, andare, dare, parlare, ridere, cambiare</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: stato, stata, stati, potuto, state, dovuta, dovuto</li>
    <li>VERB: fatto, detto, dato, messo, nominato, fatta, iniziato, perso, preso, stata</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Fem
      <ul>
        <li>ADJ: buona, bella, politica, italiana, nuova, prima, unica, pubblica, prime, sola</li>
        <li>AUX-Part: stata, state, dovuta</li>
        <li>DET: la, le, una, mia, un', questa, tua, sua, nostra, queste</li>
        <li>NOUN: crisi, politica, manovra, vita, tv, foto, gente, fiducia, cosa, cose</li>
        <li>PRON: la, le, lei, questa, quella, tutte, quelle, una, altre, tua</li>
        <li>VERB-Part: fatta, stata, chiamata, finita, andata, fatte, interrogata, riuscita, varata, adottata</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: nuovo, buon, primo, vero, giusto, bravo, italiano, bel, fisso, caro</li>
        <li>AUX-Part: stato, stati, potuto, dovuto</li>
        <li>DET: il, i, un, gli, lo, questo, mio, suo, suoi, uno</li>
        <li>NOUN: governo, video, anni, premier, presidente, partiti, lavoro, amore, professor, italiani</li>
        <li>PRON: lo, tutti, tutto, quello, l', li, uno, questo, gli, altro</li>
        <li>VERB-Part: fatto, detto, dato, messo, nominato, iniziato, perso, preso, morto, trovato</li>
        <li>X: Gol, amor, mal, quanto</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: grande, sociali, giovani, deboli, inutili, forti, prime, primi, migliori, importanti</li>
        <li>AUX-Fin: sono, siamo, hanno, abbiamo, siete, avete, dobbiamo, saranno, stanno, erano</li>
        <li>AUX-Part: stati, state</li>
        <li>DET: i, le, gli, suoi, miei, questi, nostri, tuoi, queste, sue</li>
        <li>NOUN: anni, partiti, cose, italiani, giorni, politici, ministri, elezioni, pensioni, ragazzi</li>
        <li>PRON: ci, tutti, c', noi, vi, li, voi, ce, altri, quelli</li>
        <li>VERB-Fin: fanno, sono, speriamo, dicono, hanno, abbiamo, fate, dite, parlano, servono</li>
        <li>VERB-Part: costretti, fatte, dati, esistenti, imposte, messi, morti, passati, rotti, soddisfatti</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: nuovo, difficile, forte, migliore, buon, primo, buona, bella, fiscale, possibile</li>
        <li>AUX-Fin: è, ha, sono, e', ho, può, sei, sarà, sia, deve</li>
        <li>AUX-Part: stato, stata, potuto, dovuta, dovuto, state</li>
        <li>DET: il, la, l', un, una, lo, questo, mio, mia, suo</li>
        <li>NOUN: governo, politica, manovra, vita, presidente, gente, lavoro, fiducia, amore, cosa</li>
        <li>PRON: mi, lo, ti, io, la, me, tutto, quello, te, tu</li>
        <li>VERB: fatto, fa, è, ha, dice, piace, ho, va, detto, parla</li>
        <li>VERB-Fin: fa, è, ha, dice, piace, ho, va, parla, so, sta</li>
        <li>VERB-Part: fatto, detto, dato, messo, nominato, fatta, iniziato, perso, preso, stata</li>
        <li>X: amo, amor, mal, me, preciso, quanto, te</li>
        <li>X-Fin: amo, preciso</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>DET: il, la, i, l', le, gli, lo, l, Lle, a</li>
        <li>PRON: le</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: un, una, un', uno, na, kol, n'</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Abs
      <ul>
        <li>ADJ: bellissimo, bellissima, bravissimo, dolcissimo, durissime, facilissimo, felicissima, grandissima, Carissimo, Cattivissimo</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX-Fin: sarebbe, dovrebbe, potrebbe, vorrei, avremmo, sarei, avrebbero, avrei, potremmo, potresti</li>
        <li>VERB-Fin: bisognerebbe, farebbe, andrebbero, direi, vorrei, avremmo, vorrebbe, avrebbe, direbbe, faresti</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: abbiamo, vogliamo, stiamo</li>
        <li>VERB: speriamo, basta, Controlla, dite, segui, vai, guarda, pensa, scusate, fate</li>
        <li>VERB-Fin: speriamo, basta, Controlla, dite, segui, vai, guarda, pensa, scusate, fate</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: è, ha, sono, e', ho, può, siamo, sei, sarà, hanno</li>
        <li>VERB-Fin: fa, è, ha, dice, piace, ho, va, parla, so, fanno</li>
        <li>X-Fin: amo, preciso</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX-Fin: sia, fosse, siano, abbia, fossi, possa, dobbiamo, abbiano, fossero, stia</li>
        <li>VERB-Fin: faccia, dica, abbia, vada, fosse, sia, dia, abbiano, arrivi, chiami</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX-Fin: sarà, saranno, saremo, sarò, verrà, avrà, potrai, Avrai, Dovrò, Sará</li>
        <li>VERB-Fin: farà, sarà, andrà, arriverà, toccherà, avrà, faremo, sara', andremo, durerà</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: era, fosse, ero, erano, avevo, fossi, poteva, aveva, volevo, voleva</li>
        <li>VERB-Fin: aveva, era, fosse, diceva, stavi, stavo, conoscevo, dimenticavo, erano, faceva</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX-Fin: fu, venne</li>
        <li>AUX-Part: stato, stata, stati, potuto, state, dovuta, dovuto</li>
        <li>VERB-Fin: evasi, appesi, dette, disse, presi, accorsi, capìì, chiese, colpì, comprai</li>
        <li>VERB-Part: fatto, detto, dato, messo, nominato, fatta, iniziato, perso, preso, stata</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: è, ha, sono, e', ho, può, siamo, sei, hanno, sia</li>
        <li>VERB: fa, è, ha, dice, piace, ho, va, parla, so, fanno</li>
        <li>VERB-Fin: fa, è, ha, dice, piace, ho, va, parla, so, fanno</li>
        <li>VERB-Part: esistenti, dominante, parlante, preoccupante, ridotta</li>
        <li>X-Fin: amo, preciso</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Art
      <ul>
        <li>DET: il, la, i, l', un, le, una, gli, lo, un'</li>
        <li>PRON: le</li>
      </ul>
    </li>
    <li>Dem
      <ul>
        <li>DET: questo, questa, quel, sta, sto, sti, questi, quei, ste, stessa</li>
        <li>PRON: quello, questo, quelli, questa, quella, ciò, quelle, questi, stesso, quel</li>
      </ul>
    </li>
    <li>Exc
      <ul>
        <li>DET: che, quanto, Quanta, quante</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: tutti, tutto, tutta, qualche, tutte, ogni, tanti, altri, altro, nessun</li>
        <li>PRON: tutti, tutto, niente, nulla, qualcosa, uno, altro, nessuno, qualcuno, altri</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>DET: che, quale, quali, quanta, quante, quanti, quanto</li>
        <li>PRON: cosa, quanto, che, chi, cos', qnti, qual', quale, QUANDO, Quando</li>
        <li>X: quanto</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>ADV: non, nn, no</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>DET: mio, mia, suo, suoi, loro, tua, sua, tuo, miei, nostra</li>
        <li>PRON: si, mi, ci, lo, ti, io, la, me, c', ne</li>
        <li>X: me, te</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>CCONJ: che</li>
        <li>PRON: che, chi, cui, quanto, ke, dove, quale, cha, chiunque, k</li>
      </ul>
    </li>
    <li>Tot
      <ul>
        <li>DET: tutti, tutto, Tutta, tutte</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: 2, 1, due, 3, 5, 4, 7, 20, 10, 6</li>
      </ul>
    </li>
    <li>Ord
      <ul>
        <li>ADJ: primo, prima, prime, primi, 1°, ennesima, ennesimo, secondo, terza, seconda</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADJ: mia, mio, suo</li>
        <li>DET: mio, mia, suo, suoi, loro, tua, sua, tuo, miei, nostra</li>
        <li>PRON: tua, mia, sua, suoi, mie, miei, mio, suo, nostri, tue</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Fin: sono, ho, siamo, devo, abbiamo, posso, sto, vorrei, dobbiamo, voglio</li>
        <li>PRON: mi, ci, io, me, c', noi, ce, ioooooo, m', m</li>
        <li>VERB-Fin: ho, so, visto, speriamo, amo, vedo, voglio, credo, spero, capito</li>
        <li>X: amo, me, preciso</li>
        <li>X-Fin: amo, preciso</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Fin: sei, siete, hai, avete, puoi, devi, vuoi, dovete, potete, potresti</li>
        <li>PRON: ti, te, tu, vi, voi, ve, v', TU', de, foi</li>
        <li>VERB: hai, segui, fai, basta, pensi, vai, fate, Controlla, dite, sai</li>
        <li>VERB-Fin: hai, segui, fai, basta, pensi, vai, fate, Controlla, dite, sai</li>
        <li>VERB-Part: rimorchiate</li>
        <li>X: te</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Fin: è, ha, e', sono, può, sarà, hanno, deve, era, sia</li>
        <li>PRON: si, lo, la, lui, l', li, le, gli, se, loro</li>
        <li>VERB-Fin: fa, è, ha, dice, piace, va, parla, fanno, sta, sa</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>

<li><a>Clitic</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: si, mi, ci, lo, ti, la, c', ne, vi, l'</li>
        <li>X: me, te</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: essere, stare, c.</li>
<li>This corpus uses 11 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, potere, dovere, volere, stare, andare, sapere, #Monti, #delusionemonti, venire.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, andare, venire, stare.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (618)</li>
      <li>VERB-Fin--NOUN-ADP(di) (2)</li>
      <li>VERB-Fin--NOUN-ADP(senza) (1)</li>
      <li>VERB-Fin--PRON (474)</li>
      <li>VERB-Ger--NOUN (12)</li>
      <li>VERB-Ger--PRON (16)</li>
      <li>VERB-Inf--NOUN (47)</li>
      <li>VERB-Inf--PRON (41)</li>
      <li>VERB-Inf--PRON-ADP(per) (1)</li>
      <li>VERB-Part--NOUN (82)</li>
      <li>VERB-Part--NOUN-ADP(oltre) (1)</li>
      <li>VERB-Part--PRON (88)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (893)</li>
      <li>VERB-Fin--NOUN-ADP(di) (2)</li>
      <li>VERB-Fin--NOUN-ADP(su) (1)</li>
      <li>VERB-Fin--NOUN-ADP(via) (1)</li>
      <li>VERB-Fin--PRON (515)</li>
      <li>VERB-Ger--NOUN (37)</li>
      <li>VERB-Ger--PRON (18)</li>
      <li>VERB-Inf--NOUN (427)</li>
      <li>VERB-Inf--PRON (186)</li>
      <li>VERB-Inf--PRON-ADP(a) (1)</li>
      <li>VERB-Part--NOUN (166)</li>
      <li>VERB-Part--PRON (92)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (324)</li>
      <li>VERB-Ger--PRON (6)</li>
      <li>VERB-Inf--PRON (54)</li>
      <li>VERB-Part--PRON (64)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 15 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: fare si, vedere si, assumere si, avere si, eliminare si, guardare si, mandare si, militarizzare si, montare si, organizzare si, pagare si, seguire si, sentire si, vistare si, votare si</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 16 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>det:poss</a>, <a>det:predet</a>, <a>discourse:emo</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>parataxis:hashtag</a>, <a>parataxis:insert</a>, <a>parataxis:nsubj</a>, <a>parataxis:obj</a>, <a>vocative:mention</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
