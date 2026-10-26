---
layout: base
title:  'UD_Swedish-SweLL'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Swedish SweLL

Language: [Swedish](/sv/index.html) (code: `sv`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.17 release.

The following people have contributed to making this treebank part of UD: Arianna Masciolini, Aleksandrs Berdicevskis, Maria Irena Szawerna, Caroline Grand-Clement.

Repository: [UD_Swedish-SweLL](https://github.com/UniversalDependencies/UD_Swedish-SweLL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsv_swell218)<br />
Download all treebanks: [UD 2.18](/#download)

License: CC BY-SA 4.0

Genre: learner-essays

Questions, comments?
General annotation questions (either Swedish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Swedish-SweLL/issues).
If you want to collaborate, please contact [arianna&nbsp;•&nbsp;masciolini&nbsp;(æt)&nbsp;gu&nbsp;•&nbsp;se].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually |
| UPOS | annotated manually, natively in UD style |
| XPOS | not available |
| Features | assigned by a program, with some manual corrections, but not a full manual verification |
| Relations | annotated manually, natively in UD style |

## Description

A treebank of learner Swedish based on SweLL, the Swedish Learner Language corpus.


UD_Swedish-SweLL is a parallel learner treebank based on [SweLL](https://spraakbanken.gu.se/en/resources/swell), the Swedish Learner Language corpus.

More specifically, the treebank currently features 643 sentences from [SweLL-gold](https://spraakbanken.gu.se/en/resources/swell-gold), a corpus of essays written by adult learners of Swedish as a second language (L2):
- a test set consisting of 509 randomly selected sentences
- 134 sentences auhtored by French speakers (added in v2.18)

All essays in SweLL-gold are manually pseudonymized, error-labelled and _normalized_, i.e. accompanied by a correction hypothesis.
Error labels are available in the MISC field.
While the current UD release only includes original learner sentences, such corrections are available in the [`not-to-release`](not-to-release/sv_swell-ud-test-trg.conllu) folder of this repository.

## Acknowledgments
The manual annotation work has been carried out by Arianna Masciolini, Aleksandrs Berdicevskis, Maria Irena Szawerna, and Caroline Grand-Clement with the support of the creators of the source corpus.
In particular, we want to thank Elena Volodina for her participation in the initial annotation experiments and Lisa Rudebeck for her clarifications about the original error annotations.

This work is funded by the Swedish national research infrastructure Språkbanken, jointly financially supported by the Swedish Research Council (2025–2028; grant 2023-00161) and the 10 participating partner institutions.
It received further support by the CA21167 COST action [UniDive -- Universality, diversity and idiosyncrasy in language technology](https://unidive.lisn.upsaclay.fr/).


# Statistics of UD Swedish SweLL

## POS Tags

[ADJ](sv_swell-pos-ADJ.html) – [ADP](sv_swell-pos-ADP.html) – [ADV](sv_swell-pos-ADV.html) – [AUX](sv_swell-pos-AUX.html) – [CCONJ](sv_swell-pos-CCONJ.html) – [DET](sv_swell-pos-DET.html) – [INTJ](sv_swell-pos-INTJ.html) – [NOUN](sv_swell-pos-NOUN.html) – [NUM](sv_swell-pos-NUM.html) – [PART](sv_swell-pos-PART.html) – [PRON](sv_swell-pos-PRON.html) – [PROPN](sv_swell-pos-PROPN.html) – [PUNCT](sv_swell-pos-PUNCT.html) – [SCONJ](sv_swell-pos-SCONJ.html) – [VERB](sv_swell-pos-VERB.html) – [X](sv_swell-pos-X.html)

## Features

[Abbr](sv_swell-feat-Abbr.html) – [Case](sv_swell-feat-Case.html) – [Definite](sv_swell-feat-Definite.html) – [Degree](sv_swell-feat-Degree.html) – [ExtPos](sv_swell-feat-ExtPos.html) – [Foreign](sv_swell-feat-Foreign.html) – [Gender](sv_swell-feat-Gender.html) – [Mood](sv_swell-feat-Mood.html) – [Number](sv_swell-feat-Number.html) – [NumType](sv_swell-feat-NumType.html) – [Polarity](sv_swell-feat-Polarity.html) – [Poss](sv_swell-feat-Poss.html) – [PronType](sv_swell-feat-PronType.html) – [Tense](sv_swell-feat-Tense.html) – [Typo](sv_swell-feat-Typo.html) – [VerbForm](sv_swell-feat-VerbForm.html) – [Voice](sv_swell-feat-Voice.html)

## Relations

[acl](sv_swell-dep-acl.html) – [acl:cleft](sv_swell-dep-acl-cleft.html) – [acl:relcl](sv_swell-dep-acl-relcl.html) – [advcl](sv_swell-dep-advcl.html) – [advcl:relcl](sv_swell-dep-advcl-relcl.html) – [advmod](sv_swell-dep-advmod.html) – [amod](sv_swell-dep-amod.html) – [appos](sv_swell-dep-appos.html) – [aux](sv_swell-dep-aux.html) – [aux:pass](sv_swell-dep-aux-pass.html) – [case](sv_swell-dep-case.html) – [cc](sv_swell-dep-cc.html) – [ccomp](sv_swell-dep-ccomp.html) – [compound](sv_swell-dep-compound.html) – [compound:prt](sv_swell-dep-compound-prt.html) – [conj](sv_swell-dep-conj.html) – [cop](sv_swell-dep-cop.html) – [csubj](sv_swell-dep-csubj.html) – [csubj:pass](sv_swell-dep-csubj-pass.html) – [dep](sv_swell-dep-dep.html) – [det](sv_swell-dep-det.html) – [discourse](sv_swell-dep-discourse.html) – [dislocated](sv_swell-dep-dislocated.html) – [expl](sv_swell-dep-expl.html) – [fixed](sv_swell-dep-fixed.html) – [flat:name](sv_swell-dep-flat-name.html) – [goeswith](sv_swell-dep-goeswith.html) – [iobj](sv_swell-dep-iobj.html) – [list](sv_swell-dep-list.html) – [mark](sv_swell-dep-mark.html) – [nmod](sv_swell-dep-nmod.html) – [nmod:poss](sv_swell-dep-nmod-poss.html) – [nsubj](sv_swell-dep-nsubj.html) – [nsubj:outer](sv_swell-dep-nsubj-outer.html) – [nsubj:pass](sv_swell-dep-nsubj-pass.html) – [nummod](sv_swell-dep-nummod.html) – [obj](sv_swell-dep-obj.html) – [obl](sv_swell-dep-obl.html) – [obl:agent](sv_swell-dep-obl-agent.html) – [orphan](sv_swell-dep-orphan.html) – [parataxis](sv_swell-dep-parataxis.html) – [punct](sv_swell-dep-punct.html) – [reparandum](sv_swell-dep-reparandum.html) – [root](sv_swell-dep-root.html) – [vocative](sv_swell-dep-vocative.html) – [xcomp](sv_swell-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 643 sentences and 10895 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 12 types of words that contain both letters and punctuation. Examples: email@dot.com, 16-åringar, 18-åringar, 20-årig, buss-stationer, dn.se, ex., levnads-, osv., språk-café, t.ex, t.ex.</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): att, ej, inte, så</li>
</ul>

<ul>
<li>This corpus contains 34 lemmas tagged as pronouns (PRON): all, annan, båda, de, den, denna, dom, du, en, fler, han, hen, hon, ingen, ingenting, jag, man, mycket, många, mången, ni, någon, någonting, nånting, sig, som, somlig, vad, var, varandra, vem, vi, vilken, viss</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as determiners (DET): all, de, den, denna, en, ingen, no, någon, varje, vilken</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as PRON and sometimes as DET: all, de, den, denna, en, ingen, någon, vilken</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): bli, böra, få, ha, komma, kunna, måste, skola, vara, vilja</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: bli, få, ha, komma, kunna, vara, vilja</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: är, kan, ska, var, har, måste, skulle, vill, får, kommer</li>
    <li>VERB: har, tycker, finns, kommer, behöver, blir, bor, ser, vill, gör</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: vara, kunna, få, bli, ha, vilja, villja</li>
    <li>VERB: ha, lära, ta, göra, köpa, få, gå, bli, klä, förstå</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: beroende, jämfört, tvungen, övertygad, anpassat, baserade, begagnade, begränsad, beröende, berömda</li>
    <li>VERB: anpassade, dömd, fylled, lurade, utsatt</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>AUX: blivit, varit</li>
    <li>VERB: blivit, utvecklats, förlorat, gjort, sökt, växt, anmält, anmälts, befriat, besökt</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<ul>
  <li><a>Gender</a></li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>ADJ: själv, stor, viktig, annan, glad, lång, ny, gammal, lycklig, rik</li>
      <li>ADJ-Part: tvungen, övertygad, begränsad, chockad, född, förbnnad, förlamad, given, intresserad, kallad</li>
      <li>DET: en, den, vilken, ingen, denna, all, någon</li>
      <li>NOUN: kläder, människor, pengar, plats, saker, tid, kärlek, lycka, familj, kläderna</li>
      <li>NUM: en</li>
      <li>PRON: jag, man, vi, mig, du, min, oss, han, hon, sin</li>
      <li>PROPN: Haga, Segerstad</li>
      <li>VERB-Part: dömd, fylled, utsatt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>NOUN: temperature</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: viktigt, svårt, nytt, annat, dyrt, allmänmänskligt, eget, gammalt, gott, jämfört</li>
      <li>ADJ-Part: jämfört, anpassat, sett</li>
      <li>DET: ett, det, detta, inget, allt, et, något</li>
      <li>NOUN: språk, barn, sätt, år, land, samhället, språket, jobb, exempel, liv</li>
      <li>NUM: ett, en</li>
      <li>PRON: det, vad, mitt, sitt, vilket, detta, allt, ditt, någonting, vårt</li>
      <li>PROPN: Linsbiblioteket, Mongoliet, Bungahjulet</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: nya, andra, olika, vissa, flera, viktiga, personliga, allmänmänskliga, själva, stora</li>
      <li>ADJ-Part: baserade, begagnade, berömda, förstörda, klädda, kopplade, nämda, okomplicerade, sökta, utbildade</li>
      <li>DET: de, alla, några, dessa, vilka, inga, dem</li>
      <li>NOUN: kläder, människor, pengar, barn, saker, kläderna, år, länder, barnen, språk</li>
      <li>PRON: vi, de, oss, sina, mina, dem, andra, varandra, alla, våra</li>
      <li>VERB-Part: anpassade, lurade</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: viktigt, själv, stor, viktig, svårt, mycket, nytt, annan, glad, lång</li>
      <li>ADJ-Part: jämfört, tvungen, övertygad, anpassat, begränsad, chockad, född, förbnnad, förlamad, given</li>
      <li>DET: en, ett, den, det, varje, detta, vilken, ingen, denna, inget</li>
      <li>NOUN: plats, språk, tid, kärlek, lycka, samhället, språket, familj, land, sätt</li>
      <li>NUM: ett, en</li>
      <li>PRON: jag, det, man, mig, du, min, vad, han, hon, sin</li>
      <li>PROPN: Linsbiblioteket, Mongoliet, Bungahjulet, Haga, Segerstad</li>
      <li>VERB-Part: dömd, fylled, utsatt</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: sig, mig, oss, dem, varandra, dig, henne, honom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: litteraturens, Forsknings, familjens, kyrkans, landets, omgivningens, systerns, Pengarnas, barnets, barns</li>
      <li>PRON: ens</li>
      <li>PROPN: Sveriges, Göteborgs, Isaks, Rikes, Levis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: olika, många, bra, andra, nya, viktigt, bättre, första, själv, stor</li>
      <li>ADJ-Part: beroende, jämfört, tvungen, övertygad, anpassat, baserade, begagnade, begränsad, beröende, berömda</li>
      <li>ADV: bra</li>
      <li>NOUN: kläder, människor, språk, barn, pengar, sätt, plats, år, saker, tid</li>
      <li>NUM: två, 18, 1, tre, ett, fyra, 2, 25, 4, 50</li>
      <li>PRON: jag, man, vi, de, du, han, hon, ni, hen, nånting</li>
      <li>PROPN: sverige, Bagdad, Finland, Sund, Haga, Segerstad, Anna, Caracas, Danmark, Karin</li>
      <li>VERB-Part: anpassade, dömd, fylled, lurade, utsatt</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: bästa, flesta, viktigaste, andra, sista, svenska, hela, egna, ena, små</li>
      <li>ADJ-Part: liknade</li>
      <li>DET: den, de, det, detta, dessa, denna, dem</li>
      <li>NOUN: samhället, språket, kläderna, världen, livet, barnen, boken, jobbet, landet, personen</li>
      <li>PRON: jag, det, vi, sig, de, mig, du, min, oss, han</li>
      <li>PROPN: Linsbiblioteket, Mongoliet, Bungahjulet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: nya, viktigt, andra, själv, stor, viktig, svårt, mycket, vissa, nytt</li>
      <li>ADJ-Part: jämfört, tvungen, övertygad, anpassat, baserade, begagnade, begränsad, berömda, chockad, född</li>
      <li>DET: en, ett, varje, några, vilken, ingen, vilka, inga, inget, allt</li>
      <li>NOUN: kläder, människor, språk, barn, pengar, sätt, plats, år, saker, tid</li>
      <li>NUM: ett, en</li>
      <li>PRON: man, vad, andra, vilket, alla, allt, vem, många, någonting, någon</li>
      <li>PROPN: Haga, Segerstad</li>
      <li>VERB-Part: dömd, fylled, utsatt</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: bättre, mer, äldre, enklare, lättare, mindre, svårare, biligare, billigare, färre</li>
      <li>ADV: mer, bättre, vidare, mindre, Tidigare, fortta, hårdare, oftare, senare, snabbare</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: olika, många, bra, nya, andra, viktigt, själv, stor, viktig, svårt</li>
      <li>ADJ-Part: beroende, jämfört, tvungen, övertygad, anpassat, baserade, begagnade, begränsad, beröende, berömda</li>
      <li>ADV: mycket, bra, lite, ofta, väldigt, helt, generellt, absolut, hårt, snart</li>
      <li>NOUN: salt, familig</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: bästa, flesta, viktigaste, sista, viktigast, bekvämaste, best, farligaste, forsta, lyckligaste</li>
      <li>ADV: mest, minst, sist, bäst, näst, främst, innerst, framst, oftas</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: inte</li>
    </ul>
  </li>
</ul>


<h3>Verbal Features</h3>



<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: Berätta, Ha, Hoppas, Kom, Krama, Sluta, Vakna, använd, bygg, försätt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: är, kan, ska, var, har, måste, skulle, vill, får, kommer</li>
      <li>VERB-Fin: har, tycker, finns, kommer, behöver, blir, bor, ser, vill, gör</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: jämfört, tvungen, övertygad, anpassat, baserade, begagnade, begränsad, berömda, chockad, född</li>
      <li>AUX-Fin: var, skulle, hade, kunde, ville, borde, fick</li>
      <li>VERB-Fin: kom, hade, pratade, brukade, började, såg, var, blev, gick, bodde</li>
      <li>VERB-Part: anpassade, dömd, fylled, lurade, utsatt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: beroende, beröende, dominerande, fungerande, grundläggande, liknande, lärande, tagande, tillhörande, ökande</li>
      <li>AUX-Fin: är, kan, ska, har, måste, vill, får, kommer, blir, bör</li>
      <li>VERB-Fin: har, tycker, finns, kommer, behöver, blir, bor, ser, vill, gör</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: är, kan, ska, var, har, måste, skulle, vill, får, kommer</li>
      <li>AUX-Inf: vara, kunna, få, bli, ha, vilja, villja</li>
      <li>AUX-Sup: blivit, varit</li>
      <li>VERB-Fin: har, tycker, kommer, behöver, blir, bor, ser, vill, gör, tror</li>
      <li>VERB-Inf: ha, lära, ta, göra, köpa, få, gå, bli, klä, förstå</li>
      <li>VERB-Sup: blivit, förlorat, gjort, sökt, växt, anmält, befriat, besökt, betalt, bott</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: används, behövs, dödas, krävs, benämns, bryts, drabbas, förstörs, förväntas, förändras</li>
      <li>VERB-Inf: göras, behandlas, bildas, delas, följas, kallas, ledas, påverkas, räddas, sammanfattas</li>
      <li>VERB-Part: anpassade, dömd, fylled, lurade, utsatt</li>
      <li>VERB-Sup: utvecklats, anmälts, intervjuats, moderniserats</li>
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
      <li>DET: en, ett, den, de, det, dem, et</li>
      <li>PRON: ett</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: detta, dessa, denna</li>
      <li>PRON: detta, dessa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: några, någon, något</li>
      <li>PRON: man, andra, ens, många, någonting, någon, något, Vissa, annat, fler</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: vilken, vilka</li>
      <li>PRON: vad, vem, vilket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ingen, inga, inget, no</li>
      <li>PRON: ingenting, inga, ingen, inget</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: jag, det, vi, sig, de, mig, du, min, oss, han</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: varandra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: som, vilket</li>
      <li>SCONJ: som</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: varje, alla, all, allt, varj</li>
      <li>PRON: alla, allt, Var, båda</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: två, 18, 1, tre, ett, fyra, 2, 25, 4, 50</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: första, andra, tredje, Tredja, firsta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: min, sin, sina, mina, mitt, sitt, deras, hennes, vår, våra</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: ex.</li>
          <li>ADV: Mvh, osv, osv., t.ex., t.ex</li>
          <li>NOUN: C, kilo, kr, 200m, ex</li>
          <li>PROPN: sfi</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADP
        <ul>
          <li>ADP: För</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADV: Till, fram, länge</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>CCONJ: vare</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADV: därför, darför</li>
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
          <li>ADJ: second, best</li>
          <li>DET: no</li>
          <li>NOUN: hand, crush, refunds, seafood, temperature</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Typo</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: jätte, biligare, Amerikansk, Svenska, Tustar, bekvämma, beröende, best, blygg, dimokratiskt</li>
          <li>ADJ-Part: beröende, förbnnad, njöd, nämda, tagande</li>
          <li>ADP: i, till, Pa, for, frön, med, undet</li>
          <li>ADV: tillbacka, Alltid, Förrut, Sit, Tillsammans, Tillsist, ackså, alderig, dagligen, ditt</li>
          <li>AUX: här, maste, ska, villja</li>
          <li>AUX-Fin: maste, ska</li>
          <li>AUX-Inf: villja</li>
          <li>CCONJ: men</li>
          <li>DET: det, et, varj</li>
          <li>INTJ: Ju</li>
          <li>NOUN: fotbolsplan, klädelsen, plats, bill, bus, familig, hand, havdet, kläder, kurs</li>
          <li>NUM: 16, 50, fimtio, tva</li>
          <li>PRON: det, du</li>
          <li>PROPN: Svarige, Africa, Christiana, Levis, Raid, Tenerife, facebook, frost, melanöster, sfi</li>
          <li>SCONJ: an, eftrsom, som</li>
          <li>VERB-Fin: Kommer, Tar, Tittar, Tycker, använd, berör, böhver, fins, forstår, funkerade</li>
          <li>VERB-Inf: Ta, aka, ampassa, breätta, cycka, cyckla, exprimera, forklara, förtstå, förtså</li>
          <li>VERB-Part: fylled</li>
          <li>VERB-Sup: förstot, komnit</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: vara.</li>
</ul>

<ul>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: kunna, skola, ha, måste, vilja, få, komma, böra, bli, vara.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: bli.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Nom (179)</li>
      <li>VERB-Fin--PRON (134)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (401)</li>
      <li>VERB-Inf--NOUN-Nom (31)</li>
      <li>VERB-Inf--PRON (16)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Nom (180)</li>
      <li>VERB-Sup--NOUN-Nom (11)</li>
      <li>VERB-Sup--PRON (4)</li>
      <li>VERB-Sup--PRON-Nom (17)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (5)</li>
      <li>VERB-Fin--NOUN-Nom (228)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(från) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(för) (1)</li>
      <li>VERB-Fin--PRON (49)</li>
      <li>VERB-Fin--PRON-Acc (44)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN-Nom (206)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(på) (1)</li>
      <li>VERB-Inf--PRON (33)</li>
      <li>VERB-Inf--PRON-Acc (37)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
      <li>VERB-Sup--NOUN-Nom (16)</li>
      <li>VERB-Sup--PRON (4)</li>
      <li>VERB-Sup--PRON-Acc (4)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (6)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (23)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:cleft</a>, <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
