---
layout: base
title:  'UD_German-GSD'
udver: '2'
---

<!-- This page is automatically generated from the README file and from
     the data files in the latest release.

     Please do not edit this page directly. -->

# UD German GSD

Language: [German](/de/index.html) (code: `de`)<br/>
Family: Indo-European, Germanic

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Slav Petrov, Wolfgang Seeker, Ryan McDonald, Joakim Nivre, Daniel Zeman, Adriane Boyd.

Repository: [UD_German-GSD](https://github.com/UniversalDependencies/UD_German-GSD)<br />
Search this treebank on-line: [PML-TQ](https://lindat.mff.cuni.cz/services/pmltq/#!/treebank/udde_gsd214)<br />
Download all treebanks: [UD 2.14](/#download)

License: CC BY-SA 4.0

Genre: news, reviews, wiki

Questions, comments?
General annotation questions (either German-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_German-GSD/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens directly in the UD repository, so you may submit bug fixes as pull requests against the dev branch.

| Annotation | Source |
|------------|--------|
| Lemmas | assigned by a program, not checked manually |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | assigned by a program, not checked manually |
| Features | assigned by a program, not checked manually |
| Relations | annotated manually in non-UD style, automatically converted to UD |

## Description

The German UD is converted from the content head version of the [universal
dependency treebank v2.0 (legacy)](https://github.com/ryanmcd/uni-dep-tb).




The ACL 2013 paper (https://github.com/ryanmcd/uni-dep-tb/blob/master/ACL2013.pdf,
McDonald et al.) describes version 1.0 of the corpus, of which there are 2200
train/800 dev/1000 test sentences in German. According to the paper they
consist of Reviews and News genres (the news data being from the TIGER
Treebank, Reviews presumably from Google).

The subsequent 2.0 release has more data: 14118 train/799 dev/977 test
sentences. Some of the sentences in 1.0 turned out to be duplicated across
splits, which was fixed for 2.0. There is no indication in the READMEs
of where the new German sentences came from.

Based on the above and the mappings in not-to-release/ud-tiger-mapping.txt,
it appears that the genres are:

train: Reviews=s1-s1500, News=s1501-s2200, Web=s2201-s14118
By searching for a selection of sentences in the s2201-s14118 range, i.e. the
new ones in version 2.0, it looks like they are from Wikipedia and other
websites.
dev: Reviews=s1-s500, News=s501-s799
test: Reviews=s1-s301, News=s302-s977


## Acknowledgments

# Statistics of UD German GSD

## POS Tags

[ADJ](de_gsd-pos-ADJ.html) – [ADP](de_gsd-pos-ADP.html) – [ADV](de_gsd-pos-ADV.html) – [AUX](de_gsd-pos-AUX.html) – [CCONJ](de_gsd-pos-CCONJ.html) – [DET](de_gsd-pos-DET.html) – [INTJ](de_gsd-pos-INTJ.html) – [NOUN](de_gsd-pos-NOUN.html) – [NUM](de_gsd-pos-NUM.html) – [PART](de_gsd-pos-PART.html) – [PRON](de_gsd-pos-PRON.html) – [PROPN](de_gsd-pos-PROPN.html) – [PUNCT](de_gsd-pos-PUNCT.html) – [SCONJ](de_gsd-pos-SCONJ.html) – [SYM](de_gsd-pos-SYM.html) – [VERB](de_gsd-pos-VERB.html) – [X](de_gsd-pos-X.html)

## Features

[Abbr](de_gsd-feat-Abbr.html) – [Case](de_gsd-feat-Case.html) – [Definite](de_gsd-feat-Definite.html) – [Degree](de_gsd-feat-Degree.html) – [Foreign](de_gsd-feat-Foreign.html) – [Gender](de_gsd-feat-Gender.html) – [Gender[psor]](de_gsd-feat-Gender-psor.html) – [Mood](de_gsd-feat-Mood.html) – [Number](de_gsd-feat-Number.html) – [Number[psor]](de_gsd-feat-Number-psor.html) – [NumType](de_gsd-feat-NumType.html) – [Person](de_gsd-feat-Person.html) – [Polarity](de_gsd-feat-Polarity.html) – [Polite](de_gsd-feat-Polite.html) – [Poss](de_gsd-feat-Poss.html) – [PronType](de_gsd-feat-PronType.html) – [Reflex](de_gsd-feat-Reflex.html) – [Tense](de_gsd-feat-Tense.html) – [Typo](de_gsd-feat-Typo.html) – [VerbForm](de_gsd-feat-VerbForm.html) – [Voice](de_gsd-feat-Voice.html)

## Relations

[acl](de_gsd-dep-acl.html) – [acl:relcl](de_gsd-dep-acl-relcl.html) – [advcl](de_gsd-dep-advcl.html) – [advmod](de_gsd-dep-advmod.html) – [amod](de_gsd-dep-amod.html) – [appos](de_gsd-dep-appos.html) – [aux](de_gsd-dep-aux.html) – [aux:pass](de_gsd-dep-aux-pass.html) – [case](de_gsd-dep-case.html) – [cc](de_gsd-dep-cc.html) – [ccomp](de_gsd-dep-ccomp.html) – [compound](de_gsd-dep-compound.html) – [compound:prt](de_gsd-dep-compound-prt.html) – [conj](de_gsd-dep-conj.html) – [cop](de_gsd-dep-cop.html) – [csubj](de_gsd-dep-csubj.html) – [csubj:pass](de_gsd-dep-csubj-pass.html) – [dep](de_gsd-dep-dep.html) – [det](de_gsd-dep-det.html) – [det:poss](de_gsd-dep-det-poss.html) – [discourse](de_gsd-dep-discourse.html) – [expl](de_gsd-dep-expl.html) – [expl:pv](de_gsd-dep-expl-pv.html) – [fixed](de_gsd-dep-fixed.html) – [flat](de_gsd-dep-flat.html) – [goeswith](de_gsd-dep-goeswith.html) – [mark](de_gsd-dep-mark.html) – [nmod](de_gsd-dep-nmod.html) – [nmod:poss](de_gsd-dep-nmod-poss.html) – [nsubj](de_gsd-dep-nsubj.html) – [nsubj:outer](de_gsd-dep-nsubj-outer.html) – [nsubj:pass](de_gsd-dep-nsubj-pass.html) – [nummod](de_gsd-dep-nummod.html) – [obj](de_gsd-dep-obj.html) – [obl](de_gsd-dep-obl.html) – [obl:agent](de_gsd-dep-obl-agent.html) – [obl:arg](de_gsd-dep-obl-arg.html) – [obl:tmod](de_gsd-dep-obl-tmod.html) – [orphan](de_gsd-dep-orphan.html) – [parataxis](de_gsd-dep-parataxis.html) – [punct](de_gsd-dep-punct.html) – [reparandum](de_gsd-dep-reparandum.html) – [root](de_gsd-dep-root.html) – [vocative](de_gsd-dep-vocative.html) – [xcomp](de_gsd-dep-xcomp.html)

<h2>Tokenization and Word Segmentation</h2>


<ul>
<li>This corpus contains 15590 sentences, 287721 tokens and 292769 syntactic words.</li>
</ul>

<ul>
<li>This corpus contains 34952 tokens (12%) that are not followed by a space.</li>
</ul>

<ul>
<li>This corpus does not contain words with spaces.</li>
</ul>

<ul>
<li>This corpus contains 194 types of words that contain both letters and punctuation. Examples: St., Dr., 's, B., I., z.B., u.a., d', z., v., W., e.V., jap., l', etc., ca., s., F., H., M., k.k., C., D., G., Inc., J., P., Co., Prof., engl., L., d.h., E., K., O'Brien, S.S., ital., k.u.k., lat., 're, 1B.LS1, A., A.V.G., C.C., Gr., I.G., K.o., L.A., Ltd., Mr.</li>
</ul>

<ul>
<li>This corpus contains 5048 multi-word tokens. On average, one multi-word token consists of 2.00 syntactic words.</li>
<li>There are 12 types of multi-word tokens. Examples: im, zum, am, zur, vom, beim, ins, ans, ums, aufs, übers, fürs.</li>
</ul>

<h2>Morphology</h2>

<h3>Tags</h3>

<ul>
<li>This corpus uses 17 UPOS tags out of 17 possible: <a>ADJ</a>, <a>ADP</a>, <a>ADV</a>, <a>AUX</a>, <a>CCONJ</a>, <a>DET</a>, <a>INTJ</a>, <a>NOUN</a>, <a>NUM</a>, <a>PART</a>, <a>PRON</a>, <a>PROPN</a>, <a>PUNCT</a>, <a>SCONJ</a>, <a>SYM</a>, <a>VERB</a>, <a>X</a></li>
</ul>

<ul>
<li>This corpus contains 27 word types tagged as particles (PART): 's, Bitte, Danke, Hallo, Na, ab, als, an, auf, aus, dar, garnicht, her, hin, inte, ja, mit, ncht, nein, nich, nicht, not, preis, statt, vor, wie, zu</li>
</ul>

<ul>
<li>This corpus contains 28 lemmas tagged as pronouns (PRON): all, der, du, einander, er, es, etwas, ich, ihr, irgendetwas, irgendwas, irgendwer, it, jemand, man, my, nichts, niemand, she, sich, sie, sowas, was, we, wer, wir, you, your</li>
</ul>

<ul>
<li>This corpus contains 47 lemmas tagged as determiners (DET): a, alla, alle, allermeister, anderer, beide, dein, der, dergleiche, derjenige, derselbe, dessa, dieser, ebendieser, ein, einige, etliche, euer, ha, ihr, irgendein, irgendwelcher, jeder, jeglicher, jener, kein, keinerlei, mancher, mancherlei, mehr, mein, meist, no, quelque, sein, selber, selbig, solcher, soviel, sämtlich, the, unser, viel, welcher, wenig, wieviel, zuviel</li>
</ul>

<ul>
<li>Out of the above, 2 lemmas occurred sometimes as PRON and sometimes as DET: der, ihr</li>
</ul>

<ul>
<li>This corpus contains 10 lemmas tagged as auxiliaries (AUX): be, dürfen, haben, können, mögen, müssen, sein, sollen, werden, wollen</li>
</ul>

<ul>
<li>Out of the above, 9 lemmas occurred sometimes as AUX and sometimes as VERB: dürfen, haben, können, mögen, müssen, sein, sollen, werden, wollen</li>
</ul>

<ul>
<li>There are 3 <a href="../feat/VerbForm.html">(de)verbal forms:</a></li>
</ul>

<ul>
  <li>Fin
  <ul>
    <li>ADJ: reaktivierte</li>
    <li>AUX: ist, wurde, war, sind, wird, wurden, kann, hat, werden, waren</li>
    <li>NOUN: mag, Jahrhundert, War, 3/8-Takte, Balken, Bin, Erbvogt, Familien, Flotte, Gemüt</li>
    <li>PROPN: ist, 1st, EVTA, Gibt, Glaube, Kambodschas, Kemble, Leuchten, Roden, Sankt</li>
    <li>VERB: wurde, gibt, hat, liegt, kam, hatte, gab, war, erhielt, befindet</li>
    <li>X: isl., s.</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Inf
  <ul>
    <li>ADJ: erhalten, auszutauschenden, beginnenden, bewachsen, einzeln, externen, extremen, gesunden, kahlen, nassen</li>
    <li>ADV: erhalten, kennen, stehen, wärmsten</li>
    <li>AUX: werden, sein, können, haben, müssen, wollen, dürfen, sollen, seien, seyn</li>
    <li>NOUN: lernen, 1980ern, Glauben, Wüstenvätern, arten, beilagen, liegenden, mücken, rauchen, reellen</li>
    <li>PROPN: Wetten, diedenkweisen, kontrollieren, weingarten</li>
    <li>VERB: empfehlen, lassen, machen, werden, finden, erreichen, haben, sehen, kommen, sagen</li>
    <li>X: en</li>
  </ul>
  </li>
</ul>

<ul>
  <li>Part
  <ul>
    <li>ADJ: beteiligt, verbreitet, aufgehoben, verheiratet, vertreten, verbunden, erhalten, geprägt, organisiert, vorgesehen</li>
    <li>ADV: verloren, bewaldet, erhalten, gefangen, gemessen, geplant, geschätzt, verdickt, verzerrt, verziert</li>
    <li>AUX: worden, gewesen, geworden</li>
    <li>NOUN: Jahrhundert, Bestärkt, erhöht</li>
    <li>PROPN: Aliskiren, Ethernet, Outcault, Target, vétkeimet, zertifiziert</li>
    <li>VERB: gegründet, genannt, verwendet, eingesetzt, genutzt, bezeichnet, gebaut, aufgenommen, gewählt, gemacht</li>
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
      <li>ADJ: erste, ersten, neue, weitere, große, gute, deutschen, verschiedenen, deutsche, großen</li>
      <li>ADJ-Fin: reaktivierte</li>
      <li>ADJ-Part: bezeichneten, entwickelte, ausgerichtete, befreiten, diskutierte, entdeckten, erstellten, eröffneten, gemauerte, gerufenen</li>
      <li>ADV: lange, super, Allzeit, Kehrt, Nahe, Wenige, Zügig, absolute, aka, ca</li>
      <li>DET: der, die, eine, einer, seine, diese, seiner, dieser, ihre, keine</li>
      <li>NOUN: Zeit, Stadt, Familie, Gemeinde, Saison, Frau, Gruppe, Region, Geschichte, Kirche</li>
      <li>NUM: Millionen, zweier, 15, Million, 30, 35, 6, 1.681.469, 132,5-165, 1834-1911</li>
      <li>PRON: sie, die, der, ihr, deren, ich, mich, wir, She, derer</li>
      <li>PROPN: SPD, Mark, Universität, Schweiz, US, Maria, DDR, Deutschen, CDU, Straße</li>
      <li>SYM: °</li>
      <li>X: Chr, B., E, S., €, #, B, C, La, MEZ</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc
    <ul>
      <li>ADJ: ersten, zweiten, neuen, großen, erste, weiteren, weitere, heutigen, amerikanischen, neue</li>
      <li>ADJ-Part: genannten, ausgelobten, betreuten, engangierte, entstanden, erbaute, geladenen, konstituierten, registrierten, renommierte</li>
      <li>ADV: Abends, Anfangs, ECHT, EINFACH, Ex, Gottlob, Katzelmacher, Křižanov, NIE, NIEMALS</li>
      <li>DET: dem, der, den, des, ein, einen, einem, eines, seinen, diesem</li>
      <li>NOUN: Teil, Ort, Menschen, Platz, Sohn, km, Namen, Anfang, Titel, Meter</li>
      <li>NUM: 50, 10, 28, 7, -10, -2288,9, -60, 0:2, 0:3, 1</li>
      <li>PRON: er, der, ihm, ihn, dem, dessen, den, ich, wer, sie</li>
      <li>PROPN: Oktober, US, August, Mai, November, September, Juli, Peter, Weltkrieg, Johann</li>
      <li>SYM: :-), o, °, ·</li>
      <li>X: :-), B., :), ???a?, ??µ?????, A, Fr, Hauswurde, Hl, Min</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neut
    <ul>
      <li>ADJ: ersten, erste, letzten, weitere, neuen, gleichen, neues, gutes, neue, folgenden</li>
      <li>ADJ-Part: aufbewahrte, beanspruchten, entworfenen, lancierte, modifizierten, unterkellerte, unterstützten, veröffentlichte, zurückgeführten</li>
      <li>ADV: was, ca, anderem, Dort, How, Mal, PMMA, Rääts, SEHR, Weitere</li>
      <li>DET: dem, das, ein, des, einem, dies, sein, eines, dieses, allem</li>
      <li>NOUN: jahr, Jahre, Jahren, Prozent, Ende, %, Unternehmen, Kinder, Leben, Mitglied</li>
      <li>NUM: 10, 3, 1:1, ², +7,6, 100, 1000, 17, 1846-1925, 1882-1953</li>
      <li>PRON: es, das, was, dem, nichts, etwas, it, dessen, 's, nix</li>
      <li>PROPN: Deutschland, Berlin, Frankreich, München, Wien, London, New, Paris, St., Italien</li>
      <li>SYM: %, ×</li>
      <li>X: %, B., Abs, 4Jahren, ???????, Aufl, Az., C., Chr, Gr</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Number</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>ADJ: weitere, ersten, verschiedenen, verschiedene, zahlreiche, neue, großen, letzten, weiteren, besten</li>
      <li>ADJ-Part: betreuten, engangierte, entdeckten, gemauerte, modifizierten, registrierten, renommierte, unterstützten, verschleppten, verwalteten</li>
      <li>ADV: Katzelmacher, Wenige, aufgetretene, leibeigene, längerer, mehrere, verbundenen</li>
      <li>AUX-Fin: sind, wurden, werden, waren, haben, können, sollen, hatten, konnten, müssen</li>
      <li>DET: die, den, der, alle, diese, seine, viele, beiden, anderen, einige</li>
      <li>NOUN: Jahren, Jahre, Menschen, %, km, Prozent, Kinder, m, Einwohner, Millionen</li>
      <li>NOUN-Fin: Balken, Bin, Familien, belangen, besten, erschienen, finden, folgten, geben, ha</li>
      <li>NUM: Millionen, zweier, 10, 1, 100, 15, 20, 40, 400, 630</li>
      <li>PRON: die, sie, wir, uns, denen, deren, ihnen, ihr, euch, den</li>
      <li>PROPN: USA, US, Olympischen, Staaten, Euro, Spielen, Vereinigten, Grünen, EU, Mark</li>
      <li>PROPN-Fin: Roden, Verden, ausnutzen, ficken, kommen, machen, sind, treten</li>
      <li>SYM: %, °</li>
      <li>VERB-Fin: haben, stehen, gehören, hatten, kamen, kommen, sind, fanden, finden, liegen</li>
      <li>X: %, €, S., C, E, Nr, ups</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>ADJ: ersten, erste, zweiten, neuen, neue, deutschen, großen, große, heutigen, zweite</li>
      <li>ADJ-Fin: reaktivierte</li>
      <li>ADJ-Part: bezeichneten, entwickelte, genannten, aufbewahrte, ausgelobten, ausgerichtete, beanspruchten, befreiten, diskutierte, entstanden</li>
      <li>ADV: ca, was, super, SEHR, anderem, lange, vorallem, Abends, Allzeit, Anfangs</li>
      <li>AUX-Fin: ist, wurde, war, wird, kann, hat, hatte, konnte, habe, sei</li>
      <li>DET: der, dem, die, das, des, eine, ein, den, einer, einen</li>
      <li>NOUN: jahr, Zeit, Stadt, Ende, Teil, Familie, Ort, Gemeinde, Platz, Saison</li>
      <li>NOUN-Fin: mag, Jahrhundert, War, 3/8-Takte, Erbvogt, Flotte, Gemüt, Kam, Komme, Liegt</li>
      <li>NUM: 3, ², 10, 2, 35, 50, Million, 15, 1:1, 28</li>
      <li>PRON: er, es, sie, ich, der, die, man, das, was, ihm</li>
      <li>PROPN: Deutschland, Berlin, US, SPD, St., Oktober, Frankreich, August, Mai, New</li>
      <li>PROPN-Fin: ist, 1st, EVTA, Gibt, Glaube, Kambodschas, Kemble, Leuchten, Sankt, Verzeih</li>
      <li>SYM: :-), o, ·, ×</li>
      <li>VERB-Fin: wurde, gibt, hat, liegt, kam, hatte, gab, war, erhielt, befindet</li>
      <li>X: B., Chr, :-), Abs, S, tunga, u, usw, #, 4Jahren</li>
      <li>X-Fin: isl., s.</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Case</a></li>
