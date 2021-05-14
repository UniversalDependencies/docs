---
layout: postag
title: 'PRON'
shortdef: 'pronoun'
udver: '2'
---

Traditional grammars of Slavic languages do not distinguish pronouns from pro-adjectives (determiners, [sla-pos/DET]()),
hence it is important to define a consistent borderline here. (Some authors, e.g. Sussex and Cubberley (2006) do use
the term _determiner_ in Slavic languages but they rely on common understanding without precisely delimiting them.)

In order to provide the broader picture, we describe both pronouns and determiners here;
the page [sla-pos/DET]() is empty.

## Personal pronouns

Non-possessive personal pronouns are tagged `PRON PronType=Prs` (see also the [sla-feat/PronType]() feature).
Third-person pronouns are formed as inflections on one stem and should have one lemma, the masculine singular nominative form.
(In fact there are two stems: one for the nominative and the other for the remaining cases. But the point is that the stems
do not change with gender or number.)
The first and second person pronouns are formed from different stems in singular and plural. However, to be consistent,
the singular nominative form should be used as lemma for both (all) numbers in the given person. Thus in [cs], the lemma
of _my_ is _já_ and the lemma of _vy_ is _ty._
Reflexive pronouns have their own lemma (one lemma for both clitic and non-clitic forms).
Since they lack the nominative form, the lemma should be the clitic accusative form, which is arguably the most frequent one.

List of nominative forms of personal pronouns (accusative for reflexives) in various languages:

* [cs] _já, ty, on, ona, ono, my, vy, oni, ony, ona, se_
* [sk] _ja, ty, on, ona, ono, my, vy, oni, ony, sa_
* [hsb] _ja, ty, wón, wona, wono/wone, mój, wój, wonaj, wonej, my, wy, woni, wone, so_
* [pl] _ja, ty, on, ona, ono, my, wy, oni, one, się_
* [ru] _я, ты, он, она, оно, мы, вы, они, ся_
* [sl] _jaz, ti, on, ona, ono, midva, vidva, onadva, mi, vi, oni, one, ona, se_
* [hr] _ja, ti, on, ona, ono, mi, vi, oni, one, ona, se_
* [bg] _аз, ти, той, тя, то, ние, вие, те, се_
* [cu] _азъ, тꙑ, мꙑ, вꙑ, и, сѧ_

## Possessives

The words that are traditionally called possessive pronouns are in fact possessive determiners and should be tagged
`DET Poss=Yes | PronType=Prs`. First and second person possessives, and the reflexive possessive, function like adjectives.
They precede the modified (possessed) noun and concord with it in gender, number and case.
In the South Slavic languages the same can be said also about third person possessives.
In the north, third person possessives evolved from (or are still identical to) the genitive form of the personal pronoun,
and they do not inflect.
However, they are traditionally distinguished from the personal pronoun, they are placed before the possessed noun
(unlike nominal genitive modifiers), and for consistency we tag them `DET` as well.
Similar to adjectives, one lemma covers all _inflections_ for gender, number and case, governed by the modified noun.
Inherent gender, number and person of the possessor do not play a role, i.e. _můj_ “my” and _náš_ “our” are two distinct lemmas.

* [cs] _můj, tvůj, jeho, její, náš, váš, jejich, svůj_
* [sk] _môj, tvoj, jeho, jej, náš, váš, ich, svoj_
* [hsb] _mój, twój, jeho, jeje, naš, waš, jich, swój_
* [pl] _mój, twój, jego, jej, nasz, wasz, ich, swój_
* [ru] _мой, твой, его, её, наш, ваш, их, свой_
* [sl] _moj, tvoj, njegov, njen, najin, vajin, njun, naš, vaš, njihov, svoj_
* [hr] _moj, tvoj, njegov, njezin/njen, naš, vaš, njihov, svoj_
* [bg] _мой, твой, негов, неин, наш, ваш, техен, свой_
* [cu] _мои, твои, его, еѩ, ею, нашь, вашь, ихъ, свои_

## Demonstratives

All demonstrative “pronouns” inflect for gender and can modify nouns, which places them in the `DET` category.
If the noun phrase is missing, it can be explained by ellipsis, at least for the masculine and feminine forms.
Certain neuter singular forms ([cs] _to, toto, tohle, tamto_)
are also frequently used to refer to unspecified or general entities, that is, they are used in these situations more
like pronouns than like determiners.

There are two possible solutions:

