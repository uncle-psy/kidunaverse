# Routing and Versioning

> Status: Layout Kit/product proposal. This document does not update the Kiduna Taxonomy Canon.

Version 0.02 is the single current product interface; there is no in-product version archive. The publication label links to the current route’s version-addressable form.

Current routes are `/field`, `/receiver`, `/transmitter`, `/connector`, `/creator`, `/inspector`, `/broker`, `/envoy`, `/sentinel`, and `/metrics`. Equivalent `/v/0.02/<route>` links resolve to the same release. The hosting rewrite serves the application shell on refresh; route state is derived from the URL, and History navigation updates the selected workspace. Unversioned routes identify the current release.