</ul>

<ul>
  <li>Acc
    <ul>
      <li>ADJ: neue, große, weitere, erste, gute, verschiedene, eigene, ersten, zahlreiche, neuen</li>
      <li>ADJ-Part: ausgelobten, diskutierte, geladenen, genannten, konstituierten, lancierte, veröffentlichte, veröffentlichten, zurückgeführten</li>
      <li>ADV: was, ca, EINFACH, How, Katzelmacher, Kehrt, Mal, NIEMALS, NOCH, Revue</li>
      <li>DET: die, den, eine, das, einen, ein, seine, ihre, diese, keine</li>
      <li>NOUN: Jahre, Zeit, Ende, jahr, Platz, Anfang, %, Meter, tage, Rolle</li>
      <li>NUM: 15, 3, Millionen, ², 0:2, 10, 100, 1834-1911, 1:30200000, 2</li>
      <li>PRON: sich, ihn, die, es, mich, sie, das, was, uns, den</li>
      <li>PROPN: US, USA, Euro, Deutschland, Mai, Oktober, Award, März, Cup, Deutsche</li>
      <li>SYM: %</li>
      <li>X: %, €, E, S, inkl, post</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dat
    <ul>
      <li>ADJ: ersten, zweiten, weiteren, großen, neuen, verschiedenen, letzten, deutschen, gleichen, heutigen</li>
      <li>ADJ-Inf: beginnenden, externen, extremen, nassen</li>
      <li>ADJ-Part: beanspruchten, bezeichneten, entdeckten, entworfenen, erstellten, eröffneten, gerufenen, thesauriertem</li>
      <li>ADP: zufolge, nach</li>
      <li>ADV: anderem, ca, Anfangs, Dort, Ex, Křižanov, PMMA, meisten, vorallem</li>
      <li>DET: dem, der, den, einem, einer, diesem, seiner, seinem, dieser, anderen</li>
      <li>NOUN: Jahr, Jahren, Zeit, Jahre, Saison, Ende, Stadt, Familie, Teil, Ort</li>
      <li>NUM: 1:1, 8, Millionen, ², +7,6, -10, -2288,9, -60, 0:3, 1</li>
      <li>PRON: ihm, sich, dem, mir, der, denen, ihnen, uns, ihr, den</li>
      <li>PROPN: Deutschland, Berlin, Frankreich, Oktober, Weltkrieg, München, New, Paris, Mai, November</li>
      <li>SYM: °, ·</li>
      <li>X: B., %, Chr, Abs, #, 4Jahren, A, B, E, Fe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Gen
    <ul>
      <li>ADJ: ersten, deutschen, zweiten, ehemaligen, neuen, großen, französischen, heutigen, amerikanischen, besten</li>
      <li>ADJ-Part: befreiten, bezeichneten, entstanden, genannten, modifizierten, registrierten, unterstützten, verschleppten, verwalteten</li>
      <li>ADV: Abends, NIE, Zügig, längerer</li>
      <li>DET: der, des, eines, einer, seiner, dieser, seines, ihrer, aller, dieses</li>
      <li>NOUN: Stadt, Jahre, Jahres, Zeit, Landes, Gemeinde, Familie, Bevölkerung, Vaters, Saison</li>
      <li>NUM: zweier, 7, 1846-1925, 35, 50, Mio, dreier</li>
      <li>PRON: deren, dessen, der, derer, my, Ich</li>
      <li>PROPN: Deutschen, US, Deutschlands, Europäischen, Weltkrieges, St., Weltkriegs, Frankreichs, Union, Gesellschaft</li>
      <li>X: C, Hl, La, Mio, st</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Nom
    <ul>
      <li>ADJ: erste, weitere, neue, deutsche, große, kleine, gute, letzte, zahlreiche, zweite</li>
      <li>ADJ-Fin: reaktivierte</li>
      <li>ADJ-Part: entwickelte, aufbewahrte, ausgerichtete, betreuten, engangierte, erbaute, gemauerte, renommierte, spezialisierte, unterkellerte</li>
      <li>ADV: SEHR, super, Allzeit, ECHT, Gottlob, Nahe, Rääts, Vorallem, aka, bissschen</li>
      <li>DET: die, der, das, ein, eine, diese, sein, seine, dies, dieser</li>
      <li>NOUN: Teil, Sohn, Mitglied, Stadt, Menschen, Ort, Gemeinde, Frau, Unternehmen, Präsident</li>
      <li>NUM: 10, Millionen, 20, 28, 35, 6, -9, 1, 1.681.469, 1000</li>
      <li>PRON: er, sie, es, die, ich, man, der, wir, das, was</li>
      <li>PROPN: SPD, US, Hans, Peter, Paul, Deutschland, Johann, Juli, Wilhelm, Karl</li>
      <li>SYM: %, :-), o, ×</li>
      <li>X: B., :-), S., tunga, u, usw, %, :), ???????, ???a?</li>
    </ul>
  </li>
