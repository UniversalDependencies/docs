---
layout: base
title:  'UD_Swedish'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Swedish

Language: [Swedish](../sv/overview/sv-hub.html) (code: `sv`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Joakim Nivre, Aaron Smith.

Repository: [UD_Swedish](https://github.com/UniversalDependencies/UD_Swedish)

License: CC BY-SA 4.0

Genre: news, nonfiction

Questions, comments?
General annotation questions (either Swedish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Swedish/issues).
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

The Swedish-TP treebank is based on Talbanken, a treebank developed at Lund University
in the 1970s.



The Swedish-TP treebank is a conversion of the Prose section of Talbanken (Einarsson,
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

# Statistics of UD Swedish

## POS Tags

[ADJ](sv-pos-ADJ.html) – [ADP](sv-pos-ADP.html) – [ADV](sv-pos-ADV.html) – [AUX](sv-pos-AUX.html) – [CCONJ](sv-pos-CCONJ.html) – [DET](sv-pos-DET.html) – [INTJ](sv-pos-INTJ.html) – [NOUN](sv-pos-NOUN.html) – [NUM](sv-pos-NUM.html) – [PART](sv-pos-PART.html) – [PRON](sv-pos-PRON.html) – [PROPN](sv-pos-PROPN.html) – [PUNCT](sv-pos-PUNCT.html) – [SCONJ](sv-pos-SCONJ.html) – [SYM](sv-pos-SYM.html) – [VERB](sv-pos-VERB.html)

## Features

[Abbr](sv-feat-Abbr.html) – [Case](sv-feat-Case.html) – [Definite](sv-feat-Definite.html) – [Degree](sv-feat-Degree.html) – [Foreign](sv-feat-Foreign.html) – [Gender](sv-feat-Gender.html) – [Mood](sv-feat-Mood.html) – [Number](sv-feat-Number.html) – [NumType](sv-feat-NumType.html) – [Polarity](sv-feat-Polarity.html) – [Poss](sv-feat-Poss.html) – [PronType](sv-feat-PronType.html) – [Tense](sv-feat-Tense.html) – [VerbForm](sv-feat-VerbForm.html) – [Voice](sv-feat-Voice.html)

## Relations

[acl](sv-dep-acl.html) – [acl:relcl](sv-dep-acl-relcl.html) – [advcl](sv-dep-advcl.html) – [advmod](sv-dep-advmod.html) – [amod](sv-dep-amod.html) – [appos](sv-dep-appos.html) – [aux](sv-dep-aux.html) – [aux:pass](sv-dep-aux-pass.html) – [case](sv-dep-case.html) – [cc](sv-dep-cc.html) – [ccomp](sv-dep-ccomp.html) – [compound](sv-dep-compound.html) – [compound:prt](sv-dep-compound-prt.html) – [conj](sv-dep-conj.html) – [cop](sv-dep-cop.html) – [csubj](sv-dep-csubj.html) – [csubj:pass](sv-dep-csubj-pass.html) – [det](sv-dep-det.html) – [discourse](sv-dep-discourse.html) – [dislocated](sv-dep-dislocated.html) – [expl](sv-dep-expl.html) – [fixed](sv-dep-fixed.html) – [flat:name](sv-dep-flat-name.html) – [iobj](sv-dep-iobj.html) – [list](sv-dep-list.html) – [mark](sv-dep-mark.html) – [nmod](sv-dep-nmod.html) – [nmod:poss](sv-dep-nmod-poss.html) – [nsubj](sv-dep-nsubj.html) – [nsubj:pass](sv-dep-nsubj-pass.html) – [nummod](sv-dep-nummod.html) – [obj](sv-dep-obj.html) – [obl](sv-dep-obl.html) – [obl:agent](sv-dep-obl-agent.html) – [orphan](sv-dep-orphan.html) – [parataxis](sv-dep-parataxis.html) – [punct](sv-dep-punct.html) – [root](sv-dep-root.html) – [vocative](sv-dep-vocative.html) – [xcomp](sv-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 6026 sentences and 96819 tokens.</li>
<li>This corpus contains 9735 tokens (10%) that are not followed by a space.</li>
<li>This corpus contains 12 types of words with spaces. Examples: t ex, s k, bl a, t o m, o s v, d v s, fr o m, m m, f n, e d, m fl, t v</li>
<li>This corpus contains 365 types of words that contain both letters and punctuation. Examples: t.ex., bl.a., u-länderna, s., EEC:s, kap., s.k., u-länder, 60-talet, kl., EEC-länderna, dvs., 1800-talet, yrkes-, 1960-talet, 70-talet, FN:s, RFSU-laboratoriet, a., doc., m.fl., resp., sid., t.o.m., u-ländernas, 1800-talets, 1900-talet, KF:s, barn-, ett-, i-länderna, m.m., manisk-depressiva, u-land, 15-årsperioden, 1960-talets, B-inkomster, I., Ollo-Food, Per-Ola, RFSU-laboratoriets, a), b), fack-, far-, fig., hem-, i-länder, kibbutz-, kommun-</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: X</li>
<li>This corpus contains 1 word types tagged as particles (PART): att</li>
</ul>

<ul>
<li>This corpus contains 52 lemmas tagged as pronouns (PRON): all, allt, alltihop, allting, annan, bägge, båda, bådadera, de, den, denna, densamma, det, dom, du, en, envar, fler, flera, få, han, hon, ingen, ingendera, ingenting, jag, man, mycken, mycket, många, mången, ni, någon, någonting, nånting, samtlig, sig, som, somlig, sån, två, vad, var, vara, varandra, varann, varannan, vardera, vem, vi, vilken, vissa</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as determiners (DET): all, allt, annan, bägge, de, den, denna, det, du, en, han, hon, ingen, jag, man, mitt, ni, någon, samma, sig, the, var, vara, varandra, varannan, vardera, varenda, varje, vars, vem, vi, vilka, vilken, vilket, vår</li>
</ul>

<ul>
<li>Out of the above, 26 lemmas occurred sometimes as PRON and sometimes as DET: all, allt, annan, bägge, de, den, denna, det, du, en, han, hon, ingen, jag, man, ni, någon, sig, var, vara, varandra, varannan, vardera, vem, vi, vilken</li>
</ul>

<ul>
<li>This corpus contains 16 lemmas tagged as auxiliaries (AUX): behöva, bli, bruka, böra, dra, få, ha, komma, kunna, lär, må, måste, skola, torde, vara, vilja</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as AUX and sometimes as VERB: behöva, bli, bruka, böra, dra, få, ha, komma, kunna, må, måste, skola, vara, vilja</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: är, kan, har, måste, skall, skulle, ska, kommer, var, får</li>
    <li>VERB: har, finns, är, blir, får, gäller, ger, går, kommer, gör</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: vara, kunna, få, ha, bli, behöva, vilja, komma, dra</li>
    <li>VERB: få, ha, bli, göra, ge, ta, komma, gå, se, vara</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>ADJ: följande, beroende, särskild, särskilda, ökad, motsvarande, liknande, ökade, gifta, nuvarande</li>
    <li>VERB: påverkade, vald, vänd, hörselskadad, tvungna, accepterad, anpassade, bedövade, diciplinerade, emanciperade</li>
  </ul>
  </li>
  <li>Stem
  <ul>
    <li>VERB: läs-</li>
  </ul>
  </li>
  <li>Sup
  <ul>
    <li>AUX: varit, kunnat, fått, kommit, blivit, velat</li>
    <li>VERB: fått, blivit, haft, gjort, ökat, kommit, gått, visat, börjat, skett</li>
  </ul>
  </li>
</ul>
</li>
</ul>

<h3>Nominal Features</h3>

<li><a>Gender</a>
  <ul>
    <li>Com
      <ul>
        <li>ADJ: stor, annan, själv, sådan, viss, egen, ny, hög, kristen, social</li>
        <li>ADJ-Part: särskild, ökad, beredd, gift, bosatt, fortsatt, oförändrad, angiven, född, genomförd</li>
        <li>DET: en, den, sin, denna, någon, vår, ingen, vilken, din, var</li>
        <li>NOUN: del, procent, människor, tid, familjen, kvinnor, man, dag, miljoner, fråga</li>
        <li>NUM: en</li>
        <li>PRON: man, vi, den, du, han, jag, oss, hon, en, dig</li>
        <li>VERB-Part: vald, vänd, hörselskadad, accepterad, förstärkt, förändrad, ifylld, komplicerad, likställd, lämnad</li>
      </ul>
    </li>
    <li>Fem
      <ul>
        <li>NOUN: nuptiam</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: enskilde, andre, sjuke, ene, enskildes, lille, skattskyldige, unge, amerikanske, andres</li>
        <li>ADJ-Part: avlidnes</li>
        <li>NOUN: consensus</li>
        <li>PRON: denne</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>ADJ: annat, svårt, nytt, möjligt, sådant, viktigt, eget, socialt, stort, övrigt</li>
        <li>ADJ-Part: sett, taget, särskilt, sagt, ökat, förbjudet, fött, inkomstprövat, räknat, valt</li>
        <li>DET: ett, det, detta, sitt, något, vårt, allt, ditt, inget, vilket</li>
        <li>NOUN: år, barn, äktenskapet, barnen, sätt, samhället, arbete, fall, äktenskap, barnet</li>
        <li>NUM: ett</li>
        <li>PRON: det, detta, vad, något, allt, vilket, mycket, annat, detsamma, ett</li>
        <li>VERB-Part: förbjudet, opåverkat, reglerat, sysselsatt, tillgodosett, upplagt</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: olika, andra, många, vissa, stora, flera, flesta, nya, små, sådana</li>
        <li>ADJ-Part: särskilda, gifta, handikappade, ökade, bestämda, skilda, kända, avsedda, höjda, isolerade</li>
        <li>DET: de, alla, dessa, sina, några, våra, vilka, dina, inga, bägge</li>
        <li>NOUN: barn, år, barnen, procent, människor, kvinnor, miljoner, kronor, fall, länder</li>
        <li>PRON: de, vi, dem, oss, andra, många, alla, varandra, dessa, vilka</li>
        <li>VERB-Part: påverkade, tvungna, anpassade, bedövade, diciplinerade, emanciperade, fjärrundersökta, frusterade, färdigräknade, fördelade</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: stor, hela, annan, nya, själv, sådan, viss, egen, annat, ny</li>
        <li>ADJ-Part: särskild, ökad, sett, taget, beredd, särskilt, fortsatt, gift, ökade, bosatt</li>
        <li>DET: en, den, ett, det, sin, denna, varje, någon, detta, sitt</li>
        <li>NOUN: del, äktenskapet, år, tid, samhället, familjen, arbete, barn, sätt, äktenskap</li>
        <li>NUM: en, ett</li>
        <li>PRON: det, man, den, du, detta, vad, han, jag, hon, en</li>
        <li>VERB-Part: vald, vänd, hörselskadad, accepterad, förbjudet, förstärkt, förändrad, ifylld, komplicerad, likställd</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>NOUN: nuptiam</li>
        <li>PRON: sig, dem, oss, dig, varandra, mig, henne, honom, sej, varann</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>ADJ: anställdas, enskildes, försäkrades, äldres, andres, avlidnes, dubbelarbetandes, efterkommandes, enskilds, frånskildas</li>
        <li>ADJ-Part: anställdas, försäkrades, avlidnes, dubbelarbetandes, sammanboendes, studerandes</li>
        <li>NOUN: äktenskapets, kvinnans, världens, barnens, familjens, års, dagens, samhällets, jordens, slags</li>
        <li>PROPN: Sveriges, EEC:s, Guds, Stockholms, FN:s, Kristi, KF:s, Parsons, Europas, Jesu</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>ADJ: olika, andra, första, nya, många, stora, stor, större, vissa, hela</li>
        <li>ADJ-Part: följande, beroende, särskild, särskilda, ökad, motsvarande, liknande, ökade, gifta, nuvarande</li>
        <li>NOUN: år, barn, del, äktenskapet, procent, barnen, människor, tid, sätt, samhället</li>
        <li>NUM: två, tre, en, 1, 20, 2, ett, 1970, 3, 10</li>
        <li>PRON: man, de, vi, du, han, jag, hon, ni, bägge, en</li>
        <li>PROPN: Sverige, EEC, Stockholm, USA, ATP, Gud, Göteborg, Horn, Danmark, Indien</li>
        <li>VERB-Part: påverkade, vald, vänd, hörselskadad, tvungna, accepterad, anpassade, bedövade, diciplinerade, emanciperade</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>ADJ: hela, nya, flesta, svenska, andra, bästa, ekonomiska, största, kristna, närmaste</li>
        <li>ADJ-Part: ökade, gifta, dolda, nedärvda, nämnda, beräknade, förändrade, minskade, motsatta, orangefärgade</li>
        <li>DET: den, de, det, sin, denna, dessa, sina, deras, detta, sitt</li>
        <li>NOUN: äktenskapet, barnen, samhället, familjen, kvinnan, barnet, mannen, kvinnorna, världen, föräldrarna</li>
        <li>PRON: det, de, sig, vi, den, du, detta, dem, han, jag</li>
      </ul>
    </li>
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
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: större, högre, bättre, mindre, äldre, längre, lättare, lägre, yttre, svårare</li>
        <li>ADV: mer, tidigare, mindre, vidare, mera, längre, senare, ytterligare, bättre, närmare</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: olika, andra, nya, många, stora, stor, vissa, hela, flera, annan</li>
        <li>ADV: mycket, helt, ofta, länge, långt, snabbt, relativt, direkt, starkt, säkert</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: flesta, bästa, största, närmaste, högsta, viktigaste, senaste, vanligaste, störst, främsta</li>
        <li>ADV: mest, minst, främst, högst, helst, bäst, oftast, längst, knappast, ytterst</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADV: inte, aldrig, ej, icke, knappast, ingalunda, föga, nu, näppeligen, så</li>
        <li>CCONJ: varken</li>
        <li>PRON: sig</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Imp
      <ul>
        <li>AUX-Fin: Varen</li>
        <li>VERB-Fin: se, låt, ta, ge, jfr, kontrollera, Diskutera, kolla, Läs, byt</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>AUX-Fin: är, kan, har, måste, skall, skulle, ska, kommer, var, får</li>
        <li>VERB-Fin: har, finns, är, blir, får, gäller, ger, går, kommer, gör</li>
      </ul>
    </li>
    <li>Sub
      <ul>
        <li>AUX-Fin: vore</li>
        <li>VERB-Fin: vare, vore, Gånge, finge</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Past
      <ul>
        <li>ADJ-Part: särskild, särskilda, ökad, ökade, gifta, sett, taget, handikappade, beredd, bestämda</li>
        <li>AUX-Fin: skulle, var, kunde, hade, borde, ville, fick, torde, vore, blev</li>
        <li>VERB-Fin: blev, fick, hade, var, började, gjorde, kom, gick, fanns, gav</li>
        <li>VERB-Part: påverkade, vald, vänd, hörselskadad, tvungna, accepterad, anpassade, bedövade, diciplinerade, emanciperade</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>ADJ-Part: följande, beroende, motsvarande, liknande, nuvarande, omfattande, pensionsgrundande, avgörande, krävande, oberoende</li>
        <li>AUX-Fin: är, kan, har, måste, skall, ska, kommer, får, bör, vill</li>
        <li>VERB-Fin: har, finns, är, blir, får, gäller, ger, går, kommer, gör</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Act
      <ul>
        <li>AUX-Fin: är, kan, har, måste, skall, skulle, ska, kommer, var, får</li>
        <li>AUX-Inf: vara, kunna, få, ha, bli, behöva, vilja, komma, dra</li>
        <li>AUX-Sup: varit, kunnat, fått, kommit, blivit, velat</li>
        <li>VERB-Fin: har, är, blir, får, gäller, ger, går, kommer, gör, visar</li>
        <li>VERB-Inf: få, ha, bli, göra, ge, ta, komma, gå, se, vara</li>
        <li>VERB-Sup: fått, blivit, haft, gjort, ökat, kommit, gått, visat, börjat, skett</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>VERB-Fin: behövs, kallas, beräknas, används, anses, användes, föds, ges, görs, tvingas</li>
        <li>VERB-Inf: användas, göras, tas, ses, anses, sägas, utnyttjas, hållas, kallas, kompletteras</li>
        <li>VERB-Sup: gjorts, nämnts, förändrats, framhållits, sagts, ansetts, inlämnats, byggts, givits, införts</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Art
      <ul>
        <li>DET: en, den, ett, de, det, the, Dom</li>
        <li>PRON: Det</li>
      </ul>
    </li>
    <li>Dem
      <ul>
        <li>DET: denna, dessa, detta, dennes, dessas</li>
        <li>PRON: detta, dessa, denna, denne</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: samma, någon, några, något, var, varannan, andras, ens, varje, alla</li>
        <li>PRON: man, andra, många, något, någon, mycket, detsamma, fler, några, sådana</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>DET: vilka, vilken, vilket, Vems</li>
        <li>PRON: vad, vem, vilka, vilken, vilket</li>
      </ul>
    </li>
    <li>Neg
      <ul>
        <li>DET: ingen, inget, inga, någon, samma</li>
        <li>PRON: ingen, ingenting, inget, inga, ingendera</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>DET: sin, sina, deras, sitt, våra, vår, vårt, dess, din, ditt</li>
        <li>PRON: det, de, sig, vi, den, du, dem, han, jag, oss</li>
      </ul>
    </li>
    <li>Rcp
      <ul>
        <li>DET: varandras</li>
        <li>PRON: varandra, varann</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>DET: vars, vilkas</li>
        <li>PRON: som, vilket, vilka, vilken, något, man, Vad, de</li>
      </ul>
    </li>
    <li>Tot
      <ul>
        <li>DET: alla, varje, allt, all, var, bägge, vardera, varenda, vart, vilka</li>
        <li>PRON: alla, var, allt, båda, allting, vart, bägge, bådadera, samtliga, vem</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>NumType</a>
  <ul>
    <li>Card
      <ul>
        <li>NUM: två, tre, en, 1, 20, 2, ett, 1970, 3, 10</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>DET: sin, sina, deras, sitt, våra, vår, vårt, dess, din, ditt</li>
      </ul>
    </li>
  </ul>
</li>






<h3>Other Features</h3>

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

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: vara.</li>
<li>This corpus uses 14 lemmas as auxiliaries (<a>aux</a>). Examples: kunna, ha, skola, måste, komma, få, vilja, böra, behöva, torde, må, lär, bruka, dra.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: bli.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (13)</li>
      <li>VERB-Fin--NOUN-Nom (2063)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(till) (1)</li>
      <li>VERB-Fin--PRON (1045)</li>
      <li>VERB-Fin--PRON-Nom (1021)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--NOUN-Nom (496)</li>
      <li>VERB-Inf--PRON (200)</li>
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
      <li>VERB-Fin--NOUN-Nom (1762)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(för) (1)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(mellan) (1)</li>
      <li>VERB-Fin--PRON (158)</li>
      <li>VERB-Fin--PRON-Acc (230)</li>
      <li>VERB-Inf--NOUN (10)</li>
      <li>VERB-Inf--NOUN-Nom (1290)</li>
      <li>VERB-Inf--NOUN-Nom-ADP(för) (1)</li>
      <li>VERB-Inf--PRON (117)</li>
      <li>VERB-Inf--PRON-Acc (149)</li>
      <li>VERB-Sup--NOUN (2)</li>
      <li>VERB-Sup--NOUN-Nom (256)</li>
      <li>VERB-Sup--PRON (25)</li>
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
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 1 main types are not used alone, they are always subtyped: <a>flat</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