1. Tag all demonstratives `DET PronType=Dem`. The lemma is always masculine singular nominative.
2. As 1., with the exception that selected neuter singular forms are ambiguous and may also appear as `PRON PronType=Dem`.
   Then the lemma is neuter singular nominative. Disambiguation has to be done by context: if it pre-modifies
   a noun phrase and concords with it in gender, number and case, it is determiner; otherwise it is pronoun.

* [cs] _ten, tento, tenhle, tamten, onen, takový, týž, tentýž_
* [sk] _ten, tento, tamten, onen, taký, takýto_
* [hsb] _tón, tutón, tónle, tamny, wony, tajki_
* [pl] _ten, tamten, taki_
* [ru] _этот, тот, такой_
* [sl] _tisti, ta, oni, takšen_
* [hr] _taj, ovaj, onaj, takav_
* [bg] _този, онзи, такъв_
* [cu] _тъ, онъ, такъ, таковъ_

## Pronouns derived from “who, what”

These are always `PRON` and never `DET`. They fall into various pronominal types:
interrogatives, relatives (“who, what”), indefinites (“somebody, something, anybody, anything”) and negatives (“nobody, nothing”).
They inflect for case but not for gender and number;
“who” functions as singular masculine,
“what” as singular neuter.

Note: Bulgarian is exception. Instead of the _kt/čt_ roots found in the other languages, Bulgarian uses _кой / koj,_
which inflects for gender and number like adjectives, and while it predominantly occurs in pronoun position, it can be used as
determiner too: _Кой текст четете? / Koj tekst četete?_ “What text are you reading?” The substantive root survives
in Bulgarian _нещо / nešto_ “something” and _нищо / ništo_ “nothing”; even relative _що / što_ “what” exists but it
is very rare.

* [cs] _kdo, co, což, někdo, něco, kdokoli, cokoli, nikdo, nic_
* [sk] _kto, čo, niekto, niečo, nikto, nič_
* [hsb] _štó, što, štóž, štož, kiž, něchtó, něšto, něchtóžkuli, něštožkuli, nichtó, ničo_
* [pl] _kto, co, ktoś, coś, nikt, nic_
* [ru] _кто, что, кто-нибудь, что-нибудь, никто, ничто_
* [sl] _kdo, kaj, nekdo, nekaj, nihče, nič_
* [hr] _tko, što, neki, nešto, nitko, ništa_
* [bg] _що, нещо, нищо_
* [cu] _къто, чьто, нѣкъто, нѣчьто, никътоже, ничьтоже_

## Determiners derived from “which, whose”, total and other determiners

In some Slavic languages there are two interrogative pronouns/determiners corresponding to [en] “which”:
one that represents a selection, “which one” ([cs] _který_);
and one that queries a quality, “what kind of” ([cs] _jaký_).
Both can be used as relative pronouns/determiners, too.
Their inflection is fully adjectival, therefore they should be tagged `DET`,
despite the fact that when they are used as relative determiners,
the modified noun is not there and its absence cannot be explained by ellipsis
(but it is the noun modified by the entire relative clause).

Bulgarian _кой / koj_ etymologically corresponds to the “what kind of” determiner in other languages.
As noted above, it can be used as a determiner but it is much more likely to _replace_ a noun phrase,
i.e. to be used as a pronoun. It seems to be a good candidate to allow both tags and disambiguate by
context.

In addition, there is a possessive interrogative determiner corresponding to [en] “whose” ([cs] _čí_).

There are also derived indefinite and negative determiners, using the same affixes as with “who, what”;
only the negative determiner “no” corresponding to “which” contains a different stem ([cs] _žádný_).

We also include the total determiner “every” ([cs] _každý_) here, although it is quite frequently used
without the modified noun, with the meaning “everybody, everyone”; the decisive factor here is its
undoubtedly adjectival inflection.
In contrast, we do not include the total pronoun “all / everything” ([cs] _všichni / všechno_),
see below.

* [cs] _který, jaký, čí, některý, nějaký, něčí, kterýkoli, jakýkoli, každý, nijaký, ničí, žádný_
* [sk] _ktorý, aký, čí, niektorý, nejaký, niečí, ktorýkoľvek, akýkoľvek, každý, nijaký, ničí, žiaden/žiadny_
* [hsb] _kotry, kajki, čeji, kotryž, kajkiž, čejiž, někotry, někajki, něčeji, někotryžkuli, někajkižkuli, něčejižkuli, kóždy, ničeji, žadyn_
* [pl] _który, jaki, któryś, jakiś, każdy, żaden_
* [ru] _который, какой, чей, некоторый, который-нибудь, какой-нибудь, чей-нибудь, каждый, никакой, ничей_
* [sl] _kateri, kak, čigav, kakršen, nekateri, nek, nekakšen, nikakršen, noben_
* [hr] _koji, kakav, čiji, nekakav, nikakav_
* [bg] _кой, какъв, чий, който, какъвто, чийто, някой, някакъв, нечий, никой, никакъв_
* [cu] _которꙑи, кꙑи, каковъ, чии, нѣкꙑи, никоторꙑиже, никꙑиже_

