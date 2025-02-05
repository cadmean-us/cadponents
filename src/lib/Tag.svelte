<script lang="ts">
	export let variant: 'accent' | 'muted' | 'neutral' | 'border' | 'warning' | 'error' | 'success' = 'accent';
</script>

<button on:click {...$$restProps} class="tag tag--{variant} {$$restProps.class}">
	<slot />
</button>

<style lang="scss">
.tag {
	font-size: 12px;
	font-weight: 500;
	line-height: 16px;
	letter-spacing: 0.3px;
	padding: 6px 10px;
	display: flex;
	align-items: center;
	gap: 5px;
	border-radius: 60px;

	transition: var(--transition-duration) var(--transition-timing-function);
	
	:global(path[fill]), :global(rect[fill]), :global(circle[fill]), :global(polygon[fill]) {
		transition: var(--transition-duration) var(--transition-timing-function);
		fill: currentColor;
	}

	:global(path[stroke]), :global(rect[stroke]), :global(circle[stroke]), :global(polygon[stroke]) {
		transition: var(--transition-duration) var(--transition-timing-function);
		stroke: currentColor;
	}
	
	&--muted {
		background: var(--button-secondary-enabled);
		color: var(--text-accent);
		@media (hover: hover) {
			&:hover {
				background: var(--button-secondary-hover);
			}
		}
		&:active {
			background: var(--button-secondary-active);
		}
	}
	&--accent {
		background: var(--button-primary-enabled);
		color: var(--text-on-color);
		@media (hover: hover) {
			&:hover {
				background: var(--button-primary-hover);
			}
		}
		&:active {
			background: var(--button-primary-active);
		}
	}
	&--neutral {
		background: var(--layer-02);
		color: var(--text-primary);
		@media (hover: hover) {
			&:hover {
				background: var(--layer-02-hover);
			}
		}
		&:active {
			background: var(--layer-02-active);
		}
	}
	&--border {
		background: transparent;
		color: var(--text-accent);
		border: 2px solid var(--button-secondary-enabled);
		@media (hover: hover) {
			&:hover {
				border-color: var(--button-secondary-hover);
			}
		}
		&:active {
			border-color: var(--button-secondary-active);
		}
	}
  &--warning {
    background: var(--support-warning);
    color: var(--text-on-color); // Ensure this provides sufficient contrast
    @media (hover: hover) {
      &:hover {
        background: var(--support-warning-hover);
      }
    }
    &:active {
      background: var(--support-warning-active);
    }
  }

  &--error {
    background: var(--support-error);
    color: var(--text-on-color);
    @media (hover: hover) {
      &:hover {
        background: var(--support-error-hover);
      }
    }
    &:active {
      background: var(--support-error-active);
    }
  }

  &--success {
    background: var(--support-success);
    color: var(--text-on-color);
    @media (hover: hover) {
      &:hover {
        background: var(--support-success-hover);
      }
    }
    &:active {
      background: var(--support-success-active);
    }
  }

	&:disabled {
		border-color: var(--layer-disabled);
		background-color: var(--layer-disabled);
		color: var(--text-on-color-disabled);
	}
}
</style>