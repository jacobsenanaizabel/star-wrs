import React, { Suspense, lazy } from 'react'

function Lazy(Component) {
	const ComponentLoadable = lazy(Component)
	return props => (
		<Suspense fallback={<div>Loading...</div>}>
			<ComponentLoadable {...props} />
		</Suspense>
	);
}

export default Lazy