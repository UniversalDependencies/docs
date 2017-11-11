---
layout: base
title:  'UD_Italian'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Italian

Language: [Italian](../it/overview/it-hub.html) (code: `it`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Cristina Bosco, Alessandro Lenci, Simonetta Montemagni, Maria Simi.

Repository: [UD_Italian](https://github.com/UniversalDependencies/UD_Italian)

License: CC BY-NC-SA 3.0

Genre: legal, news, wiki

Questions, comments?
General annotation questions (either Italian-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Italian/issues).
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

The Italian corpus annotated according to the UD annotation scheme was obtained by conversion from ISDT (Italian Stanford Dependency Treebank), released for the dependency parsing shared task of Evalita-2014 (Bosco et al. 2014).



ISDT is a resource annotated according to the Stanford dependencies scheme (de Marneffe et al. 2008, 2013a, 2013b, 2014), obtained through a semi-automatic conversion process starting from MIDT (the Merged Italian Dependency Treebank). MIDT, in turn, is the result of a previous effort in the direction of improving interoperability of data sets available for Italian by harmonizing and merging two existing dependency–based resources, differing both in corpus composition and adopted annotation schemes, namely:

* TUT, the Turin University Treebank (Bosco et al. 2000);
* ISST-TANL, first released as ISST-CoNLL for the CoNLL-2007 shared task (Montemagni, Simi 2007), which was developed as a joint effort by the Istituto di Linguistica Computazionale (ILC–CNR) and the University of Pisa and originating from the Italian Syntactic–Semantic Treebank (ISST, Montemagni et al. 2003).

The details of the harmonization and conversion process leading to MIDT are discussed in (Bosco, Montemagni, Simi, 2012). The Stanford annotation scheme, obtained from an enriched version of MIDT, was adapted to the specificity of the Italian language. We refer to (Bosco, Montemagni, Simi, 2013 and 2014) for a discussion.

## Acknowledgments

We wish to thank all of the contributors to the original annotation efforts, as well as the supporting organizations, i.e. the Institute for Computational Linguistics "A. Zampolli", the University of Pisa, and the University of Torino. Thanks go to Chiara Alzetta and Giulia Venturi for the good work in defining the error detection methodology and the manual revision / correction of automatically identified errors in Version 2.1.



# Statistics of UD Italian

## POS Tags

[ADJ](it-pos-ADJ.html) – [ADP](it-pos-ADP.html) – [ADV](it-pos-ADV.html) – [AUX](it-pos-AUX.html) – [CCONJ](it-pos-CCONJ.html) – [DET](it-pos-DET.html) – [INTJ](it-pos-INTJ.html) – [NOUN](it-pos-NOUN.html) – [NUM](it-pos-NUM.html) – [PART](it-pos-PART.html) – [PRON](it-pos-PRON.html) – [PROPN](it-pos-PROPN.html) – [PUNCT](it-pos-PUNCT.html) – [SCONJ](it-pos-SCONJ.html) – [SYM](it-pos-SYM.html) – [VERB](it-pos-VERB.html) – [X](it-pos-X.html)

## Features

[Clitic](it-feat-Clitic.html) – [Definite](it-feat-Definite.html) – [Degree](it-feat-Degree.html) – [Foreign](it-feat-Foreign.html) – [Gender](it-feat-Gender.html) – [Mood](it-feat-Mood.html) – [Number](it-feat-Number.html) – [NumType](it-feat-NumType.html) – [Person](it-feat-Person.html) – [Polarity](it-feat-Polarity.html) – [Poss](it-feat-Poss.html) – [PronType](it-feat-PronType.html) – [Tense](it-feat-Tense.html) – [VerbForm](it-feat-VerbForm.html)

## Relations

[acl](it-dep-acl.html) – [acl:relcl](it-dep-acl-relcl.html) – [advcl](it-dep-advcl.html) – [advmod](it-dep-advmod.html) – [amod](it-dep-amod.html) – [appos](it-dep-appos.html) – [aux](it-dep-aux.html) – [aux:pass](it-dep-aux-pass.html) – [case](it-dep-case.html) – [cc](it-dep-cc.html) – [ccomp](it-dep-ccomp.html) – [compound](it-dep-compound.html) – [conj](it-dep-conj.html) – [cop](it-dep-cop.html) – [csubj](it-dep-csubj.html) – [csubj:pass](it-dep-csubj-pass.html) – [dep](it-dep-dep.html) – [det](it-dep-det.html) – [det:poss](it-dep-det-poss.html) – [det:predet](it-dep-det-predet.html) – [discourse](it-dep-discourse.html) – [dislocated](it-dep-dislocated.html) – [expl](it-dep-expl.html) – [expl:impers](it-dep-expl-impers.html) – [expl:pass](it-dep-expl-pass.html) – [fixed](it-dep-fixed.html) – [flat](it-dep-flat.html) – [flat:foreign](it-dep-flat-foreign.html) – [flat:name](it-dep-flat-name.html) – [goeswith](it-dep-goeswith.html) – [iobj](it-dep-iobj.html) – [mark](it-dep-mark.html) – [nmod](it-dep-nmod.html) – [nsubj](it-dep-nsubj.html) – [nsubj:pass](it-dep-nsubj-pass.html) – [nummod](it-dep-nummod.html) – [obj](it-dep-obj.html) – [obl](it-dep-obl.html) – [obl:agent](it-dep-obl-agent.html) – [orphan](it-dep-orphan.html) – [parataxis](it-dep-parataxis.html) – [punct](it-dep-punct.html) – [root](it-dep-root.html) – [vocative](it-dep-vocative.html) – [xcomp](it-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 13884 sentences, 273444 tokens and 293028 syntactic words.</li>
<li>This corpus contains 39252 tokens (14%) that are not followed by a space.</li>
<li>This corpus does not contain words with spaces.</li>
<li>This corpus contains 206 types of words that contain both letters and punctuation. Examples: l', d', un', l’, art., c', quest', cos', po', v., n., e', s', dov', 's, d’, l., quest’, c’, un’, anch', att., quell', check-up, S., Sant', e-mail, tutt', ss., cinquant', Cost., F., artt., ecc., n', trent', com', dell', distr., s.p.a., sett., vent', Civ., Cod., H., Proc., T., W., al., cm.</li>
<li>This corpus contains 19558 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 809 types of multi-word tokens. Examples: del, della, dei, al, nel, dell', delle, alla, dal, all', nella, degli, dalla, ai, alle, nei, sul, nell', nelle, sulla, dall', dalle, dello, dai, negli, sulle, sull', agli, sui, dell’, dagli, allo, nello, col, sugli, dallo, all’, sullo, farsi, farlo, esserci, essersi, farne, nell’, dall’, coi, muoversi, osservarsi, renderlo, servirsi.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus contains 1 word types tagged as particles (PART): 's</li>
</ul>

<ul>
<li>This corpus contains 102 lemmas tagged as pronouns (PRON): I, Quanta, alcunché, alcuno, alii, altrettanto, altri, altro, ambedue, ce, che, chi, chiunque, ci, ciascuna, ciascuno, ciò, codesto, colei, coloro, colui, come, cos', cosa, costoro, costui, cui, diverso, dove, egli, ella, entrambi, essa, esse, essi, esso, gli, granché, il, io, la, le, lei, li, lo, loro, lui, me, medesimo, meno, mezzo, mi, mio, molto, ne, nessuno, niente, noi, nostro, nulla, numeroso, ognuna, ognuno, più, poco, proprio, qual, qualcheduno, qualcosa, qualcun, qualcuno, quale, quali, qualunque, quando, quanto, quegli, quello, questa, questi, questo, s', se, si, stesso, suo, sè, sé, tale, taluno, tanto, te, terzo, ti, tu, tuo, tutte, tutti, tutto, uno, vi, voi</li>
</ul>

<ul>
<li>This corpus contains 79 lemmas tagged as determiners (DET): Every, Les, Ma, Una, Une, a, alcun, alcuno, altrettanto, altro, altrui, ambedue, certo, che, ciascun, ciascuno, cui, da, de, dei, del, della, determinato, di, diverso, entrambi, equale, i, il, l', la, le, lo, loro, mio, moltissimi, molto, my, nessun, nessuna, nessuno, niente, nostro, numeroso, ogni, parecchio, più, poco, proprio, qualche, qualcuno, quale, quali, qualsiasi, qualsivoglia, qualunque, quanta, quanto, quelle, quello, quest', questo, suo, svariato, tale, taluna, taluno, tanto, the, troppo, tuo, tutta, tutti, tutto, un, uno, vario, veruno, vostro</li>
</ul>

<ul>
<li>Out of the above, 38 lemmas occurred sometimes as PRON and sometimes as DET: alcuno, altrettanto, altro, ambedue, che, ciascuno, cui, diverso, entrambi, il, la, le, lo, loro, mio, molto, nessuno, niente, nostro, numeroso, più, poco, proprio, qualcuno, quale, quali, qualunque, quanto, quello, questo, suo, tale, taluno, tanto, tuo, tutti, tutto, uno</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): andare, avere, dovere, essere, fare, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as AUX and sometimes as VERB: andare, avere, dovere, essere, fare, potere, sapere, stare, venire, volere</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: è, sono, ha, può, hanno, era, deve, possono, sia, fu</li>
    <li>VERB: ha, è, hanno, trova, sono, fa, chiama, dice, morì, fanno</li>
  </ul>
  </li>
  <li>Ger
  <ul>
    <li>AUX: essendo, avendo, dovendo, potendo, volendo</li>
    <li>VERB: considerando, facendo, portando, cercando, lasciando, seguendo, tenendo, dando, parlando, passando</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: essere, aver, poter, esser, dover, avere, voler, venire, far</li>
    <li>VERB: fare, far, vedere, avere, dire, dare, chiedere, andare, pagare, usare</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: stato, stata, stati, state, potuto, dovuto, voluto, andato, potuta, andata</li>
    <li>NOUN: previsto</li>
    <li>VERB: fatto, visto, vinto, avuto, tenuto, detto, nato, dato, ricevuto, messo</li>
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
        <li>ADJ: prima, italiana, altra, stessa, altre, nuova, nuove, economica, seconda, alta</li>
        <li>AUX-Part: stata, state, potuta, andata, fatta</li>
        <li>DET: la, le, una, sua, un', questa, sue, queste, tutte, tutta</li>
        <li>NOUN: città, parte, legge, società, persone, proprietà, attività, vita, servitù, commissione</li>
        <li>PRON: la, le, quella, quelle, una, questa, essa, esse, altra, lei</li>
        <li>PROPN: hye</li>
        <li>VERB-Part: fatta, stabilite, dovuta, fatte, vista, considerata, costituita, fondata, nata, chiamata</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: primo, nuovo, altri, altro, stesso, vero, europeo, secondo, terzo, pubblico</li>
        <li>ADP: del, du</li>
        <li>ADV: pochissimo</li>
        <li>AUX-Part: stato, stati, potuto, dovuto, voluto, andato, fatto, potuti</li>
        <li>DET: il, i, un, gli, lo, suo, questo, tutti, suoi, alcuni</li>
        <li>NOUN: anni, presidente, fondo, diritto, anno, stato, film, proprietario, mondo, caso</li>
        <li>NOUN-Part: previsto</li>
        <li>PRON: lo, quello, uno, li, questo, gli, lui, tutto, ciò, tutti</li>
        <li>VERB-Fin: chiamati</li>
        <li>VERB-Part: fatto, visto, vinto, avuto, tenuto, detto, nato, dato, ricevuto, messo</li>
        <li>X: mixer</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: altri, grandi, seguenti, nazionali, speciali, altre, locali, importanti, internazionali, principali</li>
        <li>AUX-Fin: sono, hanno, possono, erano, siano, devono, abbiamo, possiamo, siamo, vengono</li>
        <li>AUX-Part: stati, state, potuti</li>
        <li>DET: i, le, gli, tutti, suoi, alcuni, quanti, sue, questi, queste</li>
        <li>NOUN: anni, persone, opere, paesi, diritti, giorni, membri, cittadini, donne, stati</li>
        <li>PRON: ci, li, noi, tutti, altri, loro, quelli, quelle, quali, vi</li>
        <li>PROPN: hye</li>
        <li>VERB-Fin: hanno, sono, fanno, trovano, applicano, partecipano, abbiamo, esistono, vivono, vanno</li>
        <li>VERB-Part: stabilite, fatti, stabiliti, fatte, derivanti, esistenti, chiamati, appartenenti, compresi, costituite</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: grande, presente, primo, comune, prima, internazionale, nazionale, possibile, mondiale, sociale</li>
        <li>ADP: del, du</li>
        <li>ADV: pochissimo</li>
        <li>AUX-Fin: è, ha, può, era, deve, sia, fu, viene, aveva, venne</li>
        <li>AUX-Part: stato, stata, potuto, dovuto, voluto, andato, potuta, andata, fatta, fatto</li>
        <li>DET: il, la, l', un, una, lo, quale, sua, suo, un'</li>
        <li>NOUN: presidente, parte, fondo, diritto, anno, legge, stato, proprietario, mondo, caso</li>
        <li>NOUN-Part: previsto</li>
        <li>PRON: lo, qual, quanto, mi, quale, quello, uno, la, questo, cosa</li>
        <li>VERB-Fin: ha, è, trova, fa, chiama, dice, morì, significa, vede, sembra</li>
        <li>VERB-Part: fatto, visto, vinto, avuto, tenuto, detto, nato, dato, ricevuto, messo</li>
        <li>X: cultural, state</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>DET: il, la, i, l', le, gli, lo, l’, the, les</li>
        <li>PRON: le</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: un, una, un', uno, un’, A, dei, Une, delle, l'</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Abs
      <ul>
        <li>ADJ: gravissimo, altissimo, altissima, bellissimo, chiarissimo, durissima, giovanissimi, grandissima, gravissimi, lunghissimo</li>
        <li>ADV: benissimo, moltissimo, pochissimo, fortissimo, lontanissimo, malissimo</li>
      </ul>
    </li>
    <li>Cmp
      <ul>
        <li>ADJ: maggiore, maggior, migliore, inferiore, superiore, minore, maggiori, migliori, superiori, miglior</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>INTJ: no</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>INTJ: sì</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Cnd
      <ul>
        <li>AUX-Fin: sarebbe, potrebbe, avrebbe, dovrebbe, dovrebbero, potrebbero, sarebbero, vorrei, avrebbero, dovremmo</li>
        <li>VERB-Fin: bisognerebbe, comporterebbe, consentirebbe, direi, sarebbe, vorrei, avrebbe, sarebbero, farebbe, gradirei</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: devi, dovete, sii</li>
        <li>VERB-Fin: v., Nomina, Dimmi, Elenca, vedi, Dammi, clicca, ricorda, usa, vai</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: è, sono, ha, può, hanno, era, deve, possono, fu, erano</li>
        <li>VERB-Fin: ha, è, hanno, trova, sono, fa, chiama, dice, morì, fanno</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX-Fin: sia, siano, possa, abbia, fosse, venga, avesse, debba, possano, fossero</li>
        <li>VERB-Fin: abbia, sia, faccia, abbiano, veda, siano, facciano, tratti, disponga, permetta</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Fut
      <ul>
        <li>AUX-Fin: sarà, saranno, potrà, dovrà, potranno, dovranno, verrà, sarò, avrà, verranno</li>
        <li>VERB-Fin: sarà, vedrà, avrà, farà, vedremo, andrà, diventerà, saranno, avranno, continuerà</li>
      </ul>
    </li>
    <li>Imp
      <ul>
        <li>AUX-Fin: era, erano, aveva, avevano, fosse, avesse, poteva, fossero, potevano, avevo</li>
        <li>VERB-Fin: era, aveva, chiamava, erano, faceva, avevano, facevano, diceva, lavorava, prevedeva</li>
      </ul>
    </li>
    <li>Past
      <ul>
        <li>AUX-Fin: fu, venne, furono, vennero, potè, Fui, dovette, poterono</li>
        <li>AUX-Part: stato, stata, stati, state, potuto, dovuto, voluto, andato, potuta, andata</li>
        <li>NOUN-Part: previsto</li>
        <li>VERB-Fin: morì, scrisse, nacque, ebbe, fu, vide, avvenne, divenne, portò, fece</li>
        <li>VERB-Part: fatto, visto, vinto, avuto, tenuto, detto, nato, dato, ricevuto, messo</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: è, sono, ha, può, hanno, deve, possono, sia, viene, ho</li>
        <li>VERB-Fin: ha, è, hanno, trova, sono, fa, chiama, dice, fanno, significa</li>
        <li>VERB-Part: servente, concedente, derivanti, esistenti, appartenenti, concernente, dominante, emergenti, aventi, provenienti</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Art
      <ul>
        <li>DET: il, la, i, l', le, un, gli, una, lo, un'</li>
        <li>PRON: le</li>
      </ul>
    </li>
    <li>Dem
      <ul>
        <li>DET: questo, questa, questi, tale, queste, quest', quel, tali, quella, tal</li>
        <li>PRON: quello, questo, ciò, quella, quelli, quelle, questa, questi, coloro, queste</li>
      </ul>
    </li>
    <li>Exc
      <ul>
        <li>DET: che</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: ogni, alcuni, qualche, molti, più, qualsiasi, molte, diversi, alcune, alcuna</li>
        <li>PRON: uno, tutto, tutti, altri, una, altro, nessuno, più, molti, nulla</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>DET: quale, che, quanti, quante, quali, quanta, quanto, Qual, quel</li>
        <li>PRON: chi, qual, cosa, quanto, cos', che, quale, quanti, Quali, Quante</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>ADV: non, neppure, nemmeno, no, neanche, mica, nè, perniente</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>ADJ: propria</li>
        <li>DET: sua, suo, loro, suoi, sue, proprio, nostra, mio, nostro, propria</li>
        <li>PRON: si, ci, lo, ne, mi, c', la, li, gli, lui</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>DET: cui, quali</li>
        <li>PRON: che, cui, chi, quale, quanto, quali, dove, chiunque, quando, come</li>
      </ul>
    </li>
    <li>Tot
      <ul>
        <li>DET: tutti, tutte, tutto, tutta, entrambi, entrambe, ambedue, tutt'</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: due, 1, 2, tre, 3, cinque, 4, mila, quattro, 5</li>
        <li>PROPN: 9/11</li>
      </ul>
    </li>
    <li>Ord
      <ul>
        <li>ADJ: primo, prima, secondo, terzo, seconda, primi, ultimi, prime, ultimo, ii</li>
      </ul>
    </li>
    <li>Range
      <ul>
        <li>NUM: 3/4, 150/300, 2/3</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADJ: propria</li>
        <li>DET: sua, suo, loro, suoi, sue, proprio, nostra, mio, nostro, propria</li>
        <li>PRON: sua, suo, suoi, proprio, tuo, mia, miei, mio, nostro, tua</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>AUX-Fin: ho, abbiamo, possiamo, siamo, sono, vorrei, dobbiamo, devo, stiamo, posso</li>
        <li>PRON: ci, mi, noi, io, me, I, ce, m', ve</li>
        <li>VERB-Fin: credo, abbiamo, vediamo, so, ho, faccio, mettiamo, facciamo, metto, sappiamo</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>AUX-Fin: puoi, devi, sei, hai, avete, siete, vuoi, volete, Dovevi, abbiate</li>
        <li>PRON: ti, vi, te, tu, voi</li>
        <li>VERB-Fin: v., Nomina, Dimmi, vedi, fai, Elenca, hai, ricevi, Dammi, crei</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>AUX-Fin: è, sono, ha, può, hanno, era, deve, possono, sia, fu</li>
        <li>PRON: si, lo, la, li, gli, lui, le, l', loro, se</li>
        <li>VERB-Fin: ha, è, hanno, trova, sono, fa, chiama, dice, morì, fanno</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>

<li><a>Clitic</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: si, ci, lo, ne, mi, c', la, li, gli, le</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>NOUN: Award</li>
        <li>PROPN: Les, Nobody, barbares, knows</li>
        <li>X: Illusions, de, perdues, ad, home, la, Come, Damage, Ecce, bombo</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: essere.</li>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: avere, essere, potere, dovere, volere, stare, venire, andare, fare, sapere.</li>
<li>This corpus uses 6 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: essere, venire, stare, andare, avere, potere.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (3680)</li>
      <li>VERB-Fin--PRON (1842)</li>
      <li>VERB-Ger--NOUN (46)</li>
      <li>VERB-Ger--PRON (21)</li>
      <li>VERB-Inf--NOUN (590)</li>
      <li>VERB-Inf--PRON (188)</li>
      <li>VERB-Part--NOUN (1232)</li>
      <li>VERB-Part--NOUN-ADP(di) (2)</li>
      <li>VERB-Part--PRON (549)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (3445)</li>
      <li>VERB-Fin--PRON (765)</li>
      <li>VERB-Ger--NOUN (360)</li>
      <li>VERB-Ger--PRON (53)</li>
      <li>VERB-Inf--NOUN (2806)</li>
      <li>VERB-Inf--NOUN-ADP(in) (1)</li>
      <li>VERB-Inf--PRON (448)</li>
      <li>VERB-Part--NOUN (1285)</li>
      <li>VERB-Part--PRON (308)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (307)</li>
      <li>VERB-Ger--PRON (26)</li>
      <li>VERB-Inf--PRON (171)</li>
      <li>VERB-Part--PRON (157)</li>
    </ul>
  </li>
</ul>


<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 150 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: applicare si, osservare si, vedere si, fare si, presumere si, registrare si, usare si, aprire si, considerare si, intendere si, misurare si, produrre si, rendere si, trasferire si, effettuare si, esercitare si, pagare si, parlare si, prescrivere si, ripartire si, tradurre si, conservare si, eseguire si, indicare si, istituire si, ottenere si, ricavare si, valutare si, acquistare si, cambiare si, compiere si, comprendere si, computare si, concedere si, costruire si, determinare si, formare si, giocare si, incontrare si, incorporare si, mettere si, operare si, paragonare si, prevedere si, raggiungere si, richiedere si, ricordare si, ripetere si, ritenere si, sostenere si</li>
</ul>


<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>det:predet</a>, <a>expl:impers</a>, <a>expl:pass</a>, <a>flat:foreign</a>, <a>flat:name</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