</ul>


<ul>
  <li><a>Definite</a></li>
</ul>

<ul>
  <li>Def
    <ul>
      <li>DET: der, die, dem, den, das, des, the, 's, ha</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>DET: eine, ein, einer, einen, einem, eines, eins, ne</li>
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
      <li>ADJ: später, weitere, weiteren, weiter, besser, früher, stärker, höher, früheren, größere</li>
      <li>DET: mehrere, mehr, mehreren, mehrerer, mehre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pos
    <ul>
      <li>ADJ: ersten, bekannt, erste, gut, freundlich, neue, kurz, lang, zweiten, möglich</li>
      <li>ADJ-Fin: reaktivierte</li>
      <li>ADJ-Inf: erhalten, auszutauschenden, beginnenden, bewachsen, einzeln, externen, extremen, gesunden, kahlen, nassen</li>
      <li>ADJ-Part: beteiligt, verbreitet, aufgehoben, verheiratet, vertreten, verbunden, erhalten, geprägt, organisiert, vorgesehen</li>
      <li>ADV: total, viel</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sup
    <ul>
      <li>ADJ: nächsten, besten, größten, beste, größte, höchste, bester, wichtigsten, nächste, ältesten</li>
      <li>DET: meisten, keinster, meiste</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polarity</a></li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>PART: nicht, Nein, garnicht, nich</li>
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
      <li>PROPN-Fin: EVTA, Kambodschas, Verzeih, aG, flieg</li>
      <li>VERB-Fin: siehe, laßt, vgl., Brecht, Gebt, Kenne, Laß, Let, Melden, Schaut</li>
      <li>X-Fin: isl., s.</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>AUX-Fin: ist, wurde, war, sind, wird, wurden, kann, hat, werden, waren</li>
      <li>NOUN-Fin: mag, Jahrhundert, War, 3/8-Takte, Balken, Bin, Erbvogt, Familien, Flotte, Gemüt</li>
      <li>PROPN-Fin: ist, 1st, Gibt, Glaube, Leuchten, Sankt, Verden, ausnutzen, bru, colt</li>
      <li>VERB-Fin: wurde, gibt, hat, liegt, kam, hatte, gab, war, erhielt, befindet</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sub
    <ul>
      <li>AUX-Fin: sei, habe, würde, hätte, werde, hätten, seien, wäre, könnte, möchte</li>
      <li>NOUN-Fin: Komme, biene, ha, service</li>
      <li>PROPN-Fin: Kemble, Roden, fläke, régime</li>
      <li>VERB-Fin: sei, habe, gebe, hätten, gehe, hätte, komme, wolle, liege, möchte</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Tense</a></li>
