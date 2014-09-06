---
layout: base
title: 'Inflectional Features'
shortdef: 'this page will be split to individual features'
---

## {{ page.title }}: {{ page.shortdef }}

<H1 CLASS="western">Universal Dependencies: Features of Tokens<BR>Part
2: Inflectional Features</H1>
<H2 CLASS="western"><SPAN LANG="cs-CZ">G</SPAN>ender</H2>
<P>Gender is usually a lexical feature of nouns and inflectional
feature of other parts of speech (adjectives, verbs) that mark
agreement with nouns. In English gender affects only the choice of
the personal pronoun <I>(he / she / it)</I> and the feature is
usually not encoded in English tagsets.</P>
<P>African languages have analogous feature of noun classes: there
might be separate grammatical categories for flat objects, long thin
objects etc. African noun classes are not covered in the current
proposal because none of the tagsets that are currently covered by
Interset is for a language that has noun classes. They might be added
in future.</P>
<H3 CLASS="western"><SPAN LANG="cs-CZ">M</SPAN>asc: masculine gender</H3>
<P>Nouns denoting male persons are masculine. Other nouns may be also
grammatically masculine, without any relation to sex. Example: [cs]
<SPAN LANG="cs-CZ"><I>hrad </I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">(castle)</SPAN></SPAN></P>
<H2 CLASS="western"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">F</SPAN></SPAN><SPAN STYLE="font-style: normal">em:
feminine gender</SPAN></H2>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Nouns denoting
female persons are feminine. Other nouns may be also grammatically
feminine, without any relation to sex. Example: [de] </SPAN></SPAN><SPAN LANG="en-US"><I>Burg
</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(castle)</SPAN></SPAN></P>
<H3 CLASS="western"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">N</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">eut:
neuter gender</SPAN></SPAN></H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">S</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ome
languages have only the masculine/feminine distinction while others
also have this third gender for nouns that are neither masculine nor
feminine (gram</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">m</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">atically).</SPAN></SPAN></P>
<H3 CLASS="western"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">C</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">om:
common gender</SPAN></SPAN></H3>
<P STYLE="font-style: normal">Some languages do not distinguish
masculine/feminine most of the time but they do distinguish neuter
vs. non-neuter (Swedish neutrum / utrum). The non-neuter is called
common gender.</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Note that it
could also be expressed as a combined value </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">G</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ender
= &ldquo;</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">F</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">em,</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">M</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">asc&rdquo;
and it is thus questionable whether we want to keep it also as a
separate value. In Interset I decided to keep it because I </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">try
to limit using combined feature values to exceptional, undecided
cases, not to something that occurs systematically in the grammar.
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The
natural downside is that we have to decide for every new tagset
mapping whether to use &ldquo;</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">C</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">om&rdquo;
or not.</SPAN></SPAN></P>
<H2 CLASS="western">Animateness</H2>
<P><SPAN STYLE="background: #ffff00">DZ: We have several features
called X-ness: Animateness, Definiteness, Negativeness, Politeness.
Should we shorten these by cutting off the <I>-ness</I><SPAN STYLE="font-style: normal">
part? Or even </SPAN><I>-(ate|ite|ive)ness</I><SPAN STYLE="font-style: normal">?</SPAN></SPAN></P>
<P>Similarly to Gender (and to the African noun classes), animateness
is usually a lexical feature of nouns and inflectional feature of
other parts of speech that mark agreement with nouns. It is
independent of gender, therefore it is encoded separately in some
tagsets (e.g. all the Multext-East tagsets). On the other hand, in
Czech the (almost) only grammatical implications occur within the
masculine gender, which is why the PDT tagset does not have
animateness as separate feature and instead defines four genders:
masculine animate, masculine inanimate, feminine and neuter. I
suggest following the two-feature approach used in Multext-East (many
languages) because it seems to be safer.</P>
<P>Polish is special in that it also distinguishes grammatically
human vs. non-human animates. It can be demonstrated by inflection of
the example word <SPAN LANG="cs-CZ"><I>który</I></SPAN><SPAN LANG="en-US">
(which) (boldface forms differ from the middle row):</SPAN></P>
<P><BR><BR>
</P>
<TABLE WIDTH=643 CELLPADDING=2 CELLSPACING=0>
	<COL WIDTH=49>
	<COL WIDTH=44>
	<COL WIDTH=45>
	<COL WIDTH=49>
	<COL WIDTH=45>
	<COL WIDTH=43>
	<COL WIDTH=43>
	<COL WIDTH=43>
	<COL WIDTH=45>
	<COL WIDTH=43>
	<COL WIDTH=49>
	<COL WIDTH=47>
	<COL WIDTH=45>
	<TR>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>gender </FONT>
			</P>
		</TD>
		<TD WIDTH=44 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>sg-nom </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>sg-gen </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>sg-dat </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>sg-acc </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>sg-ins </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>sg-loc </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>pl-nom </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>pl-gen </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>pl-dat </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>pl-acc </FONT>
			</P>
		</TD>
		<TD WIDTH=47 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>pl-ins </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>pl-loc </FONT>
			</P>
		</TD>
	</TR>
	<TR>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>animate human </FONT>
			</P>
		</TD>
		<TD WIDTH=44 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>który </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którego </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>któremu </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którego </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><STRONG><FONT SIZE=2>którzy</FONT></STRONG><FONT SIZE=2> </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>których </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><STRONG><FONT SIZE=2>których</FONT></STRONG><FONT SIZE=2> </FONT>
			</P>
		</TD>
		<TD WIDTH=47 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którymi </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>których </FONT>
			</P>
		</TD>
	</TR>
	<TR>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>animate non-human </FONT>
			</P>
		</TD>
		<TD WIDTH=44 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>który </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którego </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>któremu </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którego </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>które </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>których </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>które </FONT>
			</P>
		</TD>
		<TD WIDTH=47 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którymi </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>których </FONT>
			</P>
		</TD>
	</TR>
	<TR>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>in-animate </FONT>
			</P>
		</TD>
		<TD WIDTH=44 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>który </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którego </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>któremu </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><STRONG><FONT SIZE=2>który</FONT></STRONG><FONT SIZE=2> </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>które </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>których </FONT>
			</P>
		</TD>
		<TD WIDTH=43 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którym </FONT>
			</P>
		</TD>
		<TD WIDTH=49 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>które </FONT>
			</P>
		</TD>
		<TD WIDTH=47 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>którymi </FONT>
			</P>
		</TD>
		<TD WIDTH=45 STYLE="border: none; padding: 0cm">
			<P><FONT SIZE=2>których</FONT></P>
		</TD>
	</TR>
