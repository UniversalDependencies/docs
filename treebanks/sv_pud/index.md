---
layout: base
title:  'UD_Swedish-PUD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Swedish PUD

Language: [Swedish](../sv/overview/sv-hub.html) (code: `sv`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v2.1 release.

The following people have contributed to making this treebank part of UD: Joakim Nivre.

Repository: [UD_Swedish-PUD](https://github.com/UniversalDependencies/UD_Swedish-PUD)

License: CC BY-SA 4.0

Genre: news, wiki

Questions, comments?
General annotation questions (either Swedish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Swedish-PUD/issues).
If you want to collaborate, please contact [joakim&nbsp;•&nbsp;nivre&nbsp;(æt)&nbsp;lingfil&nbsp;•&nbsp;uu&nbsp;•&nbsp;se].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | assigned by a program, not checked manually |
| XPOS | assigned by a program, not checked manually |
| Features | assigned by a program, not checked manually |
| Relations | annotated manually, natively in UD style |

## Description

Swedish-PUD is the Swedish part of the Parallel Universal Dependencies (PUD) treebanks.



Swedish-PUD was created (together with the other parallel treebanks) for the CoNLL
2017 shared task on Multilingual Parsing from Raw Text to Universal Dependencies
(http://universaldependencies.org/conll17/). It consists of Swedish translations
of the 1000 sentences from the news domain and from Wikipedia, annotated according
to the principles of the Swedish-PT treebank. The syntactic annotation has been
manually validated, but the morphological annotation is automatically predicted.

## Acknowledgments

Translations were produced by Jacob Nolskog at Teknotrans AB and checked by Joakim
Nivre. The automatic annotation was carried out using SwePipe, a tool suite trained
on the Stockholm-Umeå Corpus and the Swedish-TP treebank, developed by Robert Östling,
Aaron Smith and Joakim, and available from https://github.com/robertostling/efselab.
The syntactic annotation was checked and corrected manually by Joakim Nivre.


# Statistics of UD Swedish PUD

## POS Tags

[ADJ](sv_pud-pos-ADJ.html) – [ADP](sv_pud-pos-ADP.html) – [ADV](sv_pud-pos-ADV.html) – [AUX](sv_pud-pos-AUX.html) – [CCONJ](sv_pud-pos-CCONJ.html) – [DET](sv_pud-pos-DET.html) – [INTJ](sv_pud-pos-INTJ.html) – [NOUN](sv_pud-pos-NOUN.html) – [NUM](sv_pud-pos-NUM.html) – [PART](sv_pud-pos-PART.html) – [PRON](sv_pud-pos-PRON.html) – [PROPN](sv_pud-pos-PROPN.html) – [PUNCT](sv_pud-pos-PUNCT.html) – [SCONJ](sv_pud-pos-SCONJ.html) – [SYM](sv_pud-pos-SYM.html) – [VERB](sv_pud-pos-VERB.html)

## Features

[Abbr](sv_pud-feat-Abbr.html) – [Case](sv_pud-feat-Case.html) – [Definite](sv_pud-feat-Definite.html) – [Degree](sv_pud-feat-Degree.html) – [Foreign](sv_pud-feat-Foreign.html) – [Gender](sv_pud-feat-Gender.html) – [Mood](sv_pud-feat-Mood.html) – [Number](sv_pud-feat-Number.html) – [Polarity](sv_pud-feat-Polarity.html) – [Poss](sv_pud-feat-Poss.html) – [PronType](sv_pud-feat-PronType.html) – [Tense](sv_pud-feat-Tense.html) – [VerbForm](sv_pud-feat-VerbForm.html) – [Voice](sv_pud-feat-Voice.html)

## Relations

[acl](sv_pud-dep-acl.html) – [acl:relcl](sv_pud-dep-acl-relcl.html) – [advcl](sv_pud-dep-advcl.html) – [advmod](sv_pud-dep-advmod.html) – [amod](sv_pud-dep-amod.html) – [appos](sv_pud-dep-appos.html) – [aux](sv_pud-dep-aux.html) – [aux:pass](sv_pud-dep-aux-pass.html) – [case](sv_pud-dep-case.html) – [cc](sv_pud-dep-cc.html) – [ccomp](sv_pud-dep-ccomp.html) – [compound](sv_pud-dep-compound.html) – [compound:prt](sv_pud-dep-compound-prt.html) – [conj](sv_pud-dep-conj.html) – [cop](sv_pud-dep-cop.html) – [csubj](sv_pud-dep-csubj.html) – [csubj:pass](sv_pud-dep-csubj-pass.html) – [det](sv_pud-dep-det.html) – [discourse](sv_pud-dep-discourse.html) – [dislocated](sv_pud-dep-dislocated.html) – [expl](sv_pud-dep-expl.html) – [fixed](sv_pud-dep-fixed.html) – [flat](sv_pud-dep-flat.html) – [flat:name](sv_pud-dep-flat-name.html) – [iobj](sv_pud-dep-iobj.html) – [mark](sv_pud-dep-mark.html) – [nmod](sv_pud-dep-nmod.html) – [nmod:poss](sv_pud-dep-nmod-poss.html) – [nsubj](sv_pud-dep-nsubj.html) – [nsubj:pass](sv_pud-dep-nsubj-pass.html) – [nummod](sv_pud-dep-nummod.html) – [obj](sv_pud-dep-obj.html) – [obl](sv_pud-dep-obl.html) – [obl:agent](sv_pud-dep-obl-agent.html) – [orphan](sv_pud-dep-orphan.html) – [parataxis](sv_pud-dep-parataxis.html) – [punct](sv_pud-dep-punct.html) – [root](sv_pud-dep-root.html) – [vocative](sv_pud-dep-vocative.html) – [xcomp](sv_pud-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 1000 sentences and 19074 tokens.</li>
<li>This corpus contains 1912 tokens (10%) that are not followed by a space.</li>
<li>This corpus contains 9 types of words with spaces. Examples: 5 000, 10 000, 100 000, 12 000, 15 001–19 999, 25 000, 3 000–5 000, 330 000, 35 000</li>
<li>This corpus contains 148 types of words that contain both letters and punctuation. Examples: f.Kr., USA:s, 1960-talet, 1970-talet, 700-talet, St., 1500-talet, 1900-talet, 1980-talet, 1990-talet, B.C., Joliot-Curie, Qing-dynastins, e-post, e-postmeddelanden, e.Kr., 'Ya, 10-veckorskursen, 1200-talet, 1300-talet, 1350-talet, 1400-talet, 18-åring, 1950-talet, 200-talet, 2000-talet, 28-åringen, 3%-räntan, 400-tal, 400-talet, 45:e, 500-talet, 53-åringen, 60-talshiten, 800-talet, AKP:s, Amarna-breven, Australien-laget, B-29:or, BBC:s, BNP-tillväxten, Beijing-vänliga, Bian-kanalen, Buena-trädgården, CNN-reportrar, CRTC-utfrågningar, Cecelia-konservatoriet, Century-utmärkelserna, Chilia-armen, Conte-distrikten</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a></li>
<li>This corpus does not use the following tags: X</li>
<li>This corpus contains 1 word types tagged as particles (PART): att</li>
</ul>

<ul>
<li>This corpus contains 41 lemmas tagged as pronouns (PRON): alla, allt, alltihop, allting, alltsammans, andra, annat, båda, de, den, denna, dessa, det, detta, du, en, ett, fler, han, hon, ingen, inget, intet, jag, man, mycket, många, mångt, ni, någon, något, några, sig, som, vad, varandra, vem, vi, vilka, vilken, vilket</li>
</ul>

<ul>
<li>This corpus contains 30 lemmas tagged as determiners (DET): A, Die, El, Las, Le, all, bådas, den, denna, dennes, deras, dess, din, en, ens, er, hans, hennes, ingen, min, någon, samma, sin, that, the, varje, vars, vilkas, vilken, vår</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: den, denna, en, ingen, någon, vilken</li>
</ul>

<ul>
<li>This corpus contains 15 lemmas tagged as auxiliaries (AUX): behöva, bli, bliva, böra, få, ha, komma, kunna, må, måste, skola, var, vara, verka, vilja</li>
</ul>

<ul>
<li>Out of the above, 12 lemmas occurred sometimes as AUX and sometimes as VERB: behöva, bli, bliva, få, ha, komma, kunna, må, skola, vara, verka, vilja</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: är, var, har, kan, hade, skulle, kommer, kunde, måste, ville</li>
    <li>VERB: har, sade, hade, finns, säger, började, blev, kommer, gjorde, tog</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: vara, ha, kunna, behöva, bli, få, vilja</li>
    <li>VERB: ha, få, göra, ta, gå, se, bli, hjälpa, spela, använda</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>ADJ: betydande, sett, följande, kända, allierade, känd, levande, omfattande, regisserad, anställd</li>
    <li>VERB: förlorad, tvungen</li>
  </ul>
  </li>
  <li>Sup
  <ul>
    <li>AUX: varit, blivit, kunnat</li>
    <li>VERB: blivit, gjort, beslutat, fått, gått, haft, kommit, sett, skrivit, ansett</li>
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
        <li>ADJ: stor, lång, egen, ensam, hög, liten, modern, politisk, ekonomisk, kort</li>
        <li>ADJ-Part: känd, regisserad, anställd, gift, intresserad, samlad, utgiven, Designad, Grundad, Nedgrävd</li>
        <li>DET: en, den, sin, denna, någon, min, ingen, all, vår, din</li>
        <li>NOUN: personer, miljoner, del, grund, oktober, världen, delen, tiden, plats, dollar</li>
        <li>NUM: en</li>
        <li>PRON: han, jag, hon, den, vi, honom, en, du, henne, oss</li>
        <li>VERB-Part: förlorad, tvungen</li>
      </ul>
    </li>
    <li>Masc
      <ul>
        <li>ADJ: egyptiske, misstänkte, Like, Simple, anglikanske, belgiske, brittiske, demokratiske, dominikanske, högste</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>ADJ: sett, annat, nytt, otroligt, öppet, allmänt, möjligt, stort, dåligt, eget</li>
        <li>ADJ-Part: sett, inräknat, känt, Format, Uttryckt, begränsat, bevakat, beväpnat, delat, drivet</li>
        <li>DET: ett, det, sitt, detta, något, inget, vårt, vilket, De, allt</li>
        <li>NOUN: år, havet, fall, kriget, liv, antal, barn, åren, land, slutet</li>
        <li>NUM: ett</li>
        <li>PRON: det, detta, vad, vilket, ett, mycket, allt, allting, inget, något</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>ADJ: många, flera, andra, nya, stora, olika, fler, små, vissa, båda</li>
        <li>ADJ-Part: allierade, kända, inblandade, kombinerade, kvalificerade, misstänkta, samlade, Finansierade, avlidna, beskattade</li>
        <li>DET: de, sina, alla, dessa, några, våra, inga, dina, era, mina</li>
        <li>NOUN: år, personer, miljoner, dollar, barn, människor, åren, delar, företag, gånger</li>
        <li>PRON: de, vi, dem, vilka, oss, alla, många, andra, dessa, båda</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>ADJ: stor, hela, nya, södra, andra, lång, norra, brittiska, egen, ensam</li>
        <li>ADJ-Part: sett, känd, regisserad, anställd, fortsatt, gift, inräknat, intresserad, känt, samlad</li>
        <li>DET: en, den, ett, det, sin, denna, sitt, varje, detta, någon</li>
        <li>NOUN: havet, år, del, grund, oktober, världen, delen, kriget, liv, tiden</li>
        <li>NUM: en, ett</li>
        <li>PRON: det, han, jag, hon, den, detta, honom, vad, en, vilket</li>
        <li>VERB-Part: förlorad, tvungen</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>PRON: sig, honom, dem, henne, oss, mig, dig, er, sej, varandra</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>ADJ: ofattbaras</li>
        <li>NOUN: stadens, världens, års, företagets, dussintals, flodens, havets, jordens, regeringens, regissörens</li>
        <li>PROPN: USA:s, Kinas, Kongs, Australiens, Clintons, Disneys, Doss, Hitchcocks, Medelhavets, Rysslands</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>ADJ: första, andra, nya, många, flera, stora, stor, hela, senaste, sista</li>
        <li>ADJ-Part: betydande, sett, följande, kända, allierade, känd, levande, omfattande, regisserad, anställd</li>
        <li>NOUN: år, havet, personer, fall, miljoner, del, grund, oktober, världen, delen</li>
        <li>NUM: två, tre, fyra, 1, sex, 10, tio, 000, 2014, 2015</li>
        <li>PRON: han, de, jag, hon, vi, du, man, ni</li>
        <li>PROPN: Kina, Storbritannien, of, Trump, USA, Frankrike, Hong, Italien, Medelhavet, North</li>
        <li>VERB-Part: förlorad, tvungen</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>ADJ: hela, senaste, nya, sista, högsta, största, södra, andra, bästa, främsta</li>
        <li>ADJ-Part: Förenade, använda, bildade, bundna, frusna, frånskilda, förbättrade, hyllade, icke-vita, idealiserade</li>
        <li>DET: den, de, det, hans, sin, sina, dess, deras, hennes, denna</li>
        <li>NOUN: havet, världen, delen, kriget, tiden, gången, regeringen, regionen, staden, åren</li>
        <li>PRON: det, han, de, sig, jag, hon, den, vi, detta, honom</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>ADJ: flera, stor, fler, lång, ensam, hög, liten, modern, politisk, sett</li>
        <li>ADJ-Part: sett, känd, regisserad, anställd, fortsatt, gift, inräknat, intresserad, känt, samlad</li>
        <li>DET: en, ett, samma, varje, några, någon, något, ingen, inget, a</li>
        <li>NOUN: år, personer, fall, miljoner, del, grund, oktober, liv, plats, antal</li>
        <li>NUM: en, ett</li>
        <li>PRON: vad, en, vilket, vilka, alla, många, andra, ett, mycket, allt</li>
        <li>VERB-Part: förlorad, tvungen</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: större, högre, mer, tidigare, senare, färre, mindre, ytterligare, yttre, äldre</li>
        <li>ADV: mer, senare, tidigare, längre, bättre, mindre, hellre, snarare, närmare, vidare</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: nya, andra, många, flera, stora, stor, hela, brittiska, olika, fler</li>
        <li>ADV: helt, mycket, ofta, väldigt, djupt, långt, direkt, lite, väl, faktiskt</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: senaste, sista, högsta, största, bästa, främsta, bäst, flesta, mesta, värsta</li>
        <li>ADV: mest, sist, främst, värst, Minst, helst, ytterst, knappast</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Polarity</a>
  <ul>
    <li>Neg
      <ul>
        <li>ADV: inte, aldrig, icke, ej, föga, knappast</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Verbal Features</h3>


<li><a>Mood</a>
  <ul>
    <li>Imp
      <ul>
        <li>VERB-Fin: Låt, Släpp, Spola</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>ADJ-Part: betydande, följande, levande, omfattande, beroende, dominerande, närvarande, omgivande, sittande, självstyrande</li>
        <li>AUX-Fin: är, var, har, kan, hade, skulle, kommer, kunde, måste, ville</li>
        <li>VERB-Fin: har, sade, hade, finns, säger, började, blev, kommer, gjorde, tog</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Tense</a>
  <ul>
    <li>Past
      <ul>
        <li>ADJ-Part: sett, kända, allierade, känd, regisserad, anställd, fortsatt, gift, inblandade, inräknat</li>
        <li>AUX-Fin: var, hade, skulle, kunde, ville, borde, behövde, fick, varade</li>
        <li>VERB-Fin: sade, hade, började, blev, gjorde, tog, användes, skrev, spelade, berättade</li>
        <li>VERB-Part: förlorad, tvungen</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>ADJ-Part: betydande, följande, levande, omfattande, beroende, dominerande, närvarande, omgivande, sittande, självstyrande</li>
        <li>AUX-Fin: är, har, kan, kommer, måste, ska, vill, bör, får, må</li>
        <li>VERB-Fin: har, finns, säger, kommer, börjar, står, ger, hjälper, inkluderar, innehåller</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Voice</a>
  <ul>
    <li>Act
      <ul>
        <li>AUX-Fin: är, var, har, kan, hade, skulle, kommer, kunde, måste, ville</li>
        <li>AUX-Inf: vara, ha, kunna, behöva, bli, få, vilja</li>
        <li>AUX-Sup: varit, blivit, kunnat</li>
        <li>VERB-Fin: har, sade, hade, säger, började, blev, kommer, gjorde, tog, börjar</li>
        <li>VERB-Inf: ha, få, göra, ta, gå, se, bli, hjälpa, spela, använda</li>
        <li>VERB-Sup: blivit, gjort, beslutat, fått, gått, haft, kommit, sett, skrivit, ansett</li>
      </ul>
    </li>
    <li>Pass
      <ul>
        <li>VERB-Fin: finns, användes, fanns, lyckades, anses, behövs, bildades, föddes, förstördes, gavs</li>
        <li>VERB-Inf: finnas, ses, tillämpas, bebyggas, behövas, erbjudas, firas, flockas, flygas, förvaras</li>
        <li>VERB-Sup: använts, lämnats, odlats, rapporterats, setts, skrivits, accepterats, administrerats, anklagats, betonats</li>
      </ul>
    </li>
  </ul>
</li>


<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Art
      <ul>
        <li>DET: den, det</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>PRON: mycket</li>
      </ul>
    </li>
    <li>Int,Rel
      <ul>
        <li>ADV: när, där, då, hur, varför, som, dit, var, varav</li>
        <li>DET: vars, vilket, vilkas, vilken</li>
        <li>PRON: som, vad, vilket, vilka, vem, vilken</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Poss</a>
  <ul>
    <li>Yes
      <ul>
        <li>DET: hans, sin, sina, dess, deras, hennes, sitt, min, vars, vår</li>
      </ul>
    </li>
  </ul>
</li>






<h3>Other Features</h3>

<li><a>Abbr</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADV: f.Kr., ca, e.Kr., fvt</li>
        <li>CCONJ: &</li>
        <li>NOUN: %, f.Kr., md, Mps, nr, AIDS, BA, C, Mrs, RHS</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>ADP: Really, Father, Love</li>
        <li>NOUN: Business, Didn't, Go, Her, Over, Protection, Rasa, Return, Services, Show</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: vara, var.</li>
<li>This corpus uses 13 lemmas as auxiliaries (<a>aux</a>). Examples: ha, kunna, skola, komma, måste, vilja, böra, få, behöva, må, Don't, didn't, verka.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: bli, bliva, ha.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (6)</li>
      <li>VERB-Fin--NOUN-ADP(On) (1)</li>
      <li>VERB-Fin--NOUN-Nom (358)</li>
      <li>VERB-Fin--NOUN-Nom-ADP(runt) (1)</li>
      <li>VERB-Fin--PRON (181)</li>
      <li>VERB-Fin--PRON-Nom (178)</li>
      <li>VERB-Inf--NOUN-Nom (51)</li>
      <li>VERB-Inf--PRON (26)</li>
      <li>VERB-Inf--PRON-Nom (42)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
      <li>VERB-Sup--NOUN (1)</li>
      <li>VERB-Sup--NOUN-Nom (53)</li>
      <li>VERB-Sup--PRON (26)</li>
      <li>VERB-Sup--PRON-Nom (25)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (1)</li>
      <li>VERB-Fin--NOUN-Gen (1)</li>
      <li>VERB-Fin--NOUN-Nom (370)</li>
      <li>VERB-Fin--PRON (23)</li>
      <li>VERB-Fin--PRON-Acc (52)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--NOUN-Nom (249)</li>
      <li>VERB-Inf--PRON (20)</li>
      <li>VERB-Inf--PRON-Acc (13)</li>
      <li>VERB-Sup--NOUN (1)</li>
      <li>VERB-Sup--NOUN-Nom (60)</li>
      <li>VERB-Sup--NOUN-Nom-ADP(på) (1)</li>
      <li>VERB-Sup--PRON (8)</li>
      <li>VERB-Sup--PRON-Acc (10)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN-Nom (3)</li>
      <li>VERB-Fin--PRON-Acc (8)</li>
      <li>VERB-Inf--NOUN-Nom (3)</li>
      <li>VERB-Inf--PRON-Acc (8)</li>
    </ul>
  </li>
</ul>




<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
