---
layout: base
title:  'UD_Dutch'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Dutch

Language: [Dutch](../nl/overview/nl-hub.html) (code: `nl`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Zdeněk Žabokrtský, Gosse Bouma, Gertjan van Noord.

Repository: [UD_Dutch](https://github.com/UniversalDependencies/UD_Dutch)

License: CC BY-SA 4.0

Genre: news

Questions, comments?
General annotation questions (either Dutch-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Dutch/issues).
If you want to collaborate, please contact [g&nbsp;•&nbsp;bouma&nbsp;(æt)&nbsp;rug&nbsp;•&nbsp;nl].
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

This corpus consists of samples from various treebanks annotated at the University of Groningen using the Alpino annotation tools and guidelines.



The data consists of samples from various treebanks annotated at the University of Groningen using the Alpino annotation tools and guidelines:

* train consists of material from the original Alpino CD-ROM (file id 'cdb' 7000+ sentences from the Eindhoven corpus), questions using in a QA project (file ids with qa and wpspel), material from suites used for grammar maintenance (id: g_suite, h_suite, leuven_yellow_pages), example sentence from the Dutch reference grammar ANS (eans), and the WR-P-P-H section of the Lassy Small corpus
* dev consists of material from the WR-P-P-H section of the Lassy Small corpus
* test consists of material from the WR-P-P-H and WR-P-P-L sections of the Lassy Small corpus

The data was thoroughly revised by Gosse Bouma and Gertjan van Noord for UD 2.1 in November 2017.
The new version was created using the same conversion script as was used for Dutch LassySmall.
As sources, we used the (manually corrected) Alpino treebank annotation for this material as it is
available in Groningen. Links to original files have been added. Note that tokenization may differ
from the previous UD version.

The conversion script can be found here: https://github.com/gossebouma/lassy2ud

## Acknowledgments


# Statistics of UD Dutch

## POS Tags

[ADJ](nl-pos-ADJ.html) – [ADP](nl-pos-ADP.html) – [ADV](nl-pos-ADV.html) – [AUX](nl-pos-AUX.html) – [CCONJ](nl-pos-CCONJ.html) – [DET](nl-pos-DET.html) – [INTJ](nl-pos-INTJ.html) – [NOUN](nl-pos-NOUN.html) – [NUM](nl-pos-NUM.html) – [PRON](nl-pos-PRON.html) – [PROPN](nl-pos-PROPN.html) – [PUNCT](nl-pos-PUNCT.html) – [SCONJ](nl-pos-SCONJ.html) – [SYM](nl-pos-SYM.html) – [VERB](nl-pos-VERB.html) – [X](nl-pos-X.html)

## Features

[Abbr](nl-feat-Abbr.html) – [Case](nl-feat-Case.html) – [Definite](nl-feat-Definite.html) – [Degree](nl-feat-Degree.html) – [Foreign](nl-feat-Foreign.html) – [Gender](nl-feat-Gender.html) – [Number](nl-feat-Number.html) – [Person](nl-feat-Person.html) – [PronType](nl-feat-PronType.html) – [Reflex](nl-feat-Reflex.html) – [Tense](nl-feat-Tense.html) – [VerbForm](nl-feat-VerbForm.html)

## Relations

[acl](nl-dep-acl.html) – [acl:relcl](nl-dep-acl-relcl.html) – [advcl](nl-dep-advcl.html) – [advmod](nl-dep-advmod.html) – [amod](nl-dep-amod.html) – [appos](nl-dep-appos.html) – [aux](nl-dep-aux.html) – [aux:pass](nl-dep-aux-pass.html) – [case](nl-dep-case.html) – [cc](nl-dep-cc.html) – [ccomp](nl-dep-ccomp.html) – [compound:prt](nl-dep-compound-prt.html) – [conj](nl-dep-conj.html) – [cop](nl-dep-cop.html) – [csubj](nl-dep-csubj.html) – [det](nl-dep-det.html) – [expl](nl-dep-expl.html) – [fixed](nl-dep-fixed.html) – [flat:name](nl-dep-flat-name.html) – [iobj](nl-dep-iobj.html) – [mark](nl-dep-mark.html) – [nmod](nl-dep-nmod.html) – [nmod:poss](nl-dep-nmod-poss.html) – [nsubj](nl-dep-nsubj.html) – [nsubj:pass](nl-dep-nsubj-pass.html) – [nummod](nl-dep-nummod.html) – [obj](nl-dep-obj.html) – [obl](nl-dep-obl.html) – [parataxis](nl-dep-parataxis.html) – [punct](nl-dep-punct.html) – [root](nl-dep-root.html) – [xcomp](nl-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>

<ul>
<li>This corpus contains 13583 sentences and 208633 tokens.</li>
<li>This corpus contains 21728 tokens (10%) that are not followed by a space.</li>
<li>This corpus does not contain words with spaces.</li>
<li>This corpus contains 1464 types of words that contain both letters and punctuation. Examples: J., mr., dr., zo'n, 't, H., a., 's, C., W., M., drs., B., prof., G., p., pct., d., R., 'n, F., L., o.a., K., Zuid-Afrika, T., z'n, v., S., auto's, jl., n.v., E., ir., Sovjet-Unie, St., West-Duitsland, o.m., Noord-Korea, mln., D'66, a.s., binnen-, m'n, mevr., Mina's, Oost-Berlijn, directeur-generaal, ds., etc.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART</li>
</ul>

<ul>
<li>This corpus contains 79 lemmas tagged as pronouns (PRON): al, allebei, alles, beide, da, dat, datgene, degene, deze, die, diegene, dien, dit, een, elk, elkaar, enig, enkele, ge, geen, gij, ginds, haar, haarzelf, hare, hem, hemzelf, hen, het, hetgeen, hetgene, hij, hijzelf, hun, ieder, iedereen, iemand, iets, ik, je, jezelf, jij, jou, jullie, m'n, me, meerdere, men, mezelf, mij, mijn, minder, mindere, minst, niemand, niets, niks, ons, onszelf, sommig, teveel, u, uw, veel, wat, we, weinig, welk, wie, wij, ze, zich, zichzelf, zij, zijn, zijzelf, zo'n, zoiets, zulk</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as determiners (DET): 's, al, andermans, beide, dat, de, den, der, des, deze, die, dien, dit, een, elk, elkaar, enig, enkel, enkele, geen, het, ieder, meerdere, menig, minder, niemand, sommig, teveel, veel, wat, weinig, welk, wie, zo'n, zulk</li>
</ul>

<ul>
<li>Out of the above, 27 lemmas occurred sometimes as PRON and sometimes as DET: al, beide, dat, deze, die, dien, dit, een, elk, elkaar, enig, enkele, geen, het, ieder, meerdere, minder, niemand, sommig, teveel, veel, wat, weinig, welk, wie, zo'n, zulk</li>
</ul>

<ul>
<li>This corpus contains 65 lemmas tagged as auxiliaries (AUX): aandoen, achten, bedoelen, beschouwen, blijken, blijven, brengen, dat_zijn, dienen, doen, fungeren, gaan, gelden, geven, gooien, hangen, hebben, heten, hoeven, houden, kleuren, klinken, komen, kunnen, laten, liggen, lijken, lopen, luiden, maken, moeten, mogen, noemen, ogen, optreden, opvatten, raken, schijnen, slaan, smaken, springen, staan, stellen, stemmen, sukkelen, tellen, tillen, treden, uitvallen, vallen, vastleggen, verklaren, veronderstellen, vinden, vliegen, voelen, werken, wezen, wijzen, willen, worden, zien, zijn, zitten, zullen</li>
</ul>

<ul>
<li>Out of the above, 61 lemmas occurred sometimes as AUX and sometimes as VERB: aandoen, achten, bedoelen, beschouwen, blijken, blijven, brengen, dienen, doen, gaan, gelden, geven, gooien, hangen, hebben, heten, hoeven, houden, kleuren, klinken, komen, kunnen, laten, liggen, lijken, lopen, luiden, maken, moeten, mogen, noemen, optreden, opvatten, raken, schijnen, slaan, springen, staan, stellen, stemmen, sukkelen, tellen, tillen, treden, uitvallen, vallen, vastleggen, verklaren, veronderstellen, vinden, vliegen, voelen, werken, wezen, wijzen, willen, worden, zien, zijn, zitten, zullen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a>
<ul>
  <li>Fin
  <ul>
    <li>AUX: is, was, heeft, werd, wordt, zijn, zal, zou, kan, hebben</li>
    <li>VERB: moet, heeft, komt, is, zei, noemt, hebben, zijn, kwam, ligt</li>
  </ul>
  </li>
  <li>Inf
  <ul>
    <li>AUX: worden, zijn, kunnen, hebben, gaan, willen, laten, blijven, zullen, mogen</li>
    <li>VERB: komen, moeten, maken, zien, doen, gaan, nemen, zeggen, geven, hebben</li>
  </ul>
  </li>
  <li>Part
  <ul>
    <li>AUX: geweest, geworden, gegaan, gebleven, geraakt, gekomen, gebleken, gemaakt, gevonden, liggende</li>
    <li>VERB: gemaakt, gehouden, genoemd, genomen, gedaan, afgelopen, gegeven, gekomen, gezien, gesteld</li>
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
        <li>NOUN: heer, plaats, tijd, minister, flo, stad, man, dag, week, politie</li>
        <li>PROPN: zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, april</li>
      </ul>
    </li>
    <li>Com,Neut
      <ul>
        <li>NOUN: soort, boord, keer, paar, subsidie, opium, punt, accordeon, affiche, animo</li>
        <li>PROPN: Holthaus, WK, Bijlmerbetonmeer, Enkelaar, Enusa, Europe, Gezant, Hoch, Hoornik, Kvp</li>
      </ul>
    </li>
    <li>Neut
      <ul>
        <li>NOUN: jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</li>
        <li>PROPN: Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Number</a>
  <ul>
    <li>Plur
      <ul>
        <li>AUX-Fin: zijn, hebben, worden, zullen, waren, werden, kunnen, zouden, hadden, willen</li>
        <li>NOUN: mensen, kinderen, jaren, problemen, zaken, landen, boeken, dagen, vrouwen, weken</li>
        <li>PROPN: Italianen, Nederlanders, GGD-en, Egyptenaren, Rabo's, Surinamers, Cubanen, Nederlanden, Zuid-Amerikanen, Afrikanen</li>
        <li>VERB-Fin: hebben, zijn, moeten, komen, gaan, kwamen, hadden, krijgen, moesten, konden</li>
      </ul>
    </li>
    <li>Sing
      <ul>
        <li>AUX-Fin: is, was, heeft, werd, wordt, zal, zou, kan, heet, had</li>
        <li>NOUN: jaar, land, heer, plaats, tijd, minister, flo, uur, stad, man</li>
        <li>PROPN: Nederland, Amsterdam, zaterdag, Groningen, Rotterdam, Europa, Engeland, januari, zondag, JGZ</li>
        <li>VERB-Fin: moet, heeft, komt, is, zei, noemt, kwam, ligt, staat, gaat</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Case</a>
  <ul>
    <li>Acc
      <ul>
        <li>PRON: zich, hem, me, ons, mij, elkaar, haar, hen, je, zichzelf</li>
      </ul>
    </li>
    <li>Dat
      <ul>
        <li>PRON: dien, dezen</li>
      </ul>
    </li>
    <li>Gen
      <ul>
        <li>PRON: beider, uwer, zijner</li>
      </ul>
    </li>
    <li>Nom
      <ul>
        <li>PRON: hij, ik, we, men, je, zij, wij, u, jij, ie</li>
      </ul>
    </li>
  </ul>
</li>


<li><a>Definite</a>
  <ul>
    <li>Def
      <ul>
        <li>DET: de, het, der, 's, 't, den, des, dé</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>DET: een, 'n, en</li>
      </ul>
    </li>
  </ul>
</li>

<h3>Degree and Polarity</h3>

<li><a>Degree</a>
  <ul>
    <li>Cmp
      <ul>
        <li>ADJ: verder, beter, later, jongeren, langer, groter, grotere, hoger, vroeger, vroegere</li>
      </ul>
    </li>
    <li>Pos
      <ul>
        <li>ADJ: nieuwe, grote, andere, Nederlandse, goed, heel, groot, goede, Amerikaanse, eigen</li>
      </ul>
    </li>
    <li>Sup
      <ul>
        <li>ADJ: laatste, grootste, beste, belangrijkste, hoogste, best, hoogst, jongste, voornaamste, oudste</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Verbal Features</h3>



<li><a>Tense</a>
  <ul>
    <li>Past
      <ul>
        <li>AUX-Fin: was, werd, zou, had, waren, werden, kon, zouden, hadden, wilde</li>
        <li>VERB-Fin: zei, kwam, had, was, moest, vond, kreeg, vroeg, won, maakte</li>
      </ul>
    </li>
    <li>Pres
      <ul>
        <li>AUX-Fin: is, heeft, wordt, zijn, zal, kan, hebben, heet, heb, worden</li>
        <li>VERB-Fin: moet, heeft, komt, is, noemt, hebben, zijn, ligt, staat, gaat</li>
      </ul>
    </li>
  </ul>
</li>



<h3>Pronouns, Determiners, Quantifiers</h3>

<li><a>PronType</a>
  <ul>
    <li>Dem
      <ul>
        <li>PRON: dat, dit, die, deze, zo'n, degenen, datgene, degene, zulke, dien</li>
      </ul>
    </li>
    <li>Ind
      <ul>
        <li>PRON: meer, veel, minder, weinig, iets, vele, niets, wat, meest, alles</li>
      </ul>
    </li>
    <li>Int
      <ul>
        <li>PRON: wat, wie, welke, welk</li>
      </ul>
    </li>
    <li>Prs
      <ul>
        <li>PRON: hij, ik, het, zijn, zich, ze, we, je, men, hun</li>
      </ul>
    </li>
    <li>Rcp
      <ul>
        <li>PRON: elkaar</li>
      </ul>
    </li>
    <li>Rel
      <ul>
        <li>PRON: die, dat, hetgeen, hetgene</li>
      </ul>
    </li>
  </ul>
</li>



<li><a>Reflex</a>
  <ul>
    <li>Yes
      <ul>
        <li>PRON: zich, zichzelf</li>
      </ul>
    </li>
  </ul>
</li>

<li><a>Person</a>
  <ul>
    <li>1
      <ul>
        <li>PRON: ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</li>
      </ul>
    </li>
    <li>2
      <ul>
        <li>PRON: je, u, jullie, jij, jou, uw, gij, jouw, ge, jezelf</li>
      </ul>
    </li>
    <li>3
      <ul>
        <li>PRON: hij, het, dat, zijn, wat, zich, ze, wie, men, hun</li>
      </ul>
    </li>
  </ul>
</li>




<h3>Other Features</h3>

<li><a>Abbr</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: o.a., jl., o.m., Ad, a.s., etc., v.j., enz., b.v., e.d.</li>
      </ul>
    </li>
  </ul>
</li>
<li><a>Foreign</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: fancy, a, the, and, front, to, National, be, fiction, flo</li>
      </ul>
    </li>
  </ul>
</li>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 62 lemmas as copulas (<a>cop</a>). Examples: zijn, worden, heten, blijven, lijken, gaan, komen, vinden, staan, maken, blijken, raken, liggen, zien, zitten, kunnen, vallen, treden, werken, achten, gelden, klinken, moeten, dienen, doen, fungeren, optreden, stemmen, hebben, houden, luiden, laten, voelen, beschouwen, geven, hangen, noemen, ogen, smaken, wezen, aandoen, bedoelen, brengen, dat_zijn, gooien, kleuren, lopen, opvatten, schijnen, slaan.</li>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, zullen, zijn, kunnen, willen, gaan, mogen, laten, blijken, hoeven.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: worden, zijn.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (3473)</li>
      <li>VERB-Fin--NOUN-ADP(op) (1)</li>
      <li>VERB-Fin--PRON (1668)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (2492)</li>
      <li>VERB-Inf--NOUN (597)</li>
      <li>VERB-Inf--PRON (318)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Nom (593)</li>
      <li>VERB-Part--NOUN (911)</li>
      <li>VERB-Part--PRON (554)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (522)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (2771)</li>
      <li>VERB-Fin--NOUN-ADP(voor) (1)</li>
      <li>VERB-Fin--PRON (516)</li>
      <li>VERB-Fin--PRON-Acc (447)</li>
      <li>VERB-Fin--PRON-Acc-ADP(achter) (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(bij) (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(met) (7)</li>
      <li>VERB-Fin--PRON-Acc-ADP(tot) (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(van) (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(voor) (2)</li>
      <li>VERB-Fin--PRON-Nom (4)</li>
      <li>VERB-Inf--NOUN (1459)</li>
      <li>VERB-Inf--NOUN-ADP(voor) (1)</li>
      <li>VERB-Inf--PRON (269)</li>
      <li>VERB-Inf--PRON-Acc (187)</li>
      <li>VERB-Inf--PRON-Acc-ADP(bij) (1)</li>
      <li>VERB-Inf--PRON-Acc-ADP(op) (1)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (804)</li>
      <li>VERB-Part--PRON (183)</li>
      <li>VERB-Part--PRON-Acc (114)</li>
      <li>VERB-Part--PRON-Acc-ADP(achter) (1)</li>
      <li>VERB-Part--PRON-Acc-ADP(om)-ADP(heen) (1)</li>
      <li>VERB-Part--PRON-Acc-ADP(voor) (1)</li>
      <li>VERB-Part--PRON-Nom (2)</li>
      <li>VERB-Part--PRON-Nom-ADP(tot) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (61)</li>
      <li>VERB-Fin--NOUN-ADP(aan) (1)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-ADP(aan) (1)</li>
      <li>VERB-Fin--PRON-Acc (120)</li>
      <li>VERB-Fin--PRON-Nom (5)</li>
      <li>VERB-Inf--NOUN (45)</li>
      <li>VERB-Inf--NOUN-ADP(aan) (1)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Inf--PRON-ADP(aan) (1)</li>
      <li>VERB-Inf--PRON-Acc (40)</li>
      <li>VERB-Inf--PRON-Nom (4)</li>
      <li>VERB-Part--NOUN (48)</li>
      <li>VERB-Part--NOUN-ADP(aan) (2)</li>
      <li>VERB-Part--PRON (3)</li>
      <li>VERB-Part--PRON-ADP(aan) (2)</li>
      <li>VERB-Part--PRON-Acc (55)</li>
      <li>VERB-Part--PRON-Nom (5)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 213 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: bevinden zich, maken zich, houden zich, laten zich, voelen zich, bewust zich, stellen zich, tonen zich, melden zich, plaatsen zich, voordoen zich, ontwikkelen zich, vraag zich, richten zich, bewegen zich, bezighouden zich, doen zich, afvragen zich, begeven zich, beraden zich, brengen zich, concentreren zich, opstellen zich, sluiten zich, vergissen zich, aanmelden zich, gedragen zich, handhaven zich, herstellen zich, spelen zich, strekken zich, uitspreken zich, voltrekken zich, wagen zich, wreken zich, beperken zich, breiden zich, buigen zich, mengen zich, nemen zich, permitteren zich, schamen zich, spreken zich, toeleggen zich, verklaren zich, verzetten zich, achten zich, afscheiden zich, afspelen zich, bemoeien zich</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>compound</a>, <a>flat</a></li>
<li>The following 9 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