</TABLE>
<P><BR><BR>
</P>
<H3 CLASS="western">Anim: animate</H3>
<P>Human beings, animals, fictional characters, names of professions
etc. are all animate. Even nouns that are normally inanimate can be
inflected as animate if they are personified. For instance, consider
a children's story about cars where cars live and talk as people;
then the cars may become and be inflected as animates.</P>
<H3 CLASS="western">Nhum: animate but non-human</H3>
<P>Attested in Polish. In languages where Nhum is used, Anim is
restricted to human beings (complement of Nhum).</P>
<H3 CLASS="western">Inan: inanimate</H3>
<P><SPAN LANG="en-US">N</SPAN><SPAN LANG="en-US">ouns that are not
animate are inanimate. (If Nhum is used, nouns that are neither Anim
nor Nhum are Inan.)</SPAN></P>
<H2 CLASS="western">Number</H2>
<P STYLE="font-style: normal">Number is usually inflectional feature
of nouns and, depending on language, other parts of speech
(adjectives, verbs) that mark agreement with nouns.</P>
<H3 CLASS="western"><SPAN LANG="en-US">Sing</SPAN>: singular number</H3>
<P>A singular noun denotes one person, animal or thing. Example: [en]
<SPAN LANG="en-US"><I>car</I></SPAN></P>
<H2 CLASS="western"><SPAN STYLE="font-style: normal">Plur</SPAN><SPAN STYLE="font-style: normal">:
</SPAN><SPAN STYLE="font-style: normal">plural number</SPAN></H2>
<P>A plural noun denotes several persons, animals or things. Example:
[en] <SPAN LANG="en-US"><I>cars</I></SPAN></P>
<H2 CLASS="western"><SPAN STYLE="font-style: normal">Dual</SPAN><SPAN STYLE="font-style: normal">:
</SPAN><SPAN STYLE="font-style: normal">dual number</SPAN></H2>
<P>A dual noun denotes two persons, animals or things.</P>
<P>Example: [sl] singular <SPAN LANG="cs-CZ"><I>glas</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(voice)</SPAN></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">,
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">dual
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>glasova</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(voices)</SPAN></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">,
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">plural
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>glasovi</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(voices);
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[ar]
</SPAN></SPAN><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">singular
</SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1587;&#1614;&#1606;&#1614;&#1577;&#1612;
</SPAN></FONT></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><I>sanatun</I></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(year), dual </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1587;&#1614;&#1606;&#1614;&#1578;&#1614;&#1575;&#1606;&#1616;
</SPAN></FONT></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><I>sanata&#772;ni</I></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(years), plural </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1587;&#1616;&#1606;&#1615;&#1608;&#1606;&#1614;
</SPAN></FONT></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><I>sinu&#772;na</I></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(years)</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H2 CLASS="western"><SPAN STYLE="font-style: normal">P</SPAN><SPAN STYLE="font-style: normal">tan:
plural</SPAN><SPAN STYLE="font-style: normal">e</SPAN><SPAN STYLE="font-style: normal">
tantum</SPAN></H2>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Some nouns
appear only in the plural form even though they denote one thing
(semantic singular); some tagsets mark this distinction.
Grammatically they behave like plurals, so &ldquo;Plur&rdquo; is
obviously the back-off value here; however, if the language also
marks gender, the non-existence of singular form sometimes means that
the gender is unknown. </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">In
Czech, special type of numerals is used when counting nouns that are
plurale tantum </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(NumType
= Sets).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Example: [en]
</SPAN></SPAN><SPAN LANG="en-US"><I>scissors, pants;</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
[cs] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>nůžky, kalhoty</I></SPAN></P>
<H2 CLASS="western"><SPAN STYLE="font-style: normal">Coll</SPAN><SPAN STYLE="font-style: normal">:
</SPAN><SPAN STYLE="font-style: normal">collective / mass / singulare
tantum</SPAN></H2>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Collective or
mass or singulare tantum is a special case of singular. </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">It
applies to words that use grammatical singular to describe sets of
objects, i.e. semantic plural. Although in theory they might be able
to form plural, in practice it would be rarely semantically
plausible. Sometimes, the plural form exists and means &ldquo;several
sorts of&rdquo; </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">or
&ldquo;several packages of&rdquo;</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<P STYLE="font-style: normal">Although mass nouns exist in various
languages (because of their semantic nature), they are rarely marked
in tagsets. I found the value in one tagset of Czech and in Italian
(CoNLL data).</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Example: [cs]
</SPAN></SPAN><SPAN LANG="en-US"><I>lidstvo</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(mankind)</SPAN></SPAN></P>
<H2 CLASS="western">Case</H2>
<P STYLE="font-style: normal">Case is usually inflectional feature of
nouns and, depending on language, other parts of speech (adjectives,
numerals) that mark agreement with nouns. In some tagsets it is also
valency feature of adpositions (saying that the adposition requires
its argument to be in that case).</P>
<P STYLE="font-style: normal">Case helps specify the role of the noun
phrase in the sentence, especially in free-word-order languages. For
example, the nominative and accusative cases often distinguish
subject and object of the verb, while in fixed-word-order languages
these functions would be distinguished merely by the positions of the
nouns in the sentence.</P>
<P STYLE="font-style: normal">Here on the level of morphosyntactic
features we are dealing with case expressed morphologically, i.e. by
bound morphemes (affixes). Note that on a higher level case can be
understood more broadly as <I>the role,</I> and it can be also
expressed by adding an adposition to the noun. What is expressed by
affixes in one language can be expressed using adpositions in another
language. Cf. the &ldquo;case&rdquo; dependency label.</P>
<P STYLE="font-style: normal">Examples: [cs] nominative <SPAN LANG="cs-CZ"><I>matka</I></SPAN><SPAN LANG="cs-CZ">
</SPAN>(mother), genitive <SPAN LANG="cs-CZ"><I>matky</I></SPAN>,
dative <SPAN LANG="cs-CZ"><I>matce</I></SPAN>, accusative <SPAN LANG="cs-CZ"><I>matku</I></SPAN>,
vocative <SPAN LANG="cs-CZ"><I>matko</I></SPAN>, locative <SPAN LANG="cs-CZ"><I>matce</I></SPAN>,
instrumental <SPAN LANG="cs-CZ"><I>matkou</I></SPAN><SPAN LANG="cs-CZ">;
</SPAN>[de] nominative <I>der Mann</I> (the man), genitive <I>des
Mannes</I>, dative <I>dem Mann</I>, accusative <I>den Mann</I><SPAN LANG="cs-CZ">;
</SPAN>[en] nominative/direct case <I>he, she</I>, accusative/oblique
case <I>him, her</I></P>
<P STYLE="font-style: normal">The descriptions of the individual case
values below include semantic hints about the prototypical meaning of
the case. Bear in mind that quite often a case will be used for a
meaning that is totally unrelated to the meaning mentioned here.
Valency of verbs, adpositions and other words will determine that the
noun phrase must be in a particular grammatical case to fill a
particular valency slot (semantic role). It is much the same as
trying to explain the meaning of prepositions: most people would
agree that the central meaning of English <I>in</I> is location in
space or time but there are phrases where the meaning is less
locational: <I>In God we trust. </I><I>Say it in English.</I></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Note
that Indian corpora based on the so-called Paninian model use a
related feature called </SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">vibhakti</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">.
It is a merger of the Case feature described here and of various
postpositions. Values of the feature are language-dependent because
they are copies of the relevant morphemes (either bound morphemes or
postpositions). </SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Vibhakti
can be mapped on the Case values described here if we know 1. which
source values are bound morphemes (postpositions are separate nodes
for us) and 2. what is their meaning. For instance, the genitive case
(Gen) in Bengali is marked using the suffix </SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">-ra</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(-</SPAN></SPAN></SPAN><FONT FACE="Mangal"><SPAN LANG="hi-IN"><SPAN STYLE="background: transparent"><FONT FACE="Code2000">&#2480;</FONT></SPAN></SPAN></FONT><SPAN STYLE="background: transparent">),
i.e. </SPAN><FONT FACE="Courier New, monospace"><SPAN STYLE="background: transparent">vib=era</SPAN></FONT><SPAN STYLE="background: transparent">.
In Hindi, the suffix has been split off the noun </SPAN><SPAN STYLE="background: transparent">and</SPAN><SPAN STYLE="background: transparent">
it is now written as a separate word &ndash; the postposition
</SPAN><I><SPAN STYLE="background: transparent">k&#257;/k&#299;/ke</SPAN></I><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(</SPAN></SPAN><FONT FACE="Mangal"><SPAN LANG="hi-IN"><SPAN STYLE="background: transparent"><FONT FACE="Code2000"><SPAN STYLE="font-style: normal">&#2325;&#2366;</SPAN></FONT></SPAN></SPAN></FONT><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">/</SPAN></SPAN><FONT FACE="Mangal"><SPAN LANG="hi-IN"><SPAN STYLE="background: transparent"><FONT FACE="Code2000"><SPAN STYLE="font-style: normal">&#2325;&#2368;</SPAN></FONT></SPAN></SPAN></FONT><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">/</SPAN></SPAN><FONT FACE="Mangal"><SPAN LANG="hi-IN"><SPAN STYLE="background: transparent"><FONT FACE="Code2000"><SPAN STYLE="font-style: normal">&#2325;&#2375;</SPAN></FONT></SPAN></SPAN></FONT><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">).
</SPAN></SPAN><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Even
if the</SPAN></SPAN><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
postpositional phrase</SPAN></SPAN><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
can be understood as a genitive noun phrase, the noun is not in
genitive. Instead, the postposition requires that it takes one of
three case forms that are marked directly on the noun: the oblique
case (Acc).</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Nom: nominative /
direct</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The base form
of the noun, </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">typically
used as citation form (lemma)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.
In many languages this is the word form used for subjects of clauses.
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">If
the language has only two cases, which are called &ldquo;direct&rdquo;
and &ldquo;oblique&rdquo;, the direct case will be marked Nom.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Acc: accusative  /
oblique</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Perhaps the
second most widely spread morphological case.</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
In many languages this is the word form used for </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">direct
objects</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">of
verbs</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.
If the language has only two cases, which are called &ldquo;direct&rdquo;
and &ldquo;oblique&rdquo;, the </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">oblique</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
case will be marked </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Acc</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Abs: absolutive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">S</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ome
languages </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(e.g.
Basque)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
do not use nominative-accusative to distinguish subjects and objects.
Instead, they use the contrast of absolutive-ergative.</SPAN></SPAN></P>
<P STYLE="font-style: normal">The absolutive case marks subject of
intransitive verb and direct object of transitive verb.</P>
<H3 CLASS="western" STYLE="font-style: normal">Erg: ergative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">S</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ome
languages </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(e.g.
Basque)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
do not use nominative-accusative to distinguish subjects and objects.
Instead, they use the contrast of absolutive-ergative.</SPAN></SPAN></P>
<P STYLE="font-style: normal">The ergative case marks subject of
transitive verb.</P>
<H3 CLASS="western" STYLE="font-style: normal">Dat: dative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">In many
languages this is the word form used for </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">in</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">direct
objects</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">of
verbs</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Example:
[de] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>Ich gebe </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>meinem
Bruder</I></SPAN></FONT><SPAN LANG="cs-CZ"><I> ein Geschenk.</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(I
give my brother a present.) &ldquo;meinem Bruder&rdquo; (my brother)
is dative and &ldquo;ein Geschenk&rdquo; (a present) is accusative.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Gen: genitive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">P</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">rototypical
meaning of genitive is that the noun phrase somehow belongs to its
governor; it would often be translated by the English preposition </SPAN></SPAN><SPAN LANG="en-US"><I>of</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.
English has the &ldquo;saxon genitive&rdquo; formed by the suffix </SPAN></SPAN><SPAN LANG="en-US"><I>'s</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
but we will normally not need the feature in English because the
suffix gets separated from the noun during tokenization.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Note that
despite considerable semantic overlap, the genitive case is not the
same as the feature of possessivity (Poss). Possessivity is a lexical
feature, i.e. it applies to lemma and its whole paradigm. Genitive is
a feature of just a subset of word forms of the lemma. </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Semantics
of possessivity is much more clearly defined while the genitive (as
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">many
other</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
cases) may be required in situations that have nothing to do with
possessing. For example, [cs] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>bez
prezidentovy dcery</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(without
the president's daughter) is a prepositional phrase containing the
preposition </SPAN></SPAN><SPAN LANG="cs-CZ"><I>bez</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(without),
the possessive adjective </SPAN></SPAN><SPAN LANG="cs-CZ"><I>prezidentovy</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(president's)
and th noun </SPAN></SPAN><SPAN LANG="cs-CZ"><I>dcery</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(daughter).
The possessive adjective is derived from the noun </SPAN></SPAN><SPAN LANG="cs-CZ"><I>prezident</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">but
it is really an adjective (with separate lemma and paradigm), not
just a form of the noun. In addition, both the adjective and the noun
are in their genitive forms (the nominative would be </SPAN></SPAN><SPAN LANG="cs-CZ"><I>prezidentova
dcera</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">).
There is nothing possessive about this particular occurrence of the
genitive. It is there because the preposition </SPAN></SPAN><SPAN LANG="cs-CZ"><I>bez</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">always
requires its argument to be in genitive.</SPAN></SPAN></P>
<P STYLE="font-style: normal">Example: [cs] <SPAN LANG="cs-CZ"><I>Praha
je hlavní město </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>České
republiky</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>.</I></SPAN><SPAN LANG="cs-CZ">
</SPAN>(Prague is the capital <FONT COLOR="#ff0000">of the Czech
Republic</FONT>.)</P>
<P><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">Note that </SPAN></SPAN>in
Basque, <SPAN LANG="cs-CZ">Gen should be used for</SPAN> possessive
genitive (as opposed to locative genitive): <FONT COLOR="#ff0000"><I>diktadorearen</I></FONT><I>
erregimena</I> <SPAN LANG="en-US">(</SPAN>dictator's regime;
<I>diktadore</I> = dictator).</P>
<H3 CLASS="western" STYLE="font-style: normal">Voc: vocative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The vocative
case is a special form of noun use</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">d</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
to address someone. Thus it predominantly appears with animate nouns
(see the feature of animateness). Nevertheless this is not a
grammatical restriction and </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">inanimate</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
things can be addressed as well.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Example: [cs]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>Co myslíš, </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>Filip</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>e</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>?</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(What
do you think, </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Filip</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">?)</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Loc: locative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The locative
case often expresses location in space or time, which gave it its
name. As elsewhere, non-locational meanings also </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">exist</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
and they are not rare. Uralic languages have a complex set of
fine-grained locational and directional cases (see below) instead of
the locative. Even in languages that have locative, some location
roles may be expressed using other cases (e.g. because those cases
are required by a preposition).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">In Slavic
languages this is the only case that is used exclusively in
combination with prepositions (but such </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">a</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
restriction may not hold in other languages that have locative).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Example: [cs]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>V </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>červenci</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>
jsem byl ve </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>Švédsku</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>.</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">In
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">July</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
I was in </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Sweden</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">)</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Non-locational
non-temporal example: [cs] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>Mluvili
jsme tam o </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>morfologii</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>.</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(We
talked </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">there</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
about </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">morphology</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.)</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ins: instrumental /
instructive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The role from
which the name of the instrumental case is derived is that the noun
is used as instrument to do something (as in [cs] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>psát
</I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>perem</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(to
write </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">using
a pen</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">)).
Many other meanings are possible, e.g. in Czech the instrumental is
required by the preposition </SPAN></SPAN><SPAN LANG="cs-CZ"><I>s</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(with)
and thus it includes the meaning expressed in other languages by the
comitative case.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">In Czech the
instrumental is also used for the agent-object in passive
constructions (cf. the English preposition </SPAN></SPAN><SPAN LANG="en-US"><I>by</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Passive
example: [cs] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>Tento zákon byl
schválen </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>vládou</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>.</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(This
bill has been approved </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">by
the government</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.)</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">A semantically
similar case called instructive is u</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">sed
rarely in Finnish to express &ldquo;with (the aid of)&rdquo;. </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">It
can be applied to infinitives that behave much like nouns in Finnish.
We currently propose one label for both instrumental and instructive
(instrumental is not defined in Finnish).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [fi]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>lähteä</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
to leave; </SPAN></SPAN><SPAN LANG="en-US"><I>2003 </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>lähtien</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(second
infinitive in the instructive case: since 2003); </SPAN></SPAN><SPAN LANG="cs-CZ"><I>yllättää</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
to surprise; </SPAN></SPAN><SPAN LANG="cs-CZ"><I>sekaantui </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>yllättäen</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>
valtataisteluun</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(lit.
was-involved-in by-surprise.I</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ns</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
power-struggle.I</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ll</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">).</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Par: partitive</H3>
<P STYLE="font-style: normal">In Finnish the partitive case expresses
unknown identity and unfinished actions without result.</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [fi]
</SPAN></SPAN><SPAN LANG="en-US"><I>kolme </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>taloa</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(three
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">houses</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
the </SPAN></SPAN><SPAN LANG="en-US"><I>-a</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
suffix of </SPAN></SPAN><SPAN LANG="en-US"><I>talo</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="en-US"><I>rakastan tätä </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>taloa</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(I
like this </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">house</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="en-US"><I>saanko lainata </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>kirjaa</I></SPAN></FONT><SPAN LANG="en-US"><I>?</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(can
I borrow the </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">book</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">?;
the </SPAN></SPAN><SPAN LANG="en-US"><I>-a</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
suffix of </SPAN></SPAN><SPAN LANG="en-US"><I>kirja</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="en-US"><I>lasissa on </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>maitoa</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(there
is (some) </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">milk</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
in the glass).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples
comparing partitive with accusative: </SPAN></SPAN><SPAN LANG="en-US"><I>ammuin
karhun</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(I shot a bear.Acc (and I know that it is dead)); </SPAN></SPAN><SPAN LANG="en-US"><I>ammuin
karhua</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(I shot at a bear.Par (but I may have missed)).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Using
accusative instead of partitive may also substitute the missing
future tense: </SPAN></SPAN><SPAN LANG="en-US"><I>luen kirjan</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(I will read the book.Acc); </SPAN></SPAN><SPAN LANG="en-US"><I>luen
kirjaa</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
(I am reading the book.Par).</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Dis: distributive</H3>
<P STYLE="font-style: normal">The distributive case conveys that
something happened to every member of a set, one in a time. Or it may
express frequency.</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [hu]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>fejenként</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(per
capita); </SPAN></SPAN><SPAN LANG="cs-CZ"><I>esetenként</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(in
some cases); </SPAN></SPAN><SPAN LANG="cs-CZ"><I>hetenként</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(once
per week, weekly); </SPAN></SPAN><SPAN LANG="cs-CZ"><I>tízpercenként</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(every
ten minutes).</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ess: essive /
prolative</H3>
<P STYLE="font-style: normal">The essive case expresses a temporary
state, often it corresponds to English &ldquo;as a &hellip;&rdquo; A
similar case in Basque is called prolative and I suggest to tag it
&ldquo;Ess&rdquo; too.</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [fi]
</SPAN></SPAN><SPAN LANG="en-US"><I>lapsi</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= child; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>lapsena</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= as a child / when he was child; [e</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">t</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="en-US"><I>laps</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= child; </SPAN></SPAN><SPAN LANG="en-US"><I>lapsena</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= as a child; [eu] </SPAN></SPAN><SPAN LANG="en-US"><I>erreformista</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= reformer; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>erreformistatzat</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= as a reformer.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Tra: translative /
factive</H3>
<P STYLE="font-style: normal">The translative case expresses a change
of state (&ldquo;it becomes X&rdquo;, &ldquo;it changes to X&rdquo;).
Also used for the phrase &ldquo;in language X&rdquo;. In the Szeged
Treebank [hu], this case is called factive.</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [fi]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>pitkä</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
long; </SPAN></SPAN><SPAN LANG="cs-CZ"><I>venyi </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>pitkäksi</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
he got longer; </SPAN></SPAN><SPAN LANG="en-US"><I>englanti</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= English language; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>englanniksi</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= in English; </SPAN></SPAN><SPAN LANG="en-US"><I>kello kuusi</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= six o'clock; </SPAN></SPAN><SPAN LANG="en-US"><I>kello </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>kuudeksi</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= until six o'clock; [et] </SPAN></SPAN><SPAN LANG="en-US"><I>kell
kuus</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"> =
six o'clock; </SPAN></SPAN><SPAN LANG="en-US"><I>kella </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>kuueks</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= until six o'clock; [hu] </SPAN></SPAN><SPAN LANG="en-US"><I>Oroszlány
halott </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>várossá</I></SPAN></FONT><SPAN LANG="en-US"><I>
válhat.</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= lit. Oroszlány dead city.</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Tra</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
could-become. = Oroszlány could become a dead city.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Com: comitative /
associative</H3>
<P STYLE="font-style: normal">The comitative (also called
associative) case corresponds to English &ldquo;together with &hellip;&rdquo;</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">et</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="en-US"><I>koer</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">dog</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>koeraga</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">with
dog</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Abe: abessive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">abessive</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
case corresponds to </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">the
English preposition </SPAN></SPAN><SPAN LANG="en-US"><I>without</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">fi</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="en-US"><I>raha</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">money</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>rahatta</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">with</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">out
money</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ine: inessive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">inessive
case expresses location inside of something.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>ház</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">house</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>házban</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">in
the house; [fi] </SPAN></SPAN><SPAN LANG="en-US"><I>talo</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= house; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>talossa</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= in the house; [et] </SPAN></SPAN><SPAN LANG="en-US"><I>maja</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= house; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>majas</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= in the house.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ill: illative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">il</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">lative</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
case expresses </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">direction
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">into</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
something.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>ház</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">house</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>házb</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>a</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">to</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the house; [fi] </SPAN></SPAN><SPAN LANG="en-US"><I>talo</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= house; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>talo</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>on</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">to</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the house; [et] </SPAN></SPAN><SPAN LANG="en-US"><I>maja</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= house; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>majas</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>se
/ majja</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">to</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the house.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ela: elative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">elative</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
case expresses </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">direction
out</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
of something.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>ház</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">house</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>házból</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">from</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the house; [fi] </SPAN></SPAN><SPAN LANG="en-US"><I>talo</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= house; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>talos</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>t</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>a</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">from</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the house; [et] </SPAN></SPAN><SPAN LANG="en-US"><I>maja</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= house; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>majas</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>t</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">from</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the house.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Add: additive</H3>
<P STYLE="font-style: normal">Distinguished by some scholars in
Estonian, not recognized by traditional grammar, exists in the
Multext-East Estonian tagset and in the Eesti keele puudepank.
Reportedly same or similar meaning as illative. Forms of this case
exist only in singular and not for all nouns.</P>
<H3 CLASS="western" STYLE="font-style: normal">Ade: adessive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ad</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">essive
case expresses location </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">at
or by</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
something </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(not
inside and not on the surface of it)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The
corresponding directional cases are allative (towards something) and
ablative (from something).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>pénztár</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">cash
desk</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>pénztárnál</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">at
the cash desk</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
[fi] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>pöytä</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>pöydällä</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">at</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
[et] </SPAN></SPAN><SPAN LANG="en-US"><I>laud</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>laual</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">at</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">All: allative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">allat</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ive
case expresses </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">direction</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">to</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
something </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(destination
is adessive, i.e. at or by that something, not on or inside of it)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>pénztár</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">cash
desk</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>pénztár</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>hoz</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">to</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the cash desk</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[fi]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>pöytä</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>pöydäll</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>e</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">to</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Abl: ablative</H3>
<P STYLE="font-style: normal">Prototypical meaning: direction from
some point.</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [hu]</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
a </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>barátomtól</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
jövök </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(I'm
coming </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">from
my friend</SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">);</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[fi]</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><I>pöydältä</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(from
the table)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="en-US"><I>katolta</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(from
the roof)</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="en-US"><I>rannalta</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(from
the beach)</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Sup: superessive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">U</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">sed,
chiefly </SPAN></SPAN><A HREF="http://www.hungarianreference.com/Nouns/-n-superessive.aspx">in
Hungarian</A><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">, </SPAN></SPAN><SPAN STYLE="font-style: normal">to
indicate location on top of something or on the surface of something.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="en-US"><I>asztal</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>asztalon</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">on
the table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>könyvek</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
books; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>könyveken</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
on books.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal"><SPAN LANG="cs-CZ">Sub</SPAN>:
<SPAN LANG="cs-CZ">sub</SPAN>lative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The </SPAN></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">sub</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">lat</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ive
case </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">is
used in Finno-Ugric languages to express the destination of movement,
originally to the surface of something (e.g. &ldquo;to climb a
tree&rdquo;), and, by extension, in other figurative meanings as well
(e.g. &ldquo;to university&rdquo;).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="cs-CZ"><I>Belgrádtól 150 </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>kilométerre
délnyugatra</I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">lit</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Belgrade.Abl
150 kilometer.Sub southwest.Sub = 150 kilometers southwest of
Belgrade; </SPAN></SPAN><SPAN LANG="cs-CZ"><I>hajó</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
ship; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>hajóra</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
onto the ship; </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>bokorra</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
on the shrub.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Del: delative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">U</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">sed,
chiefly </SPAN></SPAN><A HREF="http://www.hungarianreference.com/Nouns/ról-rol-delative.aspx">in
Hungarian</A><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">,</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
to express the movement from the surface of something (like &ldquo;moved
off the table&rdquo;). </SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Other
meanings are possible as well, e.g. &ldquo;about something&rdquo;.</SPAN></SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">hu</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><SPAN LANG="en-US"><I>asztal</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><SPAN LANG="en-US"><I>az </I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>asztal</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>ról</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">off</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the table</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">;
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>Budapestről</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>
vagyok</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">= </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">I
am/come from Budapest</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Lat: lative /
directional allative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">The
lative case d</SPAN><SPAN STYLE="background: transparent">enotes
movement towards/to/into/onto something. Similar case in Basque is
called directional allative (Spanish </SPAN><EM><SPAN STYLE="background: transparent">adlativo
direccional</SPAN></EM><SPAN STYLE="background: transparent">).
However, lative is typically thought of as a union of allative,
illative and sublative, while in Basque it is derived from allative,
which also exists independently.</SPAN></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">Examples:
[eu]</SPAN><SPAN STYLE="background: transparent"> </SPAN><I><SPAN STYLE="background: transparent">behe</SPAN></I><SPAN STYLE="background: transparent">
= low; </SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">beherantz</SPAN></I></FONT><SPAN STYLE="background: transparent">
= down.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Tem: temporal</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">The
</SPAN><SPAN STYLE="background: transparent">temporal</SPAN><SPAN STYLE="background: transparent">
case </SPAN><SPAN STYLE="background: transparent">is used to indicate
time.</SPAN></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">Examples:
[</SPAN><SPAN STYLE="background: transparent">h</SPAN><SPAN STYLE="background: transparent">u]</SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">hétkor</SPAN></I></SPAN><SPAN STYLE="background: transparent">
= </SPAN><SPAN STYLE="background: transparent">at seven (o'clock)</SPAN><SPAN STYLE="background: transparent">;
</SPAN><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">éjfélkor</SPAN></I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="background: transparent">
</SPAN></SPAN><SPAN STYLE="background: transparent">= at midnight;
</SPAN><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">karácsonykor</SPAN></I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="background: transparent">
</SPAN></SPAN><SPAN STYLE="background: transparent">= at Christmas.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ter: terminative /
terminal allative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">The
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">te</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">rminative
case specifies where something ends in space or time. </SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">Similar
case in Basque is called terminal allative (Spanish </SPAN><EM><SPAN STYLE="background: transparent">adlativo
terminal</SPAN></EM><SPAN STYLE="background: transparent">). </SPAN>
</P>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">Examples:
[</SPAN><SPAN STYLE="background: transparent">et</SPAN><SPAN STYLE="background: transparent">]</SPAN><SPAN STYLE="background: transparent">
</SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">j&otilde;eni</SPAN></I></FONT><SPAN STYLE="background: transparent">
= down to the river; </SPAN><I><SPAN STYLE="background: transparent">kella
</SPAN></I><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">kuueni</SPAN></I></FONT><SPAN STYLE="background: transparent">
= till six o'clock; [hu] </SPAN><I><SPAN STYLE="background: transparent">a
</SPAN></I><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">házig</SPAN></I></FONT><SPAN STYLE="background: transparent">
= up to the house; </SPAN><I><SPAN STYLE="background: transparent">hat
</SPAN></I><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">óráig</SPAN></I></FONT><SPAN STYLE="background: transparent">
= till six o'clock; [eu] </SPAN><I><SPAN STYLE="background: transparent">erdi</SPAN></I><SPAN STYLE="background: transparent">
= half; </SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">erdiraino</SPAN></I></FONT><SPAN STYLE="background: transparent">
= up to the half.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Cau: causative /
motivative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">N</SPAN><SPAN STYLE="background: transparent">oun
in this case is the cause of something. </SPAN><SPAN STYLE="background: transparent">In
Hungarian it also seems to be used frequently with currency (&ldquo;to
buy something </SPAN><I><SPAN STYLE="background: transparent">for</SPAN></I><SPAN STYLE="background: transparent">
the money?&rdquo;)</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:
[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">h</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">u]</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><I><SPAN STYLE="background: transparent">Egy
világcég benzinkútjánál 7183 </SPAN></I><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">forintért</SPAN></I></FONT><I><SPAN STYLE="background: transparent">
tankoltam.</SPAN></I><SPAN STYLE="background: transparent"> </SPAN><SPAN STYLE="background: transparent">[eu]</SPAN><SPAN STYLE="background: transparent">
</SPAN><I><SPAN STYLE="background: transparent">jokaera</SPAN></I><SPAN STYLE="background: transparent">
= behavior; </SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">jokaeragatik</SPAN></I></FONT><SPAN STYLE="background: transparent">
= because of behavior.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ben: benefactive /
destinative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: #ffff00"><SPAN STYLE="background: transparent">T</SPAN><SPAN STYLE="background: transparent">he
benefactive case corresponds to the English preposition </SPAN><I><SPAN STYLE="background: transparent">for</SPAN></I><SPAN STYLE="background: transparent">.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[eu]</SPAN><SPAN STYLE="background: transparent">
</SPAN><I><SPAN STYLE="background: transparent">mutil</SPAN></I><SPAN STYLE="background: transparent">
= </SPAN><SPAN STYLE="background: transparent">boy</SPAN><SPAN STYLE="background: transparent">;
</SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">mutilarentzat</SPAN></I></FONT><SPAN STYLE="background: transparent">
= </SPAN><SPAN STYLE="background: transparent">for boys</SPAN><SPAN STYLE="background: transparent">.</SPAN></P>
<H2 CLASS="western">PrepCase</H2>
<P STYLE="font-style: normal">Personal pronouns in some languages
have different forms depending on whether they are objects of
prepositions or not. For instance, Czech <SPAN LANG="cs-CZ"><I>on</I></SPAN>
(he) without prepositions has the forms <I>jemu</I>/DAT, <I>jeho</I>/ACC,
<I>jím</I>/INS, while with a preposition it is <I>němu</I>/DAT,
<I>něho</I>/ACC, <I>ním</I>/INS. Similarly, Portuguese pronouns in
prepositional oblique case take forms different from oblique pronouns
serving as direct objects of verbs: <I>eu</I>/NOM (I), <I>me</I>/ACC
(give me that), <I>mim</I>/PREP-ACC (come to me).</P>
<P>Default empty value means that the word form is neutral w.r.t.
prepositions.</P>
<H3 CLASS="western" STYLE="font-style: normal">Npr: non-prepositional
case</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">This
word form must not be used after a preposition.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[</SPAN><SPAN STYLE="background: transparent">cs</SPAN><SPAN STYLE="background: transparent">]</SPAN><SPAN STYLE="background: transparent">
</SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">jemu</SPAN></I></FONT><SPAN STYLE="background: transparent">
= </SPAN><SPAN STYLE="background: transparent">him (dative)</SPAN><SPAN STYLE="background: transparent">.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Pre: prepositional
case</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">This
word form must be used after a preposition.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[</SPAN><SPAN STYLE="background: transparent">cs</SPAN><SPAN STYLE="background: transparent">]</SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">k
</SPAN></I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">ně</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">mu</SPAN></I></FONT><SPAN STYLE="background: transparent">
= </SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="background: transparent">to
</SPAN></SPAN><SPAN STYLE="background: transparent">him (dative)</SPAN><SPAN STYLE="background: transparent">.</SPAN></P>
<H2 CLASS="western">Definiteness</H2>
<P LANG="cs-CZ"><SPAN STYLE="background: transparent">Definiteness <SPAN LANG="en-US">is
typically a feature of nouns, adjectives and articles. Its value
distinguishes whether we are talking about something known and
concrete, or something general or unknown. It can be marked on
definite and indefinite articles, or directly on nouns, adjectives
etc. </SPAN><SPAN LANG="en-US">In Arabic, definiteness is also called
the &ldquo;state&rdquo;.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ind: indefinite</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">en</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>a</I></SPAN></FONT><SPAN LANG="en-US"><I>
dog</I></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Def: definite</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">en</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">]
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>the</I></SPAN></FONT><SPAN LANG="en-US"><I>
dog</I></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Red: reduced</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">U</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">sed
in </SPAN></SPAN><A HREF="http://en.wikipedia.org/wiki/Status_constructus">construct
state</A><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"> in
Arabic. If two nouns are in genitive relation, the first one (the
&ldquo;nomen regens&rdquo;) has &ldquo;reduced definiteness,&rdquo;
the second is the genitive and can be either definite or indefinite.
Reduced form has neither the definite morpheme (article), nor the
indefinite morpheme (nunation).</SPAN></SPAN></P>
<P><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples</SPAN></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">:
</SPAN></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">[ar]</SPAN></SPAN></FONT><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
indefinite state: </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1581;&#1604;&#1608;&#1614;&#1577;&#1612;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">&#7717;ulwatun</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;a sweet&rdquo;; definite state: </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1575;&#1604;&#1581;&#1604;&#1608;&#1614;&#1577;&#1615;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">al-&#7717;ulwatu</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;the sweet&rdquo;; </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT COLOR="#ff0000"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1581;&#1604;&#1608;&#1614;&#1577;&#1615;
</SPAN></FONT></FONT></SPAN></FONT><EM><FONT COLOR="#ff0000"><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">&#7717;ulwatu</SPAN></FONT></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;sweet of&rdquo;.</SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Com: complex</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Used in
</SPAN></SPAN><A HREF="http://books.google.cz/books?id=rs3hzfgj3hoC&amp;pg=PA131&amp;lpg=PA131&amp;dq=arabic+improper+annexation&amp;source=bl&amp;ots=d6gGCpprOX&amp;sig=3G6YkRZsIy_EL0OCEh7_V7qqnlE&amp;hl=cs&amp;ei=ZasDTuLhGc_vsgaLlcyeDg&amp;sa=X&amp;oi=book_result&amp;ct=result&amp;resnum=2&amp;ved=0CB4Q6AEwAQ#v=onepage&amp;q=arabic%20improper%20annexation&amp;f=false">improper
annexation</A><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"> in
Arabic. The genitive construction described above normally consists
of two nouns (first reduced, second genitive). That is called proper
annexation or i&#7693;&#257;fa. If the first member is an adjective
or adjectivally used participle and the second member is a definite
noun, the construction is called improper annexation or false i&#7693;&#257;fa.
The result is a compound adjective that is usually used as an
attributive adjunct and thus must agree in definiteness with the noun
it modifies. Its first part (the adjective or participle) may get
again the definite article. Although it may look the same as the form
for the definite state, it is assigned a special value of </SPAN></SPAN><EM><SPAN LANG="en-US">complex</SPAN></EM><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
state to reflect the different origin. See also </SPAN></SPAN><A HREF="http://ufal.mff.cuni.cz/padt/PADT_1.0/docs/papers/2004-nemlar-padt.pdf">Hajič
et al.</A><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"> page
3.</SPAN></SPAN></P>
<P><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples:
[ar] </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1605;&#1615;&#1582;&#1618;&#1578;&#1614;&#1604;&#1616;&#1601;&#1612;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">muxtalifun</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;different/various&rdquo; (active participle, Form VIII);
</SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1606;&#1614;&#1608;&#1618;&#1593;&#1612;
&#1580; &#1571;&#1606;&#1618;&#1608;&#1614;&#1575;&#1593;&#1612;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">naw&#704;un
ja anw&#257;&#704;un</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;kind&rdquo;; </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1605;&#1615;&#1582;&#1618;&#1578;&#1614;&#1604;&#1616;&#1601;&#1615;
&#1575;&#1604;&#1571;&#1606;&#1618;&#1608;&#1614;&#1575;&#1593;&#1616;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">muxtalifu
al-anw&#257;&#704;i</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;of various kinds&rdquo; (false i&#7693;&#257;fa); </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1605;&#1614;&#1588;&#1614;&#1575;&#1603;&#1616;&#1604;&#1615;
&#1605;&#1615;&#1582;&#1618;&#1578;&#1614;&#1604;&#1616;&#1601;&#1614;&#1577;&#1615;
&#1575;&#1604;&#1571;&#1606;&#1618;&#1608;&#1614;&#1575;&#1593;&#1616;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">maš&#257;kilu
muxtalifatu al-anw&#257;&#704;i</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;problems of various kinds&rdquo;; </SPAN></SPAN></FONT><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1575;&#1614;&#1604;&#1618;&#1605;&#1614;&#1588;&#1614;&#1575;&#1603;&#1616;&#1604;&#1615;
</SPAN></FONT><FONT COLOR="#ff0000"><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">&#1575;&#1604;&#1618;&#1605;&#1615;&#1582;&#1618;&#1578;&#1614;&#1604;&#1616;&#1601;&#1614;&#1577;&#1615;</SPAN></FONT></FONT><FONT FACE="Times New Roman, serif"><SPAN STYLE="font-style: normal">
&#1575;&#1604;&#1571;&#1606;&#1618;&#1608;&#1614;&#1575;&#1593;&#1616;
</SPAN></FONT></SPAN></FONT><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">al-maš&#257;kilu
</SPAN></FONT></EM><EM><FONT COLOR="#ff0000"><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">al-muxtalifatu</SPAN></FONT></FONT></EM><EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US">
al-anw&#257;&#704;i</SPAN></FONT></EM><FONT FACE="Times New Roman, serif"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
&ldquo;the problems of various kinds&rdquo;.</SPAN></SPAN></FONT></P>
<H2 CLASS="western">Negativeness</H2>
<P><SPAN LANG="en-US">N</SPAN><SPAN LANG="en-US">egativeness is
typically a feature of verbs, adjectives, sometimes also adverbs and
nouns in languages that negate using bound morphemes. For instance,
all Czech verbs and adjectives can be negated using the prefix </SPAN><SPAN LANG="cs-CZ"><I>ne-</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">.
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">In
English, verbs are negated using the particle (adverb?) </SPAN></SPAN><SPAN LANG="en-US"><I>not</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
and adjectives are also negated using prefixes, although the process
is less productive than in Czech </SPAN></SPAN><SPAN LANG="en-US"><I>(wise
&ndash; unwise, probable &ndash; improbable)</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<P STYLE="font-style: normal">Note that Negativeness=Neg is not the
same thing as PronType=Neg. For pronouns and other pronominal parts
of speech there is no such binary opposition as for verbs and
adjectives. (There is no such thing as &ldquo;affirmative pronoun&rdquo;.)</P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">The
negativeness feature could be also used to distinguish response
particles </SPAN></SPAN><SPAN LANG="en-US"><I>yes</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
and </SPAN></SPAN><SPAN LANG="en-US"><I>no</I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Pos: positive,
affirmative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">E</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">xamples:
[cs] </SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>přišel</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(he
came)</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Neg: negative</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Examples: [cs]
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>nepřišel</I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(he
</SPAN></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">did
not </SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">c</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">o</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">me)</SPAN></SPAN></P>
<H2 CLASS="western">Degree</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Degree
of comparison is typically an inflectional feature of some adjectives
and adverbs.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Pos: positive, first
degree</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">This
is the base form that merely states a quality of something, without
comparing it to qualities of others. Note that although this degree
is traditionally called &ldquo;positive&rdquo;, negative properties
can be compared, too.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[en] </SPAN><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">young</SPAN></I></FONT><I><SPAN STYLE="background: transparent">
man</SPAN></I><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">,
</SPAN></SPAN><SPAN STYLE="background: transparent">[</SPAN><SPAN STYLE="background: transparent">cs</SPAN><SPAN STYLE="background: transparent">]</SPAN><SPAN STYLE="background: transparent">
</SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">mladý</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
muž</SPAN></I></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Cmp: comparative,
second degree</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">The
quality of one object is compared to the same quality of another
object.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[en] </SPAN><I><SPAN STYLE="background: transparent">the
man is </SPAN></I><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">younger</SPAN></I></FONT><I><SPAN STYLE="background: transparent">
than me</SPAN></I><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">,
</SPAN></SPAN><SPAN STYLE="background: transparent">[</SPAN><SPAN STYLE="background: transparent">cs</SPAN><SPAN STYLE="background: transparent">]</SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">ten
muž je </SPAN></I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">mladší</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
než já</SPAN></I></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Sup: superlative,
third degree</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">The
quality of one object is compared to the same quality of all other
objects within a set.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[en] </SPAN><I><SPAN STYLE="background: transparent">this
is the </SPAN></I><FONT COLOR="#ff0000"><I><SPAN STYLE="background: transparent">youngest</SPAN></I></FONT><I><SPAN STYLE="background: transparent">
man in our team</SPAN></I><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">,
</SPAN></SPAN><SPAN STYLE="background: transparent">[</SPAN><SPAN STYLE="background: transparent">cs</SPAN><SPAN STYLE="background: transparent">]</SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">toto
je </SPAN></I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">nejmladší</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
muž v našem týmu</SPAN></I></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Abs: absolute
superlative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Some
languages can express morphologically that the studied quality of the
given object is so strong that there is hardly any other object
exceeding it. The quality is not actually compared to any particular
set of objects.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN STYLE="background: transparent">
</SPAN><SPAN STYLE="background: transparent">[e</SPAN><SPAN STYLE="background: transparent">s</SPAN><SPAN STYLE="background: transparent">]
</SPAN><I><SPAN STYLE="background: transparent">guapo</SPAN></I><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
= handsome</SPAN></SPAN><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">,
</SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">guapísimo</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
indescribably handsome</SPAN></SPAN></SPAN></P>
<H2 LANG="cs-CZ" CLASS="western">Person</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Person
is typically feature of personal and possessive pronouns, and of
verbs. On verbs it is in fact an agreement feature that marks the
person of the verb's subject (some languages, e.g. Basque, can also
mark person of objects). Person marked on verbs makes it unnecessary
to always add a personal pronoun as subject and thus subjects are
sometimes dropped (pro-drop languages).</SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">The
&ldquo;Person&rdquo; feature may interact with the feature of
politeness, see there.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">1: first person</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">In
singular, the first person refers just to the speaker / author. In
plural, it must include the speaker and one or more additional
persons. Some languages (e.g. Taiwanese) distinguish inclusive and
exclusive 1<SUP>st</SUP> person plural pronouns: the former include
the addressee of the utterance (i.e. <I>I + you</I>), the latter
exclude them (i.e. <I>I + they</I>).</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[en]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">I</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">,
</SPAN></I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">we</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
[cs] </SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">dělám</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">I</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
do)</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">2: second person</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">In
singular, the second person refers to the addressee of the utterance
/ text. In plural, it may mean several addressees and optionally some
third persons too.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[en]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">you</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
[cs] </SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">dělá</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">š</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">you</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
do)</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">3: third person</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">The
third person refers to one or more persons that are neither speakers
nor addressees.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[en]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">he</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">,
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">she</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">,
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">it</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">,
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">they</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
[cs] </SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">dělá</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">he/she/it</SPAN></SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
do</SPAN></SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">es</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">)</SPAN></SPAN></SPAN></P>
<H2 CLASS="western">Politeness</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Various
languages have various means to express politeness or respect; some
of the means are morphological.</SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">In
quite a few languages the polite mode involves changing pronoun,
person or number when addressing or talking about a respectable
person. In Czech, 2<SUP>nd</SUP> person plural is used instead of
singular; this involves both the pronoun and the finite verb but not
a participle, which remains in singular. In this case, different
words are selected but all of them also exist in the informal mode.
The change is that morphological plural may now be either semantic
singular or plural.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">In
German, Spanish or Hindi, both number and person are changed
(morphological 3</SPAN></SPAN></SPAN><SUP><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">rd</SPAN></SPAN></SPAN></SUP><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
person is used as semantic 2</SPAN></SPAN></SPAN><SUP><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">nd</SPAN></SPAN></SPAN></SUP><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
person) and in addition, special pronouns are used that do not appear
in the informal register ([de] </SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">Sie</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
[es] </SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">usted,
ustedes</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
[hi] </SPAN></SPAN></SPAN><FONT FACE="Mangal"><SPAN LANG="hi-IN"><FONT FACE="Code2000">&#2310;&#2346;</FONT><SPAN STYLE="background: transparent"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">&#257;pa</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">).</SPAN></SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">I</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">n
Japanese, </SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">verbs
and other words have polite and informal forms but</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
the polite register is not restricted to addressing people.</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Inf: informal register</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Usage
varies but if the language distinguishes levels of politeness, then
the informal register is usually meant for communication with family
members and close friends.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[cs]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">ty
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">jdeš
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">/
vy </SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">jdete</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">you
go.Sing/Plur</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">);
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[de]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">du
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">gehst
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">/
ihr </SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">geht</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(you go.Sing/Plur); [es] </SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">tú
vas / vosotros vais</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(you
go.Sing/Plur); </SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[ja]
</SPAN></SPAN></SPAN><FONT FACE="SimSun"><FONT SIZE=2 STYLE="font-size: 10pt"><SPAN LANG="zh-CN"><FONT COLOR="#ff0000"><SPAN STYLE="background: transparent"><SPAN STYLE="font-style: normal">&#34892;&#12363;&#12394;&#12356;
</SPAN></SPAN></FONT></SPAN></FONT></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">ikanai</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">will
not go</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">)</SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">.</SPAN></I></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Pol: polite register</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Usage
varies but if the language distinguishes levels of politeness, then
the polite register is usually meant for communication with strangers
and people of higher social status than the one of the speaker.</SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[cs]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">vy
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">jdete</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">you
go.Sing/Plur</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">);
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[de]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">Sie
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">gehen</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(you go.Sing/Plur); [es] </SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">usted
</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">va
/ ustedes van</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(you
go.Sing/Plur); </SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[ja]
</SPAN></SPAN></SPAN><FONT FACE="SimSun"><FONT SIZE=2 STYLE="font-size: 10pt"><SPAN LANG="zh-CN"><FONT COLOR="#ff0000"><SPAN STYLE="background: transparent"><SPAN STYLE="font-style: normal">&#34892;&#12365;&#12414;&#12379;&#12435;
</SPAN></SPAN></FONT></SPAN></FONT></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">ikimasen</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">will
not go</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">).</SPAN></SPAN></SPAN></P>
<H2 CLASS="western">PossGender</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Possessive
adjectives and pronouns may have two different genders: that of the
possessed object (gender agreement with modified noun) and that of
the possessor (lexical feature, inherent gender). The PossGender
feature captures the possessor's gender. For simplicity, the set of
possible values is identical to Gender, although only a subset has
been observed in corpora so far.</SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">In
the Czech examples below, the masculine PossGender implies using one
of the suffixes <I>-</I><SPAN LANG="cs-CZ"><I>ův, -ova, -ovo,</I></SPAN><SPAN LANG="cs-CZ">
</SPAN>and the feminine PossGender implies using one of <I>-</I><SPAN LANG="cs-CZ"><I>in,
-ina, -ino</I></SPAN><SPAN LANG="cs-CZ">.</SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Masc: masculine
possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[cs]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">otcův
syn</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">father's
son; PossGender=Masc|Gender=Masc</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">);
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">otcova
dcera</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">father's
daughter; PossGender=Masc|Gender=Fem</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">);
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">otcovo
dítě</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">father's
child; PossGender=Masc|Gender=Neut</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">)</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">.</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Fem: feminine
possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[cs]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">m</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">atčin
syn</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">mother</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">'s
son; PossGender=Fem|Gender=Masc</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">);
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">matčina
dcera</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">mother</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">'s
daughter; PossGender=Fem|Gender=Fem</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">);
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">matčino
dítě</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">mother</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">'s
child; PossGender=Fem|Gender=Neut</SPAN></SPAN></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">)</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">.</SPAN></SPAN></SPAN></P>
<H2 CLASS="western">PossNumber</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Possessives
may have two different numbers: that of the possessed object (number
agreement with modified noun) and that of the possessor. The
PossNumber feature captures the possessor's number. For simplicity,
the set of possible values is identical to Number, although only a
subset has been observed in corpora so far.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Sing: singular
possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">en</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">my,
his</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">,
her, its</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[cs]
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">můj</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
pes</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(my
dog; PossNumber=Sing|Number=Sing); </SPAN></SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">mí</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
psi</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(my
dogs; PossNumber=Sing|Number=Plur).</SPAN></SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Plur: plural possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">en</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">our,
t</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">heir</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[cs]
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">náš</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
pes</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(our
dog; PossNumber=Plur|Number=Sing); </SPAN></SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">naši</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">
psi</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">(our
dogs; PossNumber=Plur|Number=Plur).</SPAN></SPAN></SPAN></FONT></P>
<H2 CLASS="western">PossedNumber</H2>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">PossedNumber
is the possessee's (possessed, owned noun phrase's) number. </SPAN></SPAN></SPAN>In
Hungarian, possession can be marked on the possessor or on the
possessed. It is possible, though rare, that a noun has three
distinct number features: its own grammatical number, number of its
possessor and number of its possession. Examples from the
Multext-East Hungarian lexicon:</P>
<UL>
	<LI><P STYLE="margin-bottom: 0cm"><I>könnyedén</I> (SSS)</P>
	<UL>
		<LI><P STYLE="margin-bottom: 0cm"><I>könny</I> = a tear (singular)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>könnyed</I> = your tear
		(singular owner)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>könnyedé</I> = (possession) of
		your tear (singular possession)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>könnyedén</I> = (on the
		possession) of your tear (superessive case)</P>
	</UL>
	<LI><P STYLE="margin-bottom: 0cm"><I>ellenfeleié</I> (PSS)</P>
	<UL>
		<LI><P STYLE="margin-bottom: 0cm"><I>ellenfél</I> = an opponent
		(singular)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>ellenfele</I> = his/her/its
		opponent (singular owner)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>ellenfelei</I> = his/her/its
		opponents (core plural, singular owner)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>ellenfeleié</I> = (possession)
		of his/her/its opponents (singular possession)</P>
	</UL>
	<LI><P STYLE="margin-bottom: 0cm"><I>életeké</I> (SPS)</P>
	<UL>
		<LI><P STYLE="margin-bottom: 0cm"><I>él</I> = point (singular)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>élek</I> = points (plural)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>élén</I> = his/her/its point
		(singular owner)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>élünk</I> = our point (plural
		owner)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>életeké</I> = (possession) of
		our point (singular possession)</P>
	</UL>
	<LI><P STYLE="margin-bottom: 0cm"><I>tárgyalópartnereinkét</I> (PPS)</P>
	<UL>
		<LI><P STYLE="margin-bottom: 0cm"><I>tárgyalópartner</I> =
		negotiator (singular)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>tárgyalópartnerei</I> =
		his/her/its negotiators (plural, singular owner)</P>
		<LI><P><I>tárgyalópartnereinkét</I> = (possession) of our
		negotiators (plural, plural owner, singular possession, accusative
		case)</P>
	</UL>
</UL>
<P>Words marked for plural possessions are very rare, though. Note
that in the following example from Multext-East, Columbus is marked
for plural possession, but not for his own owner. 
</P>
<UL>
	<LI><P STYLE="margin-bottom: 0cm"><I>Kolumbuszéinál</I></P>
	<UL>
		<LI><P STYLE="margin-bottom: 0cm"><I>Kolumbusz</I> = Columbus
		(singular)</P>
		<LI><P STYLE="margin-bottom: 0cm"><I>Kolumbuszéi</I> =
		(possessions) of Columbus (plural possession)</P>
		<LI><P><I>Kolumbuszéinál</I> = (at the possessions) of Columbus
		(adessive case)</P>
	</UL>
</UL>
<H3 CLASS="western" STYLE="font-style: normal">Sing: singular
possession</H3>
<H3 CLASS="western" STYLE="font-style: normal">Plur: plural
possession</H3>
<H2 CLASS="western">PossPerson</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">PossPerson
is possessor's person, marked e.g. on Hungarian nouns. These noun
forms would be translated to English as possessive pronoun + noun.</SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Note
that there is currently a sort of inconsitency in Interset: since
this feature was introduced, it would be logical to use it also for
possessive pronouns in other languages. Yet the possessor's person of
these pronouns is traditionally captured in the &ldquo;Person&rdquo;
feature. Also note that using PossPerson for possessive pronouns
might introduce inconsistency at the other end because in some
languages, possessive pronouns are actually identical to personal
pronouns in the genitive case.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">1: first person
possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">hu</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">kutya</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
= dog;</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">kutyám</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
my dog;</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">kutyá</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">nk</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
our dog.</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">2: second person
possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">hu</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">kutya</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
= dog;</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">kutyá</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">d</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
your.Sing dog;</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">kutyá</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">tok</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
your.Plur dog.</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">3: third person
possessor</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">hu</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">kutya</SPAN></I></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
= dog;</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">kutyá</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">ja</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
his/her/its dog;</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I><SPAN STYLE="background: transparent">kutyá</SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">juk</SPAN></I></SPAN></FONT><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">=
their dog.</SPAN></SPAN></SPAN></P>
<H2 CLASS="western">VerbForm</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Even
though the name of the feature seems to suggest that it is used
exclusively with verbs, it is not the case. Some verb forms in some
languages actually form a gray zone between verbs and other parts of
speech (nouns, adjectives and adverbs). For instance, participles may
be either classified as verbs or as adjectives, depending on language
and context. In both cases VerbForm=Part may be used to separate them
from other verb forms or other types of adjectives.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Fin: finite verb</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">R</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">ule
of thumb: if it has non-empty Mood, it is finite. But beware that
some tagsets conflate verb forms and moods into one feature.</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">en</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">I
</SPAN></I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">do</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">,
he </SPAN></I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">does</SPAN></I></SPAN></FONT><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">.</SPAN></SPAN></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Inf: infinitive</H3>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">Infinitive is
the citation form of verbs in many languages. Unlike in English, it
often has morphological form that is distinct from the finite forms.
Infinitives may be used together with auxiliaries to form
periphrastic tenses (e.g. future tense [cs] </SPAN></SPAN><SPAN LANG="cs-CZ"><I>budu
</I></SPAN><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>sedět</I></SPAN></FONT><SPAN LANG="cs-CZ"><I>
v letadle</I></SPAN><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(I
will sit in a plane)), they appear as arguments of modal verbs etc.
In some languages they behave similarly to nouns and are used as such
(similar to the gerund in English).</SPAN></SPAN></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">de</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">ich
muss </SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">gehen</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
(I must go)</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">.</SPAN></SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Sup: supine</H3>
<P><SPAN STYLE="font-style: normal">Supine is a rare verb form. It
survives in some Slavic languages (Slovenian) and is used instead of
infinitive as the argument of motion verbs </SPAN><I>(I must go)</I><SPAN STYLE="font-style: normal">.</SPAN></P>
<P STYLE="font-style: normal">A form called &ldquo;supine&rdquo; also
exists in Swedish but I think that the usage is different there
(Joakim?)</P>
<H3 CLASS="western" STYLE="font-style: normal">Part: participle</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">P</FONT><FONT COLOR="#000000">articiple
is a non-finite verb form that shares properties of verbs and
adjectives. Its usage varies across languages. It may be used to form
various periphrastic verb forms such as complex tenses and passives;
it may be also used purely adjectively.</FONT></SPAN></P>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">Other
features may help to distinguish past/present participles (English),
active/passive participles (Czech), imperfect/perfect participles
(Hindi) etc.</SPAN></FONT></P>
<P><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Examples:</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">[</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">en</SPAN></SPAN></SPAN><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">]
</SPAN></SPAN></SPAN><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">he
could have </SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">been
prepared</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">
if he had </SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">forseen</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">
it</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">;
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">I
will be </SPAN></I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">driving</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I><SPAN STYLE="background: transparent">
home</SPAN></I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">.</SPAN></SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Trans: transgressive</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">T</FONT><FONT COLOR="#000000">he
transgressive, also called adverbial participle, is a non-finite verb
form that shares properties of verbs and adverbs. It appears e.g. in
Slavic and Indo-Aryan languages.</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
[cs] </FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>zírali na
mne, pevně </I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>svírajíce</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
své zbraně</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">
</SPAN></FONT><FONT COLOR="#000000">(they stared at me </FONT><FONT COLOR="#ff0000">while
gripping</FONT><FONT COLOR="#000000"> their guns firmly); </FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>udělavši</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
večeři, zavolala rodinu ke stolu</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">
</SPAN></FONT><FONT COLOR="#000000">(</FONT><FONT COLOR="#ff0000">having
prepared</FONT><FONT COLOR="#000000"> the dinner, she called her
family to the table).</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ger: gerund</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Gerund</FONT><FONT COLOR="#000000">
is a non-finite verb form that shares properties of verbs and </FONT><FONT COLOR="#000000">nouns</FONT><FONT COLOR="#000000">.
</FONT><FONT COLOR="#000000">In English it shares the morphological
form with present participle, which may mean that the tagset will not
distinguish it from the participle.</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">E</FONT><FONT COLOR="#000000">xamples:
[en] </FONT><FONT COLOR="#000000"><I>I look forward to </I></FONT><FONT COLOR="#ff0000"><I>seeing</I></FONT><FONT COLOR="#000000"><I>
you</I></FONT><FONT COLOR="#000000">; </FONT><FONT COLOR="#000000"><I>he
turns a blind eye to my </I></FONT><FONT COLOR="#ff0000"><I>being</I></FONT><FONT COLOR="#000000"><I>
late</I></FONT><FONT COLOR="#000000">.</FONT></SPAN></P>
<H2 CLASS="western">Mood</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Mood
is a feature that expresses modality and subclassifies finite verb
forms.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Ind: indicative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">T</FONT><FONT COLOR="#000000">he
indicative can be considered the default mood. A verb in indicative
merely states that something happens, has happened or will happen,
without adding any attitude of the speaker.</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
</FONT><FONT COLOR="#000000">[cs] </FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>Studuješ</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
na univerzitě.</I></SPAN></FONT><FONT COLOR="#000000"> </FONT><FONT COLOR="#000000">[</FONT><FONT COLOR="#000000">de</FONT><FONT COLOR="#000000">]
</FONT><FONT COLOR="#ff0000"><I>Du studierst</I></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
an der Universität.</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">
</SPAN></FONT><FONT COLOR="#000000">(</FONT><FONT COLOR="#ff0000">You
study</FONT><FONT COLOR="#000000"> at the </FONT><FONT COLOR="#000000">u</FONT><FONT COLOR="#000000">niversity</FONT><FONT COLOR="#000000">.</FONT><FONT COLOR="#000000">)</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Imp: imperative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">T</FONT><FONT COLOR="#000000">he
speaker uses imperative to order or ask the addressee to do the
action of the verb.</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
</FONT><FONT COLOR="#000000">[cs] </FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>Studuj</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
na univerzitě!</I></SPAN></FONT><FONT COLOR="#000000"> </FONT><FONT COLOR="#000000">[</FONT><FONT COLOR="#000000">de</FONT><FONT COLOR="#000000">]
</FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>Studiere</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
an der Universität!</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">
</SPAN></FONT><FONT COLOR="#000000">(</FONT><FONT COLOR="#ff0000">S</FONT><FONT COLOR="#ff0000">tudy</FONT><FONT COLOR="#000000">
at the </FONT><FONT COLOR="#000000">u</FONT><FONT COLOR="#000000">niversity!)</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Cnd: conditional</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">T</FONT><FONT COLOR="#000000">he
conditional mood is used to express actions that would have taken
place under some circumstances but they actually did not / do not
happen. Grammars of some languages may classify conditional as tense
(rather than mood) but e.g. in Czech it combines with two different
tenses (past and present).</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
</FONT><FONT COLOR="#000000">[cs] </FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>Kdy</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>bych</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
byl chytrý, studoval </I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>bych</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
na univerzitě.</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">
</SPAN></FONT><FONT COLOR="#000000">(</FONT><FONT COLOR="#000000">If
I were smart I </FONT><FONT COLOR="#ff0000">would</FONT><FONT COLOR="#000000">
study at the </FONT><FONT COLOR="#000000">u</FONT><FONT COLOR="#000000">niversity;
note that only the auxiliary </FONT><FONT COLOR="#000000"><I>bych</I></FONT><FONT COLOR="#000000">
is specific to conditional; the active participle </FONT><FONT COLOR="#000000"><I>byl</I></FONT><FONT COLOR="#000000">
is also needed to analytically form the conditional mood, however, it
will only be tagged as participle because it can also be used to form
past tense indicative.</FONT><FONT COLOR="#000000">)</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Pot: potential</H3>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">The
action of the verb is likely but not certain. Used e.g. in Finnish.</SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Sub: subjunctive /
conjunctive</H3>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">The
subjunctive mood is used under certain circumstances in subordinate
clauses, typically for actions that are subjective or otherwise
uncertain. In German, it may be also used to convey the conditional
meaning.</SPAN></FONT></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
[fr] </FONT><FONT COLOR="#000000"><I>Je veux que tu le </I></FONT><FONT COLOR="#ff0000"><I>fasses</I></FONT><FONT COLOR="#000000"><I>.</I></FONT><FONT COLOR="#000000">
(I want you to do it; lit. I want that you </FONT><FONT COLOR="#000000">it</FONT><FONT COLOR="#000000">
do.Sub.)</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Jus: jussive</H3>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">The
jussive mood expresses the desire that the action happens. Used e.g.
in Arabic.</SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Qot: quotative</H3>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">The
quotative mood is used e.g. in Estonian to denote direct speech.</SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Opt: optative</H3>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">Used
e.g. in Turkish in exclamations like &ldquo;May you have a long
life!&rdquo; or &ldquo;If only I were rich!&rdquo;</SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Des: desiderative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">The
desiderative mood corresponds to the modal verb &ldquo;want to&rdquo;:
&ldquo;He </FONT><FONT COLOR="#ff0000">wants to come</FONT><FONT COLOR="#000000">.&rdquo;
Used e.g. in Turkish.</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Nec: necessitative</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">The
</FONT><FONT COLOR="#000000">necessitative</FONT><FONT COLOR="#000000">
mood corresponds to the modal verb</FONT><FONT COLOR="#000000">s</FONT><FONT COLOR="#000000">
&ldquo;</FONT><FONT COLOR="#000000">must, should, have to</FONT><FONT COLOR="#000000">&rdquo;:
&ldquo;He </FONT><FONT COLOR="#ff0000">must</FONT><FONT COLOR="#ff0000">
come</FONT><FONT COLOR="#000000">.&rdquo; Used e.g. in Turkish.</FONT></SPAN></P>
<H2 CLASS="western">Tense</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Tense
is a feature that specifies the time when the action took / takes /
will take place, in relation to the current moment or to another
action in the utterance. In some languages (e.g. English), some
tenses are actually combinations of tense and aspect. In other
languages (e.g. Czech), aspect and tense are separate, although not
completely independent of each other.</SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent">Note
that we are defining features that apply to a single word. If a tense
is constructed periphrastically (two or more words, e.g. auxiliary
verb indicative + participle of the main verb) and none of the
participating words are specific to this tense, then the features
will probably not directly reveal the tense. For instance, [en] <I>&ldquo;I
</I><FONT COLOR="#ff0000"><I>had been</I></FONT><I> there&rdquo;</I>
is past perfect (pluperfect) tense, formed periphrastically by the
simple past tense of the auxiliary <I>to have</I> and the past
participle of the main verb <I>to be</I>. The auxiliary will be
tagged <FONT FACE="Courier New, monospace">VerbForm=Fin|Mood=Ind|Tense=Past</FONT>
and the participle will have <FONT FACE="Courier New, monospace">VerbForm=Part|Tense=Past</FONT>;
none of the two will have <FONT FACE="Courier New, monospace">Tense=Pqp</FONT>.
On the other hand, Portuguese can form the pluperfect morphologically
as just one word, which will thus be tagged
<FONT FACE="Courier New, monospace">VerbForm=Fin|Mood=Ind|T</FONT><FONT FACE="Courier New, monospace">ense=Pqp</FONT>.</SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Past: past tense</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">The
past tense denotes actions that happened before the current moment.
</FONT><FONT COLOR="#000000">In English, this is the simple past
form. In German, this is the </FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">Präteritu</SPAN></FONT><FONT COLOR="#000000">m.
In Turkish, this is the non-narrative past. In Bulgarian, there are
two synthetic past tenses, called aorist and imperfect; thus one of
these two values is used and past is not used. (</FONT><FONT COLOR="#000000"><SPAN STYLE="background: #ffff00">Note
DZ: perhaps we should merge aorist with past and leave the imperfect
as the specific case.</SPAN></FONT><FONT COLOR="#000000">)</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
[en] </FONT><FONT COLOR="#000000"><I>he </I></FONT><FONT COLOR="#ff0000"><I>went</I></FONT><FONT COLOR="#000000"><I>
home</I></FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Pres: present tense</H3>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">The
present tense denotes actions that are happening right now or that
usually happen.</SPAN></FONT></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
[en] </FONT><FONT COLOR="#000000"><I>he </I></FONT><FONT COLOR="#ff0000"><I>goes</I></FONT><FONT COLOR="#000000"><I>
home</I></FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Fut: future tense</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">The
</FONT><FONT COLOR="#000000">future</FONT><FONT COLOR="#000000">
tense denotes actions that </FONT><FONT COLOR="#000000">will happen
after the current moment</FONT><FONT COLOR="#000000">.</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Examples:
[e</FONT><FONT COLOR="#000000">s</FONT><FONT COLOR="#000000">] </FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>irá</I></SPAN></FONT><FONT COLOR="#000000"><I>
</I></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>a la casa</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ">
</SPAN></FONT><FONT COLOR="#000000">(he/</FONT><FONT COLOR="#000000">she/it</FONT><FONT COLOR="#000000">
will go home)</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Aor: aorist</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Aorist
is a special case of the past tense. In Bulgarian, this is the
aspect-neutral past tense that can be used freely with both
imperfective and perfective verbs (see also imperfect).</FONT><FONT COLOR="#000000">
(</FONT><FONT COLOR="#000000"><SPAN STYLE="background: #ffff00">Note
DZ: perhaps we should merge aorist with past and leave the imperfect
as the specific case.</SPAN></FONT><FONT COLOR="#000000">)</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Imp: imperfect</H3>
<P><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">Used
in e.g. Bulgarian and Croatian, imperfect is a special case of the
past tense.</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal"><SPAN STYLE="background: transparent">
</SPAN></SPAN></SPAN></FONT><FONT COLOR="#000000">Note that,
unfortunately, imperfect tense is not always the same as past tense +
imperfective aspect. For instance, in Bulgarian, there is lexical
aspect, inherent in verb meaning, and grammatical aspect, which does
not necessarily always match the lexical one. In main clauses,
imperfective verbs can have imperfect tense and perfective verbs have
perfect tense. However, both rules can be violated in embedded
clauses.</FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Nar: narrative</H3>
<P><FONT COLOR="#000000">S</FONT><FONT COLOR="#000000">pecial case of
the past tense, this is the Turkish </FONT><EM><FONT COLOR="#000000">miş</FONT></EM><FONT COLOR="#000000">-</FONT><FONT COLOR="#000000">past.
The difference is whether the speaker personally witnessed the action
he is describing, or not.</FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Pqp: pluperfect</H3>
<P><FONT COLOR="#000000">T</FONT><FONT COLOR="#000000">he pluperfect
denotes action that happened before another action in past. This
value does not apply to English where the pluperfect (past perfect)
is constructed analytically. It applies e.g. to Portuguese.</FONT></P>
<H2 CLASS="western">Aspect</H2>
<P><SPAN LANG="en-US">A</SPAN><SPAN LANG="en-US">spect is a feature
that specifies duration of the action in time, whether the action has
been completed etc. In some languages (e.g. English), some tenses are
actually combinations of tense and aspect. In other languages (e.g.
Czech), aspect and tense are separate, although not completely
independent of each other.</SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">I</FONT><FONT COLOR="#000000">n
Czech and other Slavic languages, aspect is a lexical feature. Pairs
of imperfective and perfective verbs exist and are often
morphologically related but the space is highly irregular and the
verbs are considered to belong to separate lemmas.</FONT></SPAN></P>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">Interset
currently covers only a few aspect values that occurred as feature in
the corpora we have studied. See Wikipedia
(</FONT><A HREF="http://en.wikipedia.org/wiki/Grammatical_aspect">http://en.wikipedia.org/wiki/Grammatical_aspect</A><FONT COLOR="#000000">)
for a long list of other possible aspects.</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Imp: imperfect aspect</H3>
<P><FONT COLOR="#000000">The action took / takes / will take some
time span and there is no information whether and when it was / will
be completed.</FONT></P>
<P><FONT COLOR="#000000">Examples: [cs]</FONT><FONT COLOR="#000000"><I>
</I></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>péci</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
to bake (Imp);</SPAN></SPAN></FONT><FONT COLOR="#000000"> </FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>pekl</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
chleba</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(he
baked / was baking a bread)</SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Perf: perfect aspect</H3>
<P><FONT COLOR="#000000">The action has been / will have been
completed. Since there is emphasis on one point on the time scale
(the point of completion), this aspect does not work well with the
present tense. For example, Czech morphology can create present forms
of perfective verbs but these actually have a future meaning.</FONT></P>
<P><FONT COLOR="#000000">Examples: [cs]</FONT><FONT COLOR="#000000"><I>
</I></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I>up</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>éci</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">=
to bake (Perf);</SPAN></SPAN></FONT><FONT COLOR="#000000"> </FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>upekl</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
chleba</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(he
baked / has baked a bread)</SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Pro: prospective
aspect</H3>
<P><FONT COLOR="#000000">Used in Basque. A c</FONT><FONT COLOR="#000000">ombination
of tense and aspect that indicates the action is in preparation to
take place.</FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Prog: progressive
aspect</H3>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">English
progressive tenses </FONT><FONT COLOR="#000000"><I>(I am eating, I
have been doing &hellip;)</I></FONT><FONT COLOR="#000000"> have this
aspect. They are constructed analytically (auxiliary + present
participle) but the </FONT><FONT COLOR="#000000"><I>-ing</I></FONT><FONT COLOR="#000000">
participle is so bound to progressive meaning that it seems a good
idea to annotate it with this feature (we have to distinguish it from
the past participle somehow; we may use both the &ldquo;Tense&rdquo;
and the &ldquo;Aspect&rdquo; features).</FONT></SPAN></P>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">In
languages other than English, the progressive meaning may be
expressed by morphemes bound to the main verb, which makes this value
even more justified. Example is Turkish.</SPAN></FONT></P>
<H2 CLASS="western">Voice</H2>
<P STYLE="font-style: normal"><SPAN STYLE="background: transparent"><FONT COLOR="#000000">F</FONT><FONT COLOR="#000000">or
Indo-European speakers, voice means mainly the active-passive
distinction. In other languages, other shades of verb meaning are
categorized as voice.</FONT></SPAN></P>
<H3 CLASS="western" STYLE="font-style: normal">Act: active voice</H3>
<P><FONT COLOR="#000000">The subject of the verb is the doer of the
action (agent), the object is affected by the action (pacient).</FONT></P>
<P><FONT COLOR="#000000">Examples: [cs] </FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>Napadli</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
jsme nepřítele.</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(We
</SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">attacked</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
the enemy; the active participle </SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>napadli</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">can
be used to form either past tense or conditional mood; here it forms
the past tense.)</SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Pass: passive voice</H3>
<P><FONT COLOR="#000000">The subject of the verb is affected by the
action (pacient). The doer (agent) is either unexpressed or it
appears as an object of the verb.</FONT></P>
<P><FONT COLOR="#000000">Examples: [cs] </FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I>J</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>sme
</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="cs-CZ"><I>napadeni</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>
nepřítelem.</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(We
are </SPAN></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">attacked</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
by the enemy; the passive participle </SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><I>napadeni</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="cs-CZ"><SPAN STYLE="font-style: normal">
i</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">s
used to form passive in all tenses; here it forms the present
passive.)</SPAN></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Rcp: reciprocal voice</H3>
<P><FONT COLOR="#000000">Examples: [</FONT><FONT COLOR="#000000">tr</FONT><FONT COLOR="#000000">]
</FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>kar&#305;şt&#305;</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><I>,
</I></SPAN></FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>tutuştular</I></SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Cau: causative voice</H3>
<P><A HREF="https://wiki.ufal.ms.mff.cuni.cz/_media/user:zeman:treebanks:ttbankkl.pdf">Documentation</A><FONT COLOR="#000000">
of the METU Sabanci treebank classifies causative as voice (page 26).
Note that this is a feature of verbs. There are languages that have
also the causative case of nouns.</FONT></P>
<P><FONT COLOR="#000000">Examples: [</FONT><FONT COLOR="#000000">tr</FONT><FONT COLOR="#000000">]
</FONT><FONT COLOR="#ff0000"><SPAN LANG="en-US"><I>kar&#305;şt&#305;r&#305;yor</I></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">
</SPAN></SPAN></FONT><FONT COLOR="#000000"><SPAN LANG="en-US"><SPAN STYLE="font-style: normal">(is
confusing)</SPAN></SPAN></FONT></P>
<H2 CLASS="western">Style</H2>
<P STYLE="font-style: normal"><FONT COLOR="#000000"><SPAN STYLE="background: transparent">This
may be a lexical feature (some words-lemmas are archaic, some are
colloquial) or a morphological feature (inflectional patterns may
systematically change between dialects or styles). It could be used
in many languages but only a few choose to actually annotate it. Seen
in Bulgarian, Czech, Danish, Finnish and Hungarian.</SPAN></FONT></P>
<H3 CLASS="western" STYLE="font-style: normal">Arch: archaic,
obsolete</H3>
<H3 CLASS="western" STYLE="font-style: normal">Rare: rare</H3>
<H3 CLASS="western" STYLE="font-style: normal">Form: formal, literary</H3>
<H3 CLASS="western" STYLE="font-style: normal">Poet: poetic</H3>
<H3 CLASS="western" STYLE="font-style: normal">Norm: normal, neutral</H3>
<H3 CLASS="western" STYLE="font-style: normal">Coll: colloquial</H3>
<H3 CLASS="western" STYLE="font-style: normal">Vrnc: vernacular</H3>
<H3 CLASS="western" STYLE="font-style: normal">Slng: slang</H3>
<H3 CLASS="western" STYLE="font-style: normal">Expr: expressive,
emotional</H3>
<H3 CLASS="western" STYLE="font-style: normal">Derg: derogative</H3>
<H3 CLASS="western" STYLE="font-style: normal">Vulg: vulgar</H3>
<P STYLE="font-style: normal"><BR><BR>
</P>
<P STYLE="font-style: normal"><BR><BR>
</P>
