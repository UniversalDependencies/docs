---
layout: base
title:  'UD_French-FTB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD French FTB

Language: [French](/fr/index.html) (code: `fr`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v2.0 release.

The following people have contributed to making this treebank part of UD: Marie Candito, Bruno Guillaume, Teresa Lynn, Héctor Martínez Alonso, Benoît Sagot, Djamé Seddah, Eric Villemonte de la Clergerie.

Repository: [UD_French-FTB](https://github.com/UniversalDependencies/UD_French-FTB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udfr_ftb25)<br />
Download all treebanks: [UD 2.5](/#download)

License: LGPL-LR. The underlying text is not included; the user must obtain it separately and then merge with the UD annotation using a script distributed with UD

Genre: news

Questions, comments?
General annotation questions (either French-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_French-FTB/issues).
If you want to collaborate, please contact [djame&nbsp;•&nbsp;seddah&nbsp;(æt)&nbsp;paris-sorbonne&nbsp;•&nbsp;fr, marie&nbsp;•&nbsp;candito&nbsp;(æt)&nbsp;linguist&nbsp;•&nbsp;univ-paris-diderot&nbsp;•&nbsp;fr].
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
The Universal Dependency version of the French Treebank (Abeillé et al., 2003), hereafter UD_French-FTB, is a treebank of sentences from the newspaper Le Monde, initially manually annotated with morphological information and phrase-structure and then converted to the Universal Dependencies annotation scheme.


UD_French-FTB 2.3 is an automatic conversion of the [French Treebank](http://ftb.linguist.univ-paris-diderot.fr/index.php?langue=en).
The French Treebank constituency trees were first converted to dependency trees following (Candito et al., 2010), then the dependency trees were converted to UD scheme using B. Guillaume's [Sequoia treebank UD conversion rules](https://gitlab.inria.fr/grew/SSQ_UD). Finally a data-driven cross-treebank annotation transfer process (Seddah et al, 2017, forthcoming) was applied.

<!-- This release of the French Treebank (Abeille et al, 2003) UD 2.3 version is based on the FTB SPMRL release (Seddah et al, 2013)
whose tokenization has been changed to match the [UD 2.0 specifications](http://universaldependencies.org/u/overview/tokenization.html) . Its native depedency scheme was converted via the use of the [Sequoia treebank UD conversion rules](https://gitlab.inria.fr/grew/SSQ_UD) and a data-driven cross-treebank annotation transfer process (Seddah et al, 2017, forthcoming).
-->

An evaluation on a gold standard leads to 94.75% of LAS, 99.40% UAS on the test set, on par with other high quality UD treebanks such as UD_English.


## Acknowledgments

contributors:
Marie Candito, Bruno Guillaume, Teresa Lynn, Hector Martinez-Alonso, Benoit Sagot, Djamé Seddah, Eric Villemonte de la Clergerie

contact:
Djamé Seddah: djame.seddah@paris-sorbonne.fr
Marie Candito: marie.candito@linguist.univ-paris-diderot.fr


# Statistics of UD French FTB

## POS Tags

[ADJ](fr_ftb-pos-ADJ.html) – [ADP](fr_ftb-pos-ADP.html) – [ADV](fr_ftb-pos-ADV.html) – [AUX](fr_ftb-pos-AUX.html) – [CCONJ](fr_ftb-pos-CCONJ.html) – [DET](fr_ftb-pos-DET.html) – [INTJ](fr_ftb-pos-INTJ.html) – [NOUN](fr_ftb-pos-NOUN.html) – [NUM](fr_ftb-pos-NUM.html) – [PART](fr_ftb-pos-PART.html) – [PRON](fr_ftb-pos-PRON.html) – [PROPN](fr_ftb-pos-PROPN.html) – [PUNCT](fr_ftb-pos-PUNCT.html) – [SCONJ](fr_ftb-pos-SCONJ.html) – [VERB](fr_ftb-pos-VERB.html) – [X](fr_ftb-pos-X.html)

## Features

[Definite](fr_ftb-feat-Definite.html) – [Gender](fr_ftb-feat-Gender.html) – [Mood](fr_ftb-feat-Mood.html) – [Number](fr_ftb-feat-Number.html) – [NumType](fr_ftb-feat-NumType.html) – [Person](fr_ftb-feat-Person.html) – [Polarity](fr_ftb-feat-Polarity.html) – [Poss](fr_ftb-feat-Poss.html) – [PronType](fr_ftb-feat-PronType.html) – [Reflex](fr_ftb-feat-Reflex.html) – [Tense](fr_ftb-feat-Tense.html) – [VerbForm](fr_ftb-feat-VerbForm.html) – [Voice](fr_ftb-feat-Voice.html)

## Relations

[acl](fr_ftb-dep-acl.html) – [acl:relcl](fr_ftb-dep-acl-relcl.html) – [advcl](fr_ftb-dep-advcl.html) – [advmod](fr_ftb-dep-advmod.html) – [amod](fr_ftb-dep-amod.html) – [appos](fr_ftb-dep-appos.html) – [aux](fr_ftb-dep-aux.html) – [aux:caus](fr_ftb-dep-aux-caus.html) – [aux:pass](fr_ftb-dep-aux-pass.html) – [case](fr_ftb-dep-case.html) – [cc](fr_ftb-dep-cc.html) – [ccomp](fr_ftb-dep-ccomp.html) – [conj](fr_ftb-dep-conj.html) – [cop](fr_ftb-dep-cop.html) – [csubj](fr_ftb-dep-csubj.html) – [dep](fr_ftb-dep-dep.html) – [det](fr_ftb-dep-det.html) – [dislocated](fr_ftb-dep-dislocated.html) – [expl](fr_ftb-dep-expl.html) – [fixed](fr_ftb-dep-fixed.html) – [flat](fr_ftb-dep-flat.html) – [flat:name](fr_ftb-dep-flat-name.html) – [iobj](fr_ftb-dep-iobj.html) – [mark](fr_ftb-dep-mark.html) – [nmod](fr_ftb-dep-nmod.html) – [nsubj](fr_ftb-dep-nsubj.html) – [nsubj:caus](fr_ftb-dep-nsubj-caus.html) – [nummod](fr_ftb-dep-nummod.html) – [obj](fr_ftb-dep-obj.html) – [obl](fr_ftb-dep-obl.html) – [orphan](fr_ftb-dep-orphan.html) – [parataxis](fr_ftb-dep-parataxis.html) – [punct](fr_ftb-dep-punct.html) – [root](fr_ftb-dep-root.html) – [vocative](fr_ftb-dep-vocative.html) – [xcomp](fr_ftb-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 18535 sentences, 556064 tokens and 573370 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 101852 tokens (18%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 3 types of words with spaces. Examples: 30 000, 675 000, 700 000</li>
</ul>

<ul>
<li>This corpus contains 23 types of words that contain both letters and punctuation. Examples: l', c', d', M., Aujourd', s', Jusqu', Qu', J', N', Lorsqu', MM., Moody', quelqu', ...chaudées, ...tant, ...vitant, AUJOURD', P...KIN, P...RIGUEUX, S...OUL, Tél., sous-traitant</li>
</ul>

<ul>
<li>This corpus contains 17306 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 0 types of multi-word tokens. Examples: .</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 16 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>VERB</a>, <a>X</a></li>
<li>This corpus does not use the following tags: SYM</li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): _</li>
</ul>

<ul>
<li>This corpus contains 39 lemmas tagged as pronouns (PRON): 30 000, Quarante, Quid, _, aucun, beaucoup, ce, ceci, cela, celui, certain, chacun, cinq, deux, dont, en, il, le, le/lui, lequel, nul, où, personne, peu, plusieurs, quatre, que, quel, quelle, qui, quoi, rien, six, soi, tout, trois, un, y, ça</li>
</ul>

<ul>
<li>This corpus contains 18 lemmas tagged as determiners (DET): Première, _, aucun, autre, ce, certain, chaque, d', de, du, le, nul, plusieurs, quel, quelque, son, tout, un</li>
</ul>

<ul>
<li>Out of the above, 10 lemmas occurred sometimes as PRON and sometimes as DET: _, aucun, ce, certain, le, nul, plusieurs, quel, tout, un</li>
</ul>

<ul>
<li>This corpus contains 7 lemmas tagged as auxiliaries (AUX): _, aller, avoir, devoir, pouvoir, vouloir, être</li>
</ul>

<ul>
<li>Out of the above, 5 lemmas occurred sometimes as AUX and sometimes as VERB: _, avoir, devoir, pouvoir, être</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: _, Peut, Avez, Est, Peuvent, Seront, Sont, A, Allons, Doit</li>
    <li>VERB: _, Reste, Est, Peut, Voilà, faut, Notons, Ajoutons, Supposons, Suivent</li>
    <li>X: _</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: _, Avoir</li>
    <li>VERB: _, Lire, Dire, Construire, Grignoter, Gérer, Réduire, ABOLIR, Accepter, Appeler</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: _, Ayant, Etant</li>
    <li>VERB: _, Interrogé, Exprimés, Né, Réuni, Réunis, Donnant, Entré, Faisant, Mis</li>
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
      <li>ADJ: _, Seule, Toutes, Première, Autre, Quelle, toute, Dernière, Même, Deuxième</li>
      <li>ADP: _</li>
      <li>AUX-Part: _</li>
      <li>DET: _, la, L', les, Cette, une, ces, des, Sa, Leur</li>
      <li>NOUN: _, face, Fin, Grâce, Mme, Conséquence, Faute, Abstentions, Réunion, Concurrence</li>
      <li>NUM: _, Deux, 1992, Quatre, Trois, 1993, Huit, 1991, Sept, 1989</li>
      <li>PRON: _, Elle, elles, Celle, Celles, Se, S', En, Où, Aucune</li>
      <li>PROPN: _, FO, EDF, Genève, CGT, Jean, Anita, France, BOURSE, BT</li>
      <li>PUNCT: _</li>
      <li>VERB-Part: _, Basée, Devenue, Décidée, Emises, Fixée, Lancée, Liée, Née, Partie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: _, Autre, Tout, tous, Seul, Seuls, Difficile, Premier, Dernier, Deuxième</li>
      <li>ADP: _, À</li>
      <li>AUX-Part: _</li>
      <li>DET: _, le, les, l', un, Ce, ces, des, Son, Cet</li>
      <li>NOUN: _, M., Mr, DOC, Résultat, Article, Côté, Vendredi, Jeudi, Début</li>
      <li>NUM: _, Deux, Trois, Cinq, 4, Dix, Quatre, 27, Sept, 12</li>
      <li>PRON: _, il, c', On, ils, ce, nous, Cela, Je, Ceux</li>
      <li>PROPN: _, Paris, Michel, France, Air, FRANCFORT, Hachette, Jacques, Matra, LONDRES</li>
      <li>VERB-Fin: _</li>
      <li>VERB-Part: _, Interrogé, Exprimés, Né, Réuni, Réunis, Entré, Mis, Nommé, Passé</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: _, tous, Toutes, Seuls, Conscients, Pauvres, Seules, Nombreuses, Nouveaux, Capables</li>
      <li>ADP: _</li>
      <li>AUX-Fin: _, Avez, Peuvent, Seront, Sont, Allons, Ont, Pourront, Serions</li>
      <li>AUX-Part: _</li>
      <li>DET: _, les, ces, des, D', Leur, De, Plusieurs, Quelques, Certains</li>
      <li>NOUN: _, Abstentions, Inscrits, MM., OUVRIERS, Retraites, Editions, MM, ÉTATS, Agents</li>
      <li>NUM: _, Deux, Trois, Cinq, Quatre, Dix, Huit, Sept, Trente, Quinze</li>
      <li>PRON: _, ils, nous, elles, Ceux, Certains, Celles, Tous, Vous, S'</li>
      <li>PROPN: _, Etats, Chargeurs, Ebauches, ETATS, Editions, Imprimeries, Reporters</li>
      <li>VERB-Fin: _, Notons, Ajoutons, Supposons, Suivent, Ajoutez, Entrent, Sont, Viennent, Allongez</li>
      <li>VERB-Part: _, Exprimés, Réunis, Disparus, Emises, Passés, ...chaudées, Accusées, Additionnées, Affectés</li>
      <li>X-Fin: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: _, Autre, Tout, Seul, Difficile, Seule, Premier, Deuxième, Dernier, Première</li>
      <li>ADP: _, À</li>
      <li>AUX-Fin: _, Peut, Est, A, Doit, Fût, Pourrait, Pouvait, Sera, Va</li>
      <li>AUX-Part: _</li>
      <li>DET: _, le, la, l', Cette, un, une, Ce, Son, Cet</li>
      <li>NOUN: _, M., Mr, DOC, face, Fin, Résultat, Article, Grâce, Côté</li>
      <li>NUM: _, 1992, 4, 27, 19, 1993, 3, 12, 13, 17</li>
      <li>PRON: _, il, c', On, Elle, ce, Cela, Je, Celui, Tout</li>
      <li>PROPN: _, Paris, Michel, France, FO, Jean, Air, FRANCFORT, Hachette, Jacques</li>
      <li>PUNCT: _</li>
      <li>VERB-Fin: _, Reste, Est, Peut, Voilà, faut, Faudra, Sait, Serait, Voici</li>
      <li>VERB-Inf: _</li>
      <li>VERB-Part: _, Interrogé, Né, Réuni, Entré, Nommé, Passé, Appelé, Placé, Agé</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: _, le, la, les, l'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: _</li>
      <li>DET: _, un, une, des, D', De, Plusieurs, Quelques, Chaque, Certains</li>
      <li>PRON: _</li>
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
      <li>ADV: _, Ne, N', Jamais</li>
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
      <li>AUX-Fin: _, Pourrait, Serions</li>
      <li>VERB-Fin: _, Serait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: _, Notons, Ajoutons, Supposons, Ajoutez, Allongez, Attendons, Changez, Citons, Commençons</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: _, Peut, Avez, Est, Peuvent, Seront, Sont, A, Allons, Doit</li>
      <li>VERB-Fin: _, Reste, Est, Peut, Voilà, faut, Suivent, Entrent, Faudra, Sait</li>
      <li>VERB-Part: _</li>
      <li>X-Fin: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: _, Fût</li>
      <li>VERB-Fin: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: _, Seront, Pourront, Sera, Voudra</li>
      <li>VERB-Fin: _, Faudra, Aura</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: _, Fût, Pouvait</li>
      <li>VERB-Fin: _, Débutait</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: _</li>
      <li>AUX-Part: _</li>
      <li>VERB-Fin: _, Vint</li>
      <li>VERB-Part: _, Interrogé, Exprimés, Né, Réuni, Réunis, Entré, Mis, Nommé, Passé</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: _, Peut, Avez, Est, Peuvent, Sont, A, Allons, Doit, Ont</li>
      <li>AUX-Part: _, Ayant, Etant</li>
      <li>VERB-Fin: _, Reste, Est, Peut, Voilà, faut, Notons, Ajoutons, Supposons, Suivent</li>
      <li>VERB-Inf: _</li>
      <li>VERB-Part: _, Donnant, Faisant, Moyennant, Estimant, Evoquant, Rappelant, Suivant, Commentant, Craignant</li>
      <li>X-Fin: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: _</li>
      <li>VERB-Inf: _</li>
      <li>VERB-Part: _</li>
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
      <li>ADJ: _</li>
      <li>DET: _, le, la, les, l', un, une, des, D', De</li>
      <li>PRON: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: _, Cette, Ce, ces, Cet, CETTE</li>
      <li>PRON: _, Cela, Ce, Ceux, Celui, Celle, Celles, Ceci, Ça</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: _, Comment, Pourquoi, Où, Quand, Combien, Involontairement, POURQUOI</li>
      <li>DET: _, Quelle, D', Quelles, Quels</li>
      <li>PRON: _, qui, Que, Qu', Quoi, Lequel, Quelle, Quelles</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>PRON: _, Lui, Elle, Moi, Personne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>PRON: _, Certains, Tout, rien, Personne, Chacun, Ce, Tous, qui, un</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: _</li>
      <li>NOUN: _, MM., C, V</li>
      <li>NUM: _, Deux, Trois, Dix, Quatre, 1992, Vingt, Cinq, Sept, Cent</li>
      <li>PRON: _, 30 000, Cinq, Deux, Quarante, Quatre, Six, Trois, Une</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: _, Premier, Deuxième, Première, 1er, Second, Seconde, Troisième, 40ème, Dixième</li>
      <li>NOUN: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>ADJ: _</li>
      <li>DET: _, Son, Leur, Ses, Sa, Notre, Nos, Ma, Leurs</li>
      <li>NOUN: _</li>
      <li>PRON: _</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: _, s', Se</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: _, Allons, Serions</li>
      <li>DET: _, Notre, Nos, Ma</li>
      <li>PRON: _, nous, Je, J', Moi</li>
      <li>VERB-Fin: _, Notons, Ajoutons, Supposons, Assistons, Attendons, Citons, Commençons, Constatons, Disons</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: _, Avez</li>
      <li>DET: _</li>
      <li>PRON: _, Vous, Tu</li>
      <li>VERB-Fin: _, Ajoutez, Allongez, Changez, Courez, Croissez, Etes, Prenez, Proposez, Regardez</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>ADP: _, À</li>
      <li>AUX-Fin: _, Peut, Est, Peuvent, Seront, Sont, A, Doit, Fût, Ont</li>
      <li>DET: _, Son, Leur, Ses, Sa, Certains, Leurs</li>
      <li>PRON: _, il, c', On, Elle, ils, ce, Cela, elles, Certains</li>
      <li>VERB-Fin: _, Reste, Est, Peut, Voilà, faut, Suivent, Entrent, Faudra, Sait</li>
      <li>VERB-Inf: _</li>
      <li>VERB-Part: _</li>
      <li>X: _</li>
      <li>X-Fin: _</li>
    </ul>
  </li>
</ul>




<h3>Other Features</h3>


<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: _, être.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: _, avoir, être.</li>
<li>This corpus uses 2 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: _, être.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (7092)</li>
      <li>VERB-Fin--NOUN-ADP(_) (4)</li>
      <li>VERB-Fin--NOUN-ADP(bien) (1)</li>
      <li>VERB-Fin--NOUN-ADP(coopération) (1)</li>
      <li>VERB-Fin--PRON (6467)</li>
      <li>VERB-Fin--PRON-ADP(_) (2)</li>
      <li>VERB-Inf--NOUN (89)</li>
      <li>VERB-Inf--NOUN-ADP(grâce) (1)</li>
      <li>VERB-Inf--PRON (74)</li>
      <li>VERB-Part--NOUN (5414)</li>
      <li>VERB-Part--NOUN-ADP(_) (2)</li>
      <li>VERB-Part--NOUN-ADP(de) (1)</li>
      <li>VERB-Part--NOUN-ADP(quant) (1)</li>
      <li>VERB-Part--PRON (2112)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (5534)</li>
      <li>VERB-Fin--NOUN-ADP(_) (21)</li>
      <li>VERB-Fin--PRON (1283)</li>
      <li>VERB-Fin--PRON-ADP(_) (1)</li>
      <li>VERB-Inf--NOUN (5209)</li>
      <li>VERB-Inf--NOUN-ADP(_) (12)</li>
      <li>VERB-Inf--PRON (607)</li>
      <li>VERB-Inf--PRON-ADP(_) (2)</li>
      <li>VERB-Part--NOUN (3424)</li>
      <li>VERB-Part--NOUN-ADP(_) (10)</li>
      <li>VERB-Part--PRON (484)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (10)</li>
      <li>VERB-Fin--PRON (1079)</li>
      <li>VERB-Inf--NOUN (8)</li>
      <li>VERB-Inf--PRON (266)</li>
      <li>VERB-Inf--PRON-ADP(_) (1)</li>
      <li>VERB-Part--NOUN (4)</li>
      <li>VERB-Part--PRON (614)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 2 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: _ _, _ se</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 5 relation subtypes: <a>acl:relcl</a>, <a>aux:caus</a>, <a>aux:pass</a>, <a>flat:name</a>, <a>nsubj:caus</a></li>
<li>The following 6 relation types are not used in this corpus at all: <a>discourse</a>, <a>clf</a>, <a>compound</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
