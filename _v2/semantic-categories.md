---
layout: base
title:  'Semantic Categories in UD v2'
udver: '2'
---

# Semantic Categories in UD v2

Some of the relations in v1, in particular `name` and `neg`), primarily encoded semantic distinctions (rather than syntactic). We therefore make the following changes for v2:

* Remove `neg` and instead encode negation as a feature
* Rename `name` to [u-dep/flat]() and extend its usage beyond names (for example, include titles)

## Remove neg

We have decided to get rid of the `neg` relation which is not syntactic. Instead we will use

* ordinary syntactic relations like [u-dep/advmod](), [u-dep/aux](), etc.
* a feature Polarity=Neg on the negative word to preserve the information about negation

## Rename name and modify its use

The `name` label is another one that has led to confusion. It was not intended to be used for all **named entities**, but only for names consisting of multiple nominal elements. We suggest keeping the relation but renaming it to `flat` to (a) avoid the impression that it should capture named entities in general, and (b) indicate that the relation is only appropriate when there is no clear syntactic head. After we have dropped the direct association with names, we can also extend the use of this relation to titles ("Mrs.", "President", etc.) in languages where they do not show clear head or dependent properties. A subtype `flat:name` can be used to preserve information in existing treebanks.

<!-- Finally, consistent with the proposed changes for other headless constructions, we propose that arrows should be drawn from righ to left (see [multiword expressions](mwe.html)).-->

~~~ sdparse
Hillary Rodham Clinton
flat(Hillary, Rodham)
flat(Hillary, Clinton)
~~~

~~~ sdparse
Monsieur Louis Pignon
flat(Monsieur, Louis)
flat(Monsieur, Pignon)
~~~

In case of foreign phrases that are phrasal or clausal names and where we do not (or cannot) give a compositional analysis, we now use the new relation `flat` instead of the old `foreign`, which is removed in v2. A subtype `flat:foreign` may be used to preserve information in existing treebanks.

~~~ sdparse
The French title of the book is " Harry à l' école des sorciers ".
flat(Harry, à)
flat(Harry, l')
flat(Harry, école)
flat(Harry, des)
flat(Harry, sorciers)
~~~