</ul>

<ul>
  <li>Past
    <ul>
      <li>ADJ-Part: engangierte, kombiniert, verschleppten</li>
      <li>AUX-Fin: wurde, war, wurden, waren, hatte, konnte, sollte, musste, hatten, konnten</li>
      <li>NOUN-Fin: War, 3/8-Takte, Flotte, Kam, beginn, diente, erschienen, folgten, fusionierte, gehörte</li>
      <li>PROPN-Fin: Leuchten, corde, ergoss, estate, handelte, las, plb, schweiz, semisecco, spring</li>
      <li>VERB-Fin: wurde, kam, hatte, gab, war, erhielt, ging, begann, führte, nahm</li>
      <li>VERB-Part: abtransportiert</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Pres
    <ul>
      <li>AUX-Fin: ist, sind, wird, kann, hat, werden, haben, habe, können, sei</li>
      <li>NOUN-Fin: mag, Jahrhundert, Balken, Bin, Erbvogt, Familien, Gemüt, Komme, Liegt, Lohnt</li>
      <li>PROPN-Fin: ist, 1st, Gibt, Glaube, Kemble, Roden, Sankt, Verden, ausnutzen, bru</li>
      <li>VERB-Fin: gibt, hat, liegt, befindet, besteht, gehört, ist, steht, kommt, geht</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Voice</a></li>
