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

The following people have contributed to making this treebank part of UD: Arianna Masciolini, Aleksandrs Berdicevskis, Maria Irena Szawerna.

Repository: [UD_Swedish-SweLL](https://github.com/UniversalDependencies/UD_Swedish-SweLL)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsv_swell217)<br />
Download all treebanks: [UD 2.17](/#download)

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

As of it first release, UD_Swedish-SweLL consists of a test set comprising 510 randomly selected sentences from [SweLL-gold](https://spraakbanken.gu.se/en/resources/swell-gold), a corpus of essays written by adult learners of Swedish as a second language (L2).
All essays in SweLL-gold are manually pseudonymized, error-labelled and _normalized_, i.e. accompanied by a correction hypothesis.
While the official UD 2.17 release only includes original learner sentences, such corrections are available in the [`not-to-release`](not-to-release/sv_swell-ud-test-trg.conllu) folder of this repository.

## Acknowledgments
The manual annotation work has been carried out by Arianna Masciolini, Aleksandrs Berdicevskis and Maria Irena Szawerna, who thank Elena Volodina for her work on the source corpus, as well as for her participation in the initial UD annotation experiments.

This work is funded by the Swedish national research infrastructure Språkbanken, jointly financially supported by the Swedish Research Council (2025–2028; grant 2023-00161) and the 10 participating partner institutions.
It received further support by the CA21167 COST action UniDive, funded by COST (European Cooperation in Science and Technology).


# Statistics of UD Swedish SweLL

## POS Tags

[ADJ](sv_swell-pos-ADJ.html) – [ADP](sv_swell-pos-ADP.html) – [ADV](sv_swell-pos-ADV.html) – [AUX](sv_swell-pos-AUX.html) – [CCONJ](sv_swell-pos-CCONJ.html) – [DET](sv_swell-pos-DET.html) – [INTJ](sv_swell-pos-INTJ.html) – [NOUN](sv_swell-pos-NOUN.html) – [NUM](sv_swell-pos-NUM.html) – [PART](sv_swell-pos-PART.html) – [PRON](sv_swell-pos-PRON.html) – [PROPN](sv_swell-pos-PROPN.html) – [PUNCT](sv_swell-pos-PUNCT.html) – [SCONJ](sv_swell-pos-SCONJ.html) – [VERB](sv_swell-pos-VERB.html) – [X](sv_swell-pos-X.html)

## Features

[Abbr](sv_swell-feat-Abbr.html) – [Case](sv_swell-feat-Case.html) – [Definite](sv_swell-feat-Definite.html) – [Degree](sv_swell-feat-Degree.html) – [ExtPos](sv_swell-feat-ExtPos.html) – [Foreign](sv_swell-feat-Foreign.html) – [Gender](sv_swell-feat-Gender.html) – [Mood](sv_swell-feat-Mood.html) – [Number](sv_swell-feat-Number.html) – [NumType](sv_swell-feat-NumType.html) – [Poss](sv_swell-feat-Poss.html) – [PronType](sv_swell-feat-PronType.html) – [Tense](sv_swell-feat-Tense.html) – [Typo](sv_swell-feat-Typo.html) – [VerbForm](sv_swell-feat-VerbForm.html) – [Voice](sv_swell-feat-Voice.html)

## Relations

[acl](sv_swell-dep-acl.html) – [acl:cleft](sv_swell-dep-acl-cleft.html) – [acl:relcl](sv_swell-dep-acl-relcl.html) – [advcl](sv_swell-dep-advcl.html) – [advcl:relcl](sv_swell-dep-advcl-relcl.html) – [advmod](sv_swell-dep-advmod.html) – [amod](sv_swell-dep-amod.html) – [appos](sv_swell-dep-appos.html) – [aux](sv_swell-dep-aux.html) – [aux:pass](sv_swell-dep-aux-pass.html) – [case](sv_swell-dep-case.html) – [cc](sv_swell-dep-cc.html) – [ccomp](sv_swell-dep-ccomp.html) – [compound](sv_swell-dep-compound.html) – [compound:prt](sv_swell-dep-compound-prt.html) – [conj](sv_swell-dep-conj.html) – [cop](sv_swell-dep-cop.html) – [csubj](sv_swell-dep-csubj.html) – [csubj:pass](sv_swell-dep-csubj-pass.html) – [dep](sv_swell-dep-dep.html) – [det](sv_swell-dep-det.html) – [discourse](sv_swell-dep-discourse.html) – [dislocated](sv_swell-dep-dislocated.html) – [expl](sv_swell-dep-expl.html) – [fixed](sv_swell-dep-fixed.html) – [flat:name](sv_swell-dep-flat-name.html) – [goeswith](sv_swell-dep-goeswith.html) – [iobj](sv_swell-dep-iobj.html) – [list](sv_swell-dep-list.html) – [mark](sv_swell-dep-mark.html) – [nmod](sv_swell-dep-nmod.html) – [nmod:poss](sv_swell-dep-nmod-poss.html) – [nsubj](sv_swell-dep-nsubj.html) – [nsubj:outer](sv_swell-dep-nsubj-outer.html) – [nsubj:pass](sv_swell-dep-nsubj-pass.html) – [nummod](sv_swell-dep-nummod.html) – [obj](sv_swell-dep-obj.html) – [obl](sv_swell-dep-obl.html) – [obl:agent](sv_swell-dep-obl-agent.html) – [orphan](sv_swell-dep-orphan.html) – [parataxis](sv_swell-dep-parataxis.html) – [punct](sv_swell-dep-punct.html) – [reparandum](sv_swell-dep-reparandum.html) – [root](sv_swell-dep-root.html) – [vocative](sv_swell-dep-vocative.html) – [xcomp](sv_swell-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 510 sentences and 8644 tokens.</li>
</ul>

<ul>
<li>All tokens in this corpus are followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 10 types of words that contain both letters and punctuation. Examples: email@dot.com, 16-åringar, 18-åringar, buss-stationer, dn.se, levnads-, osv., språk-café, t.ex, t.ex.</li>
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
<li>This corpus contains 33 lemmas tagged as pronouns (PRON): all, annan, båda, de, den, denna, dom, du, en, fler, han, hen, hon, ingen, ingenting, jag, man, mycket, många, mången, ni, någon, någonting, nånting, sig, som, somlig, vad, varandra, vem, vi, vilken, viss</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as determiners (DET): all, de, den, denna, en, ingen, no, någon, varj, varje, vilken</li>
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
    <li>AUX: är, kan, ska, har, var, skulle, måste, vill, får, kommer</li>
    <li>VERB: har, tycker, finns, kommer, blir, bor, är, handlar, tror, känner</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: vara, kunna, få, bli, ha, vilja, villja</li>
    <li>VERB: lära, ha, göra, köpa, ta, gå, få, bli, se, förstå</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: beroende, jämfört, tvungen, övertygad, baserade, begagnade, begränsad, chockad, dominerande, fungerande</li>
    <li>VERB: anpassade, dömd, fylled, lurade, utsatt</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>AUX: blivit, varit</li>
    <li>VERB: blivit, utvecklats, förlorat, växt, anmält, anmälts, befriat, betalt, bott, flyttat</li>
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
      <li>ADJ: stor, själv, viktig, annan, lång, glad, ny, ensam, fin, gammal</li>
      <li>ADJ-Part: tvungen, övertygad, begränsad, chockad, född, förbnnad, förlamad, given, kallad, njöd</li>
      <li>DET: en, den, ingen, vilken, denna, all</li>
      <li>NOUN: människor, kläder, pengar, plats, familj, kärlek, saker, tid, världen, boken</li>
      <li>NUM: en</li>
      <li>PRON: jag, man, vi, mig, du, min, oss, han, sin, hon</li>
      <li>PROPN: Haga, Segerstad</li>
      <li>VERB-Part: dömd, fylled, utsatt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: viktigt, svårt, nytt, dyrt, allmänmänskligt, eget, jämfört, jätte, möjligt, svenskt</li>
      <li>ADJ-Part: jämfört, sett</li>
      <li>DET: ett, det, detta, inget, allt, et, något</li>
      <li>NOUN: språk, barn, sätt, år, språket, land, samhället, liv, jobb, exempel</li>
      <li>NUM: ett, en</li>
      <li>PRON: det, vad, mitt, sitt, vilket, detta, allt, ditt, någonting, annat</li>
      <li>PROPN: Mongoliet, Linsbiblioteket</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: nya, andra, olika, flera, vissa, viktiga, allmänmänskliga, själva, stora, centrala</li>
      <li>ADJ-Part: baserade, begagnade, förstörda, klädda, kopplade, okomplicerade, sökta, utbildade</li>
      <li>DET: de, alla, några, dessa, vilka, inga, dem</li>
      <li>NOUN: människor, kläder, pengar, barn, saker, år, språk, föräldrar, länder, personer</li>
      <li>PRON: vi, de, oss, sina, mina, andra, dem, alla, varandra, våra</li>
      <li>VERB-Part: anpassade, lurade</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: viktigt, svårt, stor, mycket, själv, viktig, annan, lång, glad, ny</li>
      <li>ADJ-Part: jämfört, tvungen, övertygad, begränsad, chockad, född, förbnnad, förlamad, given, kallad</li>
      <li>DET: en, den, ett, det, varje, detta, ingen, vilken, denna, inget</li>
      <li>NOUN: plats, språk, språket, familj, kärlek, samhället, land, sätt, liv, tid</li>
      <li>NUM: ett, en</li>
      <li>PRON: jag, det, man, mig, du, min, vad, han, sin, hon</li>
      <li>PROPN: Mongoliet, Haga, Linsbiblioteket, Segerstad</li>
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
      <li>PRON: sig, mig, oss, dem, varandra, henne, dig, honom</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>NOUN: litteraturens, Forsknings, familjens, kyrkans, landets, systerns, Pengarnas, barnets, barns, brors</li>
      <li>PRON: ens</li>
      <li>PROPN: Sveriges, Göteborgs, Isaks, Rikes, Levis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: många, olika, bra, nya, andra, viktigt, bästa, bättre, svårt, stor</li>
      <li>ADJ-Part: beroende, jämfört, tvungen, övertygad, baserade, begagnade, begränsad, chockad, dominerande, fungerande</li>
      <li>ADV: bra</li>
      <li>NOUN: människor, kläder, språk, barn, pengar, plats, sätt, år, språket, familj</li>
      <li>NUM: två, 1, 18, tre, ett, 2, 4, fyra, 1-12, 10</li>
      <li>PRON: jag, man, vi, de, du, han, hon, ni, hen, nånting</li>
      <li>PROPN: Sverige, Bagdad, Finland, Sund, Haga, Segerstad, Caracas, Paris, Peru, Sara</li>
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
      <li>ADJ: bästa, flesta, viktigaste, sista, svenska, hela, andra, ena, små, egna</li>
      <li>ADJ-Part: liknade</li>
      <li>DET: den, de, det, detta, denna, dessa, dem</li>
      <li>NOUN: språket, samhället, världen, boken, livet, landet, personen, sidan, tiden, barnen</li>
      <li>PRON: jag, det, vi, de, sig, mig, du, min, oss, han</li>
      <li>PROPN: Mongoliet, Linsbiblioteket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: nya, andra, viktigt, svårt, stor, mycket, själv, viktig, annan, lång</li>
      <li>ADJ-Part: jämfört, tvungen, övertygad, baserade, begagnade, begränsad, chockad, född, förbnnad, förlamad</li>
      <li>DET: en, ett, varje, ingen, några, vilken, vilka, inga, inget, allt</li>
      <li>NOUN: människor, kläder, språk, barn, pengar, plats, sätt, år, familj, kärlek</li>
      <li>NUM: ett, en</li>
      <li>PRON: man, vad, andra, alla, vilket, allt, vem, många, någon, någonting</li>
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
      <li>ADJ: bättre, mer, äldre, enklare, lättare, mindre, svårare, biligare, färre, viktigare</li>
      <li>ADV: mer, bättre, vidare, mindre, Tidigare, fortta, hårdare, oftare, senare, snabbare</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: många, olika, bra, nya, andra, viktigt, svårt, stor, mycket, själv</li>
      <li>ADJ-Part: beroende, jämfört, tvungen, övertygad, baserade, begagnade, begränsad, chockad, dominerande, fungerande</li>
      <li>ADV: mycket, bra, lite, väldigt, Självklart, helt, hårt, direkt, indirekt, jättemycket</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: bästa, flesta, viktigaste, sista, bekvämaste, farligaste, forsta, värsta</li>
      <li>ADV: minst, Sist, mest, näst, bäst, främst, innerst</li>
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
      <li>AUX-Fin: är, kan, ska, har, var, skulle, måste, vill, får, kommer</li>
      <li>VERB-Fin: har, tycker, finns, kommer, blir, bor, är, handlar, tror, känner</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: jämfört, tvungen, övertygad, baserade, begagnade, begränsad, chockad, född, förbnnad, förlamad</li>
      <li>AUX-Fin: var, skulle, hade, kunde, borde, ville</li>
      <li>VERB-Fin: kom, pratade, började, var, blev, brukade, hade, såg, flyttade, gick</li>
      <li>VERB-Part: anpassade, dömd, fylled, lurade, utsatt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: beroende, dominerande, fungerande, grundläggande, liknande, lärande, tagande, ökande</li>
      <li>AUX-Fin: är, kan, ska, har, måste, vill, får, kommer, blir, bör</li>
      <li>VERB-Fin: har, tycker, finns, kommer, blir, bor, är, handlar, tror, känner</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: är, kan, ska, har, var, skulle, måste, vill, får, kommer</li>
      <li>AUX-Inf: vara, kunna, få, bli, ha, vilja, villja</li>
      <li>AUX-Sup: blivit, varit</li>
      <li>VERB-Fin: har, tycker, kommer, blir, bor, handlar, tror, är, känner, ser</li>
      <li>VERB-Inf: lära, ha, göra, köpa, ta, gå, få, bli, se, förstå</li>
      <li>VERB-Sup: blivit, förlorat, växt, anmält, befriat, betalt, bott, flyttat, fått, följt</li>
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
      <li>DET: en, den, ett, de, det, dem, et</li>
      <li>PRON: ett</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: detta, denna, dessa</li>
      <li>PRON: detta, dessa</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: några, något</li>
      <li>PRON: man, andra, ens, många, någon, någonting, något, Vissa, annat, fler</li>
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
      <li>PRON: jag, det, vi, de, sig, mig, du, min, oss, han</li>
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
      <li>PRON: alla, allt, båda</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: två, 1, 18, tre, ett, 2, 4, 6-8000, fyra, 1-12</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: första, andra, Tredja, firsta, tredje</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: min, sin, mitt, sina, sitt, mina, deras, vår, ditt, hans</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: Mvh, osv, osv., t.ex., t.ex</li>
          <li>NOUN: kilo, 200m, ex</li>
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
          <li>ADV: fram, länge</li>
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
          <li>ADJ: second</li>
          <li>DET: no</li>
          <li>NOUN: hand, refunds, seafood</li>
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
          <li>ADJ: jätte, biligare, Amerikansk, Svenska, dimokratiskt, dromm, favorit, favoritt, forsta, färlig</li>
          <li>ADJ-Part: förbnnad, njöd, tagande</li>
          <li>ADP: I, for, frön, undet</li>
          <li>ADV: tillbacka, Alltid, Sit, Tillsammans, Tillsist, ackså, alderig, dagligen, däref$nt, engom</li>
          <li>AUX-Inf: villja</li>
          <li>CCONJ: men</li>
          <li>DET: det, et, varj</li>
          <li>INTJ: Ju</li>
          <li>NOUN: plats, havdet, kurs, kärlek, manniskor, sommras, 200m, Buss, Engelska, Hat</li>
          <li>NUM: 16, 50, fimtio, tva</li>
          <li>PRON: det, du</li>
          <li>PROPN: Svarige, Christiana, Levis, Raid, Tenerife, facebook, frost, melanöster, sfi, tinder</li>
          <li>SCONJ: an, eftrsom, som</li>
          <li>VERB-Fin: Kommer, använd, böhver, forstår, funkerade, förklar, försker, försoker, förståd, försätt</li>
          <li>VERB-Inf: breätta, cycka, cyckla, forklara, förtstå, föstå, hällsa, hälpa, jälpa, liva</li>
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
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: kunna, skola, ha, vilja, måste, få, komma, böra, bli, vara.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: bli.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Nom (148)</li>
      <li>VERB-Fin--PRON (105)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (312)</li>
      <li>VERB-Inf--NOUN-Nom (23)</li>
      <li>VERB-Inf--PRON (14)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Nom (135)</li>
      <li>VERB-Sup--NOUN-Nom (10)</li>
      <li>VERB-Sup--PRON (3)</li>
      <li>VERB-Sup--PRON-Nom (14)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-Nom (175)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(frön) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(för) (1)</li>
      <li>VERB-Fin--PRON (41)</li>
      <li>VERB-Fin--PRON-Acc (37)</li>
      <li>VERB-Inf--NOUN-Nom (160)</li>
      <li>VERB-Inf--PRON (24)</li>
      <li>VERB-Inf--PRON-Acc (19)</li>
      <li>VERB-Inf--PRON-Nom (3)</li>
      <li>VERB-Sup--NOUN-Nom (12)</li>
      <li>VERB-Sup--PRON (4)</li>
      <li>VERB-Sup--PRON-Acc (3)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (5)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (22)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 11 relation subtypes: <a>acl:cleft</a>, <a>acl:relcl</a>, <a>advcl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 1 relation types are not used in this corpus at all: <a>clf</a></li>
</ul>
