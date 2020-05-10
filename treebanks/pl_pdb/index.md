---
layout: base
title:  'UD_Polish-PDB'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD Polish PDB

Language: [Polish](/pl/index.html) (code: `pl`)<br/>
Family: Indo-European, Slavic

This treebank has been part of Universal Dependencies since the UD v1.2 release.

The following people have contributed to making this treebank part of UD: Alina Wróblewska, Daniel Zeman, Jan Mašek, Rudolf Rosa.

Repository: [UD_Polish-PDB](https://github.com/UniversalDependencies/UD_Polish-PDB)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udpl_pdb26)<br />
Download all treebanks: [UD 2.6](/#download)

License: CC BY-NC-SA 4.0

Genre: fiction, nonfiction, news

Questions, comments?
General annotation questions (either Polish-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Polish-PDB/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
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

The Polish PDB-UD treebank is based on the Polish Dependency Bank 2.0 (PDB 2.0), created at the Institute of Computer Science, Polish Academy of Sciences in Warsaw. The PDB-UD treebank is an extended and corrected version of the Polish SZ-UD treebank (the release 1.2 to 2.3).




The PDB-UD treebank consists of 22,152 sentences (350K tokens). It contains all 8K sentences of the Polish UD-SZ treebank and further 14K unique sentences. The additional sentences enclose linguistic phenomena that did not occur or were not annotated (e.g. relative clauses, reported speech) in the UD-SZ trees. The PDB-UD treebank contains enhanced graphs, i.e. trees with the enhanced edges encoding the shared dependents and the shared governors of coordinated conjuncts (9141 PDB-UD trees contain enhanced edges).

The morphological, syntactic and semantic annotation of the PDB-UD treebank is created through a conversion of PDB 2.0 data. The conversion procedure has been designed and implemented by Alina Wróblewska partly based on the conversion of the UD-SZ trees.

## Acknowledgments

We would like to thank all of the contributors of the original Polish Dependency Bank 2.0. The development of the PDB-UD treebank was founded by the Polish Ministry of Science and Higher Education as part of the investment in the CLARIN-PL research infrastructure.



# Statistics of UD Polish PDB

## POS Tags

[ADJ](pl_pdb-pos-ADJ.html) – [ADP](pl_pdb-pos-ADP.html) – [ADV](pl_pdb-pos-ADV.html) – [AUX](pl_pdb-pos-AUX.html) – [CCONJ](pl_pdb-pos-CCONJ.html) – [DET](pl_pdb-pos-DET.html) – [INTJ](pl_pdb-pos-INTJ.html) – [NOUN](pl_pdb-pos-NOUN.html) – [NUM](pl_pdb-pos-NUM.html) – [PART](pl_pdb-pos-PART.html) – [PRON](pl_pdb-pos-PRON.html) – [PROPN](pl_pdb-pos-PROPN.html) – [PUNCT](pl_pdb-pos-PUNCT.html) – [SCONJ](pl_pdb-pos-SCONJ.html) – [SYM](pl_pdb-pos-SYM.html) – [VERB](pl_pdb-pos-VERB.html) – [X](pl_pdb-pos-X.html)

## Features

[Abbr](pl_pdb-feat-Abbr.html) – [AdpType](pl_pdb-feat-AdpType.html) – [Animacy](pl_pdb-feat-Animacy.html) – [Aspect](pl_pdb-feat-Aspect.html) – [Case](pl_pdb-feat-Case.html) – [Clitic](pl_pdb-feat-Clitic.html) – [ConjType](pl_pdb-feat-ConjType.html) – [Degree](pl_pdb-feat-Degree.html) – [Emphatic](pl_pdb-feat-Emphatic.html) – [Foreign](pl_pdb-feat-Foreign.html) – [Gender](pl_pdb-feat-Gender.html) – [Hyph](pl_pdb-feat-Hyph.html) – [Mood](pl_pdb-feat-Mood.html) – [NounForm](pl_pdb-feat-NounForm.html) – [Number](pl_pdb-feat-Number.html) – [Number[psor]](pl_pdb-feat-Number-psor.html) – [NumForm](pl_pdb-feat-NumForm.html) – [NumType](pl_pdb-feat-NumType.html) – [PartType](pl_pdb-feat-PartType.html) – [Person](pl_pdb-feat-Person.html) – [Polarity](pl_pdb-feat-Polarity.html) – [Poss](pl_pdb-feat-Poss.html) – [PrepCase](pl_pdb-feat-PrepCase.html) – [PronType](pl_pdb-feat-PronType.html) – [Pun](pl_pdb-feat-Pun.html) – [PunctSide](pl_pdb-feat-PunctSide.html) – [PunctType](pl_pdb-feat-PunctType.html) – [Reflex](pl_pdb-feat-Reflex.html) – [Tense](pl_pdb-feat-Tense.html) – [Variant](pl_pdb-feat-Variant.html) – [VerbForm](pl_pdb-feat-VerbForm.html) – [VerbType](pl_pdb-feat-VerbType.html) – [Voice](pl_pdb-feat-Voice.html)

## Relations

[acl](pl_pdb-dep-acl.html) – [acl:relcl](pl_pdb-dep-acl-relcl.html) – [advcl](pl_pdb-dep-advcl.html) – [advcl:cmpr](pl_pdb-dep-advcl-cmpr.html) – [advcl:relcl](pl_pdb-dep-advcl-relcl.html) – [advmod](pl_pdb-dep-advmod.html) – [advmod:arg](pl_pdb-dep-advmod-arg.html) – [advmod:emph](pl_pdb-dep-advmod-emph.html) – [advmod:neg](pl_pdb-dep-advmod-neg.html) – [amod](pl_pdb-dep-amod.html) – [amod:flat](pl_pdb-dep-amod-flat.html) – [appos](pl_pdb-dep-appos.html) – [aux](pl_pdb-dep-aux.html) – [aux:clitic](pl_pdb-dep-aux-clitic.html) – [aux:cnd](pl_pdb-dep-aux-cnd.html) – [aux:imp](pl_pdb-dep-aux-imp.html) – [aux:pass](pl_pdb-dep-aux-pass.html) – [case](pl_pdb-dep-case.html) – [cc](pl_pdb-dep-cc.html) – [cc:preconj](pl_pdb-dep-cc-preconj.html) – [ccomp](pl_pdb-dep-ccomp.html) – [ccomp:cleft](pl_pdb-dep-ccomp-cleft.html) – [ccomp:obj](pl_pdb-dep-ccomp-obj.html) – [conj](pl_pdb-dep-conj.html) – [cop](pl_pdb-dep-cop.html) – [csubj](pl_pdb-dep-csubj.html) – [csubj:pass](pl_pdb-dep-csubj-pass.html) – [dep](pl_pdb-dep-dep.html) – [det](pl_pdb-dep-det.html) – [det:numgov](pl_pdb-dep-det-numgov.html) – [det:nummod](pl_pdb-dep-det-nummod.html) – [det:poss](pl_pdb-dep-det-poss.html) – [discourse:emo](pl_pdb-dep-discourse-emo.html) – [discourse:intj](pl_pdb-dep-discourse-intj.html) – [expl:pv](pl_pdb-dep-expl-pv.html) – [fixed](pl_pdb-dep-fixed.html) – [flat](pl_pdb-dep-flat.html) – [flat:foreign](pl_pdb-dep-flat-foreign.html) – [iobj](pl_pdb-dep-iobj.html) – [list](pl_pdb-dep-list.html) – [mark](pl_pdb-dep-mark.html) – [nmod](pl_pdb-dep-nmod.html) – [nmod:arg](pl_pdb-dep-nmod-arg.html) – [nmod:flat](pl_pdb-dep-nmod-flat.html) – [nmod:poss](pl_pdb-dep-nmod-poss.html) – [nmod:pred](pl_pdb-dep-nmod-pred.html) – [nsubj](pl_pdb-dep-nsubj.html) – [nsubj:pass](pl_pdb-dep-nsubj-pass.html) – [nummod](pl_pdb-dep-nummod.html) – [nummod:flat](pl_pdb-dep-nummod-flat.html) – [nummod:gov](pl_pdb-dep-nummod-gov.html) – [obj](pl_pdb-dep-obj.html) – [obl](pl_pdb-dep-obl.html) – [obl:agent](pl_pdb-dep-obl-agent.html) – [obl:arg](pl_pdb-dep-obl-arg.html) – [obl:cmpr](pl_pdb-dep-obl-cmpr.html) – [obl:orphan](pl_pdb-dep-obl-orphan.html) – [orphan](pl_pdb-dep-orphan.html) – [parataxis:insert](pl_pdb-dep-parataxis-insert.html) – [parataxis:obj](pl_pdb-dep-parataxis-obj.html) – [punct](pl_pdb-dep-punct.html) – [root](pl_pdb-dep-root.html) – [vocative](pl_pdb-dep-vocative.html) – [xcomp](pl_pdb-dep-xcomp.html) – [xcomp:cleft](pl_pdb-dep-xcomp-cleft.html) – [xcomp:pred](pl_pdb-dep-xcomp-pred.html) – [xcomp:subj](pl_pdb-dep-xcomp-subj.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 22152 sentences, 347377 tokens and 350036 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 53073 tokens (15%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus contains 1 types of words with spaces. Examples: 11 313,2</li>
</ul>

<ul>
<li>This corpus contains 388 types of words that contain both letters and punctuation. Examples: m.in, i/lub, n.p.m, Harry'ego, PPE-DE, PiS-u, S.A, 10-letni, 65-letniego, 70-lecia, BIG-u, Blake'a, F-16, Gaulle'a, George'a, ONZ-owskich, P.S, e-sporcie, kung-fu, sms-a, ub.r, -wymiarowej, -y, .pl, 1/28/H-L, 100-krotnie, 100-ml, 11-latek, 12-cyfrowy, 12-letni, 12-letnim, 12-tym, 1299-tym, 13-latek, 13-letni, 13-miesięcznego, 14-latka, 14-letni, 14-letniego, 15-letni, 16-latków, 17-latkom, 17-letnia, 18-godzinne, 18-latce, 18-latek, 18-letniego, 18-stymi, 185-osobową, 19-calowy</li>
</ul>

<ul>
<li>This corpus contains 2495 multi-word tokens. On average, one multi-word token consists of 2.07 syntactic words.</li>
<li>There are 1237 types of multi-word tokens. Examples: chciałbym, byłoby, byłem, miałem, powinniśmy, bym, mieliśmy, myślałem, chciałem, widziałem, mógłby, byłby, słyszałem, byłam, miałam, wiedziałem, mówiłem, chciałabym, byliśmy, chciałby, mogłem, widziałam, mogłyby, zostałem, zrobiłem, powiedziałem, zobaczyłem, żebym, byłaby, gdybym, myślałam, pomyślałem, powinieneś, wiedziałam, byłyby, chciałam, mogłaby, musiałem, żebyś, byłbym, byłeś, byś, miałaby, mogłoby, mógłbym, mógłbyś, usłyszałem, zacząłem, mogłam, należałoby.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 135 word types tagged as particles (PART): Azaliż, Czyżby, Istotnie, Jakżeż, Moze, Niemalże, Notabene, Otóż, a, aby, akurat, ale, ani, aż, ba, blisko, bo, bodaj, bowiem, byle, bynajmniej, chociaż, chociażby, choć, choćby, chyba, co, coraz, coś, czy, czyż, dopiero, doprawdy, dosyć, dość, gdyby, gdzie, gdzieś, głównie, i, jak, jakby, jakoby, jednak, jednakże, jedynie, jeszce, jeszcze, już, lada, ledwie, może, nadto, najwidoczniej, najwyraźniej, najwyżej, naprawdę, nareszcie, natomiast, nawet, niby, nie, niejako, niemal, nieomal, nieprawdaż, niespełna, niestety, no, nuż, oby, oczywiście, ok, około, ot, oto, pewnie, podobno, ponad, ponadto, poniekąd, ponoć, prawie, przecie, przecież, przeszło, przynajmniej, raczej, raptem, rzeczywiście, również, skądinąd, szczególnie, tak, także, tam, tego, też, to, toż, trochę, tu, tuż, tylko, widać, widocznie, więc, wprawdzie, wprost, wreszcie, wręcz, wszak, wszakże, wyłącznie, właściwie, właśnie, z, za, zaledwie, zapewne, zaraz, zarazem, zatem, zaś, ze, zgoła, znacznie, znowu, znowuż, znów, zresztą, zwłaszcza, zynajmniej, Żeby, że</li>
</ul>

<ul>
<li>This corpus contains 23 lemmas tagged as pronouns (PRON): co, cokolwiek, coś, cóż, ja, kto, ktokolwiek, ktoś, któż, mu, my, nic, nie, nikt, on, siebie, się, tamto, to, ty, wszyscy, wszystko, wy</li>
</ul>

<ul>
<li>This corpus contains 48 lemmas tagged as determiners (DET): czyj, czyjś, dużo, ile, ileż, jaki, jakikolwiek, jakiś, każdy, kilka, kilkadziesiąt, kilkanaście, kilkaset, który, którykolwiek, któryś, mało, mniej, mój, najmniej, najwięcej, nasz, nieco, niejaki, niejeden, niektóry, niewiele, parę, parędziesiąt, pewien, pełno, sporo, swój, taki, tamten, ten, tenże, trochę, twój, tyle, tyleż, wasz, wiele, więcej, wszelki, wszystek, ów, żaden</li>
</ul>

<ul>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): by, bywać, być, niech, niechaj, niechby, niechże, to, zostawać, zostać</li>
</ul>

<ul>
<li>Out of the above, 4 lemmas occurred sometimes as AUX and sometimes as VERB: bywać, być, zostawać, zostać</li>
</ul>

<ul>
<li>There are 5 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Conv
  <ul>
    <li>AUX: będąc</li>
    <li>VERB: trzymając, patrząc, mówiąc, mając, stojąc, uwzględniając, siedząc, chcąc, biorąc, używając</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>AUX: jest, to, będzie, są, był, było, będą, była, jestem, były</li>
    <li>VERB: ma, może, jest, stoi, można, mówi, siedzi, miał, było, należy</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>AUX: być, zostać, byc</li>
    <li>VERB: powiedzieć, być, mieć, zrobić, znaleźć, robić, patrzeć, zobaczyć, mówić, wziąć</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: dotyczące, dotyczących, związane, ubrany, określonych, związanych, przeznaczone, przedstawione, ubrana, dotyczącego</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Vnoun
  <ul>
    <li>NOUN: stosowania, głosowania, przyjęcie, stosowanie, wprowadzenia, działania, wykorzystania, zapewnienia, tworzenia, osiągnięcia</li>
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
      <li>ADJ: europejskiej, jednej, drugiej, jedna, innych, polskiej, pierwszej, inne, jedną, sama</li>
      <li>ADJ-Part: dotyczących, dotyczące, ubrana, przyjęta, dotyczącej, lecącej, uniesionymi, związane, widziana, związanych</li>
      <li>AUX-Fin: była, została, były, zostały</li>
      <li>DET: tej, która, ta, które, której, tę, swoją, którą, tych, kilka</li>
      <li>NOUN: kobieta, pracy, osób, dziewczynka, pani, osoby, sprawie, ręce, wodzie, wody</li>
      <li>NUM: dwie, trzy, cztery, dwóch, pięć, obie, 10, sześć, 5, trzech</li>
      <li>PRON: jej, ją, ona, niej, mnie, ich, nią, mi, je, ja</li>
      <li>PROPN: Polsce, Polski, UE, Europy, Polska, Europie, Warszawie, Warszawy, AWS, Rosji</li>
      <li>VERB-Fin: miała, powinna, mogła, chciała, powiedziała, musiała, była, stała, widziała, wiedziała</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: jeden, sam, pierwszy, cały, innych, drugi, 1, mały, jednym, duży</li>
      <li>ADJ-Part: ubrany, dotyczące, dotyczący, dotyczących, stojący, przeznaczone, przygotowany, związane, oparty, trzymający</li>
      <li>AUX-Fin: był, został, byli, były, zostały, zostali, byl, bywali</li>
      <li>DET: ten, który, tym, którzy, tego, którym, które, tych, te, których</li>
      <li>NOUN: mężczyzna, roku, pan, lat, człowiek, chłopiec, ludzi, sposób, domu, dnia</li>
      <li>NUM: dwa, dwóch, 10, trzech, trzy, 3, 2, dwaj, 30, 5</li>
      <li>PRON: jego, go, ich, mnie, mu, mi, nas, on, nim, kto</li>
      <li>PROPN: Andrzej, Jerzy, SLD, Marek, Piotr, Jan, Polacy, Polaków, Krzysztof, Jacek</li>
      <li>VERB-Fin: miał, powiedział, chciał, mógł, powinien, mówił, mieli, mogli, był, powinni</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: członkowskie, członkowskich, drugie, jedno, pierwsze, dotyczące, jednym, nowe, całe, innych</li>
      <li>ADJ-Part: dotyczące, związane, dotyczących, rozpostartymi, dotyczącego, przeprowadzone, zawarte, przedstawione, przygotowane, przyjęte</li>
      <li>AUX-Fin: było, zostało, były, zostały, była</li>
      <li>DET: które, to, takie, tym, tego, te, swoje, tych, jakie, moje</li>
      <li>NOUN: dzieci, dziecko, życie, państwa, życia, pobliżu, miasta, prawa, miejscu, działania</li>
      <li>NOUN-Vnoun: stosowania, głosowania, przyjęcie, stosowanie, wprowadzenia, działania, wykorzystania, zapewnienia, tworzenia, osiągnięcia</li>
      <li>NUM: dwoje, dwa, pół, trzy, trzech, dwóch, Troje, obu, pięć, 10</li>
      <li>PRON: to, co, tym, tego, coś, wszystko, nic, czym, wszystkim, czego</li>
      <li>PROPN: USA, PiS, Niemczech, Niemiec, Stanów, PSL, WE, Włoszech, PKP, Chin</li>
      <li>VERB-Fin: było, stało, udało, powinno, miało, doszło, okazało, mogło, należało, wydawało</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Animacy</a></li>
</ul>

<ul>
  <li>Hum
    <ul>
      <li>ADJ: jeden, sam, innych, młody, drugi, mały, młodych, ubrany, sami, inni</li>
      <li>ADJ-Part: ubrany, stojący, trzymający, widziany, obserwowany, przygotowany, zatrzymany, ubrani, mający, mianowany</li>
      <li>AUX-Fin: był, byli, został, zostali, byl, bywali</li>
      <li>DET: którzy, który, ten, każdy, wielu, ci, swoich, tych, których, którego</li>
      <li>NOUN: mężczyzna, pan, człowiek, chłopiec, ludzi, ludzie, człowieka, pana, chłopak, mężczyzn</li>
      <li>NUM: dwóch, dwaj, trzech, czterech, obaj, sześciu, pięciu, trzej, 10, dwoje</li>
      <li>PRON: jego, mnie, mu, go, ich, mi, nas, kto, ja, on</li>
      <li>PROPN: Andrzej, Jerzy, Marek, Piotr, Jan, Polacy, Polaków, Krzysztof, Jacek, Janusz</li>
      <li>VERB-Fin: powiedział, miał, chciał, mógł, mówił, mieli, mogli, powinien, powinni, był</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Inan
    <ul>
      <li>ADJ: cały, pierwszy, 1, jeden, nowy, jednym, nowego, sportowym, inne, różnych</li>
      <li>ADJ-Part: dotyczące, dotyczący, dotyczących, przeznaczone, związane, przedstawiony, przeznaczonych, dotyczącego, mających, określonych</li>
      <li>AUX-Fin: był, został, były, zostały</li>
      <li>DET: ten, tym, tego, który, które, którym, te, kilka, tych, swój</li>
      <li>NOUN: roku, lat, sposób, domu, dnia, raz, czas, czasu, stroju, czasie</li>
      <li>NUM: dwa, 10, trzy, 3, dwóch, 2, 30, 5, trzech, 15</li>
      <li>PRON: go, jego, ich, je, on, nim, nich, niego, one, mu</li>
      <li>PROPN: SLD, Poznaniu, Krakowie, Izraela, ZUS, Jorku, VAT, Wrocławiu, Krakowa, Iraku</li>
      <li>VERB-Fin: miał, powinien, powinny, mógł, był, przyjął, stał, rozpoczął, zakończył, mogły</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nhum
    <ul>
      <li>ADJ: biały, duży, czarny, mały, szary, brązowy, czarnego, jeden, małego, drapieżny</li>
      <li>ADJ-Part: rozpędzonym, siedzącego, stojące, zgromadzonych, zwrócony, biegnącego, bujanym, stojącego, trzymany, ubarwiony</li>
      <li>AUX-Fin: był, został, Były, zostały</li>
      <li>DET: które, ten, który, jakiś, którym, takiego, twój, kilkuset, którego, mniej</li>
      <li>NOUN: pies, złotych, ptak, psy, dolarów, psa, konia, kot, konie, koniu</li>
      <li>NUM: dwa, trzy, 2, 100, 3, pięć, 1500, 20, 5, 500</li>
      <li>PRON: go, jego, ich, mu, nim, niego, nimi, im, nich, one</li>
      <li>PROPN: Ptak, Fiata, Dingiem, Humphrey, Instagramie, Mars, Odiego, Piast, Pożeracz, Presa</li>
      <li>VERB-Fin: mógł, usiadł, zamerdał, był, mogły, padł, powinien, urodziły, wpadł, zaczął</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: innych, inne, różnych, nowych, dotyczące, dotyczących, członkowskich, członkowskie, europejskich, młodych</li>
      <li>ADJ-Part: dotyczące, dotyczących, związane, określonych, związanych, przeznaczone, uniesionymi, określone, prowadzone, przedstawione</li>
      <li>AUX: są, śmy, będą, były, będziemy, byli, zostały, zostaną, jesteśmy, ście</li>
      <li>AUX-Fin: są, będą, były, będziemy, byli, zostały, zostaną, jesteśmy, zostali, zostają</li>
      <li>DET: które, te, tych, którzy, których, kilka, wszystkie, wszystkich, wiele, takich</li>
      <li>NOUN: lat, osób, dzieci, ludzi, osoby, ludzie, dni, pieniądze, kobiety, ręce</li>
      <li>NOUN-Vnoun: zachorowań, działań, oskarżeniami, polubień, wytrzeźwień, zawirowań, Drgania, Wypędzeniom, Zakłócenia, chrapania</li>
      <li>NUM: dwie, dwa, dwóch, trzy, trzech, 10, cztery, 3, pięć, 2</li>
      <li>PRON: ich, nich, nas, je, nam, im, one, nimi, oni, my</li>
      <li>PROPN: Polacy, Polaków, Rosjanie, amerykanie, Niemcy, Niemców, PKP, Francuzi, Indian, Żydów</li>
      <li>VERB-Fin: mogą, mają, mamy, są, muszą, mieli, mogli, siedzą, stoją, musimy</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ptan
    <ul>
      <li>NOUN: drzwi, ramach, okularach, danych, dane, środki, spodenkach, środków, warunki, ludzi</li>
      <li>PRON: wszyscy, wszystkich, wszystkim, wszystkimi</li>
      <li>PROPN: USA, Niemczech, Niemiec, Stanów, Włoszech, Chin, Indii, Stanach, Włochy, Kielcach</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: jeden, sam, europejskiej, pierwszy, jednym, cały, 1, jednej, drugiej, drugi</li>
      <li>ADJ-Part: ubrany, ubrana, dotyczącego, dotyczący, przyjęta, dotyczącej, lecącej, stojący, widziana, przygotowany</li>
      <li>AUX: jest, em, będzie, m, był, było, była, eś, jestem, został</li>
      <li>AUX-Fin: jest, będzie, był, było, była, jestem, został, została, będę, zostanie</li>
      <li>DET: ten, który, tej, tym, tego, która, którym, ta, to, którego</li>
      <li>NOUN: mężczyzna, roku, pan, kobieta, człowiek, pracy, chłopiec, dziewczynka, pani, sposób</li>
      <li>NOUN-Vnoun: stosowania, głosowania, przyjęcie, stosowanie, wprowadzenia, wykorzystania, działania, zapewnienia, tworzenia, osiągnięcia</li>
      <li>NUM: pół, półtora, 1, 35, półtorej, 0,4, 0,5, 1,9, 13, 2,26</li>
      <li>PRON: to, co, jego, jej, go, mnie, tym, mi, mu, tego</li>
      <li>PROPN: Polsce, Polski, UE, Europy, Andrzej, Polska, Europie, Warszawie, Jerzy, SLD</li>
      <li>VERB-Fin: ma, może, jest, stoi, mówi, siedzi, miał, było, należy, powiedział</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: cały, pierwszy, inne, dotyczące, pierwsze, całą, drugą, nowe, jedną, drugie</li>
      <li>ADJ-Part: dotyczące, związane, dotyczący, dotyczącą, trzymany, lecącą, określone, otwarte, ustanawiający, wymienione</li>
      <li>ADP: temu</li>
      <li>DET: ten, te, swoje, które, kilka, tę, swoją, wiele, swój, wszystkie</li>
      <li>NOUN: sposób, raz, temat, czas, życie, pieniądze, uwagę, dzień, stronę, ręce</li>
      <li>NOUN-Vnoun: przyjęcie, stosowanie, tworzenie, odrzucenie, zmniejszenie, działanie, obniżenie, poparcie, prowadzenie, przeprowadzenie</li>
      <li>NUM: dwa, trzy, 10, dwie, 2, 3, pół, pięć, cztery, 5</li>
      <li>PRON: to, go, co, mnie, ją, je, coś, nas, siebie, cię</li>
      <li>PROPN: Europę, Polskę, Polaków, Rosję, Adama, Amerykę, Boga, Jana, Piotra, Warszawę</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: innym, drugiemu, własnym, młodemu, młodym, całej, członkowskim, jednemu, nowemu, nowym</li>
      <li>ADJ-Part: biegnącemu, potrzebującym, Panującej, Zjednoczonemu, bitemu, będącego, będącej, błądzącym, dbającym, doprowadzającemu</li>
      <li>DET: którym, któremu, swoim, tym, temu, tej, naszym, swojemu, wszystkim, każdemu</li>
      <li>NOUN: panu, ludziom, komisji, dzieciom, osobom, pani, państwu, życiu, mężczyźnie, dziennikarzom</li>
      <li>NOUN-Vnoun: zastosowaniu, badaniu, wspieraniu, wydłużeniu, zmniejszeniu, Określeniu, Poparzeniu, Rozładowywaniu, Stosowaniu, Wypędzeniom</li>
      <li>NUM: dwóm, czterem, 2,3, 20, 260, 400, 43, 60, 80, 90</li>
      <li>PRON: mi, sobie, mu, nam, im, ci, jej, temu, wam, komu</li>
      <li>PROPN: Bogu, Jerzemu, Marcie, Andrzejowi, Europie, Niemcom, Łukaszence, Anglikom, Buzkowi, Dżabie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: innych, europejskiej, nowych, różnych, nowego, drugiej, jednego, polskiej, polskiego, dotyczących</li>
      <li>ADJ-Part: dotyczących, związanych, dotyczącego, określonych, lecącej, zawartych, zgromadzonych, dotyczącej, działających, mających</li>
      <li>DET: tego, tych, tej, których, którego, takich, wszystkich, swoich, takiego, naszych</li>
      <li>NOUN: lat, osób, roku, pracy, ludzi, dnia, dzieci, czasu, wody, życia</li>
      <li>NOUN-Vnoun: stosowania, głosowania, wprowadzenia, wykorzystania, działania, zapewnienia, tworzenia, przyjęcia, osiągnięcia, prowadzenia</li>
      <li>NUM: dwóch, trzech, pięciu, 10, czterech, obu, 2, 3, 5, dziesięciu</li>
      <li>PRON: jego, ich, jej, tego, siebie, nich, mnie, niego, nas, nic</li>
      <li>PROPN: Polski, Europy, UE, Warszawy, SLD, AWS, Polaków, Rosji, Stanów, USA</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ins
    <ul>
      <li>ADJ: jednym, innymi, samym, jedną, wielkim, dużym, drugim, długimi, Europejską, dużą</li>
      <li>ADJ-Part: uniesionymi, rozłożonymi, dotyczącymi, rozpostartymi, uniesioną, określoną, wyciągniętą, ośnieżonym, ugiętymi, prowadzącymi</li>
      <li>DET: tym, moim, swoim, tą, którym, każdym, którą, którymi, naszym, jakim</li>
      <li>NOUN: wodą, głową, razem, zdaniem, czasem, ręką, pomocą, względem, rękami, celem</li>
      <li>NOUN-Vnoun: przyjęciem, rozpoczęciem, wejściem, zastosowaniem, prowadzeniem, tworzeniem, uwzględnieniem, użyciem, wprowadzeniem, wskazaniem</li>
      <li>NUM: dwoma, trzema, dwiema, obiema, 3, 4, dwudziestu, pięcioma, 10, 1080</li>
      <li>PRON: tym, sobą, nim, nimi, wszystkim, nią, czym, kim, mną, nami</li>
      <li>PROPN: Andrzejem, Niemcami, Polską, Rosją, Stanami, Ukrainą, Wisłą, Aleksandrem, Bogiem, Europą</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Loc
    <ul>
      <li>ADJ: czerwonej, jednym, sportowym, jednej, samym, czarnym, całym, innych, czerwonym, białej</li>
      <li>ADJ-Part: określonym, dmuchanych, dotyczących, określonych, pokrytej, wzburzonej, dotyczącej, prowadzonym, zastawionym, zaśnieżonym</li>
      <li>DET: tym, tej, którym, których, której, tych, swoim, każdym, naszym, takich</li>
      <li>NOUN: roku, sprawie, wodzie, stroju, czasie, trawie, pobliżu, przypadku, kasku, celu</li>
      <li>NOUN-Vnoun: zakończeniu, podejmowaniu, przeprowadzeniu, wprowadzeniu, leczeniu, przekazaniu, wejściu, wyjściu, wykonywaniu, wypiciu</li>
      <li>NUM: dwóch, trzech, obu, czterech, 10, 20, dziesięciu, 50, dwudziestu, pięciu</li>
      <li>PRON: tym, nim, czym, nich, niej, sobie, mnie, wszystkim, czymś, niczym</li>
      <li>PROPN: Polsce, Europie, Warszawie, Poznaniu, Krakowie, Niemczech, Wrocławiu, Włoszech, Ameryce, Łodzi</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: jeden, sam, jedna, inne, mały, drugi, pierwszy, sama, europejska, członkowskie</li>
      <li>ADJ-Part: ubrany, dotyczące, związane, ubrana, przeznaczone, przyjęta, stojący, przedstawione, przygotowane, widziana</li>
      <li>DET: który, które, która, którzy, ten, ta, te, takie, to, każdy</li>
      <li>NOUN: mężczyzna, pan, kobieta, człowiek, chłopiec, dziewczynka, pani, ludzie, pies, osoby</li>
      <li>NOUN-Vnoun: stosowanie, przyjęcie, zapewnienie, otwarcie, wprowadzenie, rozszerzenie, badanie, ograniczenie, podawanie, wykorzystanie</li>
      <li>NUM: dwie, dwa, dwóch, trzy, cztery, dwaj, dwoje, pięć, trzech, obaj</li>
      <li>PRON: to, co, ja, on, kto, ona, ktoś, wszystko, nikt, one</li>
      <li>PROPN: Andrzej, Polska, Jerzy, Marek, Piotr, Jan, Polacy, Krzysztof, Jacek, Janusz</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Voc
    <ul>
      <li>ADJ: droga, szanowny, głupi, młody, Drodzy, Nowy, Wspaniaty, Wysoki, dobrzy, duży</li>
      <li>ADJ-Part: trzymający</li>
      <li>DET: moja, mój, moje, nasz</li>
      <li>NOUN: panie, pośle, marszałku, pani, kochanie, tato, mamo, ministrze, panowie, doktorze</li>
      <li>PRON: ty</li>
      <li>PROPN: Boże, Panie, Jacku, Piotrze, Alicjo, Arturze, Basiu, Bello, Benedykcie, Czarny</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PrepCase</a></li>
</ul>

<ul>
  <li>Npr
    <ul>
      <li>PRON: jego, ich, jej, go, mu, ją, on, je, im, ona</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pre
    <ul>
      <li>ADJ: prostu, dawna, wolna, daleka, angielsku, niedawna, bliska, cichu, francusku, nowa</li>
      <li>PRON: nich, nim, niego, niej, nią, nimi, nie, niemu, ń, on</li>
    </ul>
  </li>
</ul>


<h3>Degree and Polarity</h3>


<ul>
  <li><a>Degree</a></li>
</ul>

<ul>
  <li>Cmp
    <ul>
      <li>ADJ: większe, starszy, dalsze, lepsze, większej, starsza, większym, dalszych, większą, większa</li>
      <li>ADV: bardziej, wcześniej, lepiej, dalej, później, mniej, więcej, częściej, łatwiej, wyżej</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: innych, jeden, inne, sam, europejskiej, pierwszy, różnych, jednym, cały, 1</li>
      <li>ADV: bardzo, tak, jak, dobrze, zgodnie, często, jednocześnie, obecnie, trudno, szybko</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: najlepsze, najważniejsze, największe, najbliższych, najlepszym, najlepszy, najwyższe, najbliższym, najlepszych, największych</li>
      <li>ADV: najbardziej, najmniej, najczęściej, najlepiej, najszybciej, najprawdopodobniej, najwięcej, najbliżej, najchętniej, najdalej</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADJ-Part: niewykluczone, niepotwierdzonych, niewykorzystane, niewyprawione, niezrealizowane, NIEPOCHODZĄCYCH, Nieleczona, Nieprzejawionego, Nieprzeznaczony, niebędący</li>
      <li>NOUN-Vnoun: nieuzyskania, Niewypełnienie, niedopełnienie, niedopuszczenie, nieistnienia, niejedzenia, niekonkurowania, nienakładaniu, nieobjadanie, nieodpowiadanie</li>
      <li>PART: nie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ-Part: dotyczące, dotyczących, związane, ubrany, określonych, związanych, przeznaczone, przedstawione, ubrana, dotyczącego</li>
      <li>NOUN-Vnoun: stosowania, głosowania, przyjęcie, stosowanie, wprowadzenia, działania, wykorzystania, zapewnienia, tworzenia, osiągnięcia</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Variant</a></li>
</ul>

<ul>
  <li>Long
    <ul>
      <li>ADP: ze, we, przede, ode, przeze, beze, nade, pode</li>
      <li>AUX: em, eś</li>
      <li>PRON: jego, ich, jej, mnie, nich, ją, on, je, nim, niego</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Short
    <ul>
      <li>ADJ: gotów, ciekaw, winien, godzien</li>
      <li>ADP: w, z, od, przez, przed, pod, nad, bez, poprzez, spod</li>
      <li>AUX: m, śmy, ś, ście</li>
      <li>PRON: go, mi, mu, ci, cię, ich, je, im, ń, jej</li>
    </ul>
  </li>
</ul>

<h3>Verbal Features</h3>


<ul>
  <li><a>Aspect</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>ADJ-Part: dotyczące, dotyczących, dotyczącego, dotyczący, prowadzone, stojący, dotyczącej, lecącej, stosowane, widziana</li>
      <li>AUX: jest, em, będzie, m, są, śmy, był, być, było, będą</li>
      <li>AUX-Conv: będąc</li>
      <li>AUX-Fin: jest, będzie, są, był, było, będą, była, jestem, były, będziemy</li>
      <li>AUX-Inf: być, byc</li>
      <li>NOUN-Vnoun: stosowania, głosowania, stosowanie, działania, tworzenia, prowadzenia, wykonywania, czynienia, pływania, tworzenie</li>
      <li>VERB-Conv: trzymając, patrząc, mówiąc, mając, stojąc, uwzględniając, siedząc, chcąc, biorąc, używając</li>
      <li>VERB-Fin: ma, może, jest, stoi, mówi, siedzi, miał, było, należy, mam</li>
      <li>VERB-Inf: być, mieć, robić, patrzeć, mówić, iść, wiedzieć, żyć, myśleć, prowadzić</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Perf
    <ul>
      <li>ADJ-Part: związane, ubrany, określonych, związanych, przeznaczone, przedstawione, ubrana, przygotowane, przyjęta, określone</li>
      <li>AUX-Fin: został, została, zostanie, zostały, zostaną, zostało, zostali, zostacie, zostanę</li>
      <li>AUX-Inf: zostać</li>
      <li>NOUN-Vnoun: przyjęcie, wprowadzenia, wykorzystania, zapewnienia, osiągnięcia, przyjęcia, zastosowania, wprowadzenie, zapewnienie, wykonania</li>
      <li>VERB-Conv: począwszy, spojrzawszy, zważywszy, Dokonawszy, otrzymawszy, stanąwszy, straciwszy, wyzbywszy, Doszedłszy, Nadawszy</li>
      <li>VERB-Fin: powiedział, stało, udało, zrobił, zaczął, powiedziała, doszło, okazało, wystarczy, da</li>
      <li>VERB-Inf: powiedzieć, zrobić, znaleźć, zobaczyć, wziąć, zmienić, pomóc, przyjąć, kupić, skorzystać</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Mood</a></li>
</ul>

<ul>
  <li>Imp
    <ul>
      <li>AUX-Fin: bądź</li>
      <li>VERB-Fin: powiedz, daj, patrz, weź, chodź, Zobacz, idź, Przypomnijmy, powiedzmy, czekaj</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: jest, to, będzie, są, był, było, będą, była, jestem, były</li>
      <li>VERB-Fin: ma, może, jest, stoi, można, mówi, siedzi, miał, było, należy</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Fut
    <ul>
      <li>AUX-Fin: będzie, będą, będziemy, będę, zostanie, zostaną, będziesz, będziecie, bedzie, bedziesz</li>
      <li>VERB-Fin: będzie, wystarczy, da, uda, odbędzie, znajdzie, powiem, stanie, będą, pozwoli</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>AUX-Fin: był, było, była, były, został, została, byli, zostały, zostało, zostali</li>
      <li>VERB-Conv: począwszy, spojrzawszy, zważywszy, Dokonawszy, otrzymawszy, stanąwszy, straciwszy, wyzbywszy, Doszedłszy, Nadawszy</li>
      <li>VERB-Fin: miał, było, powiedział, chciał, mógł, miała, mówił, mieli, mogli, był</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Conv: będąc</li>
      <li>AUX-Fin: jest, to, są, jestem, jesteś, jesteśmy, zostaje, zostają, bywa, bywają</li>
      <li>VERB-Conv: trzymając, patrząc, mówiąc, mając, stojąc, uwzględniając, siedząc, chcąc, biorąc, używając</li>
      <li>VERB-Fin: ma, może, jest, stoi, można, mówi, siedzi, należy, mam, mogą</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Act
    <ul>
      <li>ADJ-Part: dotyczące, dotyczących, dotyczącego, dotyczący, stojący, dotyczącej, lecącej, dotyczącymi, mających, trzymający</li>
      <li>AUX-Conv: będąc</li>
      <li>AUX-Fin: jest, są, był, było, była, jestem, były, został, została, zostanie</li>
      <li>AUX-Inf: być, zostać, byc</li>
      <li>VERB-Conv: trzymając, patrząc, mówiąc, mając, stojąc, uwzględniając, siedząc, chcąc, biorąc, używając</li>
      <li>VERB-Fin: ma, może, jest, stoi, mówi, siedzi, miał, było, należy, powiedział</li>
      <li>VERB-Inf: powiedzieć, być, mieć, zrobić, znaleźć, robić, patrzeć, zobaczyć, mówić, wziąć</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>ADJ-Part: związane, ubrany, określonych, związanych, przeznaczone, przedstawione, ubrana, prowadzone, przygotowane, przyjęta</li>
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
      <li>ADV: tak, tu, tam, dlatego, wtedy, tutaj, wówczas, stąd, dotąd, stamtąd</li>
      <li>DET: ten, tej, tym, tego, te, tych, ta, takie, to, takich</li>
      <li>PRON: to, tym, tego, temu, tamto, tamtym</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: kiedyś, gdzieś, kiedykolwiek, niekiedy, jakoś, skądś, gdziekolwiek, dokądś, jakkolwiek</li>
      <li>DET: kilka, wiele, więcej, wielu, kilku, jakiś, jakieś, dużo, niektórych, niektóre</li>
      <li>PRON: coś, ktoś, kogoś, czegoś, czymś, kimś, komuś, cokolwiek, ktokolwiek, kogokolwiek</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: kiedy, jak, dlaczego, gdzie, skąd, czemu, dokąd, odkąd, ile, jakże</li>
      <li>DET: ile, jakie, jaki, które, których, jakim, którą, jakiej, jaka, jakich</li>
      <li>PRON: co, kto, czym, czego, kim, kogo, komu, cóż, czemu, któż</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: nigdy, nigdzie</li>
      <li>DET: żadnego, żadnych, żaden, żadnej, żadne, żadnym, żadna, żadnymi, żadną, żadnemu</li>
      <li>PRON: nic, nikt, niczego, nikogo, nikomu, niczym, nikim, niczemu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: swoje, swoich, swoją, swoim, naszych, swój, nasze, mój, naszym, moim</li>
      <li>PRON: się, jego, ich, jej, go, mnie, sobie, mi, mu, siebie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rel
    <ul>
      <li>ADV: kiedy, gdzie, jak, skąd</li>
      <li>DET: które, który, która, którzy, których, którym, której, którego, którą, jakie</li>
      <li>PRON: co, kto, czego, czym, kim, kogo, komu, czemu</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>ADV: zawsze, wszędzie</li>
      <li>DET: wszystkie, wszystkich, każdy, każdym, każdego, każdej, wszyscy, każda, wszelkie, każde</li>
      <li>PRON: wszystko, wszystkim, wszyscy, wszystkich, wszystkiego, wszystkie, Wszystkiemu, wszystkimi, wszytko</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>DET: kilka, wiele, więcej, wielu, kilku, ile, dużo, tyle, mniej, kilkanaście</li>
      <li>NUM: 10, 3, 2, 30, 5, 15, 20, 4, 50, 12</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: 1, II, 2008, 2000, 2009, 2, 20, 15, 1995, XIX</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sets
    <ul>
      <li>NOUN: dzieci, dziecko, oczy, dziecka, oczach, dzieckiem, oczami, zwierząt, dziećmi, oczu</li>
      <li>NUM: dwoje, Troje, oboje, Czworo, Pięcioro, obojgu, czternaściorga, czworga, dwojgiem, dziesięcioro</li>
      <li>PROPN: Hedestad, INE, Lakis, Plovdiv, Poste, SUD</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: swoje, swoich, swoją, swoim, naszych, swój, nasze, mój, naszym, moim</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: swoje, swoich, swoją, swoim, swój, swojej, swojego, swych, swego, swej</li>
      <li>PRON: się, sobie, siebie, sobą, sie, se, sia</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>0
    <ul>
      <li>VERB-Fin: stwierdzono, znaleziono, ustalono, zatrzymano, przeprowadzono, przedstawiono, traktowano, wprowadzono, zaczęto, pokazano</li>
    </ul>
  </li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX: em, m, śmy, jestem, będziemy, będę, jesteśmy, będziem, zostanę</li>
      <li>AUX-Fin: jestem, będziemy, będę, jesteśmy, będziem, zostanę</li>
      <li>DET: naszych, nasze, mój, naszym, moim, naszej, moja, nasz, moje, mojej</li>
      <li>PRON: mnie, mi, nas, ja, nam, my, mną, nami, NI</li>
      <li>VERB-Fin: mam, wiem, proszę, mamy, musimy, mogę, możemy, chcę, dziękuję, muszę</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX: eś, ś, jesteś, ście, będziesz, bądź, będziecie, jesteście, bedziesz, śmy</li>
      <li>AUX-Fin: jesteś, będziesz, bądź, będziecie, jesteście, bedziesz, ście</li>
      <li>DET: twój, twoje, twoim, twoja, twojego, twoją, wasze, wasz, twoich, twojej</li>
      <li>PRON: ci, cię, ty, ciebie, was, wam, tobą, tobie, wy, wami</li>
      <li>VERB-Fin: masz, wiesz, chcesz, możesz, powiedz, daj, musisz, myślisz, patrz, macie</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: jest, będzie, są, będą, zostanie, zostaną, zostaje, zostają, bywa, bywają</li>
      <li>PRON: jego, ich, jej, go, mu, nich, ją, on, je, nim</li>
      <li>VERB-Fin: ma, może, jest, stoi, mówi, siedzi, należy, mogą, mają, musi</li>
    </ul>
  </li>
</ul>



<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: naszych, nasze, naszym, naszej, nasz, naszego, nasza, nasi, naszą, wasze</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: mój, moim, moja, moje, mojej, mojego, twój, moją, moich, twoje</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>PART: ok</li>
          <li>X: r, zł, art, tys, proc, m, s, ust, np, ul</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>AdpType</a>
    <ul>
      <li>Post
        <ul>
          <li>ADP: temu</li>
        </ul>
      </li>
      <li>Prep
        <ul>
          <li>ADP: na, w, do, z, o, po, za, dla, od, przez</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Clitic</a>
    <ul>
      <li>Yes
        <ul>
          <li>AUX: em, m, śmy, eś, ś, ście</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>ConjType</a>
    <ul>
      <li>Cmpr
        <ul>
          <li>SCONJ: jak, niż, jakby, niczym, aniżeli, niby</li>
        </ul>
      </li>
      <li>Oper
        <ul>
          <li>CCONJ: plus, minus</li>
        </ul>
      </li>
      <li>Pred
        <ul>
          <li>SCONJ: jako</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Emphatic</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADV: jakże, gdzież, skądże</li>
          <li>DET: ileż, iluż, tyleż</li>
          <li>PART: czyż</li>
          <li>PRON: cóż, któż, Kimże, czymże</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Foreign</a>
    <ul>
      <li>No
        <ul>
          <li>X: dala, ciemku, cna, dna, dwójnasób, młodu, naprzeciwka, niemiara, oścież, oślep</li>
        </ul>
      </li>
      <li>Yes
        <ul>
          <li>X: de, San, a, of, von, New, Don, bin, di, Le</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Hyph</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: czarno, biało, polsko, czerwono, południowo, żółto, brązowo, budowlano, niebiesko, niemiecko</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NounForm</a>
    <ul>
      <li>Depr
        <ul>
          <li>NOUN: chłopaki, nastolatki, Chłopy, Kamraty, Wykształciuchy, niedobitki, ułomka, zombie, łajzy</li>
          <li>PROPN: Jerze, VIP-y</li>
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
          <li>ADJ: 1, 2008, 2000, 2009, 2, 20, 15, 1995, 1996, 1997</li>
          <li>NUM: 10, 3, 2, 30, 5, 15, 20, 4, 50, 12</li>
          <li>X: 2, 1, 3, 4, 5, 6, 7, 8, 9, 10</li>
        </ul>
      </li>
      <li>Roman
        <ul>
          <li>ADJ: II, XIX, I, IV, III, XVI, XVIII, XX, VIII, XII</li>
          <li>NUM: IX</li>
          <li>X: I, IV, II, III, VI, XI</li>
        </ul>
      </li>
      <li>Word
        <ul>
          <li>NUM: dwie, dwa, dwóch, trzy, trzech, cztery, pięć, dwaj, czterech, pół</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PartType</a>
    <ul>
      <li>Int
        <ul>
          <li>PART: czy, Czyżby, czyż, Azaliż</li>
        </ul>
      </li>
      <li>Mod
        <ul>
          <li>PART: może, Moze</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Pun</a>
    <ul>
      <li>No
        <ul>
          <li>X: zł, mln, pkt, nr, m, km, mg, kg, mld, cm</li>
        </ul>
      </li>
      <li>Yes
        <ul>
          <li>PART: ok</li>
          <li>X: r, art, tys, proc, ust, np, ul, godz, m.in, prof</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctSide</a>
    <ul>
      <li>Fin
        <ul>
          <li>PUNCT: ), ”, ], ’, ’’</li>
        </ul>
      </li>
      <li>Ini
        <ul>
          <li>PUNCT: (, „, [, “</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>PunctType</a>
    <ul>
      <li>Brck
        <ul>
          <li>PUNCT: ), (, [, ]</li>
        </ul>
      </li>
      <li>Colo
        <ul>
          <li>PUNCT: :</li>
        </ul>
      </li>
      <li>Comm
        <ul>
          <li>PUNCT: ,, ,,</li>
        </ul>
      </li>
      <li>Dash
        <ul>
          <li>PUNCT: –, —, --</li>
        </ul>
      </li>
      <li>Elip
        <ul>
          <li>PUNCT: …</li>
        </ul>
      </li>
      <li>Excl
        <ul>
          <li>PUNCT: !</li>
        </ul>
      </li>
      <li>Hyph
        <ul>
          <li>PUNCT: -</li>
        </ul>
      </li>
      <li>Peri
        <ul>
          <li>PUNCT: .</li>
        </ul>
      </li>
      <li>Qest
        <ul>
          <li>PUNCT: ?</li>
        </ul>
      </li>
      <li>Quot
        <ul>
          <li>PUNCT: ", ”, „, '', ', “, », «, ’, ’’</li>
        </ul>
      </li>
      <li>Semi
        <ul>
          <li>PUNCT: ;</li>
        </ul>
      </li>
      <li>Slsh
        <ul>
          <li>PUNCT: /</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>VerbType</a>
    <ul>
      <li>Mod
        <ul>
          <li>VERB-Fin: powinien, powinna, powinny, powinni, powinno, winna, winny, winien, winni, winno</li>
        </ul>
      </li>
      <li>Quasi
        <ul>
          <li>AUX-Fin: to</li>
          <li>VERB-Fin: można, trzeba, wiadomo, widać, warto, oto, wolno, słychać, stać, szkoda</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 3 lemmas as copulas (<a>cop</a>). Examples: być, to, bywać.</li>
</ul>

<ul>
<li>This corpus uses 3 lemmas as auxiliaries (<a>aux</a>). Examples: być, zostać, zostawać.</li>
<li>This corpus uses 4 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: być, zostać, zostawać, bywać.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB-Fin--NOUN-Acc (7)</li>
      <li>VERB-Fin--NOUN-Dat (2)</li>
      <li>VERB-Fin--NOUN-Gen (642)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(do) (3)</li>
      <li>VERB-Fin--NOUN-Ins (1)</li>
      <li>VERB-Fin--NOUN-Nom (11591)</li>
      <li>VERB-Fin--PRON-Acc (2)</li>
      <li>VERB-Fin--PRON-Dat (2)</li>
      <li>VERB-Fin--PRON-Gen (58)</li>
      <li>VERB-Fin--PRON-Nom (1796)</li>
      <li>VERB-Inf--NOUN-Gen (5)</li>
      <li>VERB-Inf--NOUN-Nom (108)</li>
      <li>VERB-Inf--PRON-Acc (1)</li>
      <li>VERB-Inf--PRON-Gen (1)</li>
      <li>VERB-Inf--PRON-Nom (22)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (522)</li>
      <li>VERB-Conv--NOUN-Gen (56)</li>
      <li>VERB-Conv--NOUN-Nom (3)</li>
      <li>VERB-Conv--PRON-Acc (32)</li>
      <li>VERB-Conv--PRON-Gen (3)</li>
      <li>VERB-Fin--NOUN-Acc (5813)</li>
      <li>VERB-Fin--NOUN-Dat (1)</li>
      <li>VERB-Fin--NOUN-Gen (962)</li>
      <li>VERB-Fin--NOUN-Gen-ADP(z) (1)</li>
      <li>VERB-Fin--NOUN-Ins (12)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(po) (1)</li>
      <li>VERB-Fin--NOUN-Nom (24)</li>
      <li>VERB-Fin--PRON-Acc (1379)</li>
      <li>VERB-Fin--PRON-Gen (229)</li>
      <li>VERB-Fin--PRON-Ins (6)</li>
      <li>VERB-Fin--PRON-Nom (3)</li>
      <li>VERB-Inf--NOUN-Acc (1628)</li>
      <li>VERB-Inf--NOUN-Dat (1)</li>
      <li>VERB-Inf--NOUN-Gen (339)</li>
      <li>VERB-Inf--NOUN-Ins (3)</li>
      <li>VERB-Inf--NOUN-Nom (8)</li>
      <li>VERB-Inf--PRON-Acc (411)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Gen (81)</li>
      <li>VERB-Inf--PRON-Ins (1)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
      <li>VERB-Conv--NOUN-Acc (23)</li>
      <li>VERB-Conv--NOUN-Dat (16)</li>
      <li>VERB-Conv--NOUN-Gen (19)</li>
      <li>VERB-Conv--NOUN-Ins (99)</li>
      <li>VERB-Conv--PRON-Acc (1)</li>
      <li>VERB-Conv--PRON-Dat (23)</li>
      <li>VERB-Conv--PRON-Ins (2)</li>
      <li>VERB-Fin--NOUN-Acc (921)</li>
      <li>VERB-Fin--NOUN-Dat (561)</li>
      <li>VERB-Fin--NOUN-Gen (587)</li>
      <li>VERB-Fin--NOUN-Ins (799)</li>
      <li>VERB-Fin--NOUN-Loc-ADP(o) (1)</li>
      <li>VERB-Fin--NOUN-Nom (17)</li>
      <li>VERB-Fin--PRON-Acc (178)</li>
      <li>VERB-Fin--PRON-Dat (974)</li>
      <li>VERB-Fin--PRON-Gen (110)</li>
      <li>VERB-Fin--PRON-Ins (55)</li>
      <li>VERB-Fin--PRON-Nom (7)</li>
      <li>VERB-Inf--NOUN-Acc (92)</li>
      <li>VERB-Inf--NOUN-Dat (159)</li>
      <li>VERB-Inf--NOUN-Gen (72)</li>
      <li>VERB-Inf--NOUN-Ins (173)</li>
      <li>VERB-Inf--NOUN-Loc-ADP(o) (1)</li>
      <li>VERB-Inf--NOUN-Nom (1)</li>
      <li>VERB-Inf--PRON-Acc (14)</li>
      <li>VERB-Inf--PRON-Dat (150)</li>
      <li>VERB-Inf--PRON-Gen (17)</li>
      <li>VERB-Inf--PRON-Ins (14)</li>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 1664 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: stać się, znajdować się, udać się, wydawać się, okazać się, znaleźć się, starać się, pojawić się, odbyć się, czuć się, dowiedzieć się, zajmować się, bać się, cieszyć się, bawić się, dziać się, wspinać się, pojawiać się, stawać się, rozpocząć się, spotkać się, spodziewać się, zastanawiać się, unosić się, zdarzać się, zdecydować się, zatrzymać się, dać się, opierać się, trzymać się, zgadzać się, zająć się, domagać się, stosować się, zgodzić się, odbywać się, zbliżać się, obawiać się, posługiwać się, przyglądać się, uczyć się, zmienić się, kończyć się, podobać się, spotykać się, uśmiechać się, uśmiechnąć się, zacząć się, zwrócić się, mówić się</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 54 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: pozwolić sobie, robić sobie, zająć sobą, bronić siebie, darować sobie, dogonić swoich, dopiąć swego, gotować sobie, kochać siebie, kompromitować siebie, lubić siebie, manipulować sobą, obetrzeć sobie, oceniać siebie, odkrywać siebie, odmawiać sobie, odmówić sobie, odpowiedzieć sobie, określić siebie, opisać siebie, organizować sobie, parodiować siebie, pisać sobie, podawać sobie, pokochać siebie, poniżyć siebie, porównywać siebie, posłuchać siebie, poznać siebie, przynieść sobie, rozgrzeszyć siebie, rozpoznawać siebie, rozpoznać siebie, rozumieć siebie, sam siebie, sprawić sobie, stawiać siebie, stawiać sobie, ufać sobie, ukarać siebie, uprzytomnić sobie, uratować siebie, utrudnić sobie, uzdrowienie siebie, uświadamiać sobie, widzieć siebie, wybaczyć sobie, wybrać siebie, wydrzeć sobie, wyrażać siebie</li>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 38 relation subtypes: <a>acl:relcl</a>, <a>advcl:cmpr</a>, <a>advcl:relcl</a>, <a>advmod:arg</a>, <a>advmod:emph</a>, <a>advmod:neg</a>, <a>amod:flat</a>, <a>aux:clitic</a>, <a>aux:cnd</a>, <a>aux:imp</a>, <a>aux:pass</a>, <a>cc:preconj</a>, <a>ccomp:cleft</a>, <a>ccomp:obj</a>, <a>csubj:pass</a>, <a>det:numgov</a>, <a>det:nummod</a>, <a>det:poss</a>, <a>discourse:emo</a>, <a>discourse:intj</a>, <a>expl:pv</a>, <a>flat:foreign</a>, <a>nmod:arg</a>, <a>nmod:flat</a>, <a>nmod:poss</a>, <a>nmod:pred</a>, <a>nsubj:pass</a>, <a>nummod:flat</a>, <a>nummod:gov</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:cmpr</a>, <a>obl:orphan</a>, <a>parataxis:insert</a>, <a>parataxis:obj</a>, <a>xcomp:cleft</a>, <a>xcomp:pred</a>, <a>xcomp:subj</a></li>
<li>The following 3 main types are not used alone, they are always subtyped: <a>discourse</a>, <a>expl</a>, <a>parataxis</a></li>
<li>The following 5 relation types are not used in this corpus at all: <a>dislocated</a>, <a>clf</a>, <a>compound</a>, <a>goeswith</a>, <a>reparandum</a></li>
</ul>