</ul>

<ul>
  <li>Pass
    <ul>
      <li>AUX-Fin: wurde, wird, wurden, werden, werde, würden, würde</li>
      <li>AUX-Inf: werden</li>
      <li>AUX-Part: worden</li>
      <li>VERB-Fin: wurde, wurden, werden, wird, werde, würden</li>
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
      <li>DET: der, die, dem, den, das, des, eine, ein, einer, einen</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem
    <ul>
      <li>ADV: damit, dazu, davon, darauf, daher, dafür, dadurch, darüber, darin, dagegen</li>
      <li>DET: diese, dieser, diesem, dieses, dies, diesen, solche, jener, solchen, derselben</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Dem,Rel
    <ul>
      <li>PRON: die, der, das, dem, deren, dessen, denen, den, derer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Emp
    <ul>
      <li>DET: selben, selber</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ind
    <ul>
      <li>ADV: etwas, mehr, genug, viel, wenig, bisschen, anderem, bischen, bißchen, solch</li>
      <li>DET: anderen, viele, andere, einige, viel, mehrere, anderem, vielen, meisten, mehr</li>
      <li>PRON: man, etwas, jemand, sowas, irgendetwas, irgendwas, irgendwem, jemanden</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int
    <ul>
      <li>ADV: wo, wobei, wie, warum, wodurch, wovon, weshalb, woraufhin, wonach, wozu</li>
      <li>DET: wieviele</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Int,Rel
    <ul>
      <li>DET: welche, welches, welcher, welchem, welchen, welch</li>
      <li>PRON: was, wer, Wen, wem</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Neg
    <ul>
      <li>ADV: keineswegs</li>
      <li>DET: keine, kein, keinen, keinem, keiner, keinerlei, keines, keinster, No</li>
      <li>PRON: nichts, niemand, nix, niemanden, niemandes</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Prs
    <ul>
      <li>DET: seine, seiner, sein, ihre, seinen, seinem, ihren, ihrer, ihr, ihrem</li>
      <li>PRON: er, sich, sie, es, ich, wir, ihm, ihn, uns, mir</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Rcp
    <ul>
      <li>PRON: einander</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Tot
    <ul>
      <li>DET: alle, beiden, allem, alles, allen, aller, beide, jede, jeden, jeder</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>NumType</a></li>
