---
layout: base
title:  'UD_Danish-DDT'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Danish DDT

Language: [Danish](/da/index.html) (code: `da`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.1 release.

The following people have contributed to making this treebank part of UD: Anders Johannsen, Héctor Martínez Alonso, Barbara Plank.

Repository: [UD_Danish-DDT](https://github.com/UniversalDependencies/UD_Danish-DDT)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udda_ddt29)<br />
Download all treebanks: [UD 2.9](/#download)

License: CC BY-SA 4.0

Genre: news, fiction, spoken, nonfiction

Questions, comments?
General annotation questions (either Danish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Danish-DDT/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Danish UD treebank is a conversion of the Danish Dependency Treebank.



The Danish UD treebank has been converted from the Danish
Dependency Treebank (Buch-Kromman,2003) into Universal Dependencies
(UD). It consists of 5,512 sentences (100k words). The Danish
source texts and the Danish part-of-speech tags were created by the PAROLE-DK
project (Keson 1998) by the Danish Society for Language and Literature.

In the DDT formalism, determiners head nouns, and auxiliaries head
verbs. In order to promote content words to heads, we have applied a
cascade of graph transformations that make function words (determiners,
auxiliaries, conjunctions, etc) leaves in the dependency tree, instead
of intermediate elements between content heads.

The part-of-speech tags and labels from the original treebank have been
partially converted using mappings, and partially using the new
calculated tree structure as a reference to assign labels.

The Danish Dependency Treebank was released under the GNU GPL license, hence that license
can be used for UD_Danish as well. However, since GPL is more suitable for programs than for
data (see https://github.com/UniversalDependencies/docs/issues/296 for a discussion), we asked
for and Matthias Buch-Kromann was kind enough to grant the permission to use the Creative Commons
license as an alternative.

## Acknowledgments

Contributors (in order of last names)

- Anders Johannsen
- Héctor Martínez Alonso
- Barbara Plank

## References

* Johannsen, Anders, Martínez Alonso, Héctor and Plank, Barbara.
"Universal Dependencies for Danish". TLT14, 2015.

* Buch-Kromann, Matthias T., Line Mikkelsen, and Stine Kern Lynge.
"Danish dependency treebank.". TLT. 2003.

* Keson, Britt (1998). Documentation of The Danish Morpho-syntactically Tagged PAROLE Corpus.
Technical report, DSL


# Statistics of UD Danish DDT

## POS Tags

[ADJ](da_ddt-pos-ADJ.html) – [ADP](da_ddt-pos-ADP.html) – [ADV](da_ddt-pos-ADV.html) – [AUX](da_ddt-pos-AUX.html) – [CCONJ](da_ddt-pos-CCONJ.html) – [DET](da_ddt-pos-DET.html) – [INTJ](da_ddt-pos-INTJ.html) – [NOUN](da_ddt-pos-NOUN.html) – [NUM](da_ddt-pos-NUM.html) – [PART](da_ddt-pos-PART.html) – [PRON](da_ddt-pos-PRON.html) – [PROPN](da_ddt-pos-PROPN.html) – [PUNCT](da_ddt-pos-PUNCT.html) – [SCONJ](da_ddt-pos-SCONJ.html) – [SYM](da_ddt-pos-SYM.html) – [VERB](da_ddt-pos-VERB.html) – [X](da_ddt-pos-X.html)

## Features

[Abbr](da_ddt-feat-Abbr.html) – [AdpType](da_ddt-feat-AdpType.html) – [Case](da_ddt-feat-Case.html) – [Definite](da_ddt-feat-Definite.html) – [Degree](da_ddt-feat-Degree.html) – [Foreign](da_ddt-feat-Foreign.html) – [Gender](da_ddt-feat-Gender.html) – [Mood](da_ddt-feat-Mood.html) – [Number](da_ddt-feat-Number.html) – [Number[psor]](da_ddt-feat-Number-psor.html) – [NumType](da_ddt-feat-NumType.html) – [PartType](da_ddt-feat-PartType.html) – [Person](da_ddt-feat-Person.html) – [Polite](da_ddt-feat-Polite.html) – [Poss](da_ddt-feat-Poss.html) – [PronType](da_ddt-feat-PronType.html) – [Reflex](da_ddt-feat-Reflex.html) – [Style](da_ddt-feat-Style.html) – [Tense](da_ddt-feat-Tense.html) – [VerbForm](da_ddt-feat-VerbForm.html) – [Voice](da_ddt-feat-Voice.html)

## Relations

[acl:relcl](da_ddt-dep-acl-relcl.html) – [advcl](da_ddt-dep-advcl.html) – [advmod](da_ddt-dep-advmod.html) – [advmod:lmod](da_ddt-dep-advmod-lmod.html) – [amod](da_ddt-dep-amod.html) – [appos](da_ddt-dep-appos.html) – [aux](da_ddt-dep-aux.html) – [case](da_ddt-dep-case.html) – [cc](da_ddt-dep-cc.html) – [ccomp](da_ddt-dep-ccomp.html) – [compound:prt](da_ddt-dep-compound-prt.html) – [conj](da_ddt-dep-conj.html) – [cop](da_ddt-dep-cop.html) – [dep](da_ddt-dep-dep.html) – [det](da_ddt-dep-det.html) – [discourse](da_ddt-dep-discourse.html) – [expl](da_ddt-dep-expl.html) – [fixed](da_ddt-dep-fixed.html) – [flat](da_ddt-dep-flat.html) – [goeswith](da_ddt-dep-goeswith.html) – [iobj](da_ddt-dep-iobj.html) – [list](da_ddt-dep-list.html) – [mark](da_ddt-dep-mark.html) – [nmod](da_ddt-dep-nmod.html) – [nmod:poss](da_ddt-dep-nmod-poss.html) – [nsubj](da_ddt-dep-nsubj.html) – [nummod](da_ddt-dep-nummod.html) – [obj](da_ddt-dep-obj.html) – [obl](da_ddt-dep-obl.html) – [obl:lmod](da_ddt-dep-obl-lmod.html) – [obl:tmod](da_ddt-dep-obl-tmod.html) – [parataxis](da_ddt-dep-parataxis.html) – [punct](da_ddt-dep-punct.html) – [reparandum](da_ddt-dep-reparandum.html) – [root](da_ddt-dep-root.html) – [vocative](da_ddt-dep-vocative.html) – [xcomp](da_ddt-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 5512 sentences and 100733 tokens.</li>
</ul>

<ul>
<li>This corpus contains 13318 tokens (13%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 1015 types of words that contain both letters and punctuation. Examples: kr., f.eks., bl.a., pct., pr., ca., B.T., mill., kg., kgl., B., Bosnien-Hercegovina, fig., kl., IKKE-skyldig, K., P., mia., stk., A/S, H., J., a., kvm., C., H.L., m.v., nr., Ellemann-Jensen, Inc., KV-regeringen, Ninn-Hansens, bl., d., forsknings-, ha', hhv., km., sgu', tre-fire, 19-årige, 1980'erne, 23-årige, 42-årige, 80'erne, Astma-Bodil, EF-lande, EF-landene, Elvis', FN's</li>
</ul>

<ul>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 1 word types tagged as particles (PART): at</li>
</ul>

<ul>
<li>This corpus contains 35 lemmas tagged as pronouns (PRON): I, alting, anden, begge, de, den, denne, der, deres, det, du, en, enhver, han, hans, hendes, hinanden, hun, hvad, hvem, hver, hvilken, hvis, ingen, ingenting, jeg, man, min, nogen, selv, sig, sin, som, vi, vores</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as determiners (DET): alting, anden, begge, den, denne, dens, deres, det, dets, din, en, enhver, hans, hendes, hver, ingen, jeres, min, nogen, selv, sin, somme, vores</li>
</ul>

<ul>
<li>Out of the above, 18 lemmas occurred sometimes as PRON and sometimes as DET: alting, anden, begge, den, denne, deres, det, en, enhver, hans, hendes, hver, ingen, min, nogen, selv, sin, vores</li>
</ul>

<ul>
<li>This corpus contains 9 lemmas tagged as auxiliaries (AUX): blive, burde, have, kunne, måtte, skulle, turde, ville, være</li>
</ul>

<ul>
<li>Out of the above, 8 lemmas occurred sometimes as AUX and sometimes as VERB: blive, have, kunne, måtte, skulle, turde, ville, være</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: er, har, kan, var, skal, vil, blev, kunne, havde, bliver</li>
    <li>VERB: er, har, siger, var, får, fik, sagde, kommer, går, havde</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>VERB: medvirken, afventen, banken, formåen, fremtræden, gåen, hvislen, indgriben, mumlen, skaben</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: være, blive, have, kunne, skulle, turde, ville, ku', måtte</li>
    <li>VERB: få, gå, se, have, komme, være, gøre, tage, finde, sige</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>AUX: været, blevet, kunnet, måttet, turdet, villet, værende</li>
    <li>VERB: fået, været, set, haft, gjort, gået, kommet, sagt, kommende, skrevet</li>
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
      <li>ADJ: stor, ny, klar, lang, god, egen, sådan, al, halv, almindelig</li>
      <li>DET: en, den, sin, denne, min, ingen, anden, nogen, én, din</li>
      <li>NOUN: kr., gang, dag, tid, del, mand, måde, verden, dage, gange</li>
      <li>PRON: han, jeg, vi, man, hun, den, du, ham, mig, os</li>
      <li>VERB-Part: foretrukne, udskårne</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: alt, stort, godt, nyt, svært, muligt, eget, klart, halvt, vigtigt</li>
      <li>DET: et, det, sit, noget, mit, dette, andet, intet, vort, ethvert</li>
      <li>NOUN: år, folk, går, par, børn, mennesker, stedet, fald, arbejde, sted</li>
      <li>PRON: det, noget, andet, dette, et, hvilket, hvert, intet, a., dét</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: alle, mange, flere, danske, store, nye, fleste, forskellige, få, gamle</li>
      <li>DET: de, andre, nogle, sine, disse, vore, begge, mine, andres, dine</li>
      <li>NOUN: år, kr., børn, folk, mennesker, dage, gange, kroner, problemer, pct.</li>
      <li>PRON: vi, de, dem, os, andre, hinanden, nogle, I, begge, hvilke</li>
      <li>VERB-Part: ansatte, gensplejsede, Forenede, gentagne, dræbte, interesserede, nævnte, orienterede, designede, feterede</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: hele, danske, alt, mere, dansk, ny, lille, stor, store, meget</li>
      <li>AUX-Part: været, blevet, kunnet, måttet, turdet, villet</li>
      <li>DET: en, den, et, det, sin, denne, min, sit, ingen, anden</li>
      <li>NOUN: gang, dag, år, tid, del, går, mand, måde, par, verden</li>
      <li>PRON: det, han, jeg, hun, den, du, hvad, ham, mig, noget</li>
      <li>VERB-Part: fået, været, set, haft, gjort, gået, kommet, sagt, skrevet, taget</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: det, sig, den, ham, mig, dem, os, hende, dig, jer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: Konservatives, Langes, bankansattes, besindiges, dødes, enkeltes, gamles, handicappedes, helliges, hvides</li>
      <li>DET: andres, dennes, ds., ens</li>
      <li>NOUN: års, Jordens, landets, aftes, regeringens, statens, Kræftens, politiets, ugens, verdens</li>
      <li>PRON: hvis, hinandens</li>
      <li>PROPN: Danmarks, Københavns, Brøndbys, USAs, Ungbos, DSBs, FNs, Ninn-Hansens, EFs, Elvis'</li>
      <li>VERB-Part: tiltaltes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: han, jeg, vi, de, man, hun, du, I</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>ADJ: hele, danske, store, fleste, nye, bedste, største, gamle, økonomiske, seneste</li>
      <li>NOUN: stedet, tiden, politiet, sagen, byen, landet, dagen, året, klokken, børnene</li>
      <li>VERB-Part: samlede, fortsatte, lukkede, nævnte, udsendte, anklagede, erklærede, organiserede, restaurerede, undertegnede</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADJ: mere, dansk, stor, meget, ny, klar, lang, stort, god, godt</li>
      <li>AUX-Part: været, blevet, kunnet, måttet, turdet, villet</li>
      <li>NOUN: år, kr., gang, dag, tid, del, folk, går, mand, måde</li>
      <li>VERB-Part: fået, været, set, haft, gjort, gået, kommet, sagt, skrevet, taget</li>
    </ul>
  </li>
</ul>

<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Abs
    <ul>
      <li>ADJ: allerinderst, allerstørste</li>
      <li>ADV: allerhelst, allermindst, alleryderst</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: flere, større, bedre, tidligere, mere, mindre, højere, ældre, længere, kortere</li>
      <li>ADV: mere, længere, senere, tidligere, mindre, yderligere, bedre, hurtigere, nærmere, højere</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: samme, første, alle, sidste, mange, danske, store, hele, nye, fælles</li>
      <li>ADV: meget, helt, godt, lidt, langt, faktisk, længe, ofte, hurtigt, umiddelbart</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: fleste, bedste, største, seneste, ny, mindre, mindste, øverste, meste, nyeste</li>
      <li>ADV: mest, mindst, senest, nærmest, bedst, længst, oftest, venligst, hurtigst, hårdest</li>
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
      <li>AUX: Bliv</li>
      <li>VERB: lad, rør, se, skær, brug, hold, hæld, steg, prøv, Bland</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: er, har, kan, var, skal, vil, blev, kunne, havde, bliver</li>
      <li>VERB-Fin: er, har, siger, var, får, fik, sagde, kommer, går, havde</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: var, blev, kunne, havde, skulle, ville, måtte, burde, ku', sku'</li>
      <li>AUX-Part: været, blevet, kunnet, måttet, turdet, villet</li>
      <li>VERB-Fin: var, fik, sagde, havde, gik, kom, begyndte, tog, gjorde, så</li>
      <li>VERB-Part: fået, været, set, haft, gjort, gået, kommet, sagt, skrevet, taget</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: er, har, kan, skal, vil, bliver, må, bør, tør, ka'</li>
      <li>AUX-Part: værende</li>
      <li>VERB: er, har, siger, får, kommer, går, ved, gør, mener, giver</li>
      <li>VERB-Fin: er, har, siger, får, kommer, går, ved, gør, mener, giver</li>
      <li>VERB-Part: kommende, manglende, administrerende, følgende, overlevende, tilfredsstillende, overraskende, stigende, stående, fascinerende</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>AUX-Fin: er, har, kan, var, skal, vil, blev, kunne, havde, bliver</li>
      <li>AUX-Inf: være, blive, have, kunne, skulle, turde, ville, ku', måtte</li>
      <li>VERB-Fin: er, har, siger, var, får, fik, sagde, kommer, går, havde</li>
      <li>VERB-Inf: få, gå, se, have, komme, være, gøre, tage, finde, sige</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>VERB-Fin: ventes, udsendes, sælges, kaldes, fås, menes, skabes, vises, betragtes, gives</li>
      <li>VERB-Inf: bruges, tages, nævnes, gøres, ses, sættes, fjernes, løses, behandles, betragtes</li>
    </ul>
  </li>
</ul>


<h3>Pronouns, Determiners, Quantifiers</h3>


<ul>
  <li><a>PronType</a></li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: den, de, det, denne, disse, dette, begge, dén, dennes, selv</li>
      <li>PRON: selv, de, dette, den, begge, det, denne, disse</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: en, et, andre, nogle, ingen, anden, noget, nogen, én, hvert</li>
      <li>PRON: man, noget, en, andre, hver, andet, ingen, et, anden, nogle</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>PRON: hvad, hvilket, hvem, hvilke, hvilken, hvis, HVA', Hva</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: sin, deres, hans, min, sit, hendes, sine, vores, mit, din</li>
      <li>PRON: det, han, jeg, vi, de, sig, hun, den, du, ham</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: hinanden, hinandens</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>NUM: to, tre, fire, 20, fem, seks, 10, otte, 100, 1</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 1., anden, 2., tredje, 3., andet, 12., 17., fjerde, 10.</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: sin, deres, hans, min, sit, hendes, sine, vores, mit, din</li>
      <li>PRON: deres, hans, min, sin, sine, hendes, mit, sit, vore</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: sin, sit, sine</li>
      <li>PRON: sig, sin, sine, sit</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>DET: min, vores, mit, vore, mine, vor, vort</li>
      <li>PRON: jeg, vi, mig, os, min, mit, vore</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>DET: din, Deres, dit, jeres, dine</li>
      <li>PRON: du, dig, De, I, Dem, jer, Deres</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>DET: sin, deres, hans, sit, hendes, sine, dets, dens</li>
      <li>PRON: det, han, de, sig, hun, den, ham, dem, hende, dét</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>DET: Deres</li>
      <li>PRON: De, Dem, Deres</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: deres, vores, vore, vor, vort, jeres</li>
      <li>PRON: deres, vore</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: sin, hans, min, sit, hendes, sine, mit, din, mine, dets</li>
      <li>PRON: hans, min, sin, sine, hendes, mit, sit</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>X: fru, km/t., vind., B, cand.-jur., kl, o/m., 4-cyl., E, G</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Prep
        <ul>
          <li>ADP: i, til, på, af, med, for, om, fra, ved, efter</li>
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
          <li>X: of, are, the, we, a, and, children, dead, in, junkmail</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Inf
        <ul>
          <li>ADP: som</li>
          <li>ADV: der</li>
          <li>PART: at</li>
          <li>PRON: der, som</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Style</a>
    <ul>
      <li>Arch
        <ul>
          <li>DET: somme</li>
        </ul>
      </li>
      <li>Form
        <ul>
          <li>DET: vore, vor, vort</li>
          <li>PRON: vore</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: være, blive.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: have, kunne, være, skulle, ville, blive, måtte, burde, turde.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (1569)</li>
      <li>VERB-Fin--NOUN-ADP(omkring) (1)</li>
      <li>VERB-Fin--NOUN-Gen (6)</li>
      <li>VERB-Fin--PRON (447)</li>
      <li>VERB-Fin--PRON-Acc (379)</li>
      <li>VERB-Fin--PRON-Nom (1609)</li>
      <li>VERB-Inf--NOUN (368)</li>
      <li>VERB-Inf--NOUN-ADP(end) (1)</li>
      <li>VERB-Inf--NOUN-ADP(over) (1)</li>
      <li>VERB-Inf--NOUN-Gen (1)</li>
      <li>VERB-Inf--PRON (119)</li>
      <li>VERB-Inf--PRON-Acc (85)</li>
      <li>VERB-Inf--PRON-Nom (532)</li>
      <li>VERB-Part--NOUN (488)</li>
      <li>VERB-Part--NOUN-ADP(omkring) (2)</li>
      <li>VERB-Part--NOUN-Gen (5)</li>
      <li>VERB-Part--PRON (153)</li>
      <li>VERB-Part--PRON-Acc (68)</li>
      <li>VERB-Part--PRON-Nom (372)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (77)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (32)</li>
      <li>VERB-Fin--NOUN (1575)</li>
      <li>VERB-Fin--NOUN-ADP(af) (1)</li>
      <li>VERB-Fin--NOUN-ADP(efter) (1)</li>
      <li>VERB-Fin--NOUN-ADP(end) (1)</li>
      <li>VERB-Fin--NOUN-ADP(for) (1)</li>
      <li>VERB-Fin--NOUN-ADP(omkring) (4)</li>
      <li>VERB-Fin--NOUN-ADP(over) (1)</li>
      <li>VERB-Fin--NOUN-ADP(på) (2)</li>
      <li>VERB-Fin--NOUN-ADP(som) (4)</li>
      <li>VERB-Fin--NOUN-ADP(til) (2)</li>
      <li>VERB-Fin--NOUN-ADP(under) (1)</li>
      <li>VERB-Fin--NOUN-Gen (4)</li>
      <li>VERB-Fin--PRON (131)</li>
      <li>VERB-Fin--PRON-Acc (393)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Inf--NOUN (1008)</li>
      <li>VERB-Inf--NOUN-ADP(mellem) (1)</li>
      <li>VERB-Inf--NOUN-ADP(på) (1)</li>
      <li>VERB-Inf--NOUN-Gen (8)</li>
      <li>VERB-Inf--PRON (56)</li>
      <li>VERB-Inf--PRON-ADP(om) (1)</li>
      <li>VERB-Inf--PRON-Acc (251)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Part--NOUN (421)</li>
      <li>VERB-Part--NOUN-ADP(af) (2)</li>
      <li>VERB-Part--NOUN-ADP(om) (1)</li>
      <li>VERB-Part--NOUN-Gen (2)</li>
      <li>VERB-Part--PRON (40)</li>
      <li>VERB-Part--PRON-Acc (77)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--PRON-Acc (2)</li>
      <li>VERB-Fin--NOUN (14)</li>
      <li>VERB-Fin--PRON (1)</li>
      <li>VERB-Fin--PRON-Acc (41)</li>
      <li>VERB-Inf--NOUN (21)</li>
      <li>VERB-Inf--PRON (1)</li>
      <li>VERB-Inf--PRON-Acc (39)</li>
      <li>VERB-Part--NOUN (5)</li>
      <li>VERB-Part--PRON (2)</li>
      <li>VERB-Part--PRON-Acc (18)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 154 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: vise sig, dreje sig, lade sig, føle sig, sætte sig, befinde sig, gøre sig, holde sig, udtale sig, beskæftige sig, få sig, kaste sig, klare sig, melde sig, tage sig, opføre sig, sige sig, tænke sig, bevæge sig, bryde sig, bøje sig, finde sig, gemme sig, glæde sig, koncentrere sig, lægge sig, påtage sig, rejse sig, se sig, skynde sig, trække sig, vende sig, bane sig, beslutte sig, blande sig, brede sig, dumme sig, egne sig, engagere sig, gifte sig, give sig, hygge sig, komme sig, notere sig, rette sig, sikre sig, skaffe sig, snige sig, strække sig, tillade sig</li>
    <ul>
      <li>Out of those, 6 lemmas occurred more than once, but never without a reflexive dependent. Examples: koncentrere, påtage, skynde, brede, egne, udmønte</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 6 relation subtypes: <a>acl:relcl</a>, <a>advmod:lmod</a>, <a>compound:prt</a>, <a>nmod:poss</a>, <a>obl:lmod</a>, <a>obl:tmod</a></li>
<li>The following 2 main types are not used alone, they are always subtyped: <a>acl</a>, <a>compound</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>csubj</a>, <a>dislocated</a>, <a>clf</a>, <a>orphan</a></li>
</ul>