Note: In [sl], the pronoun _kar_ corresponds to [cs] _který_. Its inflection is not adjectival
(the treebank contains only four forms: _kar_ (`Nom`, `Acc`), _česar_ (`Gen`), _čemer_ (`Loc`) and _čimer_ (`Ins`)),
hence it is pronoun and not determiner.

## All, everything

The total pronouns with the root _vs/vš/sv_ are another problematic group, with some parallels to the demonstratives.

In Czech, _všechen_ can be used adjectively and has forms for different genders and numbers but usually only a subset of the forms is
used, and quite often they are used without a modified noun:

* _všichni_ (masculine animate plural), meaning “all, everybody,” may include non-masculine referents
* _všechno_ (neuter singular), meaning “everything”

The plural forms can be used as determiners, including forms of other genders, if it is known that the group of referents
has only that gender: _všichni lidé_ “all people”, _všechny domy_ “all houses” (masculine inanimate), _všechny ženy_
“all women” (feminine), _všechna ujednání_ “all provisions” (neuter). Much more rarely, even singular forms can be used,
in the sense “all / entire”.

In UD Czech, 717 instances may be determiners (the heuristic we use: they must agree with their parent in gender and case,
and they must not be labeled as subjects—which would mean that the parent is a non-verbal predicate).
In addition there are 113 instances of two-pronoun expressions like _to všechno_ “all this” and _kdo/co všechno_ “who/what all”,
where one may argue for a determiner analysis as well. This contrasts with the total number of occurrences of lemma _všechen,_
2520.
If we limit the search to singular neuters, and exclude the two-pronoun expressions, there are only 8 instances where
_všechno_ is a determiner, mostly with mass nouns (_všechno světlo_ “all light”);
this contrasts with the total number of singual neuter occurrences, 600.

The evidence here is similar to demonstratives, which in general behave like adjectives, but some neuter singular forms are used
to represent general or unspecified entities, hence they are closer to pronouns. The solution should be same for demonstratives and
for the equivalents of _all,_ chosing one of the following options:

1. Tag all occurrences `DET PronType=Tot`. The lemma is always masculine singular nominative.
2. As 1., with the exception that selected neuter singular forms are ambiguous and may also appear as `PRON PronType=Tot`.
   Then the lemma is neuter singular nominative. Disambiguation has to be done by context: if it pre-modifies
   a noun phrase and concords with it in gender, number and case, it is determiner; otherwise it is pronoun.

It remains to be determined how the cognate words in the other Slavic languages behave.

* [cs] _všechen, všecek, všichni, všechno, všecko, vše_
* [sk] lemma _všetok,_ most frequent forms _všetko, všetci,_ other forms _všetkých, všetkým, všetky, všetkými, všetkého, všetkému, všetku_
* [hsb] _wšě, wšěch, wšěm, wšykne?, wšeho, wšemu, wšitke, wšitkim, wšitkich_ (DET; only _wšitkim_ was used without a modified noun), _wšitko_ (PRON)
* [pl] lemma _wszystko, wszyscy_ (PRON); lemma _wszystek_ (DET), forms _wszystkie, wszystkich, wszyscy, wsze_ (but the pronoun-determiner distinction is probably caused by the conversion procedure)
* [ru] _все, всё_
* [sl] _ves, vsa, vse, vsi_
* [hr] _sve, svatko, svaki, svaka, svako_
* [bg] _всеки, всичко, всички_
* [cu] _вьсь, весь, вьсъ, вьсѣ, вьсе, вьси, вьсѧ, вьсꙗкъ_

## Pronominal quantifiers

Terminological note: For the purpose of this chapter, the term _quantifier_ does not include words with adjectival declension,
even if their meaning has to do with quantity ([cs] _každý, mnohý, nejeden, žádný_). We now focus on words that resemble high-value
numerals (5 and above) or nouns like _group, batch_ and combine with a quantified noun in the genitive.

All pronominal quantifiers are tagged `DET`.
They are morphologically and syntactically different from adjectives and other determiners.
They are much closer to cardinal numerals but they cannot get the `NUM` tag, which is reserved for definite quantities.