</ul>

<ul>
  <li>Card
    <ul>
      <li>ADJ: 3, 60-er, siebenhundert, zehntausend</li>
      <li>ADV: 2x</li>
      <li>DET: eine, ein, einer, einen, einem, eines, beiden, beide, beider, beides</li>
      <li>NOUN: Null, drei, zwei, 1/2h, 1000m, 1392, 1542, 1571, 1827, 1838</li>
      <li>NUM: zwei, drei, vier, 2007, fünf, 2006, 2009, 2010, sechs, 2008</li>
      <li>PROPN: II, 1, 2, 3, III, 4, Sieben, 2000, 6, 90</li>
      <li>X: 2n, 60m, 7Fe0, 9S8, S8</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Ord
    <ul>
      <li>ADJ: ersten, erste, zweiten, zweite, dritten, erster, dritte, erstes, 5., fünften</li>
      <li>NUM: 20</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Poss</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>DET: seine, seiner, sein, ihre, seinen, seinem, ihren, ihrer, ihr, ihrem</li>
      <li>PRON: my, meiner</li>
      <li>PROPN: SC, SYNODUS</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Reflex</a></li>
</ul>

<ul>
  <li>Yes
    <ul>
      <li>PRON: sich, mich, uns, mir, dich</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Person</a></li>
</ul>

<ul>
  <li>1
    <ul>
      <li>AUX-Fin: habe, bin, haben, kann, sind, war, werden, werde, hatte, waren</li>
      <li>DET: meine, unsere, mein, meiner, meinem, unser, meinen, unserer, unserem, unseren</li>
      <li>PRON: ich, wir, uns, mir, mich, my, 's, We</li>
      <li>VERB-Fin: war, bin, hatte, haben, kommen, finde, waren, gehe, fühle, habe</li>
    </ul>
  </li>
</ul>

<ul>
  <li>2
    <ul>
      <li>AUX-Fin: bist, haben, habt, hast, kannst, müsst, seid, sollst, werdet, wirst</li>
      <li>DET: Ihre, Ihrem, deinen, dein, euren, eurer, Ihrer, eure</li>
      <li>PRON: Sie, du, ihr, euch, Ihnen, You, Dir, dich, Your</li>
      <li>VERB-Fin: Siehe, gebt, gehst, kommst, laßt, machst, weißt, Brecht, DENKST, Hast</li>
    </ul>
  </li>
</ul>

<ul>
  <li>3
    <ul>
      <li>AUX-Fin: ist, wurde, war, sind, wird, wurden, hat, werden, kann, waren</li>
      <li>DET: seine, seiner, sein, ihre, seinen, seinem, ihren, ihrer, ihr, seines</li>
      <li>PRON: er, sich, es, sie, ihm, ihn, ihnen, ihr, it, 's</li>
      <li>VERB-Fin: wurde, gibt, hat, liegt, kam, hatte, gab, befindet, erhielt, war</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Polite</a></li>
</ul>

<ul>
  <li>Form
    <ul>
      <li>AUX-Fin: haben</li>
      <li>DET: Ihre, Ihrem, Ihrer</li>
      <li>PRON: Sie, Ihnen</li>
      <li>VERB-Fin: Melden, beschreiben, sehen</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Gender[psor]</a></li>
