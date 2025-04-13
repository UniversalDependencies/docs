---
layout: base
title:  'UD_French-ParisStories'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French ParisStories

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: IE

This treebank has been part of Universal Dependencies since the UD v2.9 release.

The following people have contributed to making this treebank part of UD: Kim Gerdes, Sylvain Kahane, Menel Mahamdi.

Repository: [UD_French-ParisStories](https://github.com/UniversalDependencies/UD_French-ParisStories)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_parisstories215)<br />
Download all treebanks: [UD 2.15](/#download)

License: CC BY-SA 4.0

Genre: spoken

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-ParisStories/issues).
If you want to collaborate, please contact [gerdes&nbsp;(æt)&nbsp;lisn&nbsp;•&nbsp;fr].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

Paris Stories is a corpus of oral French collected and transcribed by Linguistics students from Sorbonne Nouvelle and corrected by students from the Plurital Master's Degree of Computational Linguistics ( Inalco, Paris Nanterre, Sorbonne Nouvelle) between 2017 and 2021.
It contains monologues and dialogues from speakers living in the Parisian region.




For an assignment, students had to record a friend or a relative sharing an anecdote about a given theme (meaningful encounters, vacations, interesting stories..).
The corpus was created for the study of contemporary spoken French and to train a syntactic parser for spoken French.
All data has been morpho-syntactically annotated following the SUD (Surface Syntactic Universal Dependencies) guidelines.

See SUD Guidelines : https://surfacesyntacticud.github.io/guidelines/u/

The Treebank can be found here : http://match.grew.fr/?corpus=SUD_French-ParisStories@latest

The recordings can be downloaded via the url given in the '# sound_url' metadata.

## Description

-- Paris Stories 2019 --

Creation Year : 2017

Annotation Year : 2019

Size :
- 19 samples
- 13951 tokens
- 709 sentences
- app. 1 hour of recordings


Topics : travels, funny/unusual stories

-- Paris Stories 2020 --

Creation Year : 2018

Annotation Year : 2020

Size :
- 16 samples
- 9064 tokens
- 553 sentences
- app. 30 min of recordings


Topics : vacation stories, funny/unusual stories


-- Paris Stories 2021 --

Creation Year : 2020

Annotation Year : 2021

Size :
- 14 samples
- 7825 tokens
- 499 sentences
- app. 45 minutes of recordings


Topics : first encounters, funny/unusual stories

## Development

The corpus is maintained [here](https://github.com/surfacesyntacticud/SUD_French-ParisStories) in the [SUD](https://surfacesyntacticud.github.io/) framework and automatically converter into UD using the [Grew](https://grew.fr) software with the conversions rules described [here](https://github.com/surfacesyntacticud/tools/tree/master/converter).

## Data Split

The file `fr_parisstories-ud-test.conllu` contains the following data:

* `ParisStories_2019_cuisineApproximative.conllu`
* `ParisStories_2019_devoirPhilosophie.conllu`
* `ParisStories_2019_peripitiesVoiture.conllu`
* `ParisStories_2019_prepaScientifique.conllu`
* `ParisStories_2019_vacancesEte.conllu`
* `ParisStories_2019_voyageItalie.conllu`
* `ParisStories_2020_blessureRecreation.conllu`
* `ParisStories_2020_campBedouin.conllu`
* `ParisStories_2020_concoursInstagram.conllu`
* `ParisStories_2020_histoireHorreur.conllu`
* `ParisStories_2020_poissonsNoel.conllu`
* `ParisStories_2020_sortiesAdolescence.conllu`
* `ParisStories_2021_adoptionMouts.conllu`
* `ParisStories_2021_couruLaVoir.conllu`
* `ParisStories_2021_loulouLeChat.conllu`
* `ParisStories_2021_soireeHalloweenGrange.conllu`

The file `fr_parisstories-ud-train.conllu` contains the following data:

* `ParisStories_2019_concoursEquitation.conllu`
* `ParisStories_2019_experienceFac.conllu`
* `ParisStories_2019_histoireDeBanlieue.conllu`
* `ParisStories_2019_journeeTournage.conllu`
* `ParisStories_2019_mauriceAventure.conllu`
* `ParisStories_2019_mercrediSoir.conllu`
* `ParisStories_2019_patisserieFine.conllu`
* `ParisStories_2019_peripleCrous.conllu`
* `ParisStories_2019_stagePrimaire.conllu`
* `ParisStories_2019_voyageEcosse.conllu`
* `ParisStories_2020_aideAuxEnfants.conllu`
* `ParisStories_2020_alarmeTrain.conllu`
* `ParisStories_2020_anecdoteMetro.conllu`
* `ParisStories_2020_descenteCanoe.conllu`
* `ParisStories_2020_dragQueen.conllu`
* `ParisStories_2020_galereNice.conllu`
* `ParisStories_2020_histoireOurs.conllu`
* `ParisStories_2020_maisonAbondonnee.conllu`
* `ParisStories_2020_requinReunion.conllu`
* `ParisStories_2020_sangDEncre.conllu`
* `ParisStories_2021_discussionSansAbris.conllu`
* `ParisStories_2021_maintenantJeSais.conllu`
* `ParisStories_2021_neesLeMemeMois.conllu`
* `ParisStories_2021_nouveauxEleves.conllu`
* `ParisStories_2021_nouvelleCollegue.conllu`
* `ParisStories_2021_pireSoireeHorrible.conllu`
* `ParisStories_2021_pluieEtMamie.conllu`
* `ParisStories_2021_prenomDeVieille.conllu`
* `ParisStories_2021_rencontreAngelaMerkel.conllu`
* `ParisStories_2021_rencontreMourinho.conllu`



## Acknowledgments

Annotation : Sylvain Kahane, Bruno Guillaume, Mariam Nakhlé, Vanessa Gaudray-Bouju, Menel Mahamdi

Annotation tools development : Kim Gerdes, Marine Courtin, Gaël Guibon

Conversion and handling of data validation : Bruno Guillaume

Direction of data collection : Cédric Gendrot, Kim Gerdes, Marine Courtin

We would like to thank all the students who participated in this project.


## References

An article about the annotation of spoken French will soon be released (Kahane et al. 2021)



# Statistics of UD French ParisStories

## POS Tags

[ADJ](fr_parisstories-pos-ADJ.html) – [ADP](fr_parisstories-pos-ADP.html) – [ADV](fr_parisstories-pos-ADV.html) – [AUX](fr_parisstories-pos-AUX.html) – [CCONJ](fr_parisstories-pos-CCONJ.html) – [DET](fr_parisstories-pos-DET.html) – [INTJ](fr_parisstories-pos-INTJ.html) – [NOUN](fr_parisstories-pos-NOUN.html) – [NUM](fr_parisstories-pos-NUM.html) – [PRON](fr_parisstories-pos-PRON.html) – [PROPN](fr_parisstories-pos-PROPN.html) – [PUNCT](fr_parisstories-pos-PUNCT.html) – [SCONJ](fr_parisstories-pos-SCONJ.html) – [VERB](fr_parisstories-pos-VERB.html) – [X](fr_parisstories-pos-X.html)

## Features

[Definite](fr_parisstories-feat-Definite.html) – [ExtPos](fr_parisstories-feat-ExtPos.html) – [Gender](fr_parisstories-feat-Gender.html) – [Mood](fr_parisstories-feat-Mood.html) – [Number](fr_parisstories-feat-Number.html) – [Number[psor]](fr_parisstories-feat-Number-psor.html) – [Person](fr_parisstories-feat-Person.html) – [Person[psor]](fr_parisstories-feat-Person-psor.html) – [Polarity](fr_parisstories-feat-Polarity.html) – [Poss](fr_parisstories-feat-Poss.html) – [PronType](fr_parisstories-feat-PronType.html) – [Reflex](fr_parisstories-feat-Reflex.html) – [Tense](fr_parisstories-feat-Tense.html) – [Typo](fr_parisstories-feat-Typo.html) – [VerbForm](fr_parisstories-feat-VerbForm.html)

## Relations

[acl](fr_parisstories-dep-acl.html) – [acl:relcl](fr_parisstories-dep-acl-relcl.html) – [advcl](fr_parisstories-dep-advcl.html) – [advcl:cleft](fr_parisstories-dep-advcl-cleft.html) – [advmod](fr_parisstories-dep-advmod.html) – [amod](fr_parisstories-dep-amod.html) – [appos](fr_parisstories-dep-appos.html) – [aux:caus](fr_parisstories-dep-aux-caus.html) – [aux:pass](fr_parisstories-dep-aux-pass.html) – [aux:tense](fr_parisstories-dep-aux-tense.html) – [case](fr_parisstories-dep-case.html) – [cc](fr_parisstories-dep-cc.html) – [ccomp](fr_parisstories-dep-ccomp.html) – [compound](fr_parisstories-dep-compound.html) – [conj](fr_parisstories-dep-conj.html) – [cop](fr_parisstories-dep-cop.html) – [csubj](fr_parisstories-dep-csubj.html) – [dep](fr_parisstories-dep-dep.html) – [dep:comp](fr_parisstories-dep-dep-comp.html) – [det](fr_parisstories-dep-det.html) – [discourse](fr_parisstories-dep-discourse.html) – [dislocated](fr_parisstories-dep-dislocated.html) – [expl:comp](fr_parisstories-dep-expl-comp.html) – [expl:pass](fr_parisstories-dep-expl-pass.html) – [expl:pv](fr_parisstories-dep-expl-pv.html) – [expl:subj](fr_parisstories-dep-expl-subj.html) – [fixed](fr_parisstories-dep-fixed.html) – [flat](fr_parisstories-dep-flat.html) – [flat:name](fr_parisstories-dep-flat-name.html) – [iobj](fr_parisstories-dep-iobj.html) – [iobj:agent](fr_parisstories-dep-iobj-agent.html) – [mark](fr_parisstories-dep-mark.html) – [nmod](fr_parisstories-dep-nmod.html) – [nmod:appos](fr_parisstories-dep-nmod-appos.html) – [nsubj](fr_parisstories-dep-nsubj.html) – [nsubj:caus](fr_parisstories-dep-nsubj-caus.html) – [nsubj:pass](fr_parisstories-dep-nsubj-pass.html) – [nummod](fr_parisstories-dep-nummod.html) – [obj](fr_parisstories-dep-obj.html) – [obj:agent](fr_parisstories-dep-obj-agent.html) – [obj:lvc](fr_parisstories-dep-obj-lvc.html) – [obl](fr_parisstories-dep-obl.html) – [obl:agent](fr_parisstories-dep-obl-agent.html) – [obl:arg](fr_parisstories-dep-obl-arg.html) – [obl:mod](fr_parisstories-dep-obl-mod.html) – [parataxis](fr_parisstories-dep-parataxis.html) – [parataxis:parenth](fr_parisstories-dep-parataxis-parenth.html) – [punct](fr_parisstories-dep-punct.html) – [reparandum](fr_parisstories-dep-reparandum.html) – [root](fr_parisstories-dep-root.html) – [vocative](fr_parisstories-dep-vocative.html) – [xcomp](fr_parisstories-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 2776 sentences, 42243 tokens and 42786 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 10247 tokens (24%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 100 types of words that contain both letters and punctuation. Examples: c', j', l', qu', d', s', m', n', -ce, t', là-bas, -là, peut-être, quelqu'un, jusqu', grands-parents, -y, après-midi, aujourd'hui, demi-tour, haut-parleur, puisqu', -moi, dix-neuf, quarante-sept, rendez-vous, vingt-deux, vingt-six, Français-Chinois, [vous, c'est-à-dire, centre-ville, demi-heure, demi-soeur, dix-huit, dix-sept, franco-allemand, grand-mère, là-haut, quarante-deux, soixante-quinze, trente-cinq, vingt-cinq, vingt-et-un, -Alpes, Marie-Paul, Mitry-Claye, O'Takey, RuPaul's, Saint-Louis</li>
</ul>

<ul>
<li>This corpus contains 543 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 4 types of multi-word tokens. Examples: du, au, des, aux.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 15 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: PART, SYM</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 44 lemmas tagged as pronouns (PRON): aucun, autre, autrui, auxquelles, ce, cela, celui, celui-là, certain, chacun, cinq, dont, en, eux, eux-mêmes, i~, j~, lequel, lesquelles, lui, lui-même, moi, moi-même, nous, on, où, personne, que, quelqu'un, qui, quoi, rien, sien, six, soi, son, tien, toi, tous, tout, un, vous, y, ça</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): aucun, ce, certain, cette, chaque, de, de+le, des, différent, dix, du, du~, le, les, plusieurs, quel, quelle, quelque, quelques, son, tout, un, une</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: aucun, ce, certain, son, tout, un</li>
</ul>

<ul>
<li>This corpus contains 4 lemmas tagged as auxiliaries (AUX): avoir, faire, refaire, être</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, faire, refaire, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, était, a, ai, suis, étais, avait, avais, sont, étaient</li>
    <li>VERB: avait, a, est, sais, fait, était, dit, va, avais, vois</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: être, faire, avoir, refaire</li>
    <li>VERB: faire, aller, dire, voir, parler, prendre, avoir, manger, être, rentrer</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: specialisée, spécialisée</li>
    <li>AUX: été, fait, eu</li>
    <li>VERB: fait, dit, eu, vu, passé, allée, mis, pris, allé, parlé</li>
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
      <li>ADJ: première, petite, bonne, toute, seule, toutes, grande, petites, autre, contente</li>
      <li>ADJ-Part: specialisée, spécialisée</li>
      <li>DET: la, une, ma, cette, sa, ta, aucune, quelle, certaines, toute</li>
      <li>NOUN: fois, maison, mère, heures, année, chose, vie, peur, ville, heure</li>
      <li>NUM: une</li>
      <li>PRON: elle, elles, la, une, personne, auxquelles, certaines, elle-même, lesquelles</li>
      <li>PROPN: Flora, Caraïbes, GoPro, Latine, Terres</li>
      <li>VERB-Fin: avance</li>
      <li>VERB-Part: allée, rencontrée, vue, arrivée, partie, venue, accompagnée, rentrée, mise, devenue</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: tout, petit, tous, gros, vrai, mignon, petits, beau, bizarre, sympa</li>
      <li>ADV: mal, tout, plus, super</li>
      <li>AUX-Part: été, fait, eu</li>
      <li>DET: le, un, ce, du, cet, des, les, l', aucun, quelques</li>
      <li>NOUN: coup, fait, peu, temps, ans, moment, truc, jour, monde, côté</li>
      <li>NUM: neuf, un</li>
      <li>PRON: on, c', il, ça, lui, ils, ce, le, -ce, tout</li>
      <li>PROPN: Anglais, PSG, Chevaliers, M</li>
      <li>VERB-Fin: fait</li>
      <li>VERB-Inf: revoir</li>
      <li>VERB-Part: fait, dit, eu, vu, passé, pris, allé, parlé, commencé, rencontré</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: tous, petits, autres, toutes, petites, scolaires, meilleures, mêmes, atypiques, courts</li>
      <li>ADV: sympas</li>
      <li>AUX-Fin: sont, étaient, ont, avaient, étiez, êtes, avez, avons, seraient, soient</li>
      <li>DET: les, des, mes, ses, nos, quelques, leurs, d', tes, ces</li>
      <li>NOUN: ans, gens, heures, parents, potes, jours, choses, activités, cours, enfants</li>
      <li>NUM: deux, trois, six, dix, quatre, cinq, quatorze, sept, quinze, quarante</li>
      <li>PRON: nous, ils, vous, les, tous, elles, leur, eux, ceux, autres</li>
      <li>PROPN: Anglais, Caraïbes, Cinq, Chevaliers, Terres</li>
      <li>VERB-Fin: sont, avaient, étaient, ont, avez, disent, disaient, voulez, allez, arrivent</li>
      <li>VERB-Part: partis, choqués, restés, vues, arrêtés, emmenés, rapprochées, rencontrées, sortis, amenées</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: tout, première, petit, autre, petite, même, horrible, bonne, sympa, vrai</li>
      <li>ADJ-Part: specialisée, spécialisée</li>
      <li>ADV: mal, tout, même, sympa, plus, super</li>
      <li>AUX-Fin: est, était, a, ai, suis, étais, avait, avais, as, serait</li>
      <li>AUX-Part: été, fait, eu</li>
      <li>DET: le, la, un, une, l', mon, ma, cette, ce, son</li>
      <li>NOUN: coup, fait, peu, temps, fois, maison, moment, mère, truc, jour</li>
      <li>NUM: une, huit, un, vingt-deux, neuf</li>
      <li>PRON: on, je, c', il, j', ça, elle, tu, me, moi</li>
      <li>PROPN: Flora, PSG, GoPro, Latine, M</li>
      <li>VERB: avait, a, fait, dit, est, sais, était, va, avais, vois</li>
      <li>VERB-Fin: avait, a, est, sais, fait, était, dit, va, avais, vois</li>
      <li>VERB-Inf: revoir</li>
      <li>VERB-Part: fait, dit, eu, vu, passé, allée, allé, parlé, commencé, rencontré</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, une, des, du, d', de, le, les</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>



<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: pas, n', ne, non, qu'</li>
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
      <li>AUX-Fin: serait, aurait, aurais, seraient</li>
      <li>VERB-Fin: voudrais, dirait, irait, pourrait, serait, aimerais, changerait, connaîtrais, courait, devrait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: sois</li>
      <li>VERB-Fin: vas, dis, allez, inquiète, écoute, allume, attends, demande, faites, laisse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, était, a, ai, suis, étais, avait, avais, sont, étaient</li>
      <li>AUX-Part: fait</li>
      <li>VERB-Fin: avait, a, est, sais, fait, était, dit, va, avais, vois</li>
      <li>VERB-Part: fait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: soit, soient, soyez</li>
      <li>VERB-Fin: fasse, ait, passe, soit, cherche, choisisse, décolle, puisse, accompagnes, appelle</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: sera</li>
      <li>VERB-Fin: passerez, rappellerai, reverrai, verras</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: était, étais, avait, avais, étaient, avaient, étiez</li>
      <li>VERB-Fin: avait, était, avais, faisait, allait, étais, voulait, fallait, savais, devait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: specialisée, spécialisée</li>
      <li>AUX-Part: été, fait, eu</li>
      <li>VERB-Part: fait, dit, eu, vu, passé, allée, mis, pris, allé, parlé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, a, ai, suis, sont, as, ont, serait, soit, es</li>
      <li>VERB-Fin: a, est, sais, fait, dit, va, vois, ai, souviens, faut</li>
      <li>VERB-Part: sachant, demandant, indiquant, arrivant, attendant, ayant, connaissant, courant, croyant, descendant</li>
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
      <li>DET: le, la, un, les, une, l', des, du, d', de</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: cette, ce, ces, cet</li>
      <li>PRON: c', ça, ce, -ce, celui, ceux, cela, celui-là</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: tout, tous, toute</li>
      <li>DET: quelque, chaque, quelques, plusieurs, certaines, toute, différents, tous</li>
      <li>PRON: on, tout, tous, quelqu'un, un, une, autre, quoi, chacun, autres</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>DET: quelle</li>
      <li>PRON: qu', quoi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: jamais, nul, rien</li>
      <li>DET: aucune, aucun</li>
      <li>PRON: rien, personne, aucuns</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: mon, ma, mes, son, ses, nos, sa, notre, leurs, leur</li>
      <li>PRON: je, il, j', y, elle, tu, me, moi, s', se</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: où</li>
      <li>PRON: qui, que, où, qu', dont, quoi, auxquelles, lequel, lesquelles</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: mon, ma, mes, son, ses, nos, sa, notre, leurs, leur</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: me, s', se, te, m', elle-même, eux-mêmes, lui-même, moi-même, t'</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ai, suis, étais, avais, aurais, fais, avait, avons, sommes</li>
      <li>PRON: je, j', me, moi, nous, m', toi, -moi, moi-même</li>
      <li>VERB-Fin: sais, ai, avais, pense, souviens, crois, dis, vais, vois, étais</li>
      <li>VERB-Part: revenue, expliquant</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: as, es, étais, étiez, êtes, avais, avez, sois, fais, soyez</li>
      <li>PRON: tu, vous, te, t', toi</li>
      <li>VERB-Fin: vois, as, sais, vas, fais, peux, veux, avais, souviens, avez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, était, a, avait, sont, étaient, ont, avaient, serait, soit</li>
      <li>AUX-Part: fait</li>
      <li>PRON: on, c', il, ça, y, elle, s', se, lui, ils</li>
      <li>VERB: avait, a, est, fait, était, dit, va, faisait, faut, allait</li>
      <li>VERB-Fin: avait, a, est, fait, était, dit, va, faisait, faut, allait</li>
      <li>VERB-Part: fait, dit, passé</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: nos, notre, leurs, leur, ses, vos</li>
      <li>PRON: leur</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: mon, ma, mes, son, ses, sa, tes, ton, ta</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>ExtPos</a>
    <ul>
      <li>ADJ
        <ul>
          <li>ADP: en, à</li>
        </ul>
      </li>
      <li>ADP
        <ul>
          <li>ADP: en, à</li>
          <li>PRON: il</li>
        </ul>
      </li>
      <li>ADV
        <ul>
          <li>ADP: en, de, d', à, par, pour, pendant, dès, a, sauf</li>
          <li>ADV: bien, quand, pas, bel, que</li>
          <li>CCONJ: et</li>
          <li>DET: un, une, des</li>
          <li>INTJ: oh</li>
          <li>NOUN: pile</li>
          <li>SCONJ: quand</li>
        </ul>
      </li>
      <li>CCONJ
        <ul>
          <li>CCONJ: et, c'est-à-dire</li>
        </ul>
      </li>
      <li>DET
        <ul>
          <li>ADP: de</li>
        </ul>
      </li>
      <li>INTJ
        <ul>
          <li>ADJ: génial, normal, sympa</li>
          <li>ADV: enfin, oui, non, ~enfin, alors, genre, [clairement, effectivement, franchement, là</li>
          <li>INTJ: ah, quoi</li>
          <li>NOUN: genre, machin, pardon, dieu, bonjour, nana, patacaisse, patati</li>
          <li>VERB: voilà</li>
        </ul>
      </li>
      <li>NOUN
        <ul>
          <li>ADP: à</li>
          <li>NOUN: drag, bac, road, tote</li>
        </ul>
      </li>
      <li>PRON
        <ul>
          <li>DET: quelque</li>
        </ul>
      </li>
      <li>PROPN
        <ul>
          <li>X: XXX</li>
        </ul>
      </li>
      <li>SCONJ
        <ul>
          <li>ADP: sauf</li>
          <li>ADV: parce, alors, surtout, déjà, même, peut-être</li>
          <li>SCONJ: parce</li>
          <li>VERB-Part: vu</li>
        </ul>
      </li>
      <li>VERB
        <ul>
          <li>PRON: se, s', il, me, te, y</li>
          <li>X: port</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person[psor]</a>
    <ul>
      <li>1
        <ul>
          <li>DET: mon, ma, mes, nos, notre</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: tes, ton, ta, vos</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: son, ses, sa, leurs, leur</li>
          <li>PRON: leur</li>
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
          <li>PUNCT: .</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 1 lemmas as copulas (<a>cop</a>). Examples: être.</li>
</ul>

<ul>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON (14)</li>
      <li>VERB-Fin--NOUN (58)</li>
      <li>VERB-Fin--PRON (2011)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--PRON (8)</li>
      <li>VERB-Part--NOUN (33)</li>
      <li>VERB-Part--PRON (940)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (3)</li>
      <li>VERB--PRON (5)</li>
      <li>VERB-Fin--NOUN (516)</li>
      <li>VERB-Fin--NOUN-ADP(de) (6)</li>
      <li>VERB-Fin--NOUN-ADP(par) (1)</li>
      <li>VERB-Fin--NOUN-ADP(que) (2)</li>
      <li>VERB-Fin--PRON (299)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-ADP(quand) (1)</li>
      <li>VERB-Fin--PRON-ADP(que) (2)</li>
      <li>VERB-Inf--NOUN (191)</li>
      <li>VERB-Inf--NOUN-ADP(de) (2)</li>
      <li>VERB-Inf--PRON (144)</li>
      <li>VERB-Inf--PRON-ADP(de) (1)</li>
      <li>VERB-Part--NOUN (222)</li>
      <li>VERB-Part--NOUN-ADP(dans) (1)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-ADP(à) (1)</li>
      <li>VERB-Part--PRON (206)</li>
      <li>VERB-Part--PRON-ADP(que) (1)</li>
      <li>VERB-Part--PRON-ADP(sans) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--PRON (2)</li>
      <li>VERB-Fin--PRON (176)</li>
      <li>VERB-Inf--PRON (52)</li>
      <li>VERB-Part--PRON (121)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 18 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: souvenir me, appeler s', passer se, rendre me, souvenir te, adresser s', balader se, entendre s', méfier se, appeler t', apprêter s', asseoir s', lever se, mettre s', plaindre se, ramener se, retrouver me, souvenir m'</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 17 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: améliorer s', apprendre s', décoller se, faire s', faire se, bouffer me, coiffer se, décoller s', détacher se, enrager s', faire me, maquiller se, prendre se, trouver se, tuer s', éjecter se, étaler s'</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 40 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: dire me, dire s', arrêter s', connaître se, rappeler me, dire se, retrouver s', voir s', arrêter se, demander me, inscrire me, parler se, rappeler te, rappeller te, sentir me, acheter s', faire me, faire s', imaginer me, infliger m', inscrire s', joindre me, mettre me, moi te, poser se, prendre s', prere me, raconter se, rappeler m', rappeler se, rappeller me, rapprocher s', regarder s', regarder se, remettre me, rencontrer s', reparler s', retourner me, s~ me, vexer s'</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 21 relation subtypes: <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>dep:comp</a>, <a>expl:comp</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>expl:subj</a>, <a>flat:name</a>, <a>iobj:agent</a>, <a>nmod:appos</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:agent</a>, <a>obj:lvc</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:mod</a>, <a>parataxis:parenth</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>aux</a>, <a>expl</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>orphan</a>, <a>goeswith</a></li>
</ul>
