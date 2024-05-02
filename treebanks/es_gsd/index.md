---
layout: base
title:  'UD_Spanish-GSD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Spanish GSD

Language: [Spanish](/es/index.html) (code: `es`)<br/>
Family: Indo-European, Romance

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Miguel Ballesteros, Héctor Martínez Alonso, Ryan McDonald, Elena Pascual, Natalia Silveira, Daniel Zeman, Joakim Nivre.

Repository: [UD_Spanish-GSD](https://github.com/UniversalDependencies/UD_Spanish-GSD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udes_gsd213)<br />
Download all treebanks: [UD 2.13](/#download)

License: CC BY-SA 4.0

Genre: blog, news, reviews, wiki

Questions, comments?
General annotation questions (either Spanish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Spanish-GSD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | not available |
| Features | assigned by a program, not checked manually |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The Spanish UD is converted from the content head version of the [universal
dependency treebank v2.0 (legacy)](https://github.com/ryanmcd/uni-dep-tb).




In addition to converting dependencies from the legacy UD treebank, token level morphology features have been added
automatically using the parsers/taggers in Bohnet et al (2014) and Bohnet et al. (2015) trained on the Ancora
treebank and converted automatically to UD standards.

Various heuristics have been added to improve the output of the tagger, fix obvious errors and add features that
the tagger did not supply. The changes for v1.2 (November 2015) were done by Miguel Ballesteros, Dan Zeman, and
Héctor Martínez Alonso.

The Spanish UD conforms to the UD guidelines, but there are some exceptions.

* Bohnet, Bernd, et al. "Joint morphological and syntactic analysis for richly inflected languages."
Transactions of the Association for Computational Linguistics 1 (2013): 415-428.
* Bohnet, Bernd, et al. "Static and Dynamic Feature Selection in Morphosyntactic Analyzers." Under review. 2015.
* Taulé, Mariona, Maria Antònia Martí, and Marta Recasens.
"AnCora: Multilevel Annotated Corpora for Catalan and Spanish." LREC. 2008.


## Acknowledgments

# Statistics of UD Spanish GSD

## POS Tags

[ADJ](es_gsd-pos-ADJ.html) – [ADP](es_gsd-pos-ADP.html) – [ADV](es_gsd-pos-ADV.html) – [AUX](es_gsd-pos-AUX.html) – [CCONJ](es_gsd-pos-CCONJ.html) – [DET](es_gsd-pos-DET.html) – [INTJ](es_gsd-pos-INTJ.html) – [NOUN](es_gsd-pos-NOUN.html) – [NUM](es_gsd-pos-NUM.html) – [PART](es_gsd-pos-PART.html) – [PRON](es_gsd-pos-PRON.html) – [PROPN](es_gsd-pos-PROPN.html) – [PUNCT](es_gsd-pos-PUNCT.html) – [SCONJ](es_gsd-pos-SCONJ.html) – [SYM](es_gsd-pos-SYM.html) – [VERB](es_gsd-pos-VERB.html) – [X](es_gsd-pos-X.html)

## Features

[Abbr](es_gsd-feat-Abbr.html) – [Case](es_gsd-feat-Case.html) – [Definite](es_gsd-feat-Definite.html) – [Degree](es_gsd-feat-Degree.html) – [Foreign](es_gsd-feat-Foreign.html) – [Gender](es_gsd-feat-Gender.html) – [Mood](es_gsd-feat-Mood.html) – [Number](es_gsd-feat-Number.html) – [NumForm](es_gsd-feat-NumForm.html) – [NumType](es_gsd-feat-NumType.html) – [Person](es_gsd-feat-Person.html) – [Polarity](es_gsd-feat-Polarity.html) – [Polite](es_gsd-feat-Polite.html) – [Poss](es_gsd-feat-Poss.html) – [PrepCase](es_gsd-feat-PrepCase.html) – [PronType](es_gsd-feat-PronType.html) – [Reflex](es_gsd-feat-Reflex.html) – [Tense](es_gsd-feat-Tense.html) – [Typo](es_gsd-feat-Typo.html) – [VerbForm](es_gsd-feat-VerbForm.html)

## Relations

[acl](es_gsd-dep-acl.html) – [acl:relcl](es_gsd-dep-acl-relcl.html) – [advcl](es_gsd-dep-advcl.html) – [advmod](es_gsd-dep-advmod.html) – [amod](es_gsd-dep-amod.html) – [appos](es_gsd-dep-appos.html) – [aux](es_gsd-dep-aux.html) – [aux:pass](es_gsd-dep-aux-pass.html) – [case](es_gsd-dep-case.html) – [cc](es_gsd-dep-cc.html) – [ccomp](es_gsd-dep-ccomp.html) – [compound](es_gsd-dep-compound.html) – [conj](es_gsd-dep-conj.html) – [cop](es_gsd-dep-cop.html) – [csubj](es_gsd-dep-csubj.html) – [csubj:pass](es_gsd-dep-csubj-pass.html) – [dep](es_gsd-dep-dep.html) – [det](es_gsd-dep-det.html) – [discourse](es_gsd-dep-discourse.html) – [dislocated](es_gsd-dep-dislocated.html) – [expl](es_gsd-dep-expl.html) – [expl:pass](es_gsd-dep-expl-pass.html) – [expl:pv](es_gsd-dep-expl-pv.html) – [fixed](es_gsd-dep-fixed.html) – [flat](es_gsd-dep-flat.html) – [goeswith](es_gsd-dep-goeswith.html) – [iobj](es_gsd-dep-iobj.html) – [mark](es_gsd-dep-mark.html) – [nmod](es_gsd-dep-nmod.html) – [nsubj](es_gsd-dep-nsubj.html) – [nsubj:outer](es_gsd-dep-nsubj-outer.html) – [nsubj:pass](es_gsd-dep-nsubj-pass.html) – [nummod](es_gsd-dep-nummod.html) – [obj](es_gsd-dep-obj.html) – [obl](es_gsd-dep-obl.html) – [obl:agent](es_gsd-dep-obl-agent.html) – [obl:arg](es_gsd-dep-obl-arg.html) – [orphan](es_gsd-dep-orphan.html) – [parataxis](es_gsd-dep-parataxis.html) – [punct](es_gsd-dep-punct.html) – [root](es_gsd-dep-root.html) – [vocative](es_gsd-dep-vocative.html) – [xcomp](es_gsd-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16013 sentences, 423345 tokens and 431586 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 46425 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 242 types of words that contain both letters and punctuation. Examples: 's, etc., d', C., n., P., Dr., l', D., EE.UU., E., J., A., B., Jr., L., S.A., St., W., h., s., I., G., K., R., v., Inc., No., Sr., U.S., f., m., 'm, A.C., Bros., Ltd., O'Brien, O'Connor, O., O.T.O., d'Or, p.m., &lt;, 've, .ç, Abdu'l, B.B., Co., Croissan'Wich, D.C.</li>
</ul>

<ul>
<li>This corpus contains 8221 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 856 types of multi-word tokens. Examples: del, al, convertirse, verse, darle, hacerse, hacerlo, convirtiéndose, dedicarse, quedarse, casarse, ponerse, encontrarse, presentarse, enfrentarse, haberse, incorporarse, retirarse, unirse, mantenerse, tratarse, asegurarse, comunicarse, graduarse, haciéndolo, llamarse, conocerse, considerarse, darse, decirle, hacerme, verlo, adaptarse, basándose, celebrarse, centrarse, encontrarlo, encontrándose, enterarse, habiéndose, hacerle, marcharse, preguntarse, referirse, reunirse, tomarse, trasladarse, vengarse, volverse, abrirse.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 26 word types tagged as particles (PART): Gram, Hola, L, Trans, Vamos, Vaya, Vice, abandono, adios, co, ex, ficha, fue, hoc, no, not, post, pre, que, re, ruso, semi, sin, sub, super, to</li>
</ul>

<ul>
<li>This corpus contains 58 lemmas tagged as pronouns (PRON): algo, alguien, alguno, alles, ambos, aquel, aquél, bastante, cual, cualquiera, cuanto, cuál, cuánto, demasiado, demás, el, ese, este, esto, i, me, menos, mi, mismo, muchisimio, mucho, muchísimo, más, nada, nadie, niguno, ninguno, nuestro, otro, poco, que, quien, quién, qué, se, suyo, tal, tanto, that, they, this, todo, tú, uno, varios, what, who, yo, you, ámbo, él, ésta, ésto</li>
</ul>

<ul>
<li>This corpus contains 89 lemmas tagged as determiners (DET): a, ae, alguno, all, ambos, apenas, aquel, aquél, as, bastante, cada, cierto, cualquier, cualquiera, cuan, cuanta, cuanto, cuantos, cuyo, cuàles, cuál, cuán, da, de, del, dema, demasiado, demás, den, des, dicha, dicho, die, distinto, diverso, e, el, ela, ese, esta, este, estós, ha, ir, johnson, kentrocapros, l', le, ls, lso, mes, mi, mucho, muchísimo, my, ninguno, nuestro, o, otro, our, perino, plas, poco, pocos, que, qué, s., sendo, sendos, ser, su, sus, suyo, tal, tanto, the, todas, todo, tu, tus, unir, uno, vaario, varios, varía, vuestra, vuestro, ﻿el, ﻿la</li>
</ul>

<ul>
<li>Out of the above, 28 lemmas occurred sometimes as PRON and sometimes as DET: alguno, ambos, aquel, aquél, bastante, cualquiera, cuanto, cuál, demasiado, demás, el, ese, este, mi, mucho, muchísimo, ninguno, nuestro, otro, poco, que, qué, suyo, tal, tanto, todo, uno, varios</li>
</ul>

<ul>
<li>This corpus contains 11 lemmas tagged as auxiliaries (AUX): be, can, deber, do, estar, haber, poder, querer, saber, sein, ser</li>
</ul>

<ul>
<li>Out of the above, 7 lemmas occurred sometimes as AUX and sometimes as VERB: deber, estar, haber, poder, querer, saber, ser</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
    <li>NOUN: country</li>
    <li>VERB: tiene, es, encuentra, hay, hace, tenía, tienen, era, tuvo, fue</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>ADJ: estupendo, normando, contendo, inclusive, lindo, paralela, agricolas</li>
    <li>AUX: siendo, habiendo, habiéndo, estando, pudiéndo</li>
    <li>NOUN: Pese, excandidata</li>
    <li>PROPN: Fernando, Orlando, Absorbiendo, Armando, Buscando, Esperando, Moose, Pompeyo, Sembrando, diciembre</li>
    <li>VERB: residiendo, incluyendo, haciendo, llegando, teniendo, dejando, pasando, recomiendo, trabajando, dando</li>
    <li>X: pareciendo, ritmosbasándose, teloneando</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADJ: particular, mártir, SOLIDARIO, Vestibular, aviar, bereber, consular, dispar, glaciar, linear</li>
    <li>AUX: ser, haber, poder, estar, puedes, Podemos, Podríamos, Son, estoy, ha</li>
    <li>NOUN: pesar, cabo, parecer, ser, hacer, azúcar, cover, poder, zar, Lugar</li>
    <li>PROPN: Charles, Sir, Star, vodafone, Aimar, Air, Amir, Balvicar, Bonaparte, Conocer</li>
    <li>VERB: hacer, ver, tener, decir, dar, partir, llegar, ir, encontrar, volver</li>
    <li>X: super, per, after, aupair, avant, carrier, d, master, near, online</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: pasado, compuesto, privado, conocidos, conocida, ubicado, privada, abierto, elevada, abierta</li>
    <li>AUX: sido, estado, podido, debido</li>
    <li>NOUN: pulgadas, $, llamada, supuesto, mediados, poblados, conocido, lavado, amada, conocida</li>
    <li>PROPN: Unidos, Unido, Alvarado, Quesada, Abiertas, Casado, Hurtado, Puerto, Quemada, Quemado</li>
    <li>SYM: $, #</li>
    <li>VERB: ubicado, conocido, debido, llamado, situada, nacido, hecho, dado, conocida, compuesto</li>
    <li>X: co, ledo, lonsanjado, organisadas, parquizado, semi, sinsentido, sobretodo, tomato, trato</li>
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
      <li>ADJ: primera, nueva, segunda, buena, francesa, misma, alta, pequeña, propia, nuevas</li>
      <li>ADJ-Part: conocida, privada, elevada, abierta, ubicada, cuadrada, variada, armadas, privadas, abiertas</li>
      <li>AUX-Fin: esta, estoy, pudieras, estarías, estas, has</li>
      <li>DET: la, las, una, esta, otras, toda, estas, esa, todas, otra</li>
      <li>NOUN: parte, población, ciudad, personas, familia, vez, forma, vida, agua, región</li>
      <li>NOUN-Part: pulgadas, llamada, amada, conocida, pasada, situada, bandadas, cebada, denominada, discípulo</li>
      <li>NUM: una, media, II, pocas, I, IV, XI, ocho, setenta, 2008-09</li>
      <li>PRON: la, una, ella, las, ellas, esta, otra, otras, ésta, muchas</li>
      <li>PROPN: guerra, Europea, Ruta, Isla, española, TV, Aérea, batalla, universidad, Ciencias</li>
      <li>PROPN-Part: Quesada, Quemada, Abiertas, Agoda, Aplicadas, Blindada, Daida, Fócida, Google, Gymnosarda</li>
      <li>SYM: h, $, &, m, €, +, http://redsismica.uprm.edu/spanish/informacion/terr1918.php, http://www.rumbo.es/disney/</li>
      <li>VERB: situada, conocida, ubicada, llamada, dirigida, fundada, publicada, realizada, construida, creada</li>
      <li>VERB-Fin: esta, deriva, llena, Juega, continua, forma, vas, expresa, ficha, usa</li>
      <li>VERB-Part: situada, conocida, ubicada, llamada, dirigida, fundada, publicada, realizada, construida, creada</li>
      <li>X: 's, C, B, cápita, i, pre, semi, ta, C., high</li>
      <li>X-Part: co, organisadas, ubicada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: primer, mismo, nuevo, junto, segundo, español, buen, propio, primeros, único</li>
      <li>ADJ-Part: pasado, compuesto, privado, conocidos, ubicado, abierto, conocido, destacados, parecido, satisfecho</li>
      <li>AUX-Fin: ser, este, poder, estar, deber, haber, habéis, han, serás</li>
      <li>AUX-Part: sido, estado, podido, debido</li>
      <li>DET: el, los, un, este, otros, ese, estos, todo, todos, unos</li>
      <li>NOUN: años, año, municipio, nombre, lugar, equipo, tiempo, estado, grupo, país</li>
      <li>NOUN-Fin: country</li>
      <li>NOUN-Part: $, supuesto, mediados, poblados, conocido, lavado, ocurrido, puesto, respecto, significados</li>
      <li>NUM: un, uno, ciento, II, medio, cero, millones, V, VIII, XX</li>
      <li>PRON: lo, uno, los, él, todo, ellos, ello, este, otros, otro</li>
      <li>PROPN: Unidos, Estados, Partido, censo, José, of, Club, Diego, País, río</li>
      <li>PROPN-Part: Unidos, Unido, Alvarado, Casado, Hurtado, Puerto, Quemado, do, visto, Abiertas</li>
      <li>SYM: km, cm, $, &, m, #, º, mundo.com, www.delnuevo, www.dgt.es</li>
      <li>SYM-Part: $, #</li>
      <li>VERB: ubicado, conocido, debido, llamado, hecho, nacido, dado, compuesto, tenido, lanzado</li>
      <li>VERB-Fin: puesto, debido, nombrado, vuelvo, ver, Acabo, pesar, trabajo, vivo, contraer</li>
      <li>VERB-Part: ubicado, conocido, llamado, debido, nacido, hecho, dado, compuesto, tenido, lanzado</li>
      <li>X: mm, msnm, 's, etc., n., of, co, cis, parking, to</li>
      <li>X-Part: co, ledo, lonsanjado, parquizado, semi, sinsentido, sobretodo, tomato, trato</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: grandes, diferentes, principales, importantes, sociales, internacionales, primeros, anteriores, siguientes, últimos</li>
      <li>ADJ-Part: conocidos, destacados, armadas, armados, privadas, privados, abiertas, variadas, alejados, conocidas</li>
      <li>AUX: son, eran, han, fueron, pueden, están, habían, hemos, estaban, deben</li>
      <li>AUX-Fin: son, eran, han, fueron, pueden, están, habían, hemos, estaban, deben</li>
      <li>DET: los, las, sus, otras, otros, estos, todos, unos, varios, estas</li>
      <li>NOUN: años, habitantes, personas, millones, razas, obras, días, veces, países, meses</li>
      <li>NOUN-Part: pulgadas, $, mediados, poblados, significados, acorazados, acusados, bandadas, conocidos, desaparecidos</li>
      <li>NUM: dos, tres, cuatro, cinco, seis, siete, ocho, mil, diez, nueve</li>
      <li>PRON: los, nos, les, ellos, las, otros, todos, quienes, muchos, ellas</li>
      <li>PROPN: Unidos, Estados, Luis, van, ángeles, on, Dos, Ciencias, Olímpicos, Periodistas</li>
      <li>PROPN-Part: Unidos, Abiertas, Aplicadas, Blas, Casados, Google, José, Organizados, Owen, desnudos</li>
      <li>SYM: $, km, m, #, &, http://redsismica.uprm.edu/spanish/informacion/terr1918.php, http://www.rumbo.es/disney/, www.dgt.es</li>
      <li>SYM-Part: $, #</li>
      <li>VERB: tienen, eran, encuentran, pertenecían, son, corresponden, existen, tenían, están, hacen</li>
      <li>VERB-Fin: tienen, eran, encuentran, pertenecían, son, corresponden, existen, tenían, están, hacen</li>
      <li>VERB-Part: dedicados, relacionadas, realizadas, llamados, publicados, relacionados, formados, situados, utilizados, basadas</li>
      <li>X: mm, 's, des, dos, hits, WLAN, afores, antibuque, doubles, jóvenescon</li>
      <li>X-Part: organisadas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: gran, estadounidense, primera, total, primer, nacional, principal, importante, general, mismo</li>
      <li>ADJ-Part: pasado, compuesto, privado, conocida, ubicado, privada, abierto, elevada, abierta, conocido</li>
      <li>AUX: es, fue, ha, era, está, puede, sido, había, estaba, he</li>
      <li>AUX-Fin: es, fue, ha, era, está, puede, había, estaba, he, sea</li>
      <li>AUX-Part: sido, estado, podido, debido</li>
      <li>DET: el, la, un, una, su, este, esta, cada, ese, todo</li>
      <li>NOUN: año, parte, población, ciudad, familia, municipio, vez, nombre, lugar, equipo</li>
      <li>NOUN-Fin: country</li>
      <li>NOUN-Part: llamada, supuesto, conocido, lavado, amada, conocida, ocurrido, pasada, puesto, respecto</li>
      <li>NUM: un, una, uno, media, ciento, II, cero, medio, XX, V</li>
      <li>PRON: lo, le, la, me, uno, cual, una, quien, esto, te</li>
      <li>PROPN: Nacional, mundial, general, guerra, the, of, Partido, José, censo, mar</li>
      <li>PROPN-Part: Unido, Alvarado, Quesada, Casado, Hurtado, Puerto, Quemada, Quemado, do, visto</li>
      <li>SYM: ², h, $, &, º, #, extremo.com, ª, €, +</li>
      <li>SYM-Part: $</li>
      <li>VERB: tiene, es, encuentra, hay, hace, tenía, era, ubicado, tuvo, fue</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tenía, era, tuvo, fue, hizo</li>
      <li>VERB-Part: ubicado, conocido, llamado, debido, situada, nacido, hecho, dado, conocida, compuesto</li>
      <li>X: 's, etc., anti, n., of, and, co, metal, pre, online</li>
      <li>X-Part: co, ledo, lonsanjado, parquizado, semi, sinsentido, sobretodo, tomato, trato, ubicada</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>PRON: lo, la, los, las, sí, mí, ti, se, Me, em</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Dat
    <ul>
      <li>PRON: se, me, nos, te, os</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Acc,Nom
    <ul>
      <li>PRON: él, ellos, ella, ello, ellas, nosotros, usted, vosotros, ustedes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Com
    <ul>
      <li>PRON: consigo, conmigo, contigo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>PRON: le, me, les, nos, te, os, la, lo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: yo, tú, I, You, él</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepCase</a></li>
</ul>

<ul>
  <li>Npr
    <ul>
      <li>PRON: se, lo, la, me, los, nos, te, las, os</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pre
    <ul>
      <li>PRON: sí, mí, ti</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: el, la, los, las, the, al, a, en, ha, l'</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, unos, unas, a, uno</li>
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
      <li>ADJ: Santísima, buenísimas, aceleradísimo, altísima, altísimo, bellísima, buenísima, buenísimo, completísima, contentísima</li>
      <li>DET: muchísimas, muchisimas</li>
      <li>PRON: muchísimo, muchisimo, muchisimio</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: mayor, mejor, mejores, menor, mayores, menores, peor, peores</li>
      <li>ADV: más, menos</li>
      <li>PRON: menos, más</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: Annual, Clear</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: máximo, máxima, mínima, mínimo, mínimas, óptimo, máximas, máximos, mínimos, óptima</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ: gran</li>
      <li>ADP: para</li>
      <li>ADV: no, nunca, tampoco, jamás, ni, o, sino</li>
      <li>CCONJ: ni</li>
      <li>PART: no, not</li>
      <li>PROPN: no</li>
      <li>X: no, so</li>
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
      <li>AUX-Fin: sería, podría, habría, podrían, debería, serían, deberían, habrían, estaría, estarían</li>
      <li>VERB-Fin: tendría, gustaría, haría, volvería, sería, varían, varía, conseguiría, llegaría, serían</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: Do, SEA, Seamos, Sean</li>
      <li>VERB: pese, pase, Let, añade, compre, mira, tengan, Afirma, Comprobaremos, Disponemos</li>
      <li>VERB-Fin: pese, pase, Let, añade, compre, mira, tengan, Afirma, Comprobaremos, Disponemos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tenía, tienen, era, fue, tuvo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sea, pueda, sean, puedan, haya, fuese, hubiera, fuera, fueran, pudiera</li>
      <li>VERB-Fin: tenga, sea, crea, haga, haya, tengan, hagan, vaya, diera, llegue</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, podrá, podrán, serán, deberá, estará, deberán, estarán, sera, podremos</li>
      <li>VERB-Fin: será, tendrá, hará, permitirá, tendrán, contará, habrá, llegará, celebrará, saldrá</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: eran, era, había, estaba, habían, podía, estaban, debía, fuese, hubiera</li>
      <li>VERB-Fin: tenía, era, eran, había, pertenecían, estaba, tenían, encontraba, contaba, estaban</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fue, fueron, pudo, estuvo, pudieron, Son, debió, pude, estuve, pudimos</li>
      <li>AUX-Part: sido, estado, podido, debido</li>
      <li>VERB-Fin: fue, tuvo, hizo, comenzó, nació, dijo, dio, ganó, convirtió, recibió</li>
      <li>VERB-Part: hecho, tenido, dado, conocido, visto, lanzado, recibido, elegido, pasado, encontrado</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: es, ha, son, han, está, puede, pueden, están, he, sea</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tienen, está, cuenta, da, dice</li>
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
      <li>DET: el, la, los, un, las, una, unos, unas, the, a</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: tal</li>
      <li>DET: este, esta, ese, estos, esa, estas, esos, esas, aquellos, aquella</li>
      <li>PRON: esto, tanto, este, eso, éste, esta, estos, ésta, aquellos, éstas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: allí</li>
      <li>DET: otras, otros, cualquier, the, varios, otro, algunos, otra, varias, muchos</li>
      <li>PRON: uno, una, algo, poco, mucho, otros, otro, muchos, algunos, otra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: dónde, cuándo</li>
      <li>DET: qué, cuál</li>
      <li>PRON: qué, quién, cuál, cuáles, quiénes, What</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>ADV: cual, cuánto</li>
      <li>DET: cuantas, cuantos, cuan, cuán</li>
      <li>PRON: Cuantas, Cuánto, Who, cuantos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>DET: ningún, ninguna, ningun</li>
      <li>PRON: nada, nadie, ninguno, ninguna, niguna</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: su, sus, mi, nuestra, nuestros, nuestro, tu, mis, tus, nuestras</li>
      <li>PRON: se, lo, le, la, me, los, nos, les, te, él</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: donde, cuando</li>
      <li>DET: cuya, cuyo, que, cuyas, cuyos</li>
      <li>PRON: que, cual, quien, quienes, cuales</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: cada, todo, todos, toda, todas, ambos, ambas</li>
      <li>PRON: todo, todos, ambos, ambas, todas, toda, Alles</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: muchos, muchas, ambos, mucha, pocos, poco, ambas, mucho, poca, tanto</li>
      <li>NUM: dos, tres, 2010, 0, cuatro, 3, 1, 2, 10, 4</li>
      <li>PRON: tanto, poco, mucho, muchos, ambos, bastante, muchas, demasiado, ambas, pocos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primera, primer, segunda, segundo, tercera, primeros, primeras, tercer, cuarto, cuarta</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: su, sus, mi, nuestra, cuya, nuestros, cuyo, nuestro, tu, mis</li>
      <li>PRON: mi, suyo, nuestros, suya, nuestro, suyos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: se, me, nos, sí, te, consigo, os, zse</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: he, hemos, estoy, podemos, puedo, somos, soy, estamos, debemos, pude</li>
      <li>AUX-Fin: he, hemos, estoy, podemos, puedo, somos, soy, debemos, estamos, pude</li>
      <li>DET: mi, nuestra, nuestros, nuestro, mis, nuestras, vuestra, Dichos, My, me</li>
      <li>PRON: me, nos, yo, nosotros, mí, mi, I, conmigo, nuestro, nuestros</li>
      <li>VERB-Fin: tenemos, creo, vamos, estamos, voy, pedimos, tengo, quiero, recomiendo, encontramos</li>
      <li>X: 's, mi, hoc, lobster, ne, of, què, sulo, to</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: puedes, eres, habéis, has, sois, Podeis, deberias, estas, estés, habeis</li>
      <li>DET: tu, tus, L'</li>
      <li>PRON: te, os, tú, usted, vosotros, ti, ustedes, You, contigo</li>
      <li>SYM: ², º, m</li>
      <li>VERB-Fin: tienes, sabes, sientes, estás, llevas, añade, mira, perdais, quieres, viste</li>
      <li>X: 's, des, £, s, t, tu, x</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
      <li>AUX-Fin: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
      <li>DET: su, sus, tus, the, Tu, suyo, Era, l', suyos</li>
      <li>PRON: se, lo, le, la, los, les, él, ellos, ella, las</li>
      <li>SYM: $, ª, º, #, &, ²</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tenía, tienen, era, fue, tuvo</li>
      <li>X: 's, es, and, oa, of, Fauve, Kage, League, Reguleses, Tsurugi</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>PRON: usted, ustedes</li>
    </ul>
  </li>
</ul>



<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>NOUN: ha, D, D., Dr.</li>
          <li>PROPN: Inc.</li>
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
          <li>ADJ: Beautiful, Sancti, Sorry, negative, qodesh, Annual, Clear, Thirteenth, falcata</li>
          <li>ADP: at, de, for, in</li>
          <li>AUX: can, is, 's, Am, Do, Was, Were, be, ist</li>
          <li>AUX-Fin: is, 's, Am, Do, Was, Were, ist</li>
          <li>AUX-Inf: be</li>
          <li>DET: the, a, o, ha, la</li>
          <li>NOUN: Apostoli, Bass, Boy, Dioecesis, kapellmeister, nɔrsk, nɔʂːk, Avengers, Bitch, Creek</li>
          <li>NUM: Five, One, Six, eins</li>
          <li>PART: not, to</li>
          <li>PRON: I, You, Alles, Me, That, This, What, Who, em</li>
          <li>PROPN: American, Chilkasa, Haka, Hotaru, Kenpo, Petri, no, Γαρμπή, ΖΒΖ, Καίτη</li>
          <li>SCONJ: If, When</li>
          <li>VERB: Let, Kick, Appears, Give, Go, Kiss, Lovin, Made, Makes, Need</li>
          <li>VERB-Fin: Let, Appears, Give, Makes, Need</li>
          <li>VERB-Ger: Lovin</li>
          <li>VERB-Inf: Kick, Kiss, Let, dance</li>
          <li>VERB-Part: Made, hanged</li>
          <li>X: 天下第一, TΔS, Γρηγορᾶς, Μουσείο, Φιλοκαλια, β, ε, ε2, καλóς, μm</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumForm</a>
    <ul>
      <li>Digit
        <ul>
          <li>NUM: 2010, 0, 3, 1, 2, 10, 4, 5, 20, 2011</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: II, I, X, VII, III, VIII, Il, VI, XIII</li>
          <li>NUM: II, I, III, XIX, XX, IV, V, XVIII, XVI, XV</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: dos, tres, cuatro, cinco, seis, un, mil, siete, ocho, una</li>
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
          <li>ADJ: dificil, politica, facil, fria, historico, AUTENTICAS, agonico, agricolas, aleman, amplisimo</li>
          <li>ADJ-Ger: agricolas</li>
          <li>ADV: mas, tambien, ademas, como, asi, despues, alli, aqui, alla, rapidamente</li>
          <li>AUX: esta, estan, a, sera, e, estas, Podeis, deberias, erán, estabamos</li>
          <li>AUX-Fin: esta, estan, sera, estas, Podeis, deberias, erán, estabamos, este, habeis</li>
          <li>CCONJ: 0, sinó</li>
          <li>DET: a, al, en, ningun, está, que, algun, me, muchisimas</li>
          <li>NOUN: video, periodo, guion, dia, dias, periodos, videos, clinica, numero, menu</li>
          <li>NOUN-Inf: bebe</li>
          <li>NOUN-Part: perdidas</li>
          <li>NUM: seseínta, veintitres</li>
          <li>PRON: este, mi, la, muchisimo, lo, zse</li>
          <li>PROPN: Milan, Paris, Africa, sabado, Beisbol, Futbol, Iberico, Miercoles, Pakistan, Salon</li>
          <li>PUNCT: .ç</li>
          <li>VERB-Fin: esta, tenia, hacia, tenian, cambio, dejo, habia, llego, llevo, paso</li>
          <li>VERB-Part: confundido, conocido, creido, insisto, leido, presento, unido</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 4 lemmas as copulas (<a>cop</a>). Examples: ser, estar, be, sein.</li>
</ul>

<ul>
<li>This corpus uses 9 lemmas as auxiliaries (<a>aux</a>). Examples: haber, poder, estar, deber, ser, querer, can, do, saber.</li>
<li>This corpus uses 6 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, estar, be, haber, deber, poder.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (2)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB-Fin--NOUN (6550)</li>
      <li>VERB-Fin--NOUN-ADP(a) (1)</li>
      <li>VERB-Fin--NOUN-ADP(alrededor) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(más) (1)</li>
      <li>VERB-Fin--NOUN-ADP(por)-ADP(málaga) (1)</li>
      <li>VERB-Fin--NOUN-ADP(que) (1)</li>
      <li>VERB-Fin--PRON (725)</li>
      <li>VERB-Fin--PRON-ADP(con) (1)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-Acc (27)</li>
      <li>VERB-Fin--PRON-Acc,Dat (2)</li>
      <li>VERB-Fin--PRON-Acc,Nom (163)</li>
      <li>VERB-Fin--PRON-Nom (52)</li>
      <li>VERB-Ger--NOUN (91)</li>
      <li>VERB-Ger--PRON (8)</li>
      <li>VERB-Ger--PRON-Acc (2)</li>
      <li>VERB-Ger--PRON-Acc,Nom (3)</li>
      <li>VERB-Ger--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (376)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--PRON (38)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Acc,Nom (9)</li>
      <li>VERB-Inf--PRON-Nom (6)</li>
      <li>VERB-Part--NOUN (679)</li>
      <li>VERB-Part--PRON (73)</li>
      <li>VERB-Part--PRON-ADP(para) (1)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Acc,Nom (12)</li>
      <li>VERB-Part--PRON-Nom (13)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (6109)</li>
      <li>VERB-Fin--NOUN-ADP(a) (388)</li>
      <li>VERB-Fin--NOUN-ADP(alrededor) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (8)</li>
      <li>VERB-Fin--NOUN-ADP(entre) (1)</li>
      <li>VERB-Fin--NOUN-ADP(pesar) (1)</li>
      <li>VERB-Fin--NOUN-ADP(por) (1)</li>
      <li>VERB-Fin--NOUN-ADP(sobre) (1)</li>
      <li>VERB-Fin--PRON (368)</li>
      <li>VERB-Fin--PRON-ADP(a) (21)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-ADP(en) (1)</li>
      <li>VERB-Fin--PRON-ADP(en)-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-ADP(por) (1)</li>
      <li>VERB-Fin--PRON-Acc (651)</li>
      <li>VERB-Fin--PRON-Acc,Dat (114)</li>
      <li>VERB-Fin--PRON-Acc,Nom (2)</li>
      <li>VERB-Fin--PRON-Acc,Nom-ADP(a) (3)</li>
      <li>VERB-Fin--PRON-Acc-ADP(a) (14)</li>
      <li>VERB-Fin--PRON-Dat (86)</li>
      <li>VERB-Fin--PRON-Nom (1)</li>
      <li>VERB-Ger--NOUN (696)</li>
      <li>VERB-Ger--NOUN-ADP(a) (62)</li>
      <li>VERB-Ger--PRON (16)</li>
      <li>VERB-Ger--PRON-ADP(a) (4)</li>
      <li>VERB-Ger--PRON-Acc (84)</li>
      <li>VERB-Ger--PRON-Acc,Dat (3)</li>
      <li>VERB-Ger--PRON-Dat (6)</li>
      <li>VERB-Inf--NOUN (2611)</li>
      <li>VERB-Inf--NOUN-ADP(a) (243)</li>
      <li>VERB-Inf--NOUN-ADP(baer) (1)</li>
      <li>VERB-Inf--NOUN-ADP(entre) (1)</li>
      <li>VERB-Inf--PRON (74)</li>
      <li>VERB-Inf--PRON-ADP(a) (18)</li>
      <li>VERB-Inf--PRON-Acc (267)</li>
      <li>VERB-Inf--PRON-Acc,Dat (25)</li>
      <li>VERB-Inf--PRON-Acc,Nom-ADP(a) (1)</li>
      <li>VERB-Inf--PRON-Acc-ADP(a) (1)</li>
      <li>VERB-Inf--PRON-Dat (29)</li>
      <li>VERB-Part--NOUN (520)</li>
      <li>VERB-Part--NOUN-ADP(a) (38)</li>
      <li>VERB-Part--PRON (33)</li>
      <li>VERB-Part--PRON-ADP(a) (1)</li>
      <li>VERB-Part--PRON-Acc (62)</li>
      <li>VERB-Part--PRON-Acc,Dat (15)</li>
      <li>VERB-Part--PRON-Acc,Nom (1)</li>
      <li>VERB-Part--PRON-Acc,Nom-ADP(a) (1)</li>
      <li>VERB-Part--PRON-Dat (12)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--PRON-Acc (1)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 1103 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: encontrar se, convertir se, hacer se, ver se, dar se, tratar se, realizar se, producir se, llamar se, presentar se, utilizar se, dedicar se, poner se, mantener se, referir se, celebrar se, quedar se, considerar se, llevar se, unir se, desarrollar se, trasladar se, ubicar se, casar se, decir se, volver se, hallar se, incorporar se, conservar se, basar se, conocer se, deber se, establecer se, extender se, mostrar se, iniciar se, usar se, construir se, encargar se, retirar se, crear se, dividir se, negar se, graduar se, acercar se, incluir se, reunir se, situar se, tener se, centrar se</li>
</ul>

<h3>Reflexive Passive</h3>

<ul>
  <li>This corpus contains 5 lemmas that occur at least once with an <a>expl:pass</a> child. Examples: advertir se, comer se, convertir se, decir se, hacer se</li>
</ul>

<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 13 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: ver se, apuntar se, asesoro me, colocar nos, dejar se, disfrazar se, empleo se, encontrar sí, hacer me, hacer se, ofrecer se, salvar sí, ver te</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 9 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>expl:pass</a>, <a>expl:pv</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a></li>
<li>The following 3 relation types are not used in this corpus at all: <a>clf</a>, <a>list</a>, <a>reparandum</a></li>
</ul>