</ul>

<ul>
  <li>Fem
    <ul>
      <li>DET: Ihr, Ihre</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Masc,Neut
    <ul>
      <li>DET: seine, seiner, sein, seinen, seinem, seines</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>Number[psor]</a></li>
</ul>

<ul>
  <li>Plur
    <ul>
      <li>DET: unsere, unser, unserer, unserem, unseren, unseres, Ihr, ihre, euren, eurer</li>
    </ul>
  </li>
</ul>

<ul>
  <li>Sing
    <ul>
      <li>DET: seine, seiner, sein, seinen, seinem, seines, meine, mein, meiner, Ihr</li>
    </ul>
  </li>
</ul>

<h3>Other Features</h3>


<ul>
  <li><a>Abbr</a>
    <ul>
      <li>Yes
        <ul>
          <li>ADJ: sog, lat</li>
          <li>ADP: bzgl, lt., v., z</li>
          <li>ADV: abzgl, ua, usw</li>
          <li>CCONJ: bzw, od, u</li>
          <li>NOUN: s, l, ET, N, Sp, U, V, dBm, km, mA</li>
          <li>NUM: T</li>
          <li>PROPN: GT, P, TD, Chr, FK, FOSs, PD</li>
          <li>VERB-Fin: vergl</li>
          <li>VERB-Part: geb</li>
          <li>X: og</li>
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
          <li>ADJ: top, New, Strange, Associate, Catholic, Civil, Communist, Deep, Dry, Independent</li>
          <li>ADP: de, in, of, a, Against, För, Into, Pro, des, om</li>
          <li>ADV: When, How, Please, always, ca, socially, up, wahnsinning, yonder</li>
          <li>AUX: is, 're, 's, Are</li>
          <li>CCONJ: and, et, an, bzw, e, i, or, ou, u</li>
          <li>DET: the, a, alla, dessa, ha, No, Quelques, Seine</li>
          <li>NOUN: Bass, Top, facto, Arrondissement, Love, name, Armée, Atun, Banking, Chief</li>
          <li>PART: 's, inte, not</li>
          <li>PRON: it, You, my, All, 's, She, We, Your</li>
          <li>PROPN: of, de, la, University, d', for, di, a, do, du</li>
          <li>SCONJ: att</li>
          <li>SYM: &</li>
          <li>VERB: Had, Logon, Need, anschloss, batian, batt, loved, meln, sang, shines</li>
          <li>VERB-Fin: Let</li>
          <li>VERB-Inf: Make</li>
          <li>X: 's, i, to, be, ???, ????, ?????, ???????, All, Bottom</li>
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
          <li>ADJ: entstanden, zurfieden</li>
          <li>ADJ-Part: entstanden</li>
          <li>ADP: fuer, üer</li>
          <li>ADV: er, darzu</li>
          <li>AUX-Fin: wer, wir</li>
          <li>CCONJ: sonden, uns</li>
          <li>DET: Ihr, Ihre, Ihrem, diser, eigige</li>
          <li>NOUN: Schimpereien, ambiente, essen, freundin, hotel, preis, sahne, sterne</li>
          <li>PRON: Ihr, des</li>
          <li>SCONJ: das, den</li>
          <li>VERB-Fin: läd, viel</li>
          <li>VERB-Inf: Empfelen, Fischen, Frage, Probefahren, Sagen, Schwimmen</li>
          <li>VERB-Part: Repariert</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>

<h2>Syntax</h2>

<h3>Auxiliary Verbs and Copula</h3>

<ul>
<li>This corpus uses 2 lemmas as copulas (<a>cop</a>). Examples: sein, be.</li>
</ul>

<ul>
<li>This corpus uses 10 lemmas as auxiliaries (<a>aux</a>). Examples: haben, können, sein, müssen, sollen, werden, wollen, dürfen, mögen, be.</li>
<li>This corpus uses 3 lemmas as passive auxiliaries (<a>aux:pass</a>). Examples: werden, sein, müssen.</li>
</ul>

<h3>Core Arguments, Oblique Arguments and Adjuncts</h3>

