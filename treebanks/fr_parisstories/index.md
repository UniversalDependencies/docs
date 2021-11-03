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
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.9 release.

The following people have contributed to making this treebank part of UD: Kim Gerdes, Sylvain Kahane, Menel Mahamdi.

Repository: [UD_French-ParisStories](https://github.com/UniversalDependencies/UD_French-ParisStories)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_parisstories29)<br />
Download all treebanks: [UD 2.9](/#download)

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

[Definite](fr_parisstories-feat-Definite.html) – [Foreign](fr_parisstories-feat-Foreign.html) – [Gender](fr_parisstories-feat-Gender.html) – [Mood](fr_parisstories-feat-Mood.html) – [Number](fr_parisstories-feat-Number.html) – [Number[psor]](fr_parisstories-feat-Number-psor.html) – [Person](fr_parisstories-feat-Person.html) – [Person[psor]](fr_parisstories-feat-Person-psor.html) – [Polarity](fr_parisstories-feat-Polarity.html) – [PronType](fr_parisstories-feat-PronType.html) – [Reflex](fr_parisstories-feat-Reflex.html) – [Tense](fr_parisstories-feat-Tense.html) – [Typo](fr_parisstories-feat-Typo.html) – [VerbForm](fr_parisstories-feat-VerbForm.html)

## Relations

[acl](fr_parisstories-dep-acl.html) – [acl:relcl](fr_parisstories-dep-acl-relcl.html) – [advcl](fr_parisstories-dep-advcl.html) – [advcl:cleft](fr_parisstories-dep-advcl-cleft.html) – [advmod](fr_parisstories-dep-advmod.html) – [amod](fr_parisstories-dep-amod.html) – [appos](fr_parisstories-dep-appos.html) – [aux](fr_parisstories-dep-aux.html) – [aux:caus](fr_parisstories-dep-aux-caus.html) – [aux:pass](fr_parisstories-dep-aux-pass.html) – [aux:tense](fr_parisstories-dep-aux-tense.html) – [case](fr_parisstories-dep-case.html) – [cc](fr_parisstories-dep-cc.html) – [ccomp](fr_parisstories-dep-ccomp.html) – [compound](fr_parisstories-dep-compound.html) – [conj](fr_parisstories-dep-conj.html) – [cop](fr_parisstories-dep-cop.html) – [csubj](fr_parisstories-dep-csubj.html) – [dep](fr_parisstories-dep-dep.html) – [dep:comp](fr_parisstories-dep-dep-comp.html) – [det](fr_parisstories-dep-det.html) – [discourse](fr_parisstories-dep-discourse.html) – [dislocated](fr_parisstories-dep-dislocated.html) – [expl](fr_parisstories-dep-expl.html) – [expl:subj](fr_parisstories-dep-expl-subj.html) – [fixed](fr_parisstories-dep-fixed.html) – [flat](fr_parisstories-dep-flat.html) – [flat:name](fr_parisstories-dep-flat-name.html) – [goeswith](fr_parisstories-dep-goeswith.html) – [iobj](fr_parisstories-dep-iobj.html) – [mark](fr_parisstories-dep-mark.html) – [nmod](fr_parisstories-dep-nmod.html) – [nmod:appos](fr_parisstories-dep-nmod-appos.html) – [nsubj](fr_parisstories-dep-nsubj.html) – [nsubj:caus](fr_parisstories-dep-nsubj-caus.html) – [nsubj:pass](fr_parisstories-dep-nsubj-pass.html) – [nummod](fr_parisstories-dep-nummod.html) – [obj](fr_parisstories-dep-obj.html) – [obj:lvc](fr_parisstories-dep-obj-lvc.html) – [obl](fr_parisstories-dep-obl.html) – [obl:arg](fr_parisstories-dep-obl-arg.html) – [obl:mod](fr_parisstories-dep-obl-mod.html) – [orphan](fr_parisstories-dep-orphan.html) – [parataxis](fr_parisstories-dep-parataxis.html) – [parataxis:parenth](fr_parisstories-dep-parataxis-parenth.html) – [punct](fr_parisstories-dep-punct.html) – [reparandum](fr_parisstories-dep-reparandum.html) – [root](fr_parisstories-dep-root.html) – [vocative](fr_parisstories-dep-vocative.html) – [xcomp](fr_parisstories-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 1755 sentences, 29438 tokens and 29631 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 6865 tokens (23%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 77 types of words that contain both letters and punctuation. Examples: c', j', l', d', qu', s', m', n', t', là-bas, -ce, jusqu', peut-être, après-midi, grands-parents, aujourd'hui, demi-tour, quelqu', y', -là, haut-parleur, puisqu', dix-neuf, quarante-sept, quelqu'un, rendez-vous, -y, Français-Chinois, c'est-à-dire, centre-ville, dix-sept, là-haut, quarante-deux, soixante-quinze, trente-cinq, vingt-deux, -Alpes, Marie-Paul, Mitry-Claye, O'Takey, RuPaul's, Saint-Louis, Seine-et-Marne, Sud-Ouest, anglo-saxon, arrière-plan, au-dessus, bande-dessinée, bla-bla-bla, celui-là</li>
</ul>

<ul>
<li>This corpus contains 193 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
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
<li>This corpus contains 51 lemmas tagged as pronouns (PRON): aucune, aucuns, autre, autrui, auxquelles, c', ce, cela, celui, celui-là, chacun, cinq, deux, dont, en, euh, il, i~, le, lequel, lui, lui-même, me, moi-même, nous, on, où, personne, plupart, qu', que, quelqu'un, quelqueun, qui, quoi, rien, se, six, soi, son, te, tien, toi, tous, tout, tu, un, une, vous, y, ça</li>
</ul>

<ul>
<li>This corpus contains 27 lemmas tagged as determiners (DET): aucun, ce, certain, cette, chaque, de, de+le, des, différent, dix, du, du~, l', le, les, plusieurs, quel, quelle, quelqu', quelque, quelques, son, ton, tout, un, une, ﻿le</li>
</ul>

<ul>
<li>Out of the above, 6 lemmas occurred sometimes as PRON and sometimes as DET: ce, le, son, tout, un, une</li>
</ul>

<ul>
<li>This corpus contains 3 lemmas tagged as auxiliaries (AUX): avoir, faire, être</li>
</ul>

<ul>
<li>Out of the above, 3 lemmas occurred sometimes as AUX and sometimes as VERB: avoir, faire, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: est, était, a, ai, suis, avait, étais, sont, ont, avais</li>
    <li>VERB: avait, a, est, était, va, sais, avais, fait, faut, vois</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: être, faire</li>
    <li>VERB: faire, aller, prendre, dire, voir, avoir, parler, manger, passer, mettre</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: specialisée, spécialisée</li>
    <li>AUX: été, fait, eu</li>
    <li>VERB: fait, dit, eu, vu, passé, allée, mis, pris, commencé, pu</li>
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
      <li>ADJ: petite, bonne, première, toute, seule, toutes, petites, autre, contente, grande</li>
      <li>ADJ-Part: specialisée, spécialisée</li>
      <li>DET: la, une, ma, cette, sa, aucune, quelle, ta, toute, certaines</li>
      <li>NOUN: fois, heures, maison, année, chose, mère, heure, fac, ville, amie</li>
      <li>NUM: une</li>
      <li>PRON: elle, elles, la, une, personne, aucune, auxquelles, elle-même, lesquelles, plupart</li>
      <li>PROPN: Caraïbes, GoPro, Terres</li>
      <li>VERB: allée, accompagnée, rentrée, arrivée, rencontrée, repartie, sortie, vue, devenues, mise</li>
      <li>VERB-Part: allée, accompagnée, rentrée, rencontrée, repartie, sortie, vue, arrivée, devenues, mise</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: tout, petit, tous, vrai, gros, beau, bizarre, petits, sympa, long</li>
      <li>ADV: tout, plus, super</li>
      <li>AUX-Part: été, fait, eu</li>
      <li>DET: le, un, ce, tout, du, son, cet, des, l', les</li>
      <li>NOUN: coup, fait, temps, peu, côté, gens, bus, genre, jour, moment</li>
      <li>NUM: neuf</li>
      <li>PRON: on, c', il, ça, ils, lui, ce, tout, tous, le</li>
      <li>PROPN: Anglais, PSG, M</li>
      <li>VERB-Inf: revoir</li>
      <li>VERB-Part: fait, dit, eu, vu, passé, mis, pris, commencé, pu, allé</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: tous, autres, toutes, petits, petites, atypiques, courts, énormes, belles, bonnes</li>
      <li>ADV: sympas</li>
      <li>AUX-Fin: sont, ont, étaient, avaient, êtes, avons, seraient, sommes, soyez</li>
      <li>DET: les, des, mes, nos, ses, quelques, leurs, ces, d', tes</li>
      <li>NOUN: heures, gens, parents, jours, ans, choses, semaines, cours, grands-parents, amis</li>
      <li>NUM: deux, trois, six, dix, cinq, quatre, quinze, quarante, sept, vingt</li>
      <li>PRON: ils, nous, vous, tous, les, elles, eux, leur, ceux, autres</li>
      <li>PROPN: Anglais, Caraïbes, Cinq, Terres</li>
      <li>VERB: partis, sont, avaient, étaient, disaient, disent, ont, restés, allés, arrivent</li>
      <li>VERB-Fin: sont, avaient, étaient, disaient, disent, ont, arrivent, font, pouvaient, allaient</li>
      <li>VERB-Part: partis, restés, allés, arrivés, choqués, devenues, arrêtés, emmenés, montés, parties</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: tout, petit, autre, petite, même, horrible, sympa, bonne, première, vrai</li>
      <li>ADJ-Part: specialisée, spécialisée</li>
      <li>ADV: tout, même, sympa, plus, super</li>
      <li>AUX: est, était, a, ai, suis, avait, étais, avais, été, as</li>
      <li>AUX-Fin: est, était, a, ai, suis, avait, étais, avais, as, soit</li>
      <li>AUX-Part: été, fait, eu</li>
      <li>DET: le, la, un, une, l', mon, ma, cette, son, ce</li>
      <li>NOUN: coup, fait, peu, maison, année, côté, fois, genre, jour, moment</li>
      <li>NUM: une, un, huit, vingt-deux, neuf</li>
      <li>PRON: on, c', je, il, j', ça, elle, me, tu, moi</li>
      <li>PROPN: PSG, GoPro, M</li>
      <li>VERB: avait, a, fait, est, dit, était, va, sais, avais, faut</li>
      <li>VERB-Fin: avait, a, est, était, va, sais, avais, fait, faut, vois</li>
      <li>VERB-Inf: revoir</li>
      <li>VERB-Part: fait, dit, eu, vu, passé, allée, commencé, pu, allé, arrivé</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: le, la, les, l', ﻿l'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, une, des, du, de, d', le</li>
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
      <li>ADV: pas, n', non, ne</li>
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
      <li>AUX-Fin: aurait, serait, aurais, seraient</li>
      <li>VERB-Fin: voudrais, dirait, pourrait, serait, changerait, connaîtrais, devrait, essaierait, faudrait, ferait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: sois</li>
      <li>VERB-Fin: dis, inquiète, vas, allez, demande, faites, laisse, raconte, signez, tiens</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: est, était, a, ai, suis, avait, étais, sont, ont, avais</li>
      <li>AUX-Part: fait</li>
      <li>VERB-Fin: avait, a, est, était, va, sais, avais, fait, faut, vois</li>
      <li>VERB-Part: fait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: soit, soyez</li>
      <li>VERB-Fin: fasse, passe, choisisse, décolle, puisse, soit, accompagnes, ait, appelle, cherche</li>
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
      <li>VERB-Fin: passerez, reverrai, verras</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: était, avait, étais, avais, étaient, avaient, fait</li>
      <li>VERB-Fin: avait, était, avais, faisait, fallait, allait, fait, étais, voulait, devait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: specialisée, spécialisée</li>
      <li>AUX-Part: été, eu, fait</li>
      <li>VERB-Part: fait, dit, eu, vu, passé, allée, mis, pris, commencé, pu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: est, a, ai, suis, sont, ont, as, soit, aurait, serait</li>
      <li>VERB-Fin: a, est, va, sais, faut, vois, ai, arrive, dis, fait</li>
      <li>VERB-Part: sachant, demandant, indiquant, arrivant, attendant, ayant, connaissant, croyant, descendant, disant</li>
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
      <li>DET: le, la, un, les, une, l', des, du, de, d'</li>
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
      <li>DET: quelque, tout, chaque, quelques, plusieurs, quelqu', toute, certaines, différents</li>
      <li>PRON: on, tout, un, tous, quoi, une, chacun, quelqu'un, autre, autrui</li>
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
      <li>DET: aucune, aucun</li>
      <li>PRON: rien, personne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: mon, ma, mes, notre, son, nos, sa, ses, leur, leurs</li>
      <li>PRON: je, il, j', y, elle, me, tu, s', se, ils</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: où</li>
      <li>PRON: qui, où, que, qu', quoi, dont, auxquelles, lesquelles</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: s', se, me, m', elle-même, eux-mêmes, lui-même, moi-même, t', te</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: ai, suis, étais, avais, aurais, avait, avons, sommes</li>
      <li>DET: mon, mes</li>
      <li>PRON: je, j', me, moi, nous, m', j~, moi-même</li>
      <li>VERB: sais, avais, ai, vois, dis, pense, vais, crois, étais, souviens</li>
      <li>VERB-Fin: sais, avais, ai, vois, dis, pense, vais, crois, étais, souviens</li>
      <li>VERB-Part: revenue</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: as, es, êtes, sois, étais, fais, soyez</li>
      <li>AUX-Fin: as, es, êtes, sois, étais, soyez</li>
      <li>PRON: tu, t', vous, te, toi</li>
      <li>VERB-Fin: vois, as, sais, fais, avais, rajoutes, vas, mets, veux, dis</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: est, était, a, avait, sont, ont, étaient, soit, avaient, aurait</li>
      <li>AUX-Part: fait</li>
      <li>DET: mon, ma, mes, quelque, chaque, notre, plusieurs, tes, ces, sa</li>
      <li>PRON: on, c', il, y, ça, elle, s', se, ils, lui</li>
      <li>VERB-Fin: avait, a, est, était, va, fait, faut, faisait, dit, fallait</li>
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
      <li>DET: notre, nos, leur, leurs, mes, ses, tes, vos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: mon, ma, mes, son, sa, ses, tes, ton</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: y</li>
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
          <li>DET: mon, ma, mes, notre, nos</li>
        </ul>
      </li>
      <li>2
        <ul>
          <li>DET: tes, ton, vos</li>
        </ul>
      </li>
      <li>3
        <ul>
          <li>DET: son, sa, ses, leur, leurs</li>
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
          <li>X: ~</li>
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
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: avoir, être, faire.</li>
<li>This corpus uses 1 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--PRON (18)</li>
      <li>VERB-Fin--NOUN (52)</li>
      <li>VERB-Fin--PRON (1362)</li>
      <li>VERB-Inf--NOUN (2)</li>
      <li>VERB-Inf--PRON (10)</li>
      <li>VERB-Part--NOUN (32)</li>
      <li>VERB-Part--PRON (682)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (4)</li>
      <li>VERB--PRON (4)</li>
      <li>VERB-Fin--NOUN (401)</li>
      <li>VERB-Fin--NOUN-ADP(de) (4)</li>
      <li>VERB-Fin--NOUN-ADP(par) (1)</li>
      <li>VERB-Fin--NOUN-ADP(que) (2)</li>
      <li>VERB-Fin--PRON (170)</li>
      <li>VERB-Fin--PRON-ADP(qu') (1)</li>
      <li>VERB-Inf--NOUN (157)</li>
      <li>VERB-Inf--NOUN-ADP(de) (2)</li>
      <li>VERB-Inf--PRON (110)</li>
      <li>VERB-Inf--PRON-ADP(de) (1)</li>
      <li>VERB-Part--NOUN (168)</li>
      <li>VERB-Part--NOUN-ADP(dans) (1)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-ADP(à) (1)</li>
      <li>VERB-Part--PRON (135)</li>
      <li>VERB-Part--PRON-ADP(sans) (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--PRON (188)</li>
      <li>VERB-Inf--NOUN (1)</li>
      <li>VERB-Inf--PRON (39)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--PRON (103)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 25 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: connaître se, arrêter s', dire se, voir s', dire s', appeler t', arrêter se, dire me, entendre s', infliger m', inscrire s', mettre s', méfier se, parler se, plaindre se, raconter se, ramener se, rappeler m', rappeler me, rappeller te, rapprocher s', regarder s', regarder se, rencontrer s', vexer s'</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 15 relation subtypes: <a>acl:relcl</a>, <a>advcl:cleft</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>aux:tense</a>, <a>dep:comp</a>, <a>expl:subj</a>, <a>flat:name</a>, <a>nmod:appos</a>, <a>nsubj:caus</a>, <a>nsubj:pass</a>, <a>obj:lvc</a>, <a>obl:arg</a>, <a>obl:mod</a>, <a>parataxis:parenth</a></li>
<li>The following 2 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a></li>
</ul>
