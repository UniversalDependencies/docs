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
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udes_gsd29)<br />
Download all treebanks: [UD 2.9](/#download)

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
automatically using the parsers/taggers in Bohnet et al 2014* and Bohnet et al. 2015** trained on the Ancora***
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

[Case](es_gsd-feat-Case.html) – [Definite](es_gsd-feat-Definite.html) – [Degree](es_gsd-feat-Degree.html) – [Foreign](es_gsd-feat-Foreign.html) – [Gender](es_gsd-feat-Gender.html) – [Mood](es_gsd-feat-Mood.html) – [Number](es_gsd-feat-Number.html) – [NumType](es_gsd-feat-NumType.html) – [Person](es_gsd-feat-Person.html) – [Polarity](es_gsd-feat-Polarity.html) – [Polite](es_gsd-feat-Polite.html) – [Poss](es_gsd-feat-Poss.html) – [PrepCase](es_gsd-feat-PrepCase.html) – [PronType](es_gsd-feat-PronType.html) – [Reflex](es_gsd-feat-Reflex.html) – [Tense](es_gsd-feat-Tense.html) – [VerbForm](es_gsd-feat-VerbForm.html)

## Relations

[acl](es_gsd-dep-acl.html) – [acl:relcl](es_gsd-dep-acl-relcl.html) – [advcl](es_gsd-dep-advcl.html) – [advmod](es_gsd-dep-advmod.html) – [amod](es_gsd-dep-amod.html) – [appos](es_gsd-dep-appos.html) – [aux](es_gsd-dep-aux.html) – [aux:pass](es_gsd-dep-aux-pass.html) – [case](es_gsd-dep-case.html) – [cc](es_gsd-dep-cc.html) – [ccomp](es_gsd-dep-ccomp.html) – [compound](es_gsd-dep-compound.html) – [conj](es_gsd-dep-conj.html) – [cop](es_gsd-dep-cop.html) – [csubj](es_gsd-dep-csubj.html) – [csubj:pass](es_gsd-dep-csubj-pass.html) – [dep](es_gsd-dep-dep.html) – [det](es_gsd-dep-det.html) – [fixed](es_gsd-dep-fixed.html) – [flat](es_gsd-dep-flat.html) – [iobj](es_gsd-dep-iobj.html) – [mark](es_gsd-dep-mark.html) – [nmod](es_gsd-dep-nmod.html) – [nsubj](es_gsd-dep-nsubj.html) – [nsubj:pass](es_gsd-dep-nsubj-pass.html) – [nummod](es_gsd-dep-nummod.html) – [obj](es_gsd-dep-obj.html) – [obl](es_gsd-dep-obl.html) – [orphan](es_gsd-dep-orphan.html) – [parataxis](es_gsd-dep-parataxis.html) – [punct](es_gsd-dep-punct.html) – [root](es_gsd-dep-root.html) – [xcomp](es_gsd-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 16013 sentences, 423346 tokens and 431587 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 46417 tokens (11%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 242 types of words that contain both letters and punctuation. Examples: 's, etc., d', C., n., P., Dr., l', D., EE.UU., E., J., A., B., Jr., L., S.A., St., W., h., s., I., G., K., R., v., Inc., No., Sr., U.S., f., m., 'm, A.C., Bros., Ltd., O'Brien, O'Connor, O., O.T.O., d'Or, p.m., &lt;, 've, .ç, Abdu'l, B.B., Co., Croissan'Wich, D.C.</li>
</ul>

<ul>
<li>This corpus contains 8219 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 856 types of multi-word tokens. Examples: del, al, convertirse, verse, darle, hacerse, hacerlo, convirtiéndose, dedicarse, quedarse, casarse, ponerse, encontrarse, presentarse, enfrentarse, haberse, incorporarse, retirarse, unirse, mantenerse, tratarse, asegurarse, comunicarse, graduarse, haciéndolo, llamarse, conocerse, considerarse, darse, decirle, hacerme, verlo, adaptarse, basándose, celebrarse, centrarse, encontrarlo, encontrándose, enterarse, habiéndose, hacerle, marcharse, preguntarse, referirse, reunirse, tomarse, trasladarse, vengarse, volverse, abrirse.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 24 word types tagged as particles (PART): Gram, Hola, L, Trans, Vamos, Vaya, Vice, abandono, adios, co, ex, ficha, fue, hoc, post, pre, que, re, ruso, semi, sin, sub, super, todos</li>
</ul>

<ul>
<li>This corpus contains 51 lemmas tagged as pronouns (PRON): algo, alguien, alguno, ambos, aquel, aquél, bastante, cual, cualquiera, cuanto, cuyo, cuál, cuánto, demasiado, demás, ese, este, esto, me, menos, mi, mismo, muchisimio, muchisimo, mucho, muchísimo, más, nada, nadie, niguno, ninguno, nuestro, otro, poco, que, quien, quién, qué, suyo, tal, tanto, todo, tú, uno, varios, yo, zse, ámbo, él, ésta, ésto</li>
</ul>

<ul>
<li>This corpus contains 93 lemmas tagged as determiners (DET): a, ae, algun, alguno, all, ambos, apenas, aquel, aquél, as, bastante, cada, cierto, cualquier, cualquiera, cuan, cuanta, cuanto, cuantos, cuya, cuyo, cuàles, cuál, cuán, da, de, del, dema, demasiado, demás, den, der, des, dicha, dicho, die, distinto, diverso, e, el, ela, ese, esta, este, estós, ir, johnson, kentrocapros, l', ls, lso, mes, mi, muchisimo, mucho, muchísimo, my, ningun, ninguno, nuestro, o, otro, our, perino, plas, poco, pocos, que, qué, s., sendo, sendos, ser, su, sus, suyo, tal, tanto, the, todas, todo, tu, tus, unir, uno, vaario, varios, varía, vuestra, vuestro, what, ﻿el, ﻿la</li>
</ul>

<ul>
<li>Out of the above, 29 lemmas occurred sometimes as PRON and sometimes as DET: alguno, ambos, aquel, aquél, bastante, cualquiera, cuanto, cuyo, cuál, demasiado, demás, ese, este, mi, muchisimo, mucho, muchísimo, ninguno, nuestro, otro, poco, que, qué, suyo, tal, tanto, todo, uno, varios</li>
</ul>

<ul>
<li>This corpus contains 26 lemmas tagged as auxiliaries (AUX): arrepentir, corresponder, deber, encuentro, esperar, estar, expresar, firebirds, haber, habiér, ir, luchar, morir, negar, noche, poder, querer, saber, salir, seguir, ser, soler, tener, todavía, venir, volver</li>
</ul>

<ul>
<li>Out of the above, 24 lemmas occurred sometimes as AUX and sometimes as VERB: arrepentir, corresponder, deber, encuentro, esperar, estar, expresar, haber, habiér, ir, luchar, morir, negar, poder, querer, saber, salir, seguir, ser, soler, tener, todavía, venir, volver</li>
</ul>

<ul>
<li>There are 4 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
    <li>VERB: tiene, es, encuentra, hay, hace, tenía, tienen, era, fue, hizo</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Ger
  <ul>
    <li>ADJ: estupendo, normando, agricolas, contendo, inclusive, lindo, paralela</li>
    <li>AUX: siendo, habiendo, habiéndo, teniendo, estando, negándo, pudiéndo</li>
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
    <li>ADJ: particular, mártir, SOLIDARIO, Vestibular, aviar, bereber, consular, dispar, glaciar, kandar</li>
    <li>AUX: ser, haber, poder, estar, ir, tener, puedes, Podeis, Podemos, Podríamos</li>
    <li>NOUN: pesar, cabo, parecer, ser, hacer, azúcar, cover, poder, zar, Lugar</li>
    <li>PROPN: Charles, Sir, Star, vodafone, Aimar, Air, Amir, Balvicar, Bonaparte, Conocer</li>
    <li>VERB: hacer, ver, decir, tener, dar, partir, llegar, encontrar, ir, volver</li>
    <li>X: super, per, after, aupair, avant, carrier, d, master, near, online</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: pasado, compuesto, privado, conocidos, conocida, ubicado, privada, abierto, elevada, abierta</li>
    <li>AUX: sido, estado, podido, ido, tenido, debido</li>
    <li>NOUN: pulgadas, $, llamada, supuesto, mediados, poblados, conocido, lavado, amada, conocida</li>
    <li>PROPN: Unidos, Unido, Alvarado, Quesada, visto, Abiertas, Casado, Hurtado, Puerto, Quemada</li>
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
      <li>AUX-Fin: esta, estoy, estas, pudieras, estarías, has, podras, vas</li>
      <li>DET: la, las, una, esta, otras, toda, estas, esa, todas, otra</li>
      <li>NOUN: parte, población, ciudad, personas, familia, vez, forma, vida, agua, región</li>
      <li>NOUN-Part: pulgadas, llamada, amada, conocida, denominada, pasada, situada, bandadas, cebada, discípulo</li>
      <li>NUM: una, media, II, pocas, I, IV, XI, ocho, setenta, 2008-09</li>
      <li>PRON: la, una, ella, las, ellas, esta, otra, otras, ésta, muchas</li>
      <li>PROPN: guerra, Segunda, Primera, Europea, Ruta, Isla, española, TV, Aérea, batalla</li>
      <li>PROPN-Part: Quesada, Quemada, Abiertas, Agoda, Aplicadas, Blindada, Daida, Fócida, Google, Gymnosarda</li>
      <li>SYM: h, $, &, m, €, +, http://redsismica.uprm.edu/spanish/informacion/terr1918.php, http://www.rumbo.es/disney/</li>
      <li>VERB-Fin: esta, deriva, llena, Juega, continua, forma, vas, expresa, ficha, sera</li>
      <li>VERB-Part: situada, conocida, ubicada, llamada, dirigida, fundada, publicada, realizada, construida, creada</li>
      <li>X: 's, C, b, cápita, i, pre, semi, ta, C., high</li>
      <li>X-Part: co, organisadas, ubicada</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: primer, mismo, nuevo, junto, segundo, español, buen, propio, primeros, único</li>
      <li>ADJ-Part: pasado, compuesto, privado, conocidos, ubicado, abierto, conocido, destacados, parecido, satisfecho</li>
      <li>AUX-Fin: ser, este, poder, estar, tienes, arrepentiréis, deber, encuentros, habeis, haber</li>
      <li>AUX-Part: sido, estado, podido, ido, tenido, debido</li>
      <li>DET: el, los, un, este, otros, ese, estos, todo, todos, unos</li>
      <li>NOUN: años, año, municipio, nombre, lugar, equipo, tiempo, estado, grupo, país</li>
      <li>NOUN-Part: $, supuesto, mediados, poblados, conocido, lavado, ocurrido, puesto, respecto, significados</li>
      <li>NUM: un, uno, ciento, II, medio, cero, millones, V, VIII, XX</li>
      <li>PRON: lo, uno, los, él, todo, ellos, ello, este, otros, otro</li>
      <li>PROPN: Unidos, Estados, Partido, censo, José, of, Club, Diego, País, río</li>
      <li>PROPN-Part: Unidos, Unido, Alvarado, visto, Casado, Hurtado, Puerto, Quemado, do, Abiertas</li>
      <li>SYM: km, cm, $, &, m, #, º, mundo.com, www.delnuevo, www.dgt.es</li>
      <li>SYM-Part: $, #</li>
      <li>VERB-Fin: puesto, debido, nombrado, vuelvo, ver, Acabo, pesar, trabajo, vivo, contraer</li>
      <li>VERB-Part: ubicado, conocido, debido, llamado, nacido, hecho, dado, compuesto, lanzado, considerado</li>
      <li>X: mm, msnm, etc., 's, n., of, the, al, co, cis</li>
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
      <li>AUX-Fin: son, eran, han, fueron, pueden, están, habían, hemos, estaban, deben</li>
      <li>DET: los, las, sus, otras, otros, estos, todos, unos, varios, estas</li>
      <li>NOUN: años, habitantes, personas, millones, razas, obras, días, veces, países, meses</li>
      <li>NOUN-Part: pulgadas, $, mediados, poblados, significados, acorazados, acusados, bandadas, conocidos, desaparecidos</li>
      <li>NUM: dos, tres, cuatro, cinco, seis, siete, ocho, mil, diez, nueve</li>
      <li>PRON: los, nos, les, ellos, las, otros, todos, muchos, ellas, algunos</li>
      <li>PROPN: Unidos, Estados, Luis, van, Dos, ángeles, on, siete, Ciencias, Olímpicos</li>
      <li>PROPN-Part: Unidos, Abiertas, Aplicadas, Blas, Casados, Google, José, Organizados, Owen, desnudos</li>
      <li>SYM: $, km, m, #, &, http://redsismica.uprm.edu/spanish/informacion/terr1918.php, http://www.rumbo.es/disney/, www.dgt.es</li>
      <li>SYM-Part: $, #</li>
      <li>VERB-Fin: tienen, eran, encuentran, pertenecían, son, existen, tenían, están, corresponden, hacen</li>
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
      <li>AUX-Fin: es, fue, ha, era, está, puede, había, estaba, he, sea</li>
      <li>AUX-Part: sido, estado, podido, ido, tenido, debido</li>
      <li>DET: el, la, un, una, su, este, esta, cada, ese, todo</li>
      <li>NOUN: año, parte, población, ciudad, familia, municipio, vez, nombre, lugar, equipo</li>
      <li>NOUN-Part: llamada, supuesto, conocido, lavado, amada, conocida, denominada, ocurrido, pasada, puesto</li>
      <li>NUM: un, una, uno, media, ciento, II, cero, medio, XX, V</li>
      <li>PRON: lo, le, la, me, uno, cual, una, quien, esto, te</li>
      <li>PROPN: Nacional, mundial, general, guerra, the, of, Partido, José, popular, Segunda</li>
      <li>PROPN-Part: Unido, Alvarado, Quesada, visto, Casado, Hurtado, Puerto, Quemada, Quemado, do</li>
      <li>SYM: ², h, $, &, º, #, extremo.com, ª, €, +</li>
      <li>SYM-Part: $</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tenía, era, fue, hizo, está</li>
      <li>VERB-Part: ubicado, conocido, debido, llamado, situada, nacido, hecho, dado, conocida, compuesto</li>
      <li>X: 's, etc., the, anti, n., of, and, co, metal, pre</li>
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
      <li>INTJ: sí</li>
      <li>PRON: lo, la, los, las, sí, mí, ti</li>
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
      <li>PRON: le, les</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>PRON: yo, tú</li>
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
      <li>INTJ: sí</li>
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
      <li>DET: el, la, los, las</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: un, una, unos, unas, uno</li>
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
      <li>PROPN: no, not, nunca</li>
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
      <li>AUX-Fin: sería, podría, habría, podrían, debería, serían, deberían, habrían, estaría, tendría</li>
      <li>VERB-Fin: tendría, gustaría, haría, volvería, sería, varían, varía, conseguiría, llegaría, serían</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>VERB-Fin: pese, pase, añade, compre, mira, tengan, Afirma, Comprobaremos, Disponemos, Oiga</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tenía, tienen, era, fue, hizo</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sea, pueda, sean, puedan, haya, fuese, fuera, hubiera, fueran, pudiera</li>
      <li>VERB-Fin: sea, tenga, crea, haga, haya, tengan, hagan, diera, llegue, quiera</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: será, podrá, podrán, serán, deberá, estará, deberán, estarán, tendrá, irán</li>
      <li>VERB-Fin: será, tendrá, hará, permitirá, contará, llegará, habrá, celebrará, saldrá, tendrán</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: eran, era, había, estaba, habían, podía, estaban, debía, iba, fuese</li>
      <li>VERB-Fin: tenía, era, eran, había, pertenecían, estaba, tenían, encontraba, contaba, estaban</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: fue, fueron, pudo, estuvo, tuvo, pudieron, tuvieron, Son, debió, pude</li>
      <li>AUX-Part: sido, estado, podido, ido, tenido, debido</li>
      <li>VERB-Fin: fue, hizo, tuvo, comenzó, nació, dijo, dio, ganó, convirtió, recibió</li>
      <li>VERB-Part: hecho, dado, tenido, conocido, visto, lanzado, recibido, elegido, pasado, encontrado</li>
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
      <li>DET: el, la, los, un, las, una, unos, unas, uno</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>DET: este, esta, ese, estos, esa, estas, esos, esas, aquellos, aquella</li>
      <li>PRON: esto, tanto, este, eso, éste, esta, estos, ésta, aquellos, éstas</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: allí, cuando, donde</li>
      <li>DET: otras, otros, cualquier, the, varios, otro, algunos, otra, varias, muchos</li>
      <li>PRON: uno, una, algo, poco, mucho, otros, otro, muchos, algunos, otra</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>DET: cuya, cuyo, qué, que, cuyas, cuyos, cuantas, cuantos, cuál, cuan</li>
      <li>PRON: que, cual, quien, quienes, qué, cuales, quién, cuál, cuáles, quiénes</li>
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
      <li>INTJ: sí</li>
      <li>PRON: se, lo, le, la, me, los, nos, les, te, él</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: cada, todo, todos, toda, todas, ambos, ambas</li>
      <li>PRON: todo, todos, ambos, ambas, todas, toda</li>
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
      <li>NUM: dos, 2010, 0, 3, 1, 2, 10, 4, tres, 5</li>
      <li>PRON: tanto, poco, mucho, muchos, ambos, bastante, muchas, demasiado, ambas, pocos</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: primer, primera, segunda, segundo, primeros, primeras, tercera, tercer, cuarto, cuarta</li>
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
      <li>PRON: mi, suyo, nuestros, suya, cuyas, cuyos, nuestro, suyos</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>INTJ: sí</li>
      <li>PRON: se, me, nos, sí, te, consigo, os</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: he, hemos, estoy, podemos, puedo, somos, vamos, soy, debemos, estamos</li>
      <li>DET: mi, nuestra, nuestros, nuestro, mis, nuestras, vuestra, Dichos, My, vuestras</li>
      <li>PRON: me, nos, yo, nosotros, mí, mi, conmigo, nuestro, nuestros, vos</li>
      <li>VERB-Fin: tenemos, creo, estamos, pedimos, recomiendo, encontramos, quiero, tengo, estuve, fuimos</li>
      <li>X: 's, mi, to, estamos, hoc, li, lobster, ne, of, què</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: puedes, eres, habéis, tienes, has, hayas, podéis, pudieras, puedas, seréis</li>
      <li>DET: tu, tus, L', What</li>
      <li>PRON: te, os, tú, usted, vosotros, ti, ustedes, contigo</li>
      <li>SYM: ², º, m</li>
      <li>VERB-Fin: tienes, sabes, sientes, estás, llevas, añade, mira, quieres, viste, Afirma</li>
      <li>X: 's, des, £, s, t, tu, x</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: es, fue, ha, son, eran, era, han, está, puede, fueron</li>
      <li>DET: su, sus, tus, the, Tu, suyo, Era, l'</li>
      <li>INTJ: sí</li>
      <li>PRON: se, lo, le, la, los, les, él, ellos, ella, las</li>
      <li>SYM: $, ª, º, #, &, ²</li>
      <li>VERB-Fin: tiene, es, encuentra, hay, hace, tenía, tienen, era, fue, hizo</li>
      <li>X: 's, es, and, be, oa, of, Fauve, Kage, League, Reguleses</li>
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
  <li><a>Foreign</a>
    <ul>
      <li>Yes
        <ul>
          <li>PROPN: Γαρμπή, ΖΒΖ, Καίτη, Φόρος, αφέλια, π, τ, τοῦ, φ, χ</li>
          <li>X: 天下第一, TΔS, ː, Γρηγορᾶς, Μουσείο, Φιλοκαλια, β, ε, ε2, καλóς</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 197 lemmas as copulas (<a>cop</a>). Examples: ser, estar, llamar, encontrar, hacer, quedar, considerar, denominar, parecer, ver, nombrar, resultar, volver, titular, significar, mantener, permanecer, declarar, elegir, proclamar, hallar, nacer, denominado, designar, morir, pasar, salir, sentir, caer, constituir, haber, nacionalizar, poner, seguir, sero, terminar, tratar, vivir, acabar, andar, aparecer, autodenominar, con, creer, dejar, electo, formar, huir, intitular, ir.</li>
</ul>

<ul>
<li>This corpus uses 30 lemmas as auxiliaries (<a>aux</a>). Examples: haber, poder, estar, deber, ir, tener, ser, a, empezar, querer, venir, comenzar, soler, aprender, bovino, car, dejar, e, hacer, haer, heian, negar, parte, permitir, saber, salir, seguir, sulo, todavía, volver.</li>
<li>This corpus uses 8 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: ser, estar, haber, be, deber, ir, poder, was.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN (6373)</li>
      <li>VERB-Fin--NOUN-ADP(a) (2)</li>
      <li>VERB-Fin--NOUN-ADP(alrededor) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (1)</li>
      <li>VERB-Fin--NOUN-ADP(málaga) (1)</li>
      <li>VERB-Fin--NOUN-ADP(más) (1)</li>
      <li>VERB-Fin--NOUN-ADP(que) (1)</li>
      <li>VERB-Fin--NOUN-ADP(yo) (1)</li>
      <li>VERB-Fin--PRON (689)</li>
      <li>VERB-Fin--PRON-ADP(de) (1)</li>
      <li>VERB-Fin--PRON-Acc (25)</li>
      <li>VERB-Fin--PRON-Acc,Dat (3)</li>
      <li>VERB-Fin--PRON-Acc,Nom (161)</li>
      <li>VERB-Fin--PRON-Nom (49)</li>
      <li>VERB-Ger--NOUN (105)</li>
      <li>VERB-Ger--PRON (7)</li>
      <li>VERB-Ger--PRON-Acc (2)</li>
      <li>VERB-Ger--PRON-Acc,Nom (4)</li>
      <li>VERB-Ger--PRON-Nom (1)</li>
      <li>VERB-Inf--NOUN (398)</li>
      <li>VERB-Inf--NOUN-ADP(de) (1)</li>
      <li>VERB-Inf--PRON (47)</li>
      <li>VERB-Inf--PRON-Acc (2)</li>
      <li>VERB-Inf--PRON-Acc,Nom (9)</li>
      <li>VERB-Inf--PRON-Nom (7)</li>
      <li>VERB-Part--NOUN (680)</li>
      <li>VERB-Part--PRON (74)</li>
      <li>VERB-Part--PRON-Acc (2)</li>
      <li>VERB-Part--PRON-Acc,Dat (1)</li>
      <li>VERB-Part--PRON-Acc,Nom (12)</li>
      <li>VERB-Part--PRON-Nom (11)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Fin--NOUN (6088)</li>
      <li>VERB-Fin--NOUN-ADP(a) (383)</li>
      <li>VERB-Fin--NOUN-ADP(alrededor) (1)</li>
      <li>VERB-Fin--NOUN-ADP(de) (8)</li>
      <li>VERB-Fin--NOUN-ADP(entre) (1)</li>
      <li>VERB-Fin--NOUN-ADP(pesar) (1)</li>
      <li>VERB-Fin--NOUN-ADP(por) (1)</li>
      <li>VERB-Fin--NOUN-ADP(sobre) (1)</li>
      <li>VERB-Fin--PRON (363)</li>
      <li>VERB-Fin--PRON-ADP(a) (20)</li>
      <li>VERB-Fin--PRON-ADP(contra) (1)</li>
      <li>VERB-Fin--PRON-Acc (639)</li>
      <li>VERB-Fin--PRON-Acc,Dat (112)</li>
      <li>VERB-Fin--PRON-Acc,Nom (1)</li>
      <li>VERB-Fin--PRON-Acc,Nom-ADP(a) (3)</li>
      <li>VERB-Fin--PRON-Acc-ADP(a) (14)</li>
      <li>VERB-Fin--PRON-Dat (85)</li>
      <li>VERB-Ger--NOUN (697)</li>
      <li>VERB-Ger--NOUN-ADP(a) (62)</li>
      <li>VERB-Ger--PRON (15)</li>
      <li>VERB-Ger--PRON-ADP(a) (4)</li>
      <li>VERB-Ger--PRON-Acc (83)</li>
      <li>VERB-Ger--PRON-Acc,Dat (3)</li>
      <li>VERB-Ger--PRON-Dat (6)</li>
      <li>VERB-Inf--NOUN (2611)</li>
      <li>VERB-Inf--NOUN-ADP(a) (243)</li>
      <li>VERB-Inf--NOUN-ADP(baer) (1)</li>
      <li>VERB-Inf--NOUN-ADP(entre) (1)</li>
      <li>VERB-Inf--PRON (74)</li>
      <li>VERB-Inf--PRON-ADP(a) (17)</li>
      <li>VERB-Inf--PRON-Acc (265)</li>
      <li>VERB-Inf--PRON-Acc,Dat (25)</li>
      <li>VERB-Inf--PRON-Acc,Nom-ADP(a) (1)</li>
      <li>VERB-Inf--PRON-Acc-ADP(a) (1)</li>
      <li>VERB-Inf--PRON-Dat (29)</li>
      <li>VERB-Part--NOUN (519)</li>
      <li>VERB-Part--NOUN-ADP(a) (38)</li>
      <li>VERB-Part--PRON (31)</li>
      <li>VERB-Part--PRON-ADP(a) (1)</li>
      <li>VERB-Part--PRON-Acc (60)</li>
      <li>VERB-Part--PRON-Acc,Dat (15)</li>
      <li>VERB-Part--PRON-Acc,Nom (1)</li>
      <li>VERB-Part--PRON-Acc,Nom-ADP(a) (1)</li>
      <li>VERB-Part--PRON-Dat (11)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Fin--NOUN (3)</li>
      <li>VERB-Fin--NOUN-ADP(a) (370)</li>
      <li>VERB-Fin--PRON (3)</li>
      <li>VERB-Fin--PRON-ADP(a) (41)</li>
      <li>VERB-Fin--PRON-Acc (7)</li>
      <li>VERB-Fin--PRON-Acc,Dat (4490)</li>
      <li>VERB-Fin--PRON-Acc,Nom (1)</li>
      <li>VERB-Fin--PRON-Acc,Nom-ADP(a) (9)</li>
      <li>VERB-Fin--PRON-Acc,Nom-ADP(para) (1)</li>
      <li>VERB-Fin--PRON-Acc-ADP(a) (7)</li>
      <li>VERB-Fin--PRON-Dat (525)</li>
      <li>VERB-Ger--NOUN-ADP(a) (33)</li>
      <li>VERB-Ger--PRON-ADP(a) (1)</li>
      <li>VERB-Ger--PRON-Acc,Dat (178)</li>
      <li>VERB-Ger--PRON-Dat (29)</li>
      <li>VERB-Inf--NOUN-ADP(a) (114)</li>
      <li>VERB-Inf--PRON-ADP(a) (3)</li>
      <li>VERB-Inf--PRON-Acc,Dat (821)</li>
      <li>VERB-Inf--PRON-Acc-ADP(a) (1)</li>
      <li>VERB-Inf--PRON-Dat (92)</li>
      <li>VERB-Part--NOUN (1)</li>
      <li>VERB-Part--NOUN-ADP(a) (40)</li>
      <li>VERB-Part--PRON-ADP(a) (3)</li>
      <li>VERB-Part--PRON-Acc,Dat (325)</li>
      <li>VERB-Part--PRON-Acc,Nom-ADP(a) (2)</li>
      <li>VERB-Part--PRON-Dat (43)</li>
    </ul>
  </li>
</ul>



<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 1125 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: encontrar se, convertir se, hacer se, ver se, dar se, tratar se, realizar se, producir se, presentar se, utilizar se, dedicar se, llamar se, poner se, mantener se, referir se, celebrar se, quedar se, considerar se, llevar se, unir se, desarrollar se, trasladar se, decir se, ubicar se, casar se, volver se, hallar se, incorporar se, conservar se, basar se, conocer se, deber se, extender se, establecer se, iniciar se, mostrar se, usar se, encargar se, retirar se, construir se, crear se, dividir se, negar se, acercar se, incluir se, reunir se, centrar se, denominar se, graduar se, marchar se</li>
    <ul>
      <li>Out of those, 53 lemmas occurred more than once, but never without a reflexive dependent. Examples: refugiar, apoderar, apresurar, agotar, asientar, doctorar, extiender, hospedar, acoplar, aventurar, desintegrar, divorciar, enrolar, fugar, intensificar, matricular, percatar, reincorporar, reutilizar, subdividir, volviéndo, yergar, abocar, abriéndo, adecuar, agudizar, alistar, asemejar, atrever, autoproclamar, avenir, bendizar, convertii, crio, desmayar, despliegar, enfadar, enquistar, entonar, entrevistar, equivocar, estancar, expandir, interponer, interrumper, levantar-, nó, opuser, propagar, rebelar</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 4 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>csubj:pass</a>, <a>nsubj:pass</a></li>
<li>The following 8 relation types are not used in this corpus at all: <a>vocative</a>, <a>expl</a>, <a>dislocated</a>, <a>discourse</a>, <a>clf</a>, <a>list</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