Here we consider only relations between verbs (parent) and nouns or pronouns (child).
<ul>
  <li><a>nsubj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (4)</li>
      <li>VERB--NOUN-Nom (16)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Dat (1)</li>
      <li>VERB--PRON-Nom (26)</li>
      <li>VERB-Fin--NOUN (40)</li>
      <li>VERB-Fin--NOUN-Acc (373)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(bis)-ADP(zu) (2)</li>
      <li>VERB-Fin--NOUN-Dat (20)</li>
      <li>VERB-Fin--NOUN-Gen (21)</li>
      <li>VERB-Fin--NOUN-Nom (4264)</li>
      <li>VERB-Fin--PRON (10)</li>
      <li>VERB-Fin--PRON-Acc (45)</li>
      <li>VERB-Fin--PRON-Dat (3)</li>
      <li>VERB-Fin--PRON-Gen (2)</li>
      <li>VERB-Fin--PRON-Nom (3901)</li>
      <li>VERB-Inf--NOUN (3)</li>
      <li>VERB-Inf--NOUN-Acc (39)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(über) (1)</li>
      <li>VERB-Inf--NOUN-Dat (2)</li>
      <li>VERB-Inf--NOUN-Gen (3)</li>
      <li>VERB-Inf--NOUN-Nom (416)</li>
      <li>VERB-Inf--PRON (4)</li>
      <li>VERB-Inf--PRON-Acc (12)</li>
      <li>VERB-Inf--PRON-Dat (1)</li>
      <li>VERB-Inf--PRON-Nom (681)</li>
      <li>VERB-Part--NOUN (2)</li>
      <li>VERB-Part--NOUN-Acc (21)</li>
      <li>VERB-Part--NOUN-Dat (1)</li>
      <li>VERB-Part--NOUN-Nom (410)</li>
      <li>VERB-Part--NOUN-Nom-ADP(bei) (1)</li>
      <li>VERB-Part--PRON (4)</li>
      <li>VERB-Part--PRON-Acc (8)</li>
      <li>VERB-Part--PRON-Gen (1)</li>
      <li>VERB-Part--PRON-Nom (514)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>obj</a>
    <ul>
      <li>VERB--NOUN (1)</li>
      <li>VERB--NOUN-Acc (17)</li>
      <li>VERB--NOUN-Dat (1)</li>
      <li>VERB--NOUN-Nom (1)</li>
      <li>VERB--PRON (1)</li>
      <li>VERB--PRON-Acc (10)</li>
      <li>VERB--PRON-Dat (3)</li>
      <li>VERB-Fin--NOUN (39)</li>
      <li>VERB-Fin--NOUN-Acc (3476)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(von) (1)</li>
      <li>VERB-Fin--NOUN-Acc-ADP(über) (2)</li>
      <li>VERB-Fin--NOUN-Dat (54)</li>
      <li>VERB-Fin--NOUN-Dat-ADP(über) (1)</li>
      <li>VERB-Fin--NOUN-Gen (17)</li>
      <li>VERB-Fin--NOUN-Nom (464)</li>
      <li>VERB-Fin--PRON (31)</li>
      <li>VERB-Fin--PRON-Acc (1169)</li>
      <li>VERB-Fin--PRON-Dat (18)</li>
      <li>VERB-Fin--PRON-Nom (42)</li>
      <li>VERB-Inf--NOUN (8)</li>
      <li>VERB-Inf--NOUN-Acc (1091)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(in) (1)</li>
      <li>VERB-Inf--NOUN-Acc-ADP(zwischen) (1)</li>
      <li>VERB-Inf--NOUN-Dat (18)</li>
      <li>VERB-Inf--NOUN-Gen (4)</li>
      <li>VERB-Inf--NOUN-Nom (91)</li>
      <li>VERB-Inf--PRON (23)</li>
      <li>VERB-Inf--PRON-Acc (286)</li>
      <li>VERB-Inf--PRON-Dat (9)</li>
      <li>VERB-Inf--PRON-Nom (10)</li>
      <li>VERB-Part--NOUN (3)</li>
      <li>VERB-Part--NOUN-Acc (434)</li>
      <li>VERB-Part--NOUN-Acc-ADP(für) (1)</li>
      <li>VERB-Part--NOUN-Dat (7)</li>
      <li>VERB-Part--NOUN-Nom (48)</li>
      <li>VERB-Part--PRON (8)</li>
      <li>VERB-Part--PRON-Acc (202)</li>
      <li>VERB-Part--PRON-Dat (5)</li>
      <li>VERB-Part--PRON-Nom (6)</li>
    </ul>
  </li>
</ul>

<ul>
  <li><a>iobj</a>
    <ul>
    </ul>
  </li>
</ul>

<h3>Reflexive Verbs</h3>

<ul>
  <li>This corpus contains 17 lemmas that occur at least once with an <a>expl:pv</a> child. Examples: befinden sich, erholen sich, weigern sich, verlieben sich, begeben sich, nähern sich, bedanken mich, bedanken uns, abwenden sich, aneignen sich, anfreunden uns, anfühlen sich, begeben mich, bewähren sich, erholen mich, fühlen sich, äußern sich</li>
</ul>


<h3>Verbs with Reflexive Core Objects</h3>

<ul>
  <li>This corpus contains 412 lemmas that occur at least once with a reflexive core object (<a>obj</a> or <a>iobj</a>). Examples: handeln sich, finden sich, lassen sich, setzen sich, beschäftigen sich, schließen sich, beteiligen sich, erstrecken sich, fühlen mich, stellen sich, ergeben sich, fühlen sich, zeigen sich, bilden sich, entwickeln sich, kümmern sich, äußern sich, befassen sich, betätigen sich, engagieren sich, entscheiden sich, halten sich, ändern sich, beziehen sich, erheben sich, orientieren sich, treffen sich, unterscheiden sich, wenden sich, widmen sich, beschränken sich, etablieren sich, lohnen sich, sprechen sich, anschließen sich, bemühen sich, durchsetzen sich, leiten sich, lösen sich, richten sich, zeichnen sich, zurückziehen sich, bekennen sich, belaufen sich, bewegen sich, einsetzen sich, gründen sich, interessieren sich, konzentrieren sich, qualifizieren sich</li>
    <ul>
      <li>Out of those, 19 lemmas occurred more than once, but never without a reflexive dependent. Examples: erstrecken, kümmern, befassen, betätigen, freuen, belaufen, distanzieren, einigen, auszahlen, erfreuen, niederlassen, zusammenschließen, auseinandersetzen, breiten, scheuen, unterziehen, verbünden, verfestigen, verjüngen</li>
    </ul>
</ul>

<h3>Relations Overview</h3>

<ul>
<li>This corpus uses 12 relation subtypes: <a>acl:relcl</a>, <a>aux:pass</a>, <a>compound:prt</a>, <a>csubj:pass</a>, <a>det:poss</a>, <a>expl:pv</a>, <a>nmod:poss</a>, <a>nsubj:outer</a>, <a>nsubj:pass</a>, <a>obl:agent</a>, <a>obl:arg</a>, <a>obl:tmod</a></li>
<li>The following 4 relation types are not used in this corpus at all: <a>iobj</a>, <a>dislocated</a>, <a>clf</a>, <a>list</a></li>
</ul>