Note that the meaning of [pl] _tylko_ has shifted towards “only”, which makes it an adverb rather than a demonstrative quantifier.
In [hr], _toliko_ is used sometimes as quantifier and sometimes as adverb.
A similar shift may have happened in some of the other languages, too.
The interrogative _kolik_ may be used as relative, except in [hsb] and [bg].
Occasionally it may be also used as indefinite ([pl] _kilka_).

* [cs] _kolik, tolik, několik_
* [sk] _koľko, toľko, niekoľko_
* [hsb] _kelko, kelkož, telko_
* [pl] _kilka_
* [ru] _сколько, столько, несколько_
* [sl] _koliko_
* [hr] _koliko, toliko, nekoliko_
* [bg] _колко, колкото_
* [cu] _колико_

## Indefinite quantifiers and adverbs of degree

There is a relatively small group of words that lie on the borderland between [adverbs](sla-pos/ADV), [numerals](sla-pos/NUM)
and pronouns/determiners: [cs] _mnoho_ “many”, _hodně_ “much”, _málo_ “little, few”. They may denote the degree of
an adjective or verb, and they can be compared: _více_ “more”, _nejvíce_ “most”, _méně_ “less, fewer”, _nejméně_ “least, fewest”.
These are typical properties of adverbs.
However, they can also denote an indefinite quantity when they take a genitive nominal argument
(plural for countable nouns, or singular in the partitive sense).
This follows the typical behavior of numerals. The whole phrase (numeral + noun) works like a noun phrase, can become
argument of a verb and some of the numerals even inflect for case: _s&nbsp;mnoha body_ “with many points” (`Case=Ins`).
When it acts as subject, it is regarded as neuter singular for the purpose of subject-verb agreement.

[cs]

~~~ sdparse
Trenér sázel mnohem více na herní stránku než na kondici . \n Coach bet much more on game aspect than on physical-condition .
advmod(více, mnohem)
advmod(sázel, více)
obj(sázel, stránku)
nmod(více, kondici)
~~~

As adverb, _více_ is the comparative form of lemma _hodně_ (but it could as well be assigned the lemma _mnoho;_
the comparative form is irregular, without direct morphological relation to the basic positive form.
As indefinite numeral, it is its own lemma (but there are only two occurrences in UD Czech).

~~~ sdparse
Bude vybráno více zájemců . \n Will-be selected more applicants .
nsubj:pass(vybráno, zájemců)
det:numgov(zájemců, více)
~~~

The two syntactic functions are not compatible.
The words in this group should thus receive two different tags, disambiguated by context.
When they denote quantity, their tag will be `DET NumType=Card | PronType=Ind`.
When they denote degree, their tag will be `ADV`.

* [cs] _mnoho, moc, nemálo, dost, příliš, hodně, více, nejvíce, málo, nemnoho, méně, nejméně_
* [sk] _veľa, viac, najviac, málo, menej, najmenej_
* [hsb] _mnoho, wjele, wjac, wjace, najwjace, najbóle, dosć, mało, mjenje, najmjenje_
* [pl] _dużo, wiele, więcej, najwięcej, mało, mniej, najmniej_
* [ru] _много, немало, больше, более, наиболее, достаточно, мало, немного, меньше, менее, наименее_
* [sl] _mnogo, veliko, več, največ, malo, manj, najmanj, zelo, bolj, najbolj, dosti_
* [hr] _mnogo, više, najviše, malo, manje, najmanje, vrlo, dosta_
* [bg] _много, повече, най-вече_

[sl]

~~~ sdparse
Kolesca morajo biti mnogo večja od tistih \n Wheels must be much larger from those
advmod(večja, mnogo)
nmod(večja, tistih)
case(tistih, od)
~~~

~~~ sdparse
skozi mnogo let \n over many years
case(let, skozi)
det(let, mnogo)
~~~

~~~ sdparse
Domovanja so raztresena na več kilometrih \n Dwellings are scattered on more kilometers
det(kilometrih, več)
case(kilometrih, na)
nmod(raztresena, kilometrih)
~~~

Partitive usage:

~~~ sdparse
Imeli več časa za priprave \n They-had more time for preparations
det(časa, več)
obj(Imeli, časa)
~~~


## References

* Roland Sussex, Paul Cubberley. 2006. _The Slavic Languages._ Cambridge: Cambridge University Press.
<!-- Interlanguage links updated Pá kvě 14 11:08:23 CEST 2021 -->
