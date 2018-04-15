---
layout: base
title:  'UD_Dutch-Alpino'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Dutch Alpino

Language: [Dutch](../nl/overview/nl-hub.html) (code: `nl`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Zdeněk Žabokrtský, Gosse Bouma, Gertjan van Noord.

Repository: [UD_Dutch-Alpino](https://github.com/UniversalDependencies/UD_Dutch-Alpino)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udnl_alpino)

License: CC BY-SA 4.0

Genre: news

Questions, comments?
General annotation questions (either Dutch-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Dutch-Alpino/issues).
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


# Statistics of UD Dutch Alpino

## POS Tags

[ADJ](nl_alpino-pos-ADJ.html) – [ADP](nl_alpino-pos-ADP.html) – [ADV](nl_alpino-pos-ADV.html) – [AUX](nl_alpino-pos-AUX.html) – [CCONJ](nl_alpino-pos-CCONJ.html) – [DET](nl_alpino-pos-DET.html) – [INTJ](nl_alpino-pos-INTJ.html) – [NOUN](nl_alpino-pos-NOUN.html) – [NUM](nl_alpino-pos-NUM.html) – [PRON](nl_alpino-pos-PRON.html) – [PROPN](nl_alpino-pos-PROPN.html) – [PUNCT](nl_alpino-pos-PUNCT.html) – [SCONJ](nl_alpino-pos-SCONJ.html) – [SYM](nl_alpino-pos-SYM.html) – [VERB](nl_alpino-pos-VERB.html) – [X](nl_alpino-pos-X.html)

## Features

[Abbr](nl_alpino-feat-Abbr.html) – [Case](nl_alpino-feat-Case.html) – [Definite](nl_alpino-feat-Definite.html) – [Degree](nl_alpino-feat-Degree.html) – [Foreign](nl_alpino-feat-Foreign.html) – [Gender](nl_alpino-feat-Gender.html) – [Number](nl_alpino-feat-Number.html) – [Person](nl_alpino-feat-Person.html) – [PronType](nl_alpino-feat-PronType.html) – [Reflex](nl_alpino-feat-Reflex.html) – [Tense](nl_alpino-feat-Tense.html) – [VerbForm](nl_alpino-feat-VerbForm.html)

## Relations

[acl](nl_alpino-dep-acl.html) – [acl:relcl](nl_alpino-dep-acl-relcl.html) – [advcl](nl_alpino-dep-advcl.html) – [advmod](nl_alpino-dep-advmod.html) – [amod](nl_alpino-dep-amod.html) – [appos](nl_alpino-dep-appos.html) – [aux](nl_alpino-dep-aux.html) – [aux:pass](nl_alpino-dep-aux-pass.html) – [case](nl_alpino-dep-case.html) – [cc](nl_alpino-dep-cc.html) – [ccomp](nl_alpino-dep-ccomp.html) – [compound:prt](nl_alpino-dep-compound-prt.html) – [conj](nl_alpino-dep-conj.html) – [cop](nl_alpino-dep-cop.html) – [csubj](nl_alpino-dep-csubj.html) – [det](nl_alpino-dep-det.html) – [expl](nl_alpino-dep-expl.html) – [expl:pv](nl_alpino-dep-expl-pv.html) – [fixed](nl_alpino-dep-fixed.html) – [flat:name](nl_alpino-dep-flat-name.html) – [iobj](nl_alpino-dep-iobj.html) – [mark](nl_alpino-dep-mark.html) – [nmod](nl_alpino-dep-nmod.html) – [nmod:poss](nl_alpino-dep-nmod-poss.html) – [nsubj](nl_alpino-dep-nsubj.html) – [nsubj:pass](nl_alpino-dep-nsubj-pass.html) – [nummod](nl_alpino-dep-nummod.html) – [obj](nl_alpino-dep-obj.html) – [obl](nl_alpino-dep-obl.html) – [obl:agent](nl_alpino-dep-obl-agent.html) – [orphan](nl_alpino-dep-orphan.html) – [parataxis](nl_alpino-dep-parataxis.html) – [punct](nl_alpino-dep-punct.html) – [root](nl_alpino-dep-root.html) – [xcomp](nl_alpino-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 13583 sentences and 208633 tokens.</li>
</ul>

<ul>
<li>This corpus contains 21728 tokens (10%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1464 types of words that contain both letters and punctuation. Examples: J., mr., dr., zo'n, 't, H., a., 's, C., W., M., drs., B., prof., G., p., pct., d., R., 'n, F., L., o.a., K., Zuid-Afrika, T., z'n, v., S., auto's, jl., n.v., E., ir., Sovjet-Unie, St., West-Duitsland, o.m., Noord-Korea, mln., D'66, a.s., binnen-, m'n, mevr., Mina's, Oost-Berlijn, directeur-generaal, ds., etc.</li>
</ul>

<ul>
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
<li>This corpus contains 79 lemmas tagged as pronouns (PRON): al, allebei, alles, beide, da, dat, datgene, degene, deze, die, diegene, dien, dit, een, elk, elkaar, enig, enkele, ge, geen, gij, ginds, haar, haarzelf, hare, hem, hemzelf, hen, het, hetgeen, hetgene, hij, hijzelf, hun, ieder, iedereen, iemand, iets, ik, je, jezelf, jij, jou, jullie, m'n, me, meerdere, men, mezelf, mij, mijn, minder, mindere, minst, niemand, niets, niks, ons, onszelf, sommig, teveel, u, uw, veel, wat, we, weinig, welk, wie, wij, ze, zich, zichzelf, zij, zijn, zijzelf, zo'n, zoiets, zulk</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as determiners (DET): 's, al, andermans, beide, dat, de, den, der, des, deze, die, dien, dit, een, elk, elkaar, enig, enkel, enkele, geen, het, ieder, meerdere, menig, minder, niemand, sommig, teveel, veel, wat, weinig, welk, wie, zo'n, zulk</li>
</ul>

<ul>
<li>Out of the above, 27 lemmas occurred sometimes as PRON and sometimes as DET: al, beide, dat, deze, die, dien, dit, een, elk, elkaar, enig, enkele, geen, het, ieder, meerdere, minder, niemand, sommig, teveel, veel, wat, weinig, welk, wie, zo'n, zulk</li>
</ul>

<ul>
<li>This corpus contains 14 lemmas tagged as auxiliaries (AUX): blijken, blijven, hebben, heten, hoeven, krijgen, kunnen, lijken, moeten, mogen, schijnen, worden, zijn, zullen</li>
</ul>

<ul>
<li>Out of the above, 14 lemmas occurred sometimes as AUX and sometimes as VERB: blijken, blijven, hebben, heten, hoeven, krijgen, kunnen, lijken, moeten, mogen, schijnen, worden, zijn, zullen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: is, was, heeft, werd, wordt, zijn, zal, zou, kan, hebben</li>
    <li>VERB: heeft, komt, wil, is, gaat, zei, kwam, noemt, ligt, hebben</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: worden, zijn, kunnen, moeten, hebben, blijven, zullen, mogen, hoeven, krijgen</li>
    <li>VERB: komen, gaan, maken, zien, doen, nemen, laten, zeggen, geven, brengen</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: geweest, geworden, gebleven, gebleken, gekregen, zijnde, gehad</li>
    <li>VERB: gemaakt, gehouden, genoemd, genomen, gedaan, afgelopen, gegeven, gekomen, gezien, gesteld</li>
  </ul>
  </li>
</ul>

<h3>Nominal Features</h3>


<li><a>Gender</a>

  <ul>
    <li>Com
      <ul>
        <li>NOUN: heer, plaats, tijd, minister, flo, stad, man, dag, week, politie</li>
        <li>PROPN: zaterdag, januari, zondag, JGZ, Robbert, mei, juli, september, vrijdag, God</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Com,Neut
      <ul>
        <li>NOUN: soort, boord, keer, paar, subsidie, opium, punt, accordeon, affiche, aperitief</li>
        <li>PROPN: Estonia, Financien, ARJOS, Beernink, Eeg, IOS, Munchen, SAR, VHO, Van</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Neut
      <ul>
        <li>NOUN: jaar, land, uur, aantal, deel, procent, huis, miljoen, werk, leven</li>
        <li>PROPN: Nederland, Amsterdam, Groningen, Rotterdam, Europa, Engeland, Aduard, Frankrijk, Utrecht, Ajax</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>



<li><a>Number</a>

  <ul>
    <li>Plur
      <ul>
        <li>AUX-Fin: zijn, hebben, worden, zullen, waren, werden, kunnen, zouden, moeten, hadden</li>
        <li>NOUN: mensen, kinderen, jaren, problemen, zaken, landen, boeken, dagen, vrouwen, weken</li>
        <li>PROPN: Italianen, Nederlanders, Egyptenaren, GGD-en, Surinamers, Chinezen, Europeanen, Friezen, Joden, Palestijnen</li>
        <li>VERB-Fin: hebben, zijn, gaan, willen, komen, kwamen, hadden, krijgen, waren, konden</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Sing
      <ul>
        <li>AUX-Fin: is, was, heeft, werd, wordt, zal, zou, kan, moet, heet</li>
        <li>NOUN: jaar, land, heer, plaats, tijd, minister, flo, uur, stad, man</li>
        <li>PROPN: Nederland, Amsterdam, zaterdag, Groningen, Rotterdam, Europa, Engeland, januari, zondag, JGZ</li>
        <li>VERB-Fin: heeft, komt, wil, is, gaat, zei, kwam, noemt, ligt, staat</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>

<li><a>Case</a>

  <ul>
    <li>Acc
      <ul>
        <li>PRON: zich, hem, me, ons, mij, elkaar, haar, hen, je, zichzelf</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Dat
      <ul>
        <li>PRON: dien, dezen</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Gen
      <ul>
        <li>PRON: beider, uwer, zijner</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Nom
      <ul>
        <li>PRON: hij, ik, we, men, je, zij, wij, u, jij, ie</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>



<li><a>Definite</a>

  <ul>
    <li>Def
      <ul>
        <li>DET: de, het, der, 's, 't, den, des, dé</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Ind
      <ul>
        <li>DET: een, 'n, en</li>
      </ul>
    </li>
  </ul>

  <ul>
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
  </ul>

  <ul>
    <li>Pos
      <ul>
        <li>ADJ: nieuwe, grote, andere, Nederlandse, goed, heel, groot, Amerikaanse, eigen, goede</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Sup
      <ul>
        <li>ADJ: laatste, grootste, beste, belangrijkste, hoogste, best, hoogst, jongste, voornaamste, oudste</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>





<h3>Verbal Features</h3>






<li><a>Tense</a>

  <ul>
    <li>Past
      <ul>
        <li>AUX-Fin: was, werd, zou, had, waren, werden, kon, zouden, moest, hadden</li>
        <li>VERB-Fin: zei, kwam, had, was, vond, kreeg, vroeg, maakte, won, ging</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Pres
      <ul>
        <li>AUX-Fin: is, heeft, wordt, zijn, zal, kan, hebben, moet, heet, heb</li>
        <li>VERB-Fin: heeft, komt, wil, is, gaat, noemt, ligt, hebben, zijn, staat</li>
      </ul>
    </li>
  </ul>

  <ul>
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
  </ul>

  <ul>
    <li>Ind
      <ul>
        <li>PRON: meer, veel, minder, weinig, iets, vele, niets, wat, meest, alles</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Int
      <ul>
        <li>PRON: wat, wie, welke, welk</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Prs
      <ul>
        <li>PRON: hij, ik, het, zijn, zich, ze, we, je, men, hun</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Rcp
      <ul>
        <li>PRON: elkaar</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>Rel
      <ul>
        <li>PRON: die, dat, hetgeen, hetgene</li>
      </ul>
    </li>
  </ul>

  <ul>
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

  <ul>
  </ul>
</li>

<li><a>Person</a>

  <ul>
    <li>1
      <ul>
        <li>PRON: ik, we, ons, wij, me, mijn, mij, onze, mezelf, m'n</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>2
      <ul>
        <li>PRON: je, u, jullie, jij, jou, uw, gij, jouw, ge, jezelf</li>
      </ul>
    </li>
  </ul>

  <ul>
    <li>3
      <ul>
        <li>PRON: hij, het, dat, zijn, wat, zich, ze, wie, men, hun</li>
      </ul>
    </li>
  </ul>

  <ul>
  </ul>
</li>







<h3>Other Features</h3>


<li><a>Abbr</a>
  <ul>
    <li>Yes
      <ul>
        <li>X: o.a., jl., o.m., a.s., etc., v.j., enz., b.v., e.d., j.l.</li>
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
<li>This corpus uses 7 lemmas as copulas (<a>cop</a>). Examples: zijn, worden, heten, blijven, lijken, blijken, schijnen.</li>
</ul>

<ul>
<li>This corpus uses 8 lemmas as auxiliaries (<a>aux</a>). Examples: hebben, zullen, zijn, kunnen, moeten, mogen, blijken, hoeven.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: worden, zijn, krijgen.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (3467)</li>
      <li>VERB-Fin--NOUN-ADP(op) (1)</li>
      <li>VERB-Fin--PRON (1687)</li>
      <li>VERB-Fin--PRON-Acc (1)</li>
      <li>VERB-Fin--PRON-Nom (2576)</li>
      <li>VERB-Inf--NOUN (602)</li>
      <li>VERB-Inf--PRON (303)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Nom (551)</li>
      <li>VERB-Part--NOUN (809)</li>
      <li>VERB-Part--PRON (275)</li>
      <li>VERB-Part--PRON-Acc (1)</li>
      <li>VERB-Part--PRON-Nom (511)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (2781)</li>
      <li>VERB-Fin--NOUN-ADP(voor) (1)</li>
      <li>VERB-Fin--PRON (520)</li>
      <li>VERB-Fin--PRON-Acc (209)</li>
      <li>VERB-Fin--PRON-Nom (2)</li>
      <li>VERB-Inf--NOUN (1438)</li>
      <li>VERB-Inf--NOUN-ADP(voor) (1)</li>
      <li>VERB-Inf--PRON (266)</li>
      <li>VERB-Inf--PRON-Acc (102)</li>
      <li>VERB-Inf--PRON-Nom (1)</li>
      <li>VERB-Part--NOUN (715)</li>
      <li>VERB-Part--PRON (182)</li>
      <li>VERB-Part--PRON-Acc (47)</li>
      <li>VERB-Part--PRON-Nom (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (66)</li>
      <li>VERB-Fin--NOUN-ADP(aan) (1)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-ADP(aan) (1)</li>
      <li>VERB-Fin--PRON-Acc (146)</li>
      <li>VERB-Fin--PRON-Nom (6)</li>
      <li>VERB-Inf--NOUN (45)</li>
      <li>VERB-Inf--NOUN-ADP(aan) (1)</li>
      <li>VERB-Inf--PRON (5)</li>
      <li>VERB-Inf--PRON-ADP(aan) (1)</li>
      <li>VERB-Inf--PRON-Acc (41)</li>
      <li>VERB-Inf--PRON-Nom (5)</li>
      <li>VERB-Part--NOUN (49)</li>
      <li>VERB-Part--NOUN-ADP(aan) (2)</li>
      <li>VERB-Part--PRON (3)</li>
      <li>VERB-Part--PRON-ADP(aan) (2)</li>
      <li>VERB-Part--PRON-Acc (55)</li>
      <li>VERB-Part--PRON-Nom (5)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 178 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: bevinden zich, voelen zich, bewust zich, laten zich, maken zich, tonen zich, melden zich, voordoen zich, ontwikkelen zich, plaatsen zich, vraag zich, bewegen zich, doen zich, houden zich, richten zich, afvragen zich, begeven zich, beraden zich, brengen zich, concentreren zich, opstellen zich, vergissen zich, aanmelden zich, gedragen zich, herstellen zich, spelen zich, stellen zich, uitspreken zich, voelen me, voelen ons, voltrekken zich, wagen zich, wreken zich, begeven ons, beperken zich, buigen zich, mengen zich, permitteren zich, schamen je, schamen zich, spreken zich, toeleggen zich, verzetten zich, vraag me, afscheiden zich, afspelen zich, afvragen ons, beklagen me, bemoeien zich, gaan zich</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 85 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: houden zich, stellen zich, bezighouden zich, handhaven zich, maken zich, breiden zich, laten zich, sluiten zich, strekken zich, achten zich, interesseren zich, noemen zich, omvormen zich, prikken zichzelf, redden zich, versterken zich, verwonden zichzelf, voorbereiden zich, wassen zich, wringen zich, zien zich, aaneensluiten zich, aankondigen zich, aanschaffen zich, aansluiten zich, afficheren zich, bekeren zich, belasten zich, bereiden zich, beschermen zich, bieden zich, binden zich, blesseren zich, chanteren zich, dekken zich, doen zichzelf, dringen zich, dupliceren zich, emanciperen zich, forceren zich, fêteren zich, geven zich, herhalen zichzelf, inkapselen zich, installeren zich, intimideren zich, kennen zich, misbruiken zich, nemen zich, noemen zichzelf</li>
    <ul>
      <li>Out of those, 2 lemmas occurred more than once, but never without a reflexive dependent. Examples: omvormen, wringen</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 8 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>expl:pv</a>, <a>flat:name</a>, <a>nmod:poss</a>, <a>nsubj:pass</a>, <a>obl:agent</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>compound</a>, <a>flat</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>vocative</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a>, <a>dep</a></li>
</ul>
