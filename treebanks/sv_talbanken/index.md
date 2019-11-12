---
layout: base
title:  'UD_Swedish-Talbanken'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Swedish Talbanken

Language: [Swedish](/sv/index.html) (code: `sv`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Joakim Nivre, Aaron Smith.

Repository: [UD_Swedish-Talbanken](https://github.com/UniversalDependencies/UD_Swedish-Talbanken)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udsv_talbanken25)<br />
Download all treebanks: [UD 2.5](/#download)

License: CC BY-SA 4.0

Genre: news, nonfiction

Questions, comments?
General annotation questions (either Swedish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Swedish-Talbanken/issues).
If you want to collaborate, please contact [joakim&nbsp;•&nbsp;nivre&nbsp;(æt)&nbsp;lingfil&nbsp;•&nbsp;uu&nbsp;•&nbsp;se].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, with some manual corrections, but not a full manual verification |
| UPOS | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |
| Relations | annotated manually in non-UD style, automatically converted to UD, with some manual corrections of the conversion |

## Description

The Swedish-Talbanken treebank is based on Talbanken, a treebank developed at Lund University
in the 1970s.



The Swedish-Talbanken treebank is a conversion of the Prose section of Talbanken (Einarsson,
1976), originally annotated by a team led by Ulf Teleman at Lund University according
to the MAMBA annotation scheme (Teleman, 1974). It consists of roughly 6,000 sentences
and 95,000 tokens taken from a variety of informative text genres, including textbooks,
information brochures, and newspaper articles. The syntactic annotation is converted
directly from the original MAMBA annotation, while the morphological annotation is
based on the reannotation performed when incorporating Talbanken into the Swedish
Treebank (Nivre and Megyesi, 2007). Tokenization mostly follows the standard of the
Stockholm-Umeå Corpus, Version 2.0 (2006), and lemmatization is based on Saldo
(Borin et al., 2008).

## Acknowledgments

The new conversion has been performed by Joakim Nivre and Aaron Smith at Uppsala
University. We thank everyone who has been involved in previous conversion efforts
at Växjö University and Uppsala University, including Bengt Dahlqvist, Sofia
Gustafson-Capkova, Johan Hall, Anna Sågvall Hein, Beáta Megyesi, Jens Nilsson, and
Filip Salomonsson. Special thanks also to Lars Borin and Markus Forsberg at
Språkbanken for help with the lemmatization. Finally, we owe a huge debt to the
team who produced the original treebank in the 1970s.

## References

* Lars Borin, Markus Forsberg, Lennart Lönngren. 2008. Saldo 1.0 (Svenskt
associationslexikon version 2). Språkbanken, Göteborg universitet.

* Einarsson, Jan. 1976. Talbankens skriftspråkskonkordans. Lund University:
Department of Scandinavian Languages.

* Joakim Nivre and Beáta Megyesi. 2007. Bootstrapping a Swedish treeebank
using cross-corpus harmonization and annotation projection. In Proceedings
of the 6th International Workshop on Treebanks and Linguistic Theories,
pages 97-102.

* Teleman, Ulf. 1974. Manual för grammatisk beskrivning av talad och skriven
svenska. Studentlitteratur.

* The Stockholm Umeå Corpus. Version 2.0. 2006. Stockholm University:
Department of Linguistics.


# Statistics of UD Swedish Talbanken

## POS Tags

[ADJ](sv_talbanken-pos-ADJ.html) – [ADP](sv_talbanken-pos-ADP.html) – [ADV](sv_talbanken-pos-ADV.html) – [AUX](sv_talbanken-pos-AUX.html) – [CCONJ](sv_talbanken-pos-CCONJ.html) – [DET](sv_talbanken-pos-DET.html) – [INTJ](sv_talbanken-pos-INTJ.html) – [NOUN](sv_talbanken-pos-NOUN.html) – [NUM](sv_talbanken-pos-NUM.html) – [PART](sv_talbanken-pos-PART.html) – [PRON](sv_talbanken-pos-PRON.html) – [PROPN](sv_talbanken-pos-PROPN.html) – [PUNCT](sv_talbanken-pos-PUNCT.html) – [SCONJ](sv_talbanken-pos-SCONJ.html) – [SYM](sv_talbanken-pos-SYM.html) – [VERB](sv_talbanken-pos-VERB.html)

## Features

[Abbr](sv_talbanken-feat-Abbr.html) – [Case](sv_talbanken-feat-Case.html) – [Definite](sv_talbanken-feat-Definite.html) – [Degree](sv_talbanken-feat-Degree.html) – [Foreign](sv_talbanken-feat-Foreign.html) – [Gender](sv_talbanken-feat-Gender.html) – [Mood](sv_talbanken-feat-Mood.html) – [Number](sv_talbanken-feat-Number.html) – [NumType](sv_talbanken-feat-NumType.html) – [Polarity](sv_talbanken-feat-Polarity.html) – [Poss](sv_talbanken-feat-Poss.html) – [PronType](sv_talbanken-feat-PronType.html) – [Tense](sv_talbanken-feat-Tense.html) – [VerbForm](sv_talbanken-feat-VerbForm.html) – [Voice](sv_talbanken-feat-Voice.html)

## Relations

[acl](sv_talbanken-dep-acl.html) – [acl:cleft](sv_talbanken-dep-acl-cleft.html) – [acl:relcl](sv_talbanken-dep-acl-relcl.html) – [advcl](sv_talbanken-dep-advcl.html) – [advmod](sv_talbanken-dep-advmod.html) – [amod](sv_talbanken-dep-amod.html) – [appos](sv_talbanken-dep-appos.html) – [aux](sv_talbanken-dep-aux.html) – [aux:pass](sv_talbanken-dep-aux-pass.html) – [case](sv_talbanken-dep-case.html) – [cc](sv_talbanken-dep-cc.html) – [ccomp](sv_talbanken-dep-ccomp.html) – [compound](sv_talbanken-dep-compound.html) – [compound:prt](sv_talbanken-dep-compound-prt.html) – [conj](sv_talbanken-dep-conj.html) – [cop](sv_talbanken-dep-cop.html) – [csubj](sv_talbanken-dep-csubj.html) – [csubj:pass](sv_talbanken-dep-csubj-pass.html) – [det](sv_talbanken-dep-det.html) – [discourse](sv_talbanken-dep-discourse.html) – [dislocated](sv_talbanken-dep-dislocated.html) – [expl](sv_talbanken-dep-expl.html) – [fixed](sv_talbanken-dep-fixed.html) – [flat:name](sv_talbanken-dep-flat-name.html) – [iobj](sv_talbanken-dep-iobj.html) – [list](sv_talbanken-dep-list.html) – [mark](sv_talbanken-dep-mark.html) – [nmod](sv_talbanken-dep-nmod.html) – [nmod:poss](sv_talbanken-dep-nmod-poss.html) – [nsubj](sv_talbanken-dep-nsubj.html) – [nsubj:pass](sv_talbanken-dep-nsubj-pass.html) – [nummod](sv_talbanken-dep-nummod.html) – [obj](sv_talbanken-dep-obj.html) – [obl](sv_talbanken-dep-obl.html) – [obl:agent](sv_talbanken-dep-obl-agent.html) – [orphan](sv_talbanken-dep-orphan.html) – [parataxis](sv_talbanken-dep-parataxis.html) – [punct](sv_talbanken-dep-punct.html) – [root](sv_talbanken-dep-root.html) – [vocative](sv_talbanken-dep-vocative.html) – [xcomp](sv_talbanken-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 6026 sentences and 96819 tokens.</li>
</ul>

<ul>
<li>This corpus contains 9733 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 12 types of words with spaces. Examples: t ex, s k, bl a, t o m, o s v, d v s, fr o m, m m, f n, e d, m fl, t v</li>
</ul>

<ul>
<li>This corpus contains 365 types of words that contain both letters and punctuation. Examples: t.ex., bl.a., u-länderna, s., EEC:s, kap., s.k., u-länder, 60-talet, kl., EEC-länderna, dvs., 1800-talet, yrkes-, 1960-talet, 70-talet, FN:s, RFSU-laboratoriet, a., doc., m.fl., resp., sid., t.o.m., u-ländernas, 1800-talets, 1900-talet, KF:s, barn-, ett-, i-länderna, m.m., manisk-depressiva, u-land, 15-årsperioden, 1960-talets, B-inkomster, I., Ollo-Food, Per-Ola, RFSU-laboratoriets, a), b), fack-, far-, fig., hem-, i-länder, kibbutz-, kommun-</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: X</li>
</ul>

<ul>
<li>This corpus contains 4 word types tagged as particles (PART): att, ej, icke, inte</li>
</ul>

<ul>
<li>This corpus contains 56 lemmas tagged as pronouns (PRON): all, allt, alltihop, allting, annan, bägge, båda, bådadera, de, den, denna, densamma, det, dom, du, en, envar, fler, flera, få, han, hon, ingen, ingendera, ingenting, jag, man, mitt, mycken, mycket, många, mången, ni, någon, någonting, nånting, samtlig, sig, som, somlig, sån, två, vad, var, vara, varandra, varann, varannan, vardera, vars, vem, vi, vilka, vilken, vissa, vår</li>
</ul>

<ul>
<li>This corpus contains 21 lemmas tagged as determiners (DET): all, allt, bägge, de, den, denna, det, en, ingen, man, någon, samma, the, var, vara, varannan, vardera, varenda, varje, vilken, vilket</li>
</ul>

<ul>
<li>Out of the above, 16 lemmas occurred sometimes as PRON and sometimes as DET: all, allt, bägge, de, den, denna, det, en, ingen, man, någon, var, vara, varannan, vardera, vilken</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): behöva, bli, böra, få, ha, komma, kunna, lär, må, måste, skola, torde, vara, vilja</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as AUX and sometimes as VERB: behöva, bli, böra, få, ha, komma, kunna, må, måste, skola, vara, vilja</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: är, kan, har, måste, skall, skulle, ska, kommer, var, får</li>
    <li>VERB: har, finns, blir, får, är, gäller, ger, går, kommer, gör</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: vara, kunna, få, ha, bli, behöva, vilja, komma</li>
    <li>VERB: få, ha, bli, göra, ge, ta, komma, gå, se, finnas</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: följande, beroende, särskild, särskilda, ökad, motsvarande, liknande, ökade, gifta, nuvarande</li>
    <li>VERB: påverkade, vald, vänd, hörselskadad, tvungna, accepterad, anpassade, bedövade, diciplinerade, emanciperade</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Stem
  <ul>
    <li>VERB: läs-</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Sup
  <ul>
    <li>AUX: varit, kunnat, fått, kommit, blivit, velat</li>
    <li>VERB: fått, blivit, haft, gjort, ökat, kommit, gått, visat, börjat, skett</li>
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
      <li>ADJ: stor, annan, själv, sådan, viss, egen, ny, hög, kristen, social</li>
      <li>ADJ-Part: särskild, ökad, beredd, gift, bosatt, fortsatt, oförändrad, angiven, född, genomförd</li>
      <li>DET: en, den, denna, någon, ingen, vilken, var, all, varannan, nån</li>
      <li>NOUN: del, procent, människor, tid, familjen, kvinnor, man, dag, miljoner, fråga</li>
      <li>NUM: en</li>
      <li>PRON: man, vi, den, du, sin, han, jag, oss, hon, en</li>
      <li>VERB-Part: vald, vänd, hörselskadad, accepterad, förstärkt, förändrad, ifylld, komplicerad, likställd, lämnad</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>NOUN: nuptiam</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: enskilde, andre, sjuke, ene, enskildes, lille, skattskyldige, unge, amerikanske, andres</li>
      <li>ADJ-Part: avlidnes</li>
      <li>NOUN: consensus</li>
      <li>PRON: denne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: annat, svårt, nytt, möjligt, sådant, viktigt, eget, socialt, stort, övrigt</li>
      <li>ADJ-Part: sett, taget, särskilt, sagt, ökat, förbjudet, fött, inkomstprövat, räknat, valt</li>
      <li>DET: ett, det, detta, något, allt, inget, vilket, vart, vartannat</li>
      <li>NOUN: år, barn, äktenskapet, barnen, sätt, samhället, arbete, fall, äktenskap, barnet</li>
      <li>NUM: ett</li>
      <li>PRON: det, detta, vad, sitt, något, vårt, allt, vilket, ditt, mycket</li>
      <li>VERB-Part: förbjudet, opåverkat, reglerat, sysselsatt, tillgodosett, upplagt</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: olika, andra, många, vissa, stora, flera, flesta, nya, små, sådana</li>
      <li>ADJ-Part: särskilda, gifta, handikappade, ökade, bestämda, skilda, kända, avsedda, höjda, isolerade</li>
      <li>DET: de, alla, dessa, några, vilka, inga, bägge, dom</li>
      <li>NOUN: barn, år, barnen, procent, människor, kvinnor, miljoner, kronor, fall, länder</li>
      <li>PRON: de, vi, dem, sina, oss, våra, andra, många, alla, varandra</li>
      <li>VERB-Part: påverkade, tvungna, anpassade, bedövade, diciplinerade, emanciperade, fjärrundersökta, frusterade, färdigräknade, fördelade</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: stor, hela, annan, nya, själv, sådan, viss, egen, annat, ny</li>
      <li>ADJ-Part: särskild, ökad, sett, taget, beredd, särskilt, fortsatt, gift, ökade, bosatt</li>
      <li>DET: en, den, ett, det, denna, varje, någon, detta, ingen, något</li>
      <li>NOUN: del, äktenskapet, år, tid, samhället, familjen, arbete, barn, sätt, äktenskap</li>
      <li>NUM: en, ett</li>
      <li>PRON: det, man, den, du, sin, detta, vad, han, jag, sitt</li>
      <li>VERB-Part: vald, vänd, hörselskadad, accepterad, förbjudet, förstärkt, förändrad, ifylld, komplicerad, likställd</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>NOUN: nuptiam</li>
      <li>PRON: sig, dem, oss, dig, varandra, mig, henne, honom, sej, varann</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: anställdas, enskildes, försäkrades, äldres, andres, avlidnes, dubbelarbetandes, efterkommandes, enskilds, frånskildas</li>
      <li>ADJ-Part: anställdas, försäkrades, avlidnes, dubbelarbetandes, sammanboendes, studerandes</li>
      <li>NOUN: äktenskapets, kvinnans, världens, barnens, familjens, års, dagens, samhällets, jordens, slags</li>
      <li>PROPN: Sveriges, EEC:s, Guds, Stockholms, FN:s, Kristi, KF:s, Parsons, Europas, Jesu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: olika, andra, första, nya, många, stora, stor, större, vissa, hela</li>
      <li>ADJ-Part: följande, beroende, särskild, särskilda, ökad, motsvarande, liknande, ökade, gifta, nuvarande</li>
      <li>NOUN: år, barn, del, äktenskapet, procent, barnen, människor, tid, sätt, samhället</li>
      <li>NUM: två, tre, 1, en, 20, 2, ett, 1970, 3, 10</li>
      <li>PRON: man, de, vi, du, han, jag, hon, ni, bägge, en</li>
      <li>PROPN: Sverige, EEC, Stockholm, USA, ATP, Gud, Göteborg, Horn, Danmark, Indien</li>
      <li>VERB-Part: påverkade, vald, vänd, hörselskadad, tvungna, accepterad, anpassade, bedövade, diciplinerade, emanciperade</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: hela, nya, flesta, svenska, andra, bästa, ekonomiska, största, kristna, närmaste</li>
      <li>ADJ-Part: ökade, gifta, dolda, nedärvda, nämnda, beräknade, förändrade, minskade, motsatta, orangefärgade</li>
      <li>DET: den, de, det, denna, dessa, detta, bägge, vardera, dom</li>
      <li>NOUN: äktenskapet, barnen, samhället, familjen, kvinnan, barnet, mannen, kvinnorna, världen, föräldrarna</li>
      <li>PRON: det, de, sig, vi, den, du, sin, detta, dem, han</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: stor, flera, annan, själv, sådan, viss, annat, ny, sådana, svårt</li>
      <li>ADJ-Part: särskild, ökad, sett, taget, beredd, särskilt, fortsatt, gift, bosatt, oförändrad</li>
      <li>DET: en, ett, varje, samma, någon, några, ingen, vilka, något, vilken</li>
      <li>NOUN: år, barn, del, procent, människor, tid, sätt, arbete, fall, kvinnor</li>
      <li>NUM: en, ett</li>
      <li>PRON: man, vad, en, andra, något, många, alla, allt, var, vilket</li>
      <li>VERB-Part: vald, vänd, hörselskadad, accepterad, förbjudet, förstärkt, förändrad, ifylld, komplicerad, likställd</li>
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
      <li>ADJ: större, högre, bättre, mindre, äldre, längre, lättare, lägre, yttre, svårare</li>
      <li>ADV: mer, tidigare, mindre, vidare, mera, längre, senare, ytterligare, bättre, närmare</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: olika, andra, nya, många, stora, stor, vissa, hela, flera, annan</li>
      <li>ADV: mycket, helt, ofta, länge, långt, snabbt, relativt, direkt, starkt, säkert</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, störst, främsta</li>
      <li>ADV: mest, minst, främst, högst, helst, bäst, oftast, längst, knappast, ytterst</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: aldrig, knappast, ingalunda, föga, nu, näppeligen, så, knappt, långt, minst</li>
      <li>CCONJ: varken</li>
      <li>PART: inte, ej, icke</li>
      <li>PRON: sig</li>
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
      <li>AUX-Fin: Varen</li>
      <li>VERB-Fin: se, låt, ta, ge, jfr, kontrollera, Diskutera, kolla, Läs, byt</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: är, kan, har, måste, skall, skulle, ska, kommer, var, får</li>
      <li>VERB-Fin: har, finns, blir, får, är, gäller, ger, går, kommer, gör</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: vore</li>
      <li>VERB-Fin: vare, vore, Gånge, finge</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: särskild, särskilda, ökad, ökade, gifta, sett, taget, handikappade, beredd, bestämda</li>
      <li>AUX-Fin: skulle, var, kunde, hade, borde, ville, fick, torde, vore, blev</li>
      <li>VERB-Fin: blev, fick, hade, började, gjorde, kom, gick, fanns, gav, var</li>
      <li>VERB-Part: påverkade, vald, vänd, hörselskadad, tvungna, accepterad, anpassade, bedövade, diciplinerade, emanciperade</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>ADJ-Part: följande, beroende, motsvarande, liknande, nuvarande, omfattande, pensionsgrundande, avgörande, krävande, oberoende</li>
      <li>AUX-Fin: är, kan, har, måste, skall, ska, kommer, får, bör, vill</li>
      <li>VERB-Fin: har, finns, blir, får, är, gäller, ger, går, kommer, gör</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: är, kan, har, måste, skall, skulle, ska, kommer, var, får</li>
      <li>AUX-Inf: vara, kunna, få, ha, bli, behöva, vilja, komma</li>
      <li>AUX-Sup: varit, kunnat, fått, kommit, blivit, velat</li>
      <li>VERB-Fin: har, blir, får, är, gäller, ger, går, kommer, gör, visar</li>
      <li>VERB-Inf: få, ha, bli, göra, ge, ta, komma, gå, se, hålla</li>
      <li>VERB-Sup: fått, blivit, haft, gjort, ökat, kommit, gått, visat, börjat, skett</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: behövs, kallas, beräknas, används, anses, användes, föds, ges, görs, tvingas</li>
      <li>VERB-Inf: användas, göras, tas, ses, anses, sägas, utnyttjas, hållas, kallas, kompletteras</li>
      <li>VERB-Sup: gjorts, nämnts, förändrats, framhållits, sagts, ansetts, inlämnats, byggts, givits, införts</li>
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
      <li>DET: en, den, ett, de, det, the, Dom</li>
      <li>PRON: Det</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: denna, dessa, detta</li>
      <li>PRON: detta, dessa, denna, denne, dennes, dessas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: samma, någon, några, något, var, varannan, varje, alla, inget, nån</li>
      <li>PRON: man, andra, många, något, någon, mycket, detsamma, fler, några, sådana</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: vilka, vilken, vilket</li>
      <li>PRON: vad, vem, vilka, vilken, vilket, Vems</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ingen, inget, inga, någon, samma</li>
      <li>PRON: ingen, ingenting, inget, inga, ingendera</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: det, de, den, varje, alla, detta, någon, all, dom, samma</li>
      <li>PRON: det, de, sig, vi, den, du, sin, dem, han, sina</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: varandra, varann, varandras</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: som, vilket, vilka, vars, vilken, något, vilkas, man, Vad, de</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alla, varje, allt, all, var, bägge, vardera, varenda, vart, vilka</li>
      <li>PRON: alla, var, allt, båda, allting, vart, bägge, bådadera, samtliga, vem</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: två, tre, 1, en, 20, 2, ett, 1970, 3, 10</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sin, sina, deras, sitt, våra, vår, vårt, dess, din, ditt</li>
    </ul>
  </li>
</ul>






<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: S:t, ev, Kungl, Kungl., Teol, fil, med</li>
          <li>ADP: f</li>
          <li>ADV: t.ex., ca, t ex, bl.a., s k, etc, bl a, dvs, osv, s.k.</li>
          <li>NOUN: kr, %, dr, s., kap., proc, KPI, milj, mån, kl</li>
          <li>VERB-Fin: jfr</li>
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
          <li>ADJ: Economic, European, New, United, priori, restante</li>
          <li>ADP: a, in, of</li>
          <li>ADV: sic</li>
          <li>CCONJ: and</li>
          <li>NOUN: capita, companionship, family, versa, vice, Agriculture, Community, Food, Nations, Organization</li>
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
<li>This corpus uses 12 lemmas as auxiliaries (<a>aux</a>). Examples: kunna, ha, skola, måste, komma, få, böra, vilja, behöva, torde, må, lär.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: bli.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (13)</li>
      <li>VERB-Fin--NOUN-Nom (2075)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(till) (2)</li>
      <li>VERB-Fin--PRON (1023)</li>
      <li>VERB-Fin--PRON-Nom (1021)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Nom (497)</li>
      <li>VERB-Inf--PRON (197)</li>
      <li>VERB-Inf--PRON-Nom (521)</li>
      <li>VERB-Sup--NOUN (3)</li>
      <li>VERB-Sup--NOUN-Nom (275)</li>
      <li>VERB-Sup--PRON (100)</li>
      <li>VERB-Sup--PRON-Nom (152)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (34)</li>
      <li>VERB-Fin--NOUN-Acc (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (1763)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(för) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(mellan) (1)</li>
      <li>VERB-Fin--PRON (160)</li>
      <li>VERB-Fin--PRON-Acc (230)</li>
      <li>VERB-Inf--NOUN (10)</li>
      <li>VERB-Inf--NOUN-Nom (1292)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(för) (1)</li>
      <li>VERB-Inf--PRON (118)</li>
      <li>VERB-Inf--PRON-Acc (149)</li>
      <li>VERB-Sup--NOUN (2)</li>
      <li>VERB-Sup--NOUN-Nom (256)</li>
      <li>VERB-Sup--PRON (26)</li>
      <li>VERB-Sup--PRON-Acc (33)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Nom (26)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (43)</li>
      <li>VERB-Inf--NOUN-Nom (23)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (49)</li>
      <li>VERB-Sup--NOUN-Nom (1)</li>
      <li>VERB-Sup--PRON-Acc (12)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:cleft</a>, <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
